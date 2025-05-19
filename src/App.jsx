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