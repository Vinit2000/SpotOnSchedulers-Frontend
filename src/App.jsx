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
