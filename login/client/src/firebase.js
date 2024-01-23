// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdAybjN-2Dyz3zpcslfIKN57Rpzi2o2Ag",
  authDomain: "auth-af3b0.firebaseapp.com",
  projectId: "auth-af3b0",
  storageBucket: "auth-af3b0.appspot.com",
  messagingSenderId: "1071083983971",
  appId: "1:1071083983971:web:090f056e8fb0fe972f9456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

