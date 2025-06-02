import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ViewForm from './components/ViewForm';
import FormDetails from './components/FormDetails';
import EditInsuranceForm from './components/EditIsuranceForm';
import VerificationForm from './components/VerificationForm';
import AddForm from './components/AddForm';
import MasterForm from './components/MasterForm';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px', overflowY: 'auto' }}>
        <Routes>
          <Route path="/" element={<div>Welcome to Dashboard</div>} />
          <Route path="/view-insurance-form" element={<ViewForm />} />
          <Route path="/form-details" element={<FormDetails />} />
          <Route path="/edit-insurance-form" element={<EditInsuranceForm />} />
          <Route path="/verification-form" element={<VerificationForm />} />
<<<<<<< HEAD
          <Route path="/master-form" element={<MasterForm />} />
          <Route path="/add-dental-office" element={<AddForm />} />
=======

          <Route path="/master-form" element={<MasterForm />} /> {/* ✅ Added Route */}

          <Route path="/add-dental-office" element={<AddForm/>}/>

>>>>>>> 57f6fda3d1f126f4a0aacf3c5596d13124bb69ee
        </Routes>
      </div>
    </div>
  );
}

export default App;
