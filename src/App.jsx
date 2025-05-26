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
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<div>Welcome to Dashboard</div>} />
          <Route path='/master-form' element={<MasterForm/>}/>
          <Route path="/view-insurance-form" element={<ViewForm />} />
          <Route path="/form-details" element={<FormDetails />} />
          <Route path="/edit-insurance-form" element={<EditInsuranceForm />} />
          <Route path="/verification-form" element={<VerificationForm />} />
          <Route path="/add-dental-office" element={<AddForm/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
