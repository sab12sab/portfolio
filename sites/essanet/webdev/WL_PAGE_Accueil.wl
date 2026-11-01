// ============================================================
// PAGE_Accueil — Événements WLangage (WEBDEV)
// Adapter les noms de contrôles à ceux de ta page
// ============================================================

// -------------------- Initialisation de PAGE_Accueil --------
PROCEDURE PAGE_Accueil
sLangCookie is string = CookieLit("gsmag-lang")
IF sLangCookie <> "" THEN
	gsLangue = Upper(sLangCookie)
ELSE
	gsLangue = "FR"
END
AppliquerLangue(gsLangue)

// -------------------- Langues --------------------------------
PROCEDURE BTN_FR
AppliquerLangue("FR")

PROCEDURE BTN_EN
AppliquerLangue("EN")

PROCEDURE BTN_AR
AppliquerLangue("AR")

// -------------------- Navigation (ancres / scroll) -----------
// Selon version WEBDEV : AncreAffiche / ScrollVers / CelluleFocus

PROCEDURE Lien_Versions
// Exemple :
// AncreAffiche(ZONE_Versions)
ScrollVers(ZONE_Versions)

PROCEDURE Lien_Fonctions
ScrollVers(ZONE_Fonctions)

PROCEDURE Lien_Telechargements
ScrollVers(ZONE_Telechargements)

PROCEDURE Lien_Formation
ScrollVers(ZONE_Formation)

PROCEDURE Lien_Contact
ScrollVers(ZONE_Contact)

PROCEDURE BTN_VoirVersions
ScrollVers(ZONE_Versions)

PROCEDURE BTN_Telecharger
ScrollVers(ZONE_Telechargements)

// -------------------- Actions URL ----------------------------
PROCEDURE BTN_Demo
NavigateurOuvre("https://essanet.pcscloud.net/TELECHARGER/Ins_GSMAG_DEMO.EXE")

PROCEDURE BTN_DL_PC2026
NavigateurOuvre("https://essanet.pcscloud.net/TELECHARGER/Install_GSMAG2026V400.exe")

PROCEDURE BTN_DL_Demo
NavigateurOuvre("https://essanet.pcscloud.net/TELECHARGER/Ins_GSMAG_DEMO.EXE")

PROCEDURE BTN_DL_G2
NavigateurOuvre("https://essanet.pcscloud.net/TELECHARGER/SOHOLA2026_G2.rar")

PROCEDURE BTN_DL_G8
NavigateurOuvre("https://essanet.pcscloud.net/TELECHARGER/SOHOLA2025_G8.rar")

PROCEDURE BTN_DL_Article
NavigateurOuvre("https://essanet.pcscloud.net/TELECHARGER/Table%20PRODUIT.XLSX")

PROCEDURE BTN_DL_Client
NavigateurOuvre("https://essanet.pcscloud.net/TELECHARGER/Table%20CLIENT.XLSX")

PROCEDURE BTN_DL_Fournisseur
NavigateurOuvre("https://essanet.pcscloud.net/TELECHARGER/Table%20FOURNISSEUR.XLSX")

PROCEDURE BTN_HFSQL
NavigateurOuvre("https://download.windev.com/fr/download/packs/HFSQL/2026.awp")

PROCEDURE BTN_TeamViewer
NavigateurOuvre("https://www.teamviewer.com/fr/download/windows/")

PROCEDURE BTN_Youtube
NavigateurOuvre("https://youtube.com/@essadeqmustapha2459")

PROCEDURE BTN_DemanderFormation
ScrollVers(ZONE_Contact)

// -------------------- Espace client --------------------------
PROCEDURE BTN_EspaceClient
// Option A : popup
// PopupAffiche(POPUP_Login)
// Option B : page
PageAffiche(PAGE_Login)

PROCEDURE BTN_Login
PageAffiche(PAGE_Login)

// -------------------- PAGE_Login : Valider -------------------
PROCEDURE BTN_ValiderLogin
// Brancher ici ton authentification serveur ESSANET
sLogin is string = SAI_Login
sMdp is string = SAI_MotDePasse

IF sLogin ~= "" OR sMdp ~= "" THEN
	Erreur("Veuillez saisir login et mot de passe.")
	RETURN
END

// TODO : appel serveur / table utilisateurs
Info("Espace client prêt à être branché sur votre serveur ESSANET.")
