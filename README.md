# Gestion du Budget

Application web mono-page (HTML/CSS/JS) de gestion de budget personnel.

## Utilisation

Ouvrir `index.html` dans un navigateur — aucune installation ni dépendance nécessaire.

## Structure

- `index.html` — application complète (interface, styles, logique)

## Journal des modifications

### 2026-08-11 — sauvegardes séparées

- Ajout : l'export JSON se fait au choix sur **tout**, **le Budget seul** ou **le Patrimoine seul**. On peut vouloir emporter son patrimoine sans trois ans de relevés bancaires, ou archiver un budget sans y joindre l'historique de ses placements. Le nom du fichier porte la partie exportée — au moment de restaurer, six mois plus tard, c'est la seule chose qu'on ait sous les yeux.
- Ajout : la restauration passe par une **fenêtre qui montre d'abord ce que contient le fichier** (opérations, imports et règles d'un côté ; comptes, valorisations, mouvements et crédits de l'autre), puis laisse choisir la partie à reprendre. Les parties absentes du fichier sont proposées désactivées, ce qui rend impossible d'effacer un patrimoine avec un export Budget. La partie non choisie n'est pas touchée.
- Modification : les **réglages suivent leur moitié**. Inflation, zone neutre, doublons et objectif d'épargne partent avec le Budget ; rendement, versement, objectif de palier et épargne de précaution avec le Patrimoine. Sans cette séparation, restaurer un export Patrimoine écraserait l'objectif d'épargne du Budget.

### 2026-08-10 — refonte du suivi de patrimoine

L'onglet Patrimoine passe de deux à quatre écrans, plus une vue de détail par compte.

**Aperçu** — refondu autour de trois questions : combien j'ai, d'où vient l'évolution, où ça va.

- Ajout : **décomposition effort / marché**. Toute variation se sépare en ce qui a été versé et ce que les placements ont rendu ; les confondre fait passer un virement pour une performance. Le calcul existait déjà en interne, il n'était jamais affiché.
- Ajout : bandeau avec le **patrimoine net** et la variation du mois. Performance et montant tiennent dans une seule étiquette, le pourcentage en tête : côte à côte, deux pastilles séparées donnaient l'impression de deux mesures sans rapport.
- Ajout : **graphique d'évolution en aires** — versements cumulés en socle, performance accumulée par-dessus, l'écart entre les deux courbes étant le gain. Il remplace un empilement par classe d'actif qui était illisible passé une dizaine de mois et n'apprenait rien.
- Ajout : **repères historiques annotés** sur cette courbe, chacun relié à sa date. Neuf types sont calculés — cap rond franchi, palier de plus-value, patrimoine doublé ou triplé, premier mois où les placements rapportent plus que le versement, meilleur et pire mois, plus forte baisse et délai pour retrouver le sommet, plus gros versement et plus gros retrait. Le premier mois de l'historique est exclu du « plus gros versement » : cette ligne ne fait qu'initialiser le suivi avec ce qui dormait déjà sur les comptes.
- Ajout : **repères de marché** parmi les jalons — sorties des taux négatifs au Japon, baisses de la BCE et de la Fed, krach du yen, élection de Trump, droits de douane d'avril 2025, records du Bitcoin. Deux au plus s'affichent à la fois, en losange creux et libellé en retrait pour qu'on ne les confonde pas avec un jalon personnel.
- Ajout : le tirage des repères est **aléatoire**, renouvelé à chaque changement de période et par un bouton dédié, et cherche toujours à remplir les cinq emplacements. Le tirage est déterministe entre deux redessins, sinon l'affichage sauterait au moindre clic ailleurs.
- Ajout : **filtres de période** 3 mois à 5 ans sur ce graphique. La performance affichée et la légende suivent l'intervalle choisi ; les périodes plus longues que l'historique disponible sont masquées.
- Ajout : **prochain palier et projection**, avec une **frise chronologique** qui place les caps déjà franchis à gauche et les caps projetés à droite, de part et d'autre d'aujourd'hui. Les hypothèses sont déduites de l'historique par défaut et se règlent dans l'onglet Réglages ; leur détail est derrière un point d'aide plutôt qu'affiché en permanence.
- Ajout : **épargne de précaution** en mois de dépenses couverts, calculée à partir des dépenses réelles du côté Budget. Premier pont entre les deux moitiés de l'application.
- Suppression : la vignette « Comptes N suivis », et le bandeau de KPI qui était dupliqué à l'identique sur l'écran Comptes.

