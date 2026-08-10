# Gestion du Budget

Application web mono-page (HTML/CSS/JS) de gestion de budget personnel.

## Utilisation

Ouvrir `index.html` dans un navigateur — aucune installation ni dépendance nécessaire.

## Structure

- `index.html` — application complète (interface, styles, logique)

## Journal des modifications

### 2026-08-10

- Ajout : l'import `Data-Comptes.csv` / `Data-Mouvements.csv` (Patrimoine) accepte désormais les fichiers délimités par « , » en plus de « ; ». Le délimiteur est détecté automatiquement — utile quand le tableur exporte en format US (Excel US, Google Sheets, LibreOffice) plutôt qu'en format FR.

### 2026-08-08

- Ajout : nouvel onglet **Patrimoine** — suivi des comptes (livrets, PEA, assurance-vie...), de leur valorisation mois par mois, et des dépôts/retraits. La synthèse affiche le patrimoine total, la répartition par compte et la performance (mensuelle et annuelle) neutralisée de l'effet des mouvements, comme dans le suivi Excel qu'il remplace.
- Ajout (en cours / WIP) : sous-onglet **Aperçu** dans Patrimoine — vue de synthèse avec KPIs (patrimoine total, performance du mois/de l'année), graphique d'évolution sur tout l'historique disponible, répartition par compte, détail de la performance par compte (tableau + comparatif) avec sélecteurs de mois/année, et performance mensuelle sur 12 mois.
- Correction : les catégories personnalisées (ex. "Jeux Vidéos") n'étaient jamais incluses dans les sauvegardes JSON, ce qui faisait planter la restauration d'un ancien export.
- Ajout : filet de sécurité si un fichier de sauvegarde restauré référence une catégorie absente du JSON (typiquement un ancien export fait avant ce correctif) — elle est recréée automatiquement depuis le libellé bancaire au lieu de faire planter l'appli. Pour toute sauvegarde exportée à partir de maintenant, ce cas ne se produit plus : les catégories perso sont incluses dans le fichier.
- Ajout : dans Réglages, un menu pour déplacer une catégorie personnalisée vers un autre groupe.
- Ajout : les catégories historiques ("Divers vie quotidienne", "Inconnu", etc.) sont désormais visibles dans le tableau des catégories & objectifs.

### Version initiale

- Import CSV Boursorama, catégorisation automatique, détection de doublons et de charges récurrentes, objectifs de dépense, comparaison N vs N-1, export JSON/CSV.
