# À faire — refonte du Patrimoine

Maquettes : https://claude.ai/artifact/7M3oL9JeMPBV9kdzUE8u8Y

## Validé, à intégrer dans l'app

- Onglet **Progrès** (pages « Bilan revu » et « Animations ») : patrimoine, PEA, autres comptes, rythme, puis le bilan (qui fait grossir ton patrimoine, tes années, ta réserve et ton argent qui dort, où tu vas, face aux marchés).
- **Couleurs** : variante B (page « Couleurs ») : fonds blancs, une pastille de couleur par bloc, la couleur dans les courbes et les barres.
- **Animations au survol** (page « Animations », v3) : sobre au repos, fantaisie au survol, propre à chaque bloc. « Où tu vas » reste épuré : seuls les prochains paliers, pas ceux déjà franchis.
- **Détail au clic sur un compte** (PEA, assurance vie, crypto…) avec le mois par mois.
- **Détail au clic sur chaque bloc du bilan** (page « Détails du bilan ») : périodes 1 an, 3 ans, 5 ans et Tout ; dépenses survolables dans la réserve ; paliers franchis et à venir dans « Où tu vas » ; tous les comptes classés face aux indices dans « Face aux marchés ».
- **Journal** (page « Journal v2 ») : calendrier, sélection de plusieurs mois, récap de l'année au clic.
- **Comptes** (pages « Comptes » et « Comptes vivant ») : valeur et versement sur la même ligne, sélecteur de mois, réglages par compte, répartition à droite ; saisie vivante (versement salué, chiffres qui défilent, coche à chaque ligne, valeur identique signalée, mois bouclé).

## Reste à faire

- **Réglage « Couleurs adaptées au daltonisme »**, dans l'écran **Réglages actuel de l'application** (pas de refonte de cet écran) : activé, hausse en bleu et baisse en orange ; désactivé, vert et rouge. Il suffit de redéfinir `--pos` et `--neg` (déjà utilisées partout) sur la racine selon le réglage. Attention : en mode daltonien, l'orange de baisse ne doit pas servir aussi de couleur d'un bloc (le PEA est orange dans la variante B) ; prévoir une autre couleur pour ce bloc.
- **Intégration dans `index.html`**, onglet par onglet :
  - **Progrès** : l'écran (tuiles et bilan) est en place, à côté de l'Aperçu, styles cloisonnés sous `.pg`. Reste : les animations au survol, puis les pages de détail au clic sur les blocs du bilan. Quand c'est validé, l'Aperçu disparaît.
  - Puis **Comptes**, puis **Journal**.

## Données

- **Indices de marché** : une GitHub Action mensuelle (le 1er du mois) récupère le cours de fin de mois d'ETF en euros (Nasdaq-100, S&P 500, MSCI World, émergents, CAC 40) et publie un `indices.json` lu par l'app. Gratuit, sans clé, rien n'est envoyé sur l'utilisateur.
- **Réserve et argent qui dort** : calculer les dépenses moyennes et le budget non investi (solde du budget absent des versements) à partir des données Budget.
- **Historique mensuel de chaque compte** pour « Face aux marchés » : les courbes du PER, du PEE, du livret et de la crypto sont des exemples dans la maquette.
