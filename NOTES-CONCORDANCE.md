# Notes Concordance

## 3 novembre 2026 — extension AI Act (version de travail)

### Objet

Extension ciblée de Concordance vers l'AI Act, sans modification de la section d'accueil ni de l'identité visuelle mise en place le 3 novembre 2026. Le parcours MDR/IVDR existant, ses identifiants, son ordre et son calcul sont conservés. Trois questions conditionnelles sont ajoutées uniquement lorsque le visiteur déclare que son produit intègre une intelligence artificielle.

Le calcul a été complété uniquement pour ces trois réponses nouvelles : les coefficients et les règles de décision antérieurs n'ont pas été modifiés. Cet ajout est nécessaire pour que le rapport distingue une qualification AI Act non réalisée d'une préparation documentaire partielle et recommande la mission correspondante.

### Modifications

- Ajout, sous « Ce qui se joue maintenant », d'un bloc pédagogique consacré à l'intelligence artificielle en santé.
- Ajout de trois questions conditionnelles, avec les mêmes identifiants et la même logique en français et en anglais :
  - `ai_role` — rôle réel dans la chaîne de l'IA ; articles 3, points 3 et 4, et 25 ;
  - `ai_qualif` — analyse du caractère haut risque ; article 6, paragraphe 1, et annexe I ;
  - `ai_prep` — état de préparation ; articles 4, 9 à 15, 17 et 26.
- Ajout de points de vigilance et de deux échéances dans le rapport : article 4 applicable depuis le 2 février 2025 ; régime des systèmes à haut risque relevant de l'article 6, paragraphe 1, à compter du 2 août 2028 (règlement (UE) 2026/1744).
- Ajout de trois formules : « Qualification et rôle AI Act » (à partir de 2 000 € HT), « Plan de conformité AI Act » (à partir de 4 500 € HT), « Programme articulé MDR ou IVDR + AI Act » (à partir de 6 500 € HT).
- Ajout de Provacy comme outil optionnel de pilotage de la conformité AI Act, au tarif préférentiel de 1 500 € HT par an facturé directement par l'éditeur, avec accompagnement juridique par Hémistiches dans le périmètre convenu.
- Ajout des prix à la source unique `regles.js` et des orientations automatiques correspondantes dans le rapport.

### Fichiers touchés

- `index.html`
- `en/index.html`
- `regles.js`
- `LISEZ-MOI.md`
- `NOTES-CONCORDANCE.md`

### Sources juridiques vérifiées

- Règlement (UE) 2024/1689, version consolidée au 27 juillet 2026 : <https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27>
- Règlement modificatif (UE) 2026/1744 du 8 juillet 2026 : <https://eur-lex.europa.eu/eli/reg/2026/1744/oj>
- AI Act Service Desk de la Commission européenne, article 6 : <https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-6>
- AI Act Service Desk de la Commission européenne, article 99 : <https://ai-act-service-desk.ec.europa.eu/fr/ai-act/article-99>

### Points ouverts avant publication

- Ne pas citer Airmedice tant que le cadre d'intervention commune n'est pas arrêté.
- Le test reste centré sur les fabricants, distributeurs et importateurs de dispositifs ; un déployeur de santé sans produit propre est orienté vers un échange direct. Décider ultérieurement si un parcours déployeur autonome présente un intérêt commercial suffisant.
- Revoir les textes et les échéances AI Act au minimum tous les six mois et avant toute campagne commerciale importante.
- Aucun déploiement n'a été effectué.

## 3 novembre 2026 — relecture par Claude avant fusion

- Échéances AI Act vérifiées : article 4 applicable depuis le 2 février 2025 (reformulé par le règlement (UE) 2026/1744) ; obligations des systèmes à haut risque de l'annexe I (article 6, paragraphe 1) applicables à compter du 2 août 2028.
- Correction : « au plus tard le 2 août 2028 » remplacé par « à compter du 2 août 2028 » (FR et EN), la date étant celle de l'entrée en application et non une date limite.
- Parité FR/EN des trois questions, du rapport et des formules contrôlée.
- À confirmer par le cabinet avant fusion : tarif préférentiel Provacy convenu avec l'éditeur, absence de toute rémunération de l'éditeur.

## 5 novembre 2026 — partenariat Onlynnov (volet couverture financière)

Accord de Quentin de Mauroy (Onlynnov) du 5 novembre 2026 sur la présentation proposée le 4 novembre.

- Introduction au test (`#assur-intro`) : le volet est présenté comme conduit en collaboration avec Onlynnov ; le nom renvoie vers la page dispositifs médicaux d'Onlynnov.
- Carte « Couverture financière » (détail) : Onlynnov nommé comme courtier avec lequel le cabinet collabore, même lien.
- Résultat, affichage conditionnel : l'étude du schéma reste toujours la première proposition.
  - Police déclarée en place (`a_rc` = `dm` ou `gen`) et montant non mis en cause : le nom Onlynnov renvoie vers leur agenda dédié (« Votre police devra peut-être être ajustée ? »).
  - Pas de police, police inconnue ou montant de garantie à justifier : le nom renvoie vers leur site, dans la phrase de mise en relation après l'étude.
- Mention d'indépendance sous chaque variante : collaboration sans aucune rémunération liée à la mise en relation, libre choix de l'assureur ou du courtier (article 10 du décret n° 2023-552 du 30 juin 2023 ; article 11.3 du RIN).
- Résumé texte (message de transmission) : lien correspondant et mention d'indépendance.
- Les deux adresses sont centralisées dans `ONLYNNOV_SITE` et `ONLYNNOV_AGENDA`, en tête du script de chaque page.

Point ouvert : l'agenda Calendly s'intitule « audit medtech » ; à faire renommer si l'intitulé laisse penser qu'Onlynnov réalise l'évaluation.
