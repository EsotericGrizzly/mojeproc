/*
 * Nastavení pro běh na GitHub Pages s databází Firebase.
 * Návod: viz FIREBASE-NAVOD.md
 *
 * Dokud je `firebase: null`, stránka běží v lokálním režimu (data jen v jednom prohlížeči).
 * Tyto hodnoty NEJSOU tajné – Firebase je navržený tak, že konfigurace je veřejná
 * a data chrání pravidla v souboru firestore.rules.
 */
window.TRACKER_CONFIG = {
  // Sem vlož objekt firebaseConfig z Firebase konzole (Project settings → Your apps → Web app)
  firebase: null,
  /* příklad:
  firebase: {
    apiKey: "AIza...",
    authDomain: "nas-ostrov.firebaseapp.com",
    projectId: "nas-ostrov",
    storageBucket: "nas-ostrov.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abc123"
  },
  */

  // Účet správce (smí měnit lidi, cíle a importovat Excel). Stejný e-mail musí být i ve firestore.rules.
  adminEmail: "spravce@ostrov.tym",

  // Doména přihlašovacích účtů lidí (nemusí to být skutečný e-mail), např. jan.novak@ostrov.tym
  loginDomain: "ostrov.tym"
};
