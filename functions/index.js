const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

/*
exports.nuxtApp = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
*/

const { Nuxt } = require('nuxt-start')

const config = {
  dev: false,
  debug: false
}

const nuxt = new Nuxt(config);
exports.nuxtApp = functions.https.onRequest(async (request, response) => {
  await nuxt.ready();
  nuxt.render(request, response);
});
