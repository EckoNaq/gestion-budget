# À faire — refonte du Patrimoine

Maquettes : https://claude.ai/artifact/7M3oL9JeMPBV9kdzUE8u8Y (page « Bilan revu »).

## Validé, à intégrer dans l'app

- Onglet **Progrès** (base retenue) : patrimoine, PEA, autres comptes, rythme, puis le bilan.
- Bilan : qui fait grossir ton patrimoine, tes années, ta réserve et ton argent qui dort, où tu vas, face aux marchés.
- Détail au clic sur un compte (PEA, assurance vie, crypto…) avec le mois par mois.

## À itérer

- **Journal** : affiner le fil des mois, le récap et les notes.
- **Comptes** : base retenue (page « Comptes » des maquettes) : valeur et versement sur la même ligne, sélecteur de mois, réglages dans un panneau par compte, répartition à droite.
- **Couleurs** : variante B retenue (page « Couleurs » des maquettes) : fonds blancs, une pastille de couleur par bloc, la couleur dans les courbes et les barres.
- **Réglage « Couleurs adaptées au daltonisme »** : activé, hausse en bleu et baisse en orange ; désactivé, vert et rouge. Il suffit de redéfinir `--pos` et `--neg` (déjà utilisées partout) sur la racine selon le réglage. Attention : en mode daltonien, l'orange de baisse ne doit pas servir aussi de couleur d'un bloc (le PEA est orange dans la variante B) ; prévoir une autre couleur pour ce bloc.
- **Animations au survol** : chaque bloc a son propre comportement (une courbe qui se dessine, des barres qui montent…).
- **Détail au clic sur chaque bloc du bilan**, comme pour les comptes, pour pousser l'analyse.
- **Comptes vivant** : un versement saisi est salué par une animation encourageante ; le panneau de droite (total, variation, versé, jauge de complétude) se recalcule en direct, avec des chiffres qui défilent jusqu'à leur nouvelle valeur ; chaque interaction (saisie, validation, valeur signalée) a son retour visuel.

## Données

- **Indices de marché** : une GitHub Action mensuelle (le 1er du mois) récupère le cours de fin de mois d'ETF en euros (Nasdaq-100, S&P 500, MSCI World, émergents, CAC 40) et publie un `indices.json` lu par l'app. Gratuit, sans clé, rien n'est envoyé sur l'utilisateur.
- **Réserve et argent qui dort** : calculer les dépenses moyennes et le budget non investi (solde du budget absent des versements) à partir des données Budget.
