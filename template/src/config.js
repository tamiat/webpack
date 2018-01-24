/* This is the Firebase configuration file*/

import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyCnxuLX6AgMduDMLtSJVDNJhR8xuMNvs4Y",
  authDomain: "tamiat-demo.firebaseapp.com",
  databaseURL: "https://tamiat-demo.firebaseio.com/",
  projectId: "tamiat-demo",
  storageBucket: "gs://tamiat-demo.appspot.com/",
  messagingSenderId: "188459960333"
};

let app = Firebase.initializeApp(config);
let db = app.database();

// create a database references
const settingsRef = db.ref('settings');
const pagesRef = db.ref('pages');
const postsRef = db.ref('posts');
const usersRef = db.ref('users');
const mediaRef = db.ref('media');

export { postsRef, usersRef, settingsRef, pagesRef, mediaRef };
