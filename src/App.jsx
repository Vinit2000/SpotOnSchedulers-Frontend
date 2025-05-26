import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ViewForm from './components/ViewForm';
import FormDeatils from './components/FormDetails';
import EditForm from './components/EditForm';
import AddForm from './components/AddForm';


function App() {
  return (
    <Routes>
      <Route path="/" element={<ViewForm />} />
      <Route path="/FormDetails" element={<FormDeatils />} />
      <Route path="/EditForm" element={<EditForm/>}/>
    </Routes>
  )
}




export default App;
