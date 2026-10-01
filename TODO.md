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

- ~~Réglage « Couleurs adaptées au daltonisme »~~ : fait (Réglages › Affichage). Hausse en bleu et baisse en orange partout ; la tuile PEA passe au bleu-vert dans ce mode.
- **Intégration dans `index.html`**, onglet par onglet :
  - **Progrès** : l'écran (tuiles et bilan) est en place, à côté de l'Aperçu, styles cloisonnés sous `.pg`. Écran, animations, deux écrans glissants et pages de détail du bilan en place. Quand c'est validé, l'Aperçu disparaît.
  - **Comptes** : la saisie vivante est en place (onglet « Comptes ») ; l'ancien écran reste sous « Comptes (ancien) » jusqu'à validation. Il garde pour l'instant la fiscalité par compte et l'import CSV, absents de la maquette.
  - Puis **Journal**.

## Données

- ~~Indices de marché~~ : fait. `scripts/fetch-indices.mjs` lit chaque mois les cours ajustés de cinq ETF en euros (MSCI World CW8, S&P 500 ESE, Nasdaq-100 ANX, Émergents AEEM, CAC 40 CAC) sur Yahoo Finance et écrit `indices.js` ; la GitHub Action `Indices de marché` le lance le 1er et le 3 du mois. « Face aux marchés » (tuile et détail) les compare à tes comptes.
- **Réserve et argent qui dort** : calculer les dépenses moyennes et le budget non investi (solde du budget absent des versements) à partir des données Budget.
- **Historique mensuel de chaque compte** pour « Face aux marchés » : les courbes du PER, du PEE, du livret et de la crypto sont des exemples dans la maquette.
