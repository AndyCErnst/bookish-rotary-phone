import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAn1hXEZk35TMw6JuWRrNAySIrpB-i0Hls",
  authDomain: "scottish-broadsides.firebaseapp.com",
  databaseURL: "https://scottish-broadsides-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scottish-broadsides",
  storageBucket: "scottish-broadsides.appspot.com",
  messagingSenderId: "482114629690",
  appId: "1:482114629690:web:2584584e5fae88f6040503"
};

export const app = initializeApp(firebaseConfig);