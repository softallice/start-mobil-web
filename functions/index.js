const functions = require("firebase-functions");
const admin = require("firebase-admin")

admin.initializeApp()
console.log(functions.config().admin.email)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true})
  response.send("Hello from Firebase!")
});

exports.test = functions.https.onRequest(require('./test'))
exports.createUser = functions.auth.user().onCreate((user) => {
  let userLevel = { level: 2 }
  if (functions.config().admin.email === user.email && user.emailVerified) userLevel.level = 0
    admin.auth().setCustomUserClaims(user.uid, userLevel ) //{ admin: true })
    .then(() => {
      // The new custom claims will propagate to the user's ID token the
      // next time a new one is issued.
      // DB에 저장 처리
      console.log('admin 인증')
    })
})