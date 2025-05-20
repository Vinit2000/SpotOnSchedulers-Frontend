<<<<<<< HEAD
// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
=======
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
>>>>>>> 63fd2cb1b589ebd4309c7b67578ceeae87346dd4

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
<<<<<<< HEAD
  </BrowserRouter>
);
=======
  </BrowserRouter>,
)
>>>>>>> 63fd2cb1b589ebd4309c7b67578ceeae87346dd4
