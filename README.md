# Gestion du Budget

Application web mono-page (HTML/CSS/JS) de gestion de budget personnel.

## Utilisation

Ouvrir `index.html` dans un navigateur — aucune installation ni dépendance nécessaire.

## Structure

- `index.html` — application complète (interface, styles, logique)

## Journal des modifications

### 2026-08-18 — une collection de trophées

Ajout : une entrée **Trophées** dans la barre latérale, et **58 succès** répartis en cinq familles. Le Patrimoine avait ses jalons ; le Budget a désormais les siens, avec sa propre langue.

- **La rareté se voit.** Cinq rangs — commun, peu commun, rare, très rare, exceptionnel — et c’est **l’ornement** qui les porte : le liseré arrive au deuxième, six rayons au troisième, un laurier ouvert au quatrième, la couronne fermée et une gemme au cinquième. Un premier essai faisait varier un simple compteur de points, et l’on ne sentait rien : un point de plus n’est pas une récompense, une couronne si.
- La couleur suit le même mouvement, **de la pierre à la braise** en passant par le bleu, l’indigo et l’améthyste. Ni bronze, ni argent, ni or : l’échelle n’appartient qu’au Budget et ne se confond jamais avec les médaillons ronds du Patrimoine. Comme l’ornement dit le rang autant que la teinte, elle survit au daltonisme.
- **La forme de l’emblème dit la famille**, la couleur ne parle que de rareté. Un seul système de couleur par badge au lieu de deux : jetons pour l’Épargne, maillon pour la Régularité, écu pour la Discipline, feuille pour la Sobriété, dé pour les **défis loufoques** — cette dernière famille n’ayant volontairement aucun rapport avec la bonne gestion, ce qui empêche l’ensemble de devenir moralisateur. On y trouve le compte rond, la journée à vingt opérations, le palindrome à 12,21 €, les jumeaux parfaits et le 29 février.
- **Tout se calcule sur l’historique complet** : un succès mérité ne devrait pas dépendre de la date d’installation, et chaque trophée porte le mois où il a été gagné, pas celui où on le découvre. Les paliers hauts sont calibrés en conséquence — sur deux ans de données de test, 26 trophées sur 58 se débloquent, mais **aucun exceptionnel et seulement deux très rares**.
- Réserve honnête, inscrite dans le code : les objectifs mensuels appliqués au passé sont ceux d’aujourd’hui, l’application ne conservant pas l’historique des plafonds. Discipline et Régularité s’en trouvent légèrement optimistes.
- Un trophée non acquis garde **son emblème en creux et son arc de progression** sur le contour de l’hexagone, avec le pourcentage parcouru. Il reste une cible, pas un échec — et le survol donne la définition exacte ainsi que le mois du déblocage.
- Sur **Le mois**, un trophée décroché dans le mois consulté s’annonce entre les pastilles et les objectifs, **dans la couleur de sa rareté** : un exceptionnel ne s’annonce pas comme un commun. Le plus rare passe devant, les autres se comptent d’une ligne.

### 2026-08-18 — un second écran mensuel

Ajout : un onglet **Mois v2** dans la barre latérale, à côté de **Mois** laissé intact au pixel près. Même mois consulté, mêmes données — `monthStats`, `baseCost`, `comparisonRows`, `merchantsOfCat`, `patLinkedMove` — et aucun calcul refait autrement : seule la mise en forme change. Les deux coexistent le temps de trancher ; si v2 l'emporte, v1 disparaît.

Ce que l'écran d'origine posait comme problème : six cartes de poids visuel identique, empilées sur cinq écrans de défilement. Même bordure, même titre, même carte — rien n'y disait ce qui compte, et le chiffre des dépenses revenait sous cinq angles différents. Un écran qui ne hiérarchise pas laisse le lecteur faire le tri à chaque visite.

