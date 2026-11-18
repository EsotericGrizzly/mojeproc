/*
 * Zdroj dat: Google Tabulka „Moje Proč – cíle“.
 *  - list „Cíle“   = cíle každého člověka
 *  - list „Plnění“ = kolik už splnil (sem se zapisuje)
 * Oba listy mají stejné sloupce: Jméno | úkol 1 | úkol 2 | …
 * Tabulka musí být nasdílená „Každý, kdo má odkaz → Čtenář“. Návod: NAVOD.md
 */
window.TRACKER_CONFIG = {
  sheetUrl: "https://docs.google.com/spreadsheets/d/1fbQAd-CmBGL14_CIbvkRBai4-Ou7u7S6i_DlDpySxAU/edit",
  targetsSheet: "Cíle",
  doneSheet: "Plnění",
  doneGid: 1 // ID listu „Plnění“ (kvůli odkazu „Zapsat do tabulky“)
};
