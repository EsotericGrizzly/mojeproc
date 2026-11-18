# Jak to funguje: Google Tabulka → webovka

**Tabulka je databáze.** Lidé píšou čísla přímo do Google Tabulky. Webovka (GitHub Pages) si z ní data jen čte a zobrazuje je.

## Jak se webovka dívá do tabulky
- V souboru `config.js` je odkaz na tabulku (`sheetUrl`).
- Prohlížeč každého, kdo má webovku otevřenou, si od Googlu stáhne aktuální obsah tabulky (export CSV). Neběží u toho žádný server ani databáze.
- Stahuje se:
  - hned při otevření stránky,
  - pak **každých 30 sekund**, dokud je stránka otevřená a vidět,
  - když se uživatel na stránku vrátí z jiné záložky nebo aplikace,
  - když klikne na **↻ Obnovit teď**.
- Google ukládá úpravy v tabulce okamžitě, takže **změna se na webu objeví zhruba do 30 s**, výjimečně o něco později.

## Tabulka „Moje Proč – cíle“
- List **Cíle**: řádek = člověk, sloupec = úkol (Pohovory, Info 1, BJ, …), čísla = cíl. Prázdná buňka znamená, že úkol nemá.
- List **Plnění**: stejné sloupce a lidé, čísla = kolik už splnil. **Sem se zapisuje.**
- Nový úkol přidáš novým sloupcem v obou listech, nového člověka novým řádkem v obou listech.
- Jména v obou listech se párují podle jména. Když se neshodují, páruje se podle pořadí řádků a webovka na to upozorní.
- Každý úkol váží v procentech stejně, takže cíl 600 BJ se počítá stejně jako cíl 3 pohovorů.

## Nastavení (jednou)
1. V tabulce klikni na **Sdílet → Obecný přístup → Každý, kdo má odkaz → Čtenář**. Bez toho ji webovka nepřečte.
   Členům týmu dej právo **Editor** (přes jejich Google e-mail).
2. Odkaz na tabulku a názvy listů jsou v `config.js`, ten je už vyplněný.
3. Zapni GitHub Pages: Settings → Pages → větev s kódem, složka `/ (root)`.

## Zapisování
Na webu v záložce **Zapisování** si člověk vybere sebe a klikne na **✏️ Zapsat do tabulky (můj řádek)**. Otevře se mu list Plnění přímo na jeho řádku a tam přepíše číslo.

**Volitelně:** aby si lidé nepřepisovali čísla navzájem, nastav v tabulce u každého řádku *Data → Chránit listy a rozsahy* a povol ho jen tomu jednomu člověku.

## Dobré vědět
- Obsah tabulky (jména, čísla) uvidí každý, kdo má odkaz na webovku.
- Funguje to s **Google Tabulkami**. Excel v OneDrivu takhle z webovky číst nejde, ale soubor .xlsx jde do Google Tabulek normálně nahrát.
