/*
 * Zdroj dat: Google Tabulka „Moje Proč – cíle“, list „Cíle“.
 *  - řádek 4: názvy úkolů (každý úkol má dva sloupce)
 *  - řádek 5: „Cíl“ | „Stav“
 *  - od řádku 6: jeden řádek = jeden člověk; do sloupců „Stav“ se zapisuje
 * Tabulka musí být nasdílená „Každý, kdo má odkaz → Čtenář“. Návod: NAVOD.md
 */
window.TRACKER_CONFIG = {
  sheetUrl: "https://docs.google.com/spreadsheets/d/1fbQAd-CmBGL14_CIbvkRBai4-Ou7u7S6i_DlDpySxAU/edit#gid=0",
  headerRange: "A4:Z5",  // názvy úkolů + Cíl/Stav
  dataRange: "A6:Z300",  // lidé
  // Jak se mají úkoly jmenovat na webu (název v tabulce → název na webu)
  rename: { "Info 1": "Lidé na Info 1", "FA": "Analýzy" },
  // Rozpočet výpravy: sloupce „Stav“ tohoto úkolu se sčítají za všechny dohromady.
  // Zobrazí se jako měšec zlata pod letadlem; až se naplní, výprava platí.
  pool: { task: "BJ", title: "Rozpočet výpravy", label: "Bankovní jednotky", unit: "BJ", goal: 5500 }
};
