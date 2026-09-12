// ============================================================
//  SANDWALK · SETTINGS
//  This is the only file you need to edit. Change the words
//  between the quotes, save, and reload the app.
// ============================================================

window.SANDWALK_CONFIG = {

  // Any word or phrase. Everyone who opens the app with the same
  // household name sees the same walks. Treat it like a password:
  // only people you share the link with should know it.
  householdId: "bear-and-indy",

  // Dollars per walk.
  ratePerWalk: 5,

  // The dog walker. Shows in the ring ("Owed to Anselm").
  walker: "Anselm",

  // The dogs. Photos live in the images folder. Until a photo is
  // there, the circle shows the dog's initial.
  dogs: [
    { name: "Bear",          photo: "images/bear.jpg" },
    { name: "Indiana Jones", short: "Indy", photo: "images/indy.jpg" }
  ],

  // Which days walks happen. 1 = Monday ... 5 = Friday, 6 = Saturday, 0 = Sunday.
  // To add Saturdays, change this to [1, 2, 3, 4, 5, 6].
  days: [1, 2, 3, 4, 5],

  // ------------------------------------------------------------
  //  SYNC BETWEEN PHONES (Firebase)
  //  Leave this empty and the app works on one phone only.
  //  Fill it in (see README.md, step 3) and every phone stays in
  //  sync within a second.
  // ------------------------------------------------------------
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};
