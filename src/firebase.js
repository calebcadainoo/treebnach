// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCP49op_mw9rxcSwQYe61GkC3rXKEezNVY',
  authDomain: 'treebnach.firebaseapp.com',
  projectId: 'treebnach',
  storageBucket: 'treebnach.appspot.com',
  messagingSenderId: '377633128172',
  appId: '1:377633128172:web:0d3c7ce5c1ddf6b195efc9',
  measurementId: 'G-7ES2JRY8KE',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const auth = getAuth();
const facebook = new FacebookAuthProvider();
facebook.setCustomParameters({
  display: 'popup',
});

export { auth, facebook, signInWithPopup };
export default firebaseApp;
