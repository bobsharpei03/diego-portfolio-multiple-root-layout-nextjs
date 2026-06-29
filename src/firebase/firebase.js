// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvYZgvTY2xhBbYzHIt8NYpz4T-foLN5uI",
  authDomain: "diegomaquillportfolio.firebaseapp.com",
  projectId: "diegomaquillportfolio",
  storageBucket: "diegomaquillportfolio.firebasestorage.app",
  messagingSenderId: "485923941686",
  appId: "1:485923941686:web:bcc0a9a3b33e2777889797",
  measurementId: "G-TQWDEXXCPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);