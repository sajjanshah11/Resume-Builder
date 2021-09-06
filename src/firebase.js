import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdItWP32N1r7AxhyYAlLBlPKxtxzZOXwo",
  authDomain: "resume-builder-d324c.firebaseapp.com",
  projectId: "resume-builder-d324c",
  storageBucket: "resume-builder-d324c.appspot.com",
  messagingSenderId: "1097604157019",
  appId: "1:1097604157019:web:b60c909333e2b2cdb6f97e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();