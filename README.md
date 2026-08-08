# Gestion du Budget

Application web mono-page (HTML/CSS/JS) de gestion de budget personnel.

## Utilisation

Ouvrir `index.html` dans un navigateur — aucune installation ni dépendance nécessaire.

## Structure

- `index.html` — application complète (interface, styles, logique)

## Journal des modifications

### 2026-08-08

- Correction : les catégories personnalisées (ex. "Jeux Vidéos") n'étaient jamais incluses dans les sauvegardes JSON, ce qui faisait planter la restauration d'un ancien export.
- Ajout : récupération automatique d'une catégorie manquante à la restauration (recréée depuis le libellé bancaire) pour les sauvegardes exportées avant ce correctif.
- Ajout : dans Réglages, un menu pour déplacer une catégorie personnalisée vers un autre groupe.
- Ajout : les catégories historiques ("Divers vie quotidienne", "Inconnu", etc.) sont désormais visibles dans le tableau des catégories & objectifs.

### Version initiale

- Import CSV Boursorama, catégorisation automatique, détection de doublons et de charges récurrentes, objectifs de dépense, comparaison N vs N-1, export JSON/CSV.
