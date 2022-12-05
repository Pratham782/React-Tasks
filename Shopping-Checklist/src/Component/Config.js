import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCwmqUyMHtK5BhcEM4wYj5sGwH6g5n-M1g",
  authDomain: "shopping-checklist-cf017.firebaseapp.com",
  databaseURL: "https://shopping-checklist-cf017-default-rtdb.firebaseio.com",
  projectId: "shopping-checklist-cf017",
  storageBucket: "shopping-checklist-cf017.appspot.com",
  messagingSenderId: "910235471669",
  appId: "1:910235471669:web:bbb7e6365f4e1785ad867c"
};

const app = initializeApp(firebaseConfig);

export  const db = getDatabase(app);