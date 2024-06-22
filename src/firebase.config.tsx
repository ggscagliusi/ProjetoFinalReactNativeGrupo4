
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCKElc7bwPIlTL_AYKcFNs0_iIa1yCaKbA",
  authDomain: "testepjf-5f005.firebaseapp.com",
  projectId: "testepjf-5f005",
  storageBucket: "testepjf-5f005.appspot.com",
  messagingSenderId: "975251244751",
  appId: "1:975251244751:web:f432c6214fec7ac79419ba"
};


export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);