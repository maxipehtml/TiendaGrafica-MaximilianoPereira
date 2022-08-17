
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXn-PNBYTfO1ZjfxkwRgFegQBcGhaVIwg",
  authDomain: "primerreactapptienda.firebaseapp.com",
  projectId: "primerreactapptienda",
  storageBucket: "primerreactapptienda.appspot.com",
  messagingSenderId: "1053755032767",
  appId: "1:1053755032767:web:df523b5f4e9162d6dfb20a",
  measurementId: "G-T35C6GJFHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const database = getFirestore(app)