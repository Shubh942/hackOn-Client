import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import firebase from "./services/firebase";
import { FirebaseContext } from "./context/firebase.js";
import "./styles/main.scss";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