- **Trois sous-onglets** au lieu d'un empilement : *Le mois* (le verdict), *Où ça part* (l'exploration), *Opérations* (la vérification d'après import). Chacun tient sur un écran et demi.
- **Le mois s'ouvre sur une fiche** — revenus, dépenses, épargne posés en soustraction avec un trait de total — et sur un **anneau de taux d'épargne qui se ferme quand l'objectif est atteint**. La bande de cinq indicateurs a disparu : elle donnait cinq chiffres de même taille sans dire lequel regarder. Les colonnes de comparaison n'ont pas été reprises non plus, l'écran devant montrer le mois consulté et non une analyse.
- **Les objectifs ne se valent pas.** Un objectif tenu ne mérite qu'une coche ; un objectif dépassé mérite une explication. Le premier se réduit à une cellule verte, le second se déplie en **deux tableaux de chiffres** — la ventilation interne du poste et les plus grosses dépenses. Jamais un paragraphe : les chiffres se lisent en colonne, la prose non.
- **Le rythme du mois** est marqué sur chaque jauge : ce qui dépasse le repère consomme son budget plus vite que le mois ne s'écoule. Sur une grille à colonnes égales, ces repères s'alignent en verticales d'une rangée à l'autre. **Les postes majoritairement engagés en sont exemptés** — le loyer part le 3, et la barre aurait crié au dépassement dès le 4, tous les mois.
- **L'écran s'adapte au mois.** Sur un mois clos, le rythme, les repères et les « reste x € » disparaissent : un mois terminé n'a pas d'aujourd'hui, et le bilan est alors la seule lecture qui vaille.
- **Où ça part** s'ouvre sur le partage **charges fixes / arbitrable** — la seule chose qui explique pourquoi le logement écrase tout et pourquoi on n'y peut rien. Suit la ventilation à trois niveaux, poste puis sous-catégorie puis commerçant, dans une seule grille où l'indentation fait la hiérarchie et où les colonnes de chiffres restent alignées de bout en bout.
- **L'écart contre l'an dernier devient une colonne** au lieu d'une carte entière avec sa légende à quatre entrées. Barre divergente centrée sur zéro, bande neutre à ±5 %, et la bascule **% / €** conservée : le pourcentage dit la proportion, l'euro dit l'ampleur, et aucun ne remplace l'autre. L'échelle des barres suit le mode. Un écart déclaré non significatif ne tire plus aucune barre — une référence à 0 € produisait mécaniquement « +100 % » et un poste calme criait au dérapage.
- **Six mois d'historique par poste**, en barres et non en courbe : un mois est une valeur close, pas un point sur un continuum. C'est la seule colonne qui montre qu'un poste n'a pas de rythme mais des pics.
- **Opérations** troque les cases à cocher contre des **filtres nommés et comptés** — à catégoriser, doublon probable, virement interne, charges fixes — qui mettent le travail restant en avant au lieu de le cacher, et se recomptent par **lot d'import**. La date ne s'affiche qu'une fois par journée, et les actions n'apparaissent qu'au survol : trois icônes sur chaque ligne faisaient un rideau de pictogrammes au-dessus des chiffres.
- Un virement interne ne se juge pas sur sa catégorie mais sur **sa destination** : le compte de patrimoine où l'argent a atterri, ou bien **« aucun compte »** en ambre — l'argent a quitté le budget sans jamais entrer dans le patrimoine, et c'est un trou qui passe devant les catégories manquantes.
- **« Débité » et « dépenses » sont distingués.** Le total du relevé dépasse le total analysé de tout ce qui n'est pas classé ; un même mot pour les deux faisait passer cet écart pour une erreur à chaque import. Le pied de tableau fait le rapprochement.
- **Les flèches de navigation ne bougent plus.** L’étiquette du mois était à largeur libre : « mai » et « septembre » n’ayant pas la même chasse, les deux flèches se décalaient à chaque clic et il fallait repointer entre deux mois. La barre d’origine réglait déjà le problème par une largeur fixe ; v2 avait perdu le réglage en route.
- **Le titre du mois ouvre un sélecteur de période** : l’année d’abord, puis le mois dans une grille de douze. Se promener à coups de flèches devient pénible dès deux ans d’historique. Les mois qui portent des opérations sont marqués d’un point — sauter dans un mois vide est le seul faux pas que ce panneau puisse faire commettre — le mois en cours est cerné, et un bouton **Mois en cours** y ramène d’un geste. Le panneau se referme au clic ailleurs ou par Échap.
- **Les objectifs passent en anneaux.** La grille de tuiles faisait arc-en-ciel, et la forme y était pour autant que la couleur : une tuile de 278 sur 100 px est presque trois fois plus large que haute, et neuf d’entre elles remplies de teinte font un patchwork. Les vignettes tombent à 118 px, la surface colorée de 100 % à quelques pour cent, et la section entière de 340 à 230 px. C’est ce que Tufte appelle un « small multiple » : même forme, même échelle, la comparaison se fait toute seule.
- **Un poste dépassé change d’icône**, pas seulement de couleur : la maison brûle, le panier se renverse, le capot prend feu, le cœur se fend, le sac se déchire, le signal se barre, le ticket se coupe en deux, le reçu se déchire. Une planche d’essai à 28, 20 et 14 px a tranché entre deux grammaires : un même petit motif de flamme posé sur chaque icône devenait une tache illisible, tandis qu’une métaphore par objet tient jusqu’à 14 px — **à condition qu’elle change la silhouette et non qu’elle ajoute un détail**. Les trois premières versions du panier, de la voiture et du reçu ont été redessinées pour cette raison.
- **Un panneau « Où en est le mois » referme la grille d’objectifs.** Elle se terminait en dents de scie et laissait un vide en bas à droite. Le panneau n’est pas là pour combler : les anneaux répondent poste par poste, lui répond **pour le mois entier**, ce que rien d’autre ne faisait. Une courbe des dépenses cumulées jour après jour, doublée de la même courbe moyennée sur les trois mois précédents, dit d’un coup d’œil si le mois dérape **et depuis quand** — un décrochage se voit à la date où il commence. La projection part du jour courant en pointillé, rouge si elle passe au-dessus du mois habituel.
- Un **point d’aide** sur la ligne « Habituellement » dit d’où sort le chiffre, et **nomme les mois retenus** plutôt que de rester générique : « moyenne des 3 mois précédents — juillet, juin et mai 2026 ». Il précise que les mois sans dépense sont écartés, et pourquoi la comparaison se fait à fraction de mois égale.
- L’échantillonnage de la courbe de référence se fait **à fraction de mois égale et non à jour égal**, sans quoi un février de 28 jours se comparerait mal à un mois de 31.
- En pied du panneau, **ce qu’il reste à encaisser** : les charges fixes dont la date n’est pas encore passée, avec leur total. Un mois calme au 20 peut réserver 200 € de prélèvements le 28, et rien ne le disait.
- **Le repère de rythme survit à l’anneau.** J’avais cru qu’un arc ne saurait pas le porter ; il le porte très bien, sous la forme d’une encoche posée sur la circonférence à l’angle du mois écoulé. L’arc qui la dépasse consomme son budget plus vite que le mois.
- Correction du même jour : la carte de survol était bâtie en `<span>` — un `<button>` ne pouvant contenir que du texte — et renfermait un `<table>`. Balisage invalide, que le navigateur démonte : titres collés, tableau éjecté. Même cause pour l’anneau, un `<span>` ne prenant ni largeur ni hauteur, si bien que l’icône tombait sous le tracé au lieu d’en occuper le centre. **La vignette et sa carte sont désormais sœurs dans un conteneur** au lieu d’être imbriquées : le bouton garde sa sémantique, la carte redevient du vrai balisage. La pastille d’état passe dans le coin de la vignette, où elle ne mange plus le tracé de l’anneau, et **la vignette dont on lit le détail se distingue** de ses voisines par un liseré et une flèche vers son panneau.
- La carte de survol perd ses phrases d’introduction. « Mois clos », « au 19 du mois, 61 % est écoulé », « poste presque entièrement engagé » : trois lignes de prose pour dire ce que le lecteur sait déjà ou que le tableau montre. Le jour se dit désormais dans le libellé de la ligne qu’il qualifie — **Rythme attendu au 19** — et la carte s’ouvre directement sur les chiffres.
- Le bloc **À traiter** perd son fond vert quand tout est classé : la coche suffit à le dire, et une bonne nouvelle n’a pas besoin d’être peinte.
- **Le survol donne le détail et la projection.** Rythme attendu à ce jour, dépensé, écart en euros et en points, puis **la fin de mois estimée** — la seule ligne qui dise si le plafond tiendra. Sur un poste presque entièrement engagé, la carte explique que le rythme ne s’y applique pas plutôt que d’afficher une projection absurde ; sur un mois clos, elle ne montre que le résultat. Elle tient entièrement en CSS, sans aucun état : le rendu peut refaire le DOM sans la faire disparaître.
- **La palette est vérifiée sous deutéranopie et protanopie** (simulation Viénot 1999). La première tentative échouait : ses fonds vert et rouge tombaient à un écart perçu de 2,1, soit deux teintes indiscernables, alors qu'ils portaient le signal principal. Le rouge vire au **carmin** et le vert à l'**émeraude**, ce qui les écarte sur l'axe bleu-jaune, seul axe préservé ; les trois états diffèrent aussi en clarté, donc en niveaux de gris. Écarts obtenus : 20,0 en thème clair, 27,9 en sombre.
- **Surtout, la couleur ne porte plus seule le sens** : cercle pour un objectif tenu, carré pour un poste en avance, triangle pour un dépassement. Sur un mois sans faute, la grille montre neuf cercles identiques — le message passe entier même quand le vert apparaît gris.
- Les postes reçoivent une **icône teintée**, prise dans une gamme d'identification à part : huit teintes régulières de l'arc froid 205°–345°, toutes à plus de 36° des teintes qui portent un verdict. Les couleurs de groupe d'origine contenaient un vert et un rose-rouge, qui se seraient lus comme une réussite et un dépassement.
- **L'animation ne se déclenche que sur un changement de contexte** — chargement, mois, onglet — et jamais sur un dépliement. La rejouer à chaque clic donnait un battement d'écran insupportable quand on analyse.
- Deux **polices sont embarquées en base64**, sous-ensemblées au latin français : Archivo pour les chiffres et l'interface, Newsreader pour les rares phrases. Le fichier passe de 379 à 535 Ko, mais aucune requête réseau n'est nécessaire — l'application doit fonctionner hors ligne comme depuis GitHub Pages, ce qu'un CDN de polices ne garantit pas.
- Piège rencontré : **les styles de v2 sont cloisonnés sous `.v2`, mais l'inverse n'est pas vrai** et les règles d'origine atteignent son intérieur. Deux classes portaient le même nom des deux côtés — `.gcell`, que le Patrimoine utilise pour sa grille mensuelle avec `height:21px`, écrasait les cellules d'objectif de 100 à 36 px, et `.num` imposait sa police mono aux chiffres. D'où `.objcard`, `.ringmark` et un override explicite.

**Deux charges fixes du même fournisseur s'annulaient l'une l'autre.** `detectRecurring` regroupait par marchand seul. Un assureur prélevant l'habitation et l'auto faisait donc deux prélèvements par mois sous une seule clé, et tombait sous le garde-fou « plusieurs factures par mois = dépense variable ». Les deux charges disparaissaient **sans le moindre signalement**, et le matelas de sécurité, qui se calcule sur ce total, se trompait d'autant. Cas fréquent : assureur habitation et auto, opérateur mobile et box, deux compteurs chez le même fournisseur d'énergie.

- Le regroupement se fait désormais par **(marchand, catégorie)**. Vérifié : deux contrats sous le même nom de marchand donnaient 0 €, ils donnent maintenant leurs 85 €.
- **La clé ne se complique que pour les marchands réellement scindés**, si bien que les arbitrages déjà enregistrés continuent de s'appliquer. Celles qui gagnent une clé composée sont précisément celles qui n'étaient jamais détectées — aucune décision ne pouvait leur être attachée.
- Effet de bord corrigé au passage : la catégorie retenue pour une charge n'est plus « celle de la dernière opération rencontrée », mais celle du groupe auquel la charge appartient.

**« Socle » devient « Charges fixes »** dans toute l'application, et la carte « Coût de base » avec elle. Le mot était juste mais trop abstrait pour ce qu'il désigne, alors que « charges fixes » est le terme courant du budget des ménages — et qu'il s'apparie avec le **reste à vivre**, déjà présent à côté.

### 2026-08-17 — ce que l'impôt prendrait

- Ajout : en bas de l'écran **Analyse**, une carte **Ce que l'impôt prendrait** chiffre enveloppe par enveloppe l'impôt latent sur la plus-value, et affiche le **net réellement disponible** si l'on retirait tout. La plus-value affichée jusqu'ici était brute : un PEA à +6 300 € et un livret A à +200 € se lisaient de la même façon, alors que le premier laisse 18,6 % au fisc au retrait et le second rien. Un patrimoine « à 46 300 € » n'était donc pas 46 300 € disponibles, et rien ne le disait.
- Le tableau « Où en est chaque compte » n'est pas touché : à sept colonnes de chiffres, l'œil ne se pose nulle part. La fiscalité est un autre sujet, elle a sa carte.
- **Le taux dépend d'une date**, d'où deux nouvelles colonnes dans **Comptes → Réglages des comptes** : **Ouvert le** et **Fiscalité**. Un PEA passe de 31,4 % à 18,6 % au franchissement des cinq ans, une assurance-vie de 30 % à 24,7 % à huit ans. À défaut de date saisie, l'ancienneté est déduite de la plus ancienne donnée connue — ce qui sous-estime l'âge d'un compte repris en cours de route, donc surestime l'impôt. Ces lignes portent un `≈` et sont nommées en clair sous le tableau. Le sélecteur de régime tranche ce que la classe de compte ne dit pas : livret réglementé ou livret bancaire fiscalisé, résidence principale ou immobilier locatif.
- **Les prélèvements sociaux n'ont plus un taux unique.** La CSG sur les revenus de placement est passée de 9,2 % à 10,6 % pour ceux perçus en 2026, portant le total à **18,6 %** — la flat tax vaut donc 31,4 % et non plus 30 %. Le taux de **17,2 %** est maintenu pour l'assurance-vie, le PEL, le CEL, le PEP et les plus-values immobilières. Les deux coexistent dans le calcul.
- Rien n'est prélevé sur un gain latent : **l'impôt ne se déclenche qu'au retrait**, et une moins-value ne doit rien — ces lignes affichent `—` au lieu d'un zéro trompeur. Le total est explicitement libellé « les comptes ci-dessus », les taux différant d'une enveloppe à l'autre.
- **« Si vous attendiez »**, dans la même carte : chaque palier d'ancienneté à venir, la date à laquelle il tombe, le taux qui s'appliquera alors et ce qu'il fait économiser. Un PEA de quatre ans et demi coûte 31,4 % aujourd'hui et 18,6 % dans six mois — le chiffre du jour ne dit pas qu'il suffit d'attendre, et c'est pourtant la seule décision que l'écran puisse éclairer. Les paliers déjà franchis sont omis, ceux qui n'allègent rien aussi.
- La plus-value y est **figée à sa valeur du jour**, volontairement : l'écart montré ne vient que du calendrier fiscal, pas d'un rendement supposé. Mélanger les deux ne dirait plus ce qui vient du marché et ce qui vient de la patience.
- L'**abattement pour durée de détention** de l'immobilier est désormais déduit du taux affiché, et non renvoyé aux notes : il ne dépend que de la durée, donc de rien qu'il faille supposer, et il est massif — à 21 ans de détention, 96 % de l'impôt sur le revenu a disparu. Afficher 36,2 % sur un bien qui n'en paiera que 6 aurait été faux plutôt que prudent. Les deux calendriers sont distincts, l'impôt sur le revenu s'éteignant à 22 ans et les prélèvements sociaux seulement à 30. L'abattement déjà acquis se lit sous le nom du compte.
- Les 4 600 € annuels de l'assurance-vie restent, eux, **hors du calcul** : ils se comptent sur le foyer et sur l'ensemble des contrats, ce que l'application ne connaît pas. La note le dit, et rappelle qu'étaler un rachat sur deux années civiles double l'abattement.
- Cas laissé de côté sciemment : sur un PER, les **versements** déduits à l'entrée seront imposés au barème à la sortie en capital. Signalé, non chiffré — la tranche marginale du moment n'est pas connue.
- La carte est placée **en dernier**, sous « Performance mensuelle » : la fiscalité ne se lit pas en passant, et elle vient après que la performance a dit ce que le patrimoine a gagné.

### 2026-08-17 — deux pertes de données silencieuses

Deux défauts sans rapport l'un avec l'autre, qui faisaient tous deux disparaître du travail sans le moindre message.

**Deux fenêtres ouvertes s'écrasaient l'une l'autre.** Chaque fenêtre garde sa copie en mémoire et réécrit la base entière à chaque enregistrement : la dernière à écrire ramenait tout son état et effaçait ce que l'autre avait fait depuis. Pas une fusion ratée — un retour en arrière complet, budget et patrimoine compris. Une fenêtre laissée ouverte la veille portait l'état de la veille, et il suffisait d'y cliquer sur **Thème** (qui enregistre, lui aussi) pour perdre la journée.

- Une **révision** est désormais tenue dans une clé de stockage à part, pour être relue sans déballer 300 Ko de JSON à chaque écriture. Avant d'écrire, une fenêtre vérifie qu'elle part bien de la révision qu'elle a lue ; sinon elle se déclare périmée et n'écrit plus rien.
- L'événement `storage` la prévient **dès que l'autre enregistre**, avant même qu'on ait touché à quoi que ce soit : un bandeau rouge non escamotable propose de recharger.
- L'export lisant la mémoire et non le stockage, il reste possible de **sauver le travail d'une fenêtre périmée** avant de recharger. Le bandeau le rappelle.

**Le rendu avalait la saisie suivante.** `render()` remplace tout le DOM d'un bloc. On tapait un montant dans la grille des valorisations, on cliquait dans le champ voisin, et l'événement `change` du premier partait *avant* que le clic n'aboutisse : le rendu détruisait le champ visé et le focus retombait dans le vide. Les chiffres suivants n'allaient nulle part. Même chose en cliquant sur un bouton **Ajouter** juste après une saisie — le bouton disparaissait sous le clic, et rien n'était ajouté.

- Un rendu déclenché par un `change` **attend la fin du geste**, le temps que le clic ou la tabulation ait désigné sa cible.
- Le rendu **rend au champ actif son focus, son curseur et ce qui y était tapé** — la valeur comprise, un champ en cours d'édition n'étant pas encore enregistré.
- Corrige d'un coup les vingt champs concernés, dont les deux grilles où l'on enchaîne le plus de saisies : les valorisations mensuelles et les revenus.

### 2026-08-17 — un virement classé, un versement enregistré

- Ajout : au moment de classer une opération dans **Épargne & transferts**, la carte de tri demande **vers quel compte l'argent part** (ou d'où il revient, pour un montant reçu). Le mouvement de patrimoine est créé dans le même geste, à la date et pour le montant de l'opération, signe inversé : ce qui sort du compte courant entre sur le compte d'épargne. Un virement interne ne se volatilise pas — il va sur un autre compte qui nous appartient, et le tri est le seul moment où l'on a la destination en tête.
- **« Aucun » reste un choix de plein droit** : retrait d'espèces, virement entre deux comptes courants, compte non suivi. Rien n'entre dans le patrimoine sans une destination désignée, et la carte dit laquelle des deux choses va se produire avant qu'on valide.
- Les comptes sont proposés **dans l'ordre où ils ont des chances d'être les bons** : ceux qui reçoivent déjà le plus de versements d'abord, ceux qui sont alimentés sur la fiche de paie en dernier, un virement bancaire n'y allant jamais. Les comptes clôturés ne sont pas proposés.
- **« Mémoriser » retient aussi la destination.** Le prochain virement du même libellé arrive avec son compte déjà coché, à un `Entrée` près. En revanche, choisir une destination **n'entraîne plus les virements jumeaux du même lot** : chacun a son montant et sa date, et rien ne doit entrer dans le patrimoine sans un geste. Ils restent donc dans la file, déjà remplis.
- Le lien est **réversible et cohérent dans les deux sens** : `Précédent` retire le mouvement créé, reclasser l'opération en dépense le retire aussi, supprimer l'opération l'emporte avec elle, et supprimer le mouvement côté Patrimoine libère l'opération. Un mouvement sans opération se compterait comme de la performance — c'est exactement ce qui gonflait le PEL de 1 404 € en janvier 2024.
- Les saisies manuelles de l'onglet Comptes ne sont **jamais** concernées par ce ménage. Celles nées d'un virement portent une étiquette « budget » dans la liste des mouvements, et l'opération correspondante affiche le compte qu'elle a alimenté dans le tableau des opérations.
- Une restauration partielle (Budget seul ou Patrimoine seul) **coupe les liens** au lieu d'en inventer : les deux moitiés viennent de fichiers qui ne se connaissent pas. Les mouvements sont conservés, simplement redevenus des saisies ordinaires.

