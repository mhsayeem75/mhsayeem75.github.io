// ==========================================
// Sayeem IT Solution
// Firebase Configuration
// ==========================================


const firebaseConfig = {

apiKey: "আপনার_api_key",

authDomain: "আপনার_project.firebaseapp.com",

projectId: "আপনার_project_id",

storageBucket: "আপনার_project.appspot.com",

messagingSenderId: "আপনার_sender_id",

appId: "আপনার_app_id"

};



// Initialize Firebase

firebase.initializeApp(firebaseConfig);


// Firestore Database

const db = firebase.firestore();
