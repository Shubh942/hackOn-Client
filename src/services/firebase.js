import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlpwNZQ8S8yghH5OUEdvkJM_6BPtzljt4",
  authDomain: "video-chat-5d3ea.firebaseapp.com",
  projectId: "video-chat-5d3ea",
  storageBucket: "video-chat-5d3ea.appspot.com",
  messagingSenderId: "665767965034",
  appId: "1:665767965034:web:f8a05ceab9db974604f513",
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