### 2026-08-11 — écran des jalons

- Ajout : un écran **Jalons**, sous forme de **badges** — médaillons circulaires, rang bronze / argent / or / platine selon la place du jalon dans sa famille, pastille verte sur les acquis, anneau de progression sur les autres.
- **Quatre-vingt-cinq jalons en quatorze familles** : paliers de patrimoine, plus-value cumulée, multiplicateurs du point de départ, trajectoire, régularité des versements, coups d'éclat (les gains d'un seul mois), diversification, sécurité, indépendance, repères français, rendement, curiosités, coups durs et traversées.
- **Coups durs** et **Traversées** récompensent les mauvais moments — perdre 1 000 € en un mois, un trimestre dans le rouge, un creux de 10 % depuis son sommet, verser et voir le patrimoine baisser quand même, repasser sous un palier déjà franchi. Un tableau qui ne fêterait que les hausses laisserait entendre qu'une baisse est une faute ; elle fait partie du métier, autant lui donner un nom. Les rangs y suivent la sévérité : le pire de chaque famille est platine.
- **Indépendance** mesure le patrimoine en années de dépenses, jusqu'aux vingt-cinq ans de la règle des 4 %. **Repères français** confronte le patrimoine aux médianes INSEE 2024 par tranche d'âge — patrimoine brut, résidence principale comprise, ce que les libellés précisent.
- **Curiosités** ne sert à rien financièrement, et c'est le but : une performance mensuelle à 1,23 % pile, deux décimales identiques, un patrimoine palindrome, un versement un vendredi 13 ou le 1<sup>er</sup> janvier. Des collectibles, pas des objectifs.
- La progression est affichée pour chaque jalon non atteint, et le plus proche est mis en avant. Un badge grisé sans contexte décourage ; « 62 990 € sur 75 000 € » donne une direction.
- Une famille **entièrement décrochée change d'allure** : bordure et fond dorés, coupe dans le titre, pastille « Complet » à la place du décompte. Sans récompense visible pour la collection entière, il n'y a aucune raison de viser le dernier badge d'une série.
- L'écran s'ouvre depuis l'icône coupe, à côté du bouton de rafraîchissement des repères du graphique d'évolution.

