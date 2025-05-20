<<<<<<< HEAD
// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import EditForm from './components/EditForm';
import VerificationForm from './components/VerificationForm';

const App = () => (
  <Routes>
    <Route path="/" element={<EditForm />} />
    <Route path="/verification" element={<VerificationForm />} />
  </Routes>
);

export default App;
=======
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ViewForm from './components/ViewForm';
import FormDeatils from './components/FormDetails';


function App() {
  return (
    <Routes>
      <Route path="/" element={<ViewForm />} />
      <Route path="/FormDetails" element={<FormDeatils />} />
    </Routes>
  )
}

export default App;
>>>>>>> 63fd2cb1b589ebd4309c7b67578ceeae87346dd4