**Analyse** (nouvel onglet) — la répartition et ce que ça rapporte.

- Ajout : **répartition par classe d'actif**, ratios risqué / sécurisé et liquide / bloqué, et alerte lorsqu'une seule ligne dépasse 40 % du patrimoine.
- Ajout : **plus-value latente** par compte — versé cumulé contre valeur actuelle.
- Modification : le tableau unique est **scindé en deux**, « où en est chaque compte » (valeur, versé, plus-value) et « performance année par année ». Sept colonnes de chiffres sur une même ligne ne laissaient l'œil se poser nulle part.
- Ajout : **comparaison des années côte à côte**, la meilleure année de chaque compte étant soulignée — c'est elle qu'on cherche en parcourant une ligne. Un bascule **% / €** montre au choix le taux, qui dit si le placement est bon, ou le montant, qui dit ce qu'il pèse : +3 % sur le PER et +3 % sur le PEA ne sont pas la même journée.
- Suppression : les parts « risqué / sécurisé / liquide / bloqué » de la répartition. Sans allocation cible à laquelle les confronter, ces pourcentages n'appelaient aucune décision ; ce qu'ils avaient d'utile est déjà dit par l'épargne de précaution et par l'alerte de concentration. Les métadonnées de risque et de liquidité des classes d'actif restent en place et suffiraient à les reconstruire le jour où une allocation cible existerait.
- Ajout : grille **mois par mois** — une case par mois, verte ou rouge selon le signe et d'autant plus foncée que le mois a compté, avec la performance de l'année et le nombre de mois gagnants. Elle montre *quand* les choses se sont passées, ce qu'une barre de proportion ne disait pas.
- Ajout : la performance mensuelle affiche **le montant en euros** sous le pourcentage. Un même +2 % ne pèse pas la même chose sur 15 000 € que sur 60 000 €.
- Ajout : **performance annualisée** (performances mensuelles enchaînées) et **performance nette d'inflation**, en réutilisant le réglage d'inflation déjà présent.
- Correction : un compte portant des mouvements mais **aucune valorisation** faussait toute la performance globale. Ses versements comptaient au numérateur sans qu'aucune valeur ne leur réponde, si bien qu'un retrait ressortait en gain — sur des données réelles, un PEL vidé de 1 404 € faisait passer janvier 2024 de +1,87 % à +10,02 %, et le cumulé de 50,48 % à 59,29 %. Ces comptes sont désormais exclus des calculs de performance, de versements et de plus-value, et signalés à l'utilisateur au lieu d'être absorbés silencieusement. Un compte n'entre par ailleurs dans la performance d'un mois que s'il est valorisé aux deux bornes, pour qu'une première valorisation ne compte pas comme un gain de 100 %.
- Correction : les barres de performance mensuelle partaient toutes de la gauche avec une largeur en valeur absolue, si bien qu'un mois à −4,51 % dessinait une barre plus longue qu'un mois à +2,75 %. Elles sont désormais **centrées sur zéro** : la forme porte le signe avant la couleur.

**Comptes** — recentré sur le seul écran où il y a un geste à faire.

- Modification : la saisie mensuelle se fait par **cartes**, les comptes non renseignés en tête, avec un compteur qui se vide.
- Ajout : un compte peut être **clôturé**. Il quitte la saisie mensuelle sans que son historique bouge d'un centime — ses performances passées restent comptées, contrairement à une suppression qui efface tout. Un compte jamais valorisé est considéré clôturé d'office : il n'a jamais rien eu à dire.
- Ajout : filtre par compte sur les mouvements, et changement de classe d'un compte après sa création.

