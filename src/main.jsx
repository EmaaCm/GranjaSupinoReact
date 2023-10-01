import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyD9pMdGQXhWUor4qrNype3rDJv-uz6E2jQ",
  authDomain: "tienda-diego-react.firebaseapp.com",
  projectId: "tienda-diego-react",
  storageBucket: "tienda-diego-react.appspot.com",
  messagingSenderId: "552603358041",
  appId: "1:552603358041:web:15ff2c15c0ad9e2f5e7248"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,


)


