const firebaseConfig = {
  apiKey: "আপনার key",
  authDomain: "আপনার domain",
  projectId: "আপনার project id",
  storageBucket: "আপনার bucket",
  messagingSenderId: "আপনার id",
  appId: "আপনার app id"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
