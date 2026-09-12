// ============================================================
//  WALK GRID SETTINGS
//  This is the only file you need to edit. Change the words
//  between the quotes, save, and reload the app.
// ============================================================

window.WALKGRID_CONFIG = {

  // Any word or phrase. Everyone who opens the app with the same
  // household name sees the same checkmarks. Treat it like a
  // password: only people you share the link with should know it.
  householdId: "baron-and-indy",

  // Dollars per walk.
  ratePerWalk: 5,

  // The people who can tap checkmarks. The app asks each person
  // which name is theirs the first time they open it on their phone,
  // then remembers. Put the walker's name here too.
  people: ["Jessica", "Husband", "Dog Walker"],

  // The dogs. Drop photos into the images folder with these file
  // names and they appear in the app. Until then, the app shows the
  // initials in a glowing ring.
  dogs: [
    { name: "Baron",         short: "BARON", photo: "images/baron.jpg" },
    { name: "Indiana Jones", short: "INDY",  photo: "images/indy.jpg"  }
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
