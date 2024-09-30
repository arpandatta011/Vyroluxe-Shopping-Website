import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBwME5PyDkXq20tl91Pb_MW5DP82zqIN_c",
  authDomain: "myecommerce-648bb.firebaseapp.com",
  projectId: "myecommerce-648bb",
  storageBucket: "myecommerce-648bb.appspot.com",
  messagingSenderId: "449497972566",
  appId: "1:449497972566:web:e6648d1352f2f0ebdea0f7"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth, db }