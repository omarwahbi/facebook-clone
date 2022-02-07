import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCByv9fVgGljUIvWKMzpRtFuAWhaGOiYUY",
  authDomain: "facebook-clone-af533.firebaseapp.com",
  projectId: "facebook-clone-af533",
  storageBucket: "facebook-clone-af533.appspot.com",
  messagingSenderId: "996476509163",
  appId: "1:996476509163:web:d906ace198fccebf04d7ae",
  measurementId: "G-4V9EW46HWE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);