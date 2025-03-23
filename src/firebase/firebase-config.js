import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmwvzv6TmaIMhyAo5BGZGKsQlbF6vOBUs",
  authDomain: "react-app-2760e.firebaseapp.com",
  projectId: "react-app-2760e",
  storageBucket: "react-app-2760e.firebasestorage.app",
  messagingSenderId: "638991022427",
  appId: "1:638991022427:web:4ddbc73ca814e962bec27e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;
