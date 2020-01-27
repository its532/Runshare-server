const admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-5ae20.firebaseio.com",
  storageBucket: "gs://socialape-5ae20.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };
