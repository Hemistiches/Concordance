# Concordance, par Hémistiches

Site de diagnostic de la conformité des dispositifs médicaux (MDR et IVDR). Adresse prévue : https://concordance.hemistiches.com (non publié au 23 octobre 2026).

Deux pages, française (`index.html`) et anglaise (`en/index.html`), reliées par le sélecteur FR | EN de l'en-tête. Chacune contient le test, les formules, les mentions légales et la politique de confidentialité ; toute modification de fond se reporte dans les deux fichiers. Aucune compilation ni dépendance : ce que contient ce dossier est exactement ce qui sera publié.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | La version française (textes, test, analyse, mentions légales et confidentialité) |
| `en/index.html` | La version anglaise, même moteur et même formulaire ; les mentions indiquent que la version française prévaut |
| `netlify.toml` | Configuration de publication Netlify |
| `robots.txt` | Autorise l'indexation |
| `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` | Icônes reprises de hemistiches.com |

## Le test

Parcours selon le rôle : fabricant établi dans l'Union, fabricant établi hors de l'Union, distributeur ou importateur (une sortie directe vers un échange pour les autres situations). Sept à onze questions. Le rapport donne un niveau de concordance sur quatre (établie, à vérifier, à établir, à rétablir), les points de vigilance, les échéances propres au produit et la formule recommandée avec son prix.

Sources des échéances : règlement (UE) 2017/745, art. 120 (règlement (UE) 2023/607) ; règlement (UE) 2017/746, art. 110 (règlement (UE) 2024/1860) ; décision (UE) 2025/2371 (EUDAMED). La proposition COM(2025) 1023 n'est pas adoptée : à revoir dès son adoption.

## Publication (le moment venu)

Sur le modèle de Cadence et de Diapason : dépôt GitHub Hemistiches/concordance, projet Netlify relié au dépôt, enregistrement CNAME « concordance » chez Wix. Le formulaire `rapport-concordance` est reçu par Netlify Forms ; la langue se lit dans `version_information` (suffixe « -en »).

© 2026 Hémistiches. Tous droits réservés. Les textes, la structure du test et les éléments graphiques de ce site sont protégés ; leur reproduction sans autorisation écrite préalable est interdite.
