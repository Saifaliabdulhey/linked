import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUtzV1zV28VrHqDhk8AX6Y0FooZy2Z828",
  authDomain: "clone-29e8f.firebaseapp.com",
  databaseURL: "https://clone-29e8f-default-rtdb.firebaseio.com",
  projectId: "clone-29e8f",
  storageBucket: "clone-29e8f.appspot.com",
  messagingSenderId: "369662499590",
  appId: "1:369662499590:web:a1913611f8925b102d1c87",
  measurementId: "G-V1M485S0MG"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);