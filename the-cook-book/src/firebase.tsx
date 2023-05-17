import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
apiKey: "AIzaSyAfAsxh-2U924Ew-lNDz9lidGgs32iANic",
authDomain: "thecookbook-d3b6d.firebaseapp.com",
projectId: "thecookbook-d3b6d",
storageBucket: "thecookbook-d3b6d.appspot.com",
messagingSenderId: "443946806866",
appId: "1:443946806866:web:a13b950f9dd78049b3398b",
measurementId: "G-C4GF8V5NG3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);