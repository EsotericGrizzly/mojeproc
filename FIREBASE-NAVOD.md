# Nastavení Firebase + GitHub Pages

Data (lidé, cíle, každé +1) se ukládají do databáze **Firebase Firestore** od Googlu. Tarif Spark je zdarma a na tým o 9 lidech bohatě stačí.

- **Přehled** vidí každý, kdo má odkaz.
- **Zapisovat** smí člověk jen za sebe, když se odemkne **svým heslem**.
- **Nastavení** (lidé, cíle, import z Excelu) smí měnit jen **správce**.

## 1. Založ projekt

1. Otevři <https://console.firebase.google.com> a klikni na **Add project** (např. „nas-ostrov“). Google Analytics můžeš vypnout.

## 2. Databáze

1. **Build → Firestore Database → Create database**
2. Vyber **Production mode** a lokaci v Evropě (např. `eur3`).
3. Otevři záložku **Rules**, smaž, co tam je, vlož celý obsah souboru [`firestore.rules`](firestore.rules) a klikni na **Publish**.

## 3. Přihlašování

1. **Build → Authentication → Get started**
2. **Sign-in method → Email/Password → Enable** (jen první přepínač) → Save.
3. **Users → Add user**: založ účet správce
   - e-mail: `spravce@ostrov.tym` (nemusí být skutečný)
   - heslo: silné heslo, které znáš jen ty
   > Pokud chceš jiný e-mail správce, změň ho na **dvou** místech: ve `firestore.rules` (funkce `isAdmin`) a ve `firebase-config.js` (`adminEmail`).

## 4. Propojení stránky s Firebase

1. Klikni na ozubené kolo → **Project settings → General → Your apps** a vyber ikonu **Web `</>`**. Aplikaci pojmenuj a Hosting nezaškrtávej.
2. Zkopíruj objekt `firebaseConfig` a vlož ho do souboru [`firebase-config.js`](firebase-config.js) místo `firebase: null`:
   ```js
   firebase: {
     apiKey: "AIza...",
     authDomain: "nas-ostrov.firebaseapp.com",
     projectId: "nas-ostrov",
     storageBucket: "nas-ostrov.appspot.com",
     messagingSenderId: "...",
     appId: "..."
   },
   ```
   Tyto hodnoty nejsou tajné, Firebase je tak navržený. Data chrání pravidla z kroku 2.

## 5. GitHub Pages

1. V repozitáři otevři **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, větev s tímto kódem, složka `/ (root)` → Save.
2. Za minutu poběží stránka na `https://<uzivatel>.github.io/<repozitar>/`.
3. Ve Firebase otevři **Authentication → Settings → Authorized domains** a přidej `<uzivatel>.github.io`.

## 6. Lidé a jejich hesla

1. Na stránce otevři **Nastavení & Excel** a přihlas se jako správce.
2. Přidej lidi a cíle, nebo je nahraj z Excelu. Každý člověk automaticky dostane **přihlašovací účet**, např. `jan.novak@ostrov.tym` (sloupec „Přihlašovací účet“, dá se upravit).
3. Ve Firebase otevři **Authentication → Users → Add user** a pro každého založ účet:
   - e-mail = jeho přihlašovací účet z tabulky
   - heslo = to, které mu řekneš
4. Hotovo. Člověk otevře **Zapisování**, vybere se, zadá heslo a klikne na **Odemknout**. Prohlížeč si odemčení pamatuje, dokud nezmáčkne **Zamknout**.

**Změna hesla:** ve Firebase smaž uživatele (Authentication → Users → ⋮ → Delete account) a založ ho znovu s novým heslem. Záznamy zůstanou zachované.

**Nový člověk později:** přidej ho v Nastavení a hned mu ve Firebase založ účet.

## Dobré vědět

- **Soukromí:** přehled a historie jsou veřejné pro každého s odkazem, včetně jmen v poli „Koho?“. Doporučuji tam psát jen křestní jména nebo iniciály.
- **Doporučené zabezpečení:** pokud v *Authentication → Settings → User actions* vidíš volbu **Enable create (sign-up)**, vypni ji. Účty pak půjde zakládat jen v konzoli.
- Dokud je ve `firebase-config.js` `firebase: null`, stránka běží v **lokálním režimu** a data se ukládají jen v jednom prohlížeči.