**Crédits** (nouvel onglet) — les passifs, et donc le patrimoine net.

- Ajout : un crédit se suit soit par **amortissement calculé** (capital, taux, durée, quote-part pour un bien détenu à plusieurs), soit par saisie manuelle du capital restant dû. Il est déduit du patrimoine affiché.

**Détail d'un compte** (nouvelle vue, depuis une carte) — courbe de la valeur contre les versements cumulés, performance mois par mois, mouvements du compte.

**Transverse**

- Ajout : les performances s'affichent à **deux décimales** (`fmtPerf`), sans toucher aux taux d'épargne du côté Budget qui restent à une décimale. Le zéro négatif est ramené à zéro.
- Ajout : une **couleur par classe d'actif**, reprise partout. Ni vert ni rouge saturé : ces deux teintes restent réservées au gain et à la perte. Deux comptes d'une même classe se départagent par une nuance, et le nom accompagne toujours la pastille.
- Ajout : la classe **Crypto**, jusqu'ici rangée dans « Autre » alors que c'est la plus risquée.
- Modification : schéma de données en version 2 (passifs et réglages de projection). Aucune migration : une sauvegarde v1 se restaure telle quelle.

### 2026-08-10 — import CSV

- Ajout : l'import `Data-Comptes.csv` / `Data-Mouvements.csv` (Patrimoine) accepte désormais les fichiers délimités par « , » en plus de « ; ». Le délimiteur est détecté automatiquement — utile quand le tableur exporte en format US (Excel US, Google Sheets, LibreOffice) plutôt qu'en format FR.
- Correction : dans `Data-Comptes.csv`, les mois écrits en anglais (« 1 Jun 2025 ») n'étaient pas reconnus — seuls oct/nov/déc s'écrivant pareil dans les deux langues passaient, et les neuf autres mois de chaque année disparaissaient sans un mot, laissant des trous dans les valorisations et les graphiques. Les noms de mois français **et** anglais sont maintenant acceptés.
- Ajout : si une ligne datée de `Data-Comptes.csv` reste incomprise, l'import le signale (nombre de lignes et libellés fautifs) au lieu de l'ignorer silencieusement.

### 2026-08-08

- Ajout : nouvel onglet **Patrimoine** — suivi des comptes (livrets, PEA, assurance-vie...), de leur valorisation mois par mois, et des dépôts/retraits. La synthèse affiche le patrimoine total, la répartition par compte et la performance (mensuelle et annuelle) neutralisée de l'effet des mouvements, comme dans le suivi Excel qu'il remplace.
- Ajout (en cours / WIP) : sous-onglet **Aperçu** dans Patrimoine — vue de synthèse avec KPIs (patrimoine total, performance du mois/de l'année), graphique d'évolution sur tout l'historique disponible, répartition par compte, détail de la performance par compte (tableau + comparatif) avec sélecteurs de mois/année, et performance mensuelle sur 12 mois.
- Correction : les catégories personnalisées (ex. "Jeux Vidéos") n'étaient jamais incluses dans les sauvegardes JSON, ce qui faisait planter la restauration d'un ancien export.
- Ajout : filet de sécurité si un fichier de sauvegarde restauré référence une catégorie absente du JSON (typiquement un ancien export fait avant ce correctif) — elle est recréée automatiquement depuis le libellé bancaire au lieu de faire planter l'appli. Pour toute sauvegarde exportée à partir de maintenant, ce cas ne se produit plus : les catégories perso sont incluses dans le fichier.
- Ajout : dans Réglages, un menu pour déplacer une catégorie personnalisée vers un autre groupe.
- Ajout : les catégories historiques ("Divers vie quotidienne", "Inconnu", etc.) sont désormais visibles dans le tableau des catégories & objectifs.

### Version initiale

- Import CSV Boursorama, catégorisation automatique, détection de doublons et de charges récurrentes, objectifs de dépense, comparaison N vs N-1, export JSON/CSV.
