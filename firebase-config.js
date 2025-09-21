import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDin-ueMfhRwZ7EOWrpYRbyhTcvtm-xZ6s",
  authDomain: "dias-aea74.firebaseapp.com",
  projectId: "dias-aea74",
  storageBucket: "dias-aea74.appspot.com",
  messagingSenderId: "261547908584",
  appId: "1:261547908584:web:809d448f6b35a1b0f7985d",
  measurementId: "G-WQ2ZXZX0VV"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
getAnalytics(app);
