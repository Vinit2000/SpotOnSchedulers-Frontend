<<<<<<< HEAD
<<<<<<< HEAD
// import React from 'react';

// import { Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import ViewForm from './components/ViewForm';
// import FormDetails from './components/FormDetails';
// import EditInsuranceForm from './components/EditIsuranceForm';
// import VerificationForm from './components/VerificationForm';
// import MasterForm from './components/MasterForm';

// function App() {
//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar />
//       <div style={{ flexGrow: 1, padding: '20px' }}>
//         <Routes>
//           <Route path="/" element={<div>Welcome to Dashboard</div>} />
//           <Route path="/view-insurance-form" element={<ViewForm />} />
//           <Route path="/form-details" element={<FormDetails />} />
//           <Route path="/edit-insurance-form" element={<EditInsuranceForm />} />
//           <Route path="/verification-form" element={<VerificationForm />} />
//           <MasterForm/>
//         </Routes>
//       </div>
//     </div>
//   );

// }
// export default App;
=======


>>>>>>> 1300a7ac513514705549ede81e63f60a20dd6898

=======
>>>>>>> c862d75964cea5c4d93c159dfef78c522929f837
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
<<<<<<< HEAD
    <div style={{ display: 'flex',height:'100vh'}}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px' , overflowY:'auto'}}>
=======
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px', overflowY: 'auto' }}>
>>>>>>> 8f950d32fd1d3fb25b76298aafd52ca723bb7ce5
        <Routes>
          <Route path="/" element={<div>Welcome to Dashboard</div>} />
          <Route path="/view-insurance-form" element={<ViewForm />} />
          <Route path="/form-details" element={<FormDetails />} />
          <Route path="/edit-insurance-form" element={<EditInsuranceForm />} />
          <Route path="/verification-form" element={<VerificationForm />} />

          <Route path="/master-form" element={<MasterForm />} /> {/* ✅ Added Route */}

          <Route path="/add-dental-office" element={<AddForm/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
