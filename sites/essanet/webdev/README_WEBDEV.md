# Kit WEBDEV — Site vitrine GSMAG / ESSANET

Ce dossier te permet de **recréer le site HTML actuel dans WEBDEV**.
Je ne peux pas générer le fichier projet `.ww` (format propriétaire PC Soft),
mais tu as ici : structure, contrôles, événements et multilangue FR / EN / AR.

## 1. Créer le projet

1. Ouvre **WEBDEV**
2. **Fichier → Nouveau → Site**
3. Nom du projet : `GSMAG_Vitrine`
4. Langage : **WLangage**
5. Mode responsive : **Oui** (recommandé)
6. Copie le dossier `assets` de `Desktop\ESSANET\assets` dans le répertoire du projet WEBDEV (ex. `_WEB\images\` ou `Ressources\`)

## 2. Pages à créer

| Page WEBDEV | Contenu |
|-------------|---------|
| `PAGE_Accueil` | Hero + Versions + Fonctions + Téléchargements + À propos + Formation + Contact |
| `PAGE_Login` (popup ou page) | Espace client |

Tu peux tout mettre dans **une seule page longue** (comme le HTML actuel) avec ancres.

## 3. En-tête (répétée ou zone fixe)

Contrôles à poser :

| Nom | Type | Texte / Action |
|-----|------|----------------|
| `IMG_Logo` | Image | `logo-g.png` |
| `LIB_Logo` | Libellé | `GSMAG` |
| `Lien_Versions` | Lien / Bouton | → ancre `#ZONE_Versions` |
| `Lien_Fonctions` | Lien / Bouton | → `#ZONE_Fonctions` |
| `Lien_Telechargements` | Lien / Bouton | → `#ZONE_Telechargements` |
| `Lien_Formation` | Lien / Bouton | → `#ZONE_Formation` |
| `Lien_Contact` | Lien / Bouton | → `#ZONE_Contact` |
| `BTN_FR` | Bouton | Langue FR |
| `BTN_EN` | Bouton | Langue EN |
| `BTN_AR` | Bouton | Langue AR |
| `BTN_EspaceClient` | Bouton | Ouvre login |
| `BTN_Telecharger` | Bouton | Scroll vers téléchargements |

## 4. Zone Hero

| Nom | Type |
|-----|------|
| `LIB_Brand` | Libellé → `GSMAG` |
| `LIB_HeroTitre` | Libellé |
| `LIB_HeroLead` | Libellé multiligne |
| `BTN_Demo` | Bouton → ouvre URL démo |
| `BTN_VoirVersions` | Bouton → scroll versions |
| Fond page | Image `bg-whale.png` (arrière-plan) |

URLs utiles :
- Démo : `https://essanet.pcscloud.net/TELECHARGER/Ins_GSMAG_DEMO.EXE`
- Install 2026 : `https://essanet.pcscloud.net/TELECHARGER/Install_GSMAG2026V400.exe`

## 5. Zone Versions (4 blocs)

Pour chaque version : Image + Titre + Texte

| Bloc | Image | Libellés |
|------|-------|----------|
| Mono | `version-mono.png` | `LIB_MonoTitre`, `LIB_MonoTexte` |
| Réseaux | `version-reseaux.png` | `LIB_ReseauxTitre`, `LIB_ReseauxTexte` |
| Serveur | `version-serveur.png` | `LIB_ServeurTitre`, `LIB_ServeurTexte` |
| Android | `version-android.png` | `LIB_AndroidTitre`, `LIB_AndroidTexte` |

Ratio image recommandé dans WEBDEV : **3:2** (ex. largeur 480, hauteur 320).

## 6. Multilingue

1. Crée une **collection de procédures globales** : `COL_I18N`
2. Copie le code de `WL_I18N.wl` dans cette collection
3. Variable globale : `gsLangue` (chaîne) = `"FR"`
4. Au chargement de page : `AppliquerLangue(gsLangue)`
5. Clic `BTN_FR` → `AppliquerLangue("FR")` (idem EN / AR)

Pour l’arabe : active le **mode RTL** si ta version WEBDEV le permet, ou aligne les libellés à droite.

## 7. Couleurs (style actuel)

| Rôle | Couleur |
|------|---------|
| Fond océan | `#061523` |
| Texte | `#FFFFFF` |
| Texte secondaire | `#C5D8E8` |
| Accent rouge | `#E03131` |
| Accent or | `#F0C75E` |

## 8. Ordre de travail conseillé

1. Page Accueil + fond baleine  
2. Header + navigation  
3. Hero + 2 boutons  
4. 4 versions  
5. Fonctions (6 lignes)  
6. Téléchargements  
7. Contact + login  
8. Brancher `AppliquerLangue`

## Fichiers dans ce dossier

- `README_WEBDEV.md` — ce guide
- `WL_I18N.wl` — procédures WLangage multilangue
- `WL_PAGE_Accueil.wl` — événements clic / chargement
- `CONTROLES.txt` — liste complète des noms de champs

## Astuce rapide

Si tu veux aller très vite au début :
1. Crée une page WEBDEV
2. Pose un contrôle **HTML** / **zone HTML**
3. Colle le contenu de `index.html` (chemins images adaptés)
4. Ensuite migre zone par zone en contrôles natifs WEBDEV

Cette méthode te laisse un site online immédiatement, puis tu “WEBDEV-ises” progressivement.