### 2026-08-11 — effort d'épargne

- Ajout : carte **Effort d'épargne** dans Analyse, qui confronte année par année ce que le budget a dégagé (revenus moins dépenses) à ce qui est réellement parti vers les comptes de patrimoine. Elle répond du même coup à « combien ai-je versé cette année », qui n'existait jusqu'ici que pour l'année en cours, dans le bandeau de l'Aperçu.
- L'écart entre les deux n'est pas une erreur mais une information : de l'argent resté sur le compte courant, des dépenses non classées, ou à l'inverse des versements venus d'ailleurs que du budget de l'année. La colonne **Part placée** montre quelle fraction de la capacité d'épargne a effectivement rejoint le patrimoine.
- La balance reste vide tant qu'aucun revenu n'est saisi pour l'année : sans revenu, elle ne serait qu'un cumul de dépenses. L'année contenant la reprise initiale est signalée, son premier mouvement n'enregistrant que ce qui dormait déjà sur les comptes.
- Les enveloppes **alimentées sur la fiche de paie** — PEE, PER d'entreprise — sont exclues de cette comparaison : leur argent ne transite jamais par le compte bancaire, donc jamais par le budget, et le compter fausserait la part placée. Il reste bien entendu dans le versé cumulé et dans la plus-value. Le classement se déduit du type de compte mais se corrige au cas par cas dans **Comptes → Réglages des comptes**, un PER alimenté par virement volontaire sortant, lui, du budget.

