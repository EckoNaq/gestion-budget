// Récupère, une fois par mois, le cours de fin de mois de cinq ETF cotés en euros qui
// répliquent les grands indices, et l'écrit dans indices.js, lu par l'application.
//
// Pourquoi des ETF en euros plutôt que les indices eux-mêmes : les comptes se mesurent en
// euros, et un indice en dollars mêlerait la performance des marchés à celle du change.
// Pourquoi les cours ajustés : ils réintègrent les dividendes, comme le fait un compte qui
// les réinvestit ; sans eux, le CAC 40 paraîtrait 2 à 3 points plus faible chaque année.
//
// Source : l'API publique de graphiques de Yahoo Finance, sans clé. Rien n'est envoyé sur
// l'utilisateur : le script ne fait que lire des cours publics.
//
// Usage : node scripts/fetch-indices.mjs   (Node 18 ou plus, aucune dépendance)

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "indices.js");

const INDICES = [
  { id: "msci", name: "MSCI World", ticker: "CW8.PA", etf: "Amundi MSCI World Swap UCITS ETF EUR Acc" },
  { id: "sp500", name: "S&P 500", ticker: "ESE.PA", etf: "BNP Paribas Easy S&P 500 UCITS ETF EUR C" },
  { id: "nasdaq", name: "Nasdaq-100", ticker: "ANX.PA", etf: "Amundi Nasdaq-100 Swap UCITS ETF EUR Acc" },
  { id: "em", name: "Émergents", ticker: "AEEM.PA", etf: "Amundi MSCI Emerging Markets Swap UCITS ETF EUR Acc" },
  { id: "cac40", name: "CAC 40", ticker: "CAC.PA", etf: "Amundi CAC 40 UCITS ETF Dist" },
];

const monthKey = d => d.getUTCFullYear() + "-" + String(d.getUTCMonth() + 1).padStart(2, "0");

async function fetchMonthly(ticker) {
  const url = "https://query1.finance.yahoo.com/v8/finance/chart/" + encodeURIComponent(ticker) + "?interval=1mo&range=max";
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (gestion-budget indices)" } });
  if (!res.ok) throw new Error(ticker + " : HTTP " + res.status);
  const r = (await res.json()).chart?.result?.[0];
  if (!r || !r.timestamp) throw new Error(ticker + " : réponse sans données");
  const adj = r.indicators?.adjclose?.[0]?.adjclose, close = r.indicators?.quote?.[0]?.close;
  // Seuls les mois terminés : celui en cours n'a pas encore son cours de fin de mois.
  const current = monthKey(new Date());
  // Chaque barre mensuelle est horodatée à minuit, heure de la bourse (Paris) : lue en temps
  // universel, elle tomberait la veille, donc le mois précédent. On la recale sur la bourse.
  const off = r.meta?.gmtoffset || 0;
  const months = {};
  r.timestamp.forEach((t, i) => {
    const k = monthKey(new Date((t + off) * 1000)), v = (adj && adj[i]) ?? (close && close[i]);
    if (k < current && v != null && isFinite(v)) months[k] = Math.round(v * 10000) / 10000;
  });
  return months;
}

async function readPrevious() {
  try {
    const txt = await readFile(OUT, "utf8");
    return JSON.parse(txt.slice(txt.indexOf("{"), txt.lastIndexOf("}") + 1));
  } catch { return null; }
}

const prev = await readPrevious();
const series = {};
let ok = 0;
for (const ix of INDICES) {
  const old = prev?.series?.[ix.id]?.months || {};
  try {
    const months = await fetchMonthly(ix.ticker);
    series[ix.id] = { name: ix.name, ticker: ix.ticker, etf: ix.etf, months: { ...old, ...months } };
    ok++;
    console.log(ix.ticker.padEnd(9), Object.keys(months).length, "mois, dernier", Object.keys(months).sort().pop());
  } catch (e) {
    // Une source qui échoue ne doit pas effacer ce qu'on savait déjà.
    console.warn("⚠", e.message, "— données précédentes conservées");
    if (Object.keys(old).length) series[ix.id] = prev.series[ix.id];
  }
}
if (!ok) { console.error("Aucun indice récupéré : indices.js n'est pas modifié."); process.exit(1); }

// Écriture stable (clés triées) : le fichier ne change que si un cours change, et le commit
// mensuel ne contient que les mois nouveaux.
const sorted = {};
for (const ix of INDICES) {
  const s = series[ix.id]; if (!s) continue;
  sorted[ix.id] = { ...s, months: Object.fromEntries(Object.entries(s.months).sort(([a], [b]) => a < b ? -1 : 1)) };
}
const last = Object.values(sorted).map(s => Object.keys(s.months).pop()).sort()[0];
const data = { asOf: last, source: "Yahoo Finance, cours ajustés de fin de mois", series: sorted };
const js = "/* Fichier généré par scripts/fetch-indices.mjs — ne pas modifier à la main.\n" +
  "   Cours de fin de mois, en euros, dividendes réinvestis, d'ETF répliquant les grands indices. */\n" +
  "window.INDICES = " + JSON.stringify(data, null, 1) + ";\n";
await writeFile(OUT, js, "utf8");
console.log("indices.js écrit, données jusqu'à", last);
