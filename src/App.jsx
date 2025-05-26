<<<<<<< HEAD
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ViewForm from './components/ViewForm';
import FormDeatils from './components/FormDetails';
import EditForm from './components/EditForm';
import AddForm from './components/AddForm';
=======
// import React from 'react';
>>>>>>> 1aa5c770a5a123e2da3c3fa3a4646ab8e6e429c9

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
<<<<<<< HEAD
=======
import MasterForm from './components/MasterForm';
>>>>>>> 56dcd58c94a3945f6220fec62333ada9e2d908db
import AddForm from './components/AddForm';

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
<<<<<<< HEAD
=======
          <Route path="/master-form" element={<MasterForm />} /> {/* ✅ Added Route */}
>>>>>>> 56dcd58c94a3945f6220fec62333ada9e2d908db
          <Route path="/add-dental-office" element={<AddForm/>}/>
        </Routes>
      </div>
    </div>
  );
}




export default App;