### 2026-08-11 — sauvegardes séparées

- Ajout : l'export JSON se fait au choix sur **tout**, **le Budget seul** ou **le Patrimoine seul**. On peut vouloir emporter son patrimoine sans trois ans de relevés bancaires, ou archiver un budget sans y joindre l'historique de ses placements. Le nom du fichier porte la partie exportée — au moment de restaurer, six mois plus tard, c'est la seule chose qu'on ait sous les yeux.
- Ajout : la restauration passe par une **fenêtre qui montre d'abord ce que contient le fichier** (opérations, imports et règles d'un côté ; comptes, valorisations, mouvements et crédits de l'autre), puis laisse choisir la partie à reprendre. Les parties absentes du fichier sont proposées désactivées, ce qui rend impossible d'effacer un patrimoine avec un export Budget. La partie non choisie n'est pas touchée.
- Modification : les **réglages suivent leur moitié**. Inflation, zone neutre, doublons et objectif d'épargne partent avec le Budget ; rendement, versement, objectif de palier et épargne de précaution avec le Patrimoine. Sans cette séparation, restaurer un export Patrimoine écraserait l'objectif d'épargne du Budget.
- Modification : le bloc « Données du budget » quitte **Réglages** pour l'onglet **Données**, qui rassemble désormais tout ce qui entre et tout ce qui sort — les trois imports d'un côté, les exports, la restauration et l'effacement de l'autre. Il y avait deux endroits pour exporter, c'était un de trop. Réglages ne garde que ce qui se règle : des valeurs, pas des traitements sur l'ensemble des données.

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
