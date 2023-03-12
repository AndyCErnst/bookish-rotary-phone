import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

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

if(process.env.NODE_ENV !== 'development') {
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LeAhokjAAAAALjeVS4xcbQacvrhrRt6yrBKMdWr'),
    isTokenAutoRefreshEnabled: true
  });
}
