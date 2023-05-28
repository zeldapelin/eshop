import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBv6zEONDVJSxOlkxmyUVto6eWksYVXwSU",
    authDomain: "eshop-c2e0a.firebaseapp.com",
    projectId: "eshop-c2e0a",
    storageBucket: "eshop-c2e0a.appspot.com",
    messagingSenderId: "941031253944",
    appId: "1:941031253944:web:0bc5a43bc9fe9af86e514d",
    measurementId: "G-5BDLQRB305"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { app, db };