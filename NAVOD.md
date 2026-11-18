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

## Nastavení (jednou)
1. Vytvoř Google Tabulku a importuj do ní `tabulka-sablona.csv`, nebo přepiš záhlaví ručně:
   `Jméno | Lidé na pohovor – cíl | Lidé na pohovor – hotovo | Lidé na infa – cíl | Lidé na infa – hotovo`
   - Každý úkol má dva sloupce: `<název> – cíl` a `<název> – hotovo`. Další úkol přidáš dalšími dvěma sloupci.
   - Jeden řádek patří jednomu člověku.
2. **Sdílet → Obecný přístup → Každý, kdo má odkaz → Čtenář.** Bez toho ji webovka nepřečte.
   Členům týmu dej právo **Editor** (přes jejich Google e-mail).
3. Zkopíruj odkaz na tabulku (z adresního řádku) do `config.js`:
   `sheetUrl: "https://docs.google.com/spreadsheets/d/…/edit#gid=0"`
4. Zapni GitHub Pages: Settings → Pages → větev s kódem, složka `/ (root)`.

## Zapisování
Na webu v záložce **Zapisování** si člověk vybere sebe a klikne na **✏️ Zapsat do tabulky (můj řádek)**. Otevře se mu tabulka přímo na jeho řádku a tam přepíše číslo ve sloupci „hotovo“.

**Volitelně:** aby si lidé nepřepisovali čísla navzájem, nastav v tabulce u každého řádku *Data → Chránit listy a rozsahy* a povol ho jen tomu jednomu člověku.

## Dobré vědět
- Obsah tabulky (jména, čísla) uvidí každý, kdo má odkaz na webovku.
- Funguje to s **Google Tabulkami**. Excel v OneDrivu takhle z webovky číst nejde, ale soubor .xlsx jde do Google Tabulek normálně nahrát.
