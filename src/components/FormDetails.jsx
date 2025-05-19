// import React, { useState } from "react";
// import "./FormDetails.css";

// const FormDetails = () => {
//   const [selectedOffice, setSelectedOffice] = useState("");

//   const handleOfficeChange = (e) => {
//     setSelectedOffice(e.target.value);
//   };

//   return (
//     <div className="form-container">
//       <h2>View Insurance Form</h2>

//       <div className="form-section">
//         {/* Office Selection */}
//         <div className="form-group full-width">
//           <label>Select Office</label>
//           <select value={selectedOffice} onChange={handleOfficeChange}>
//             <option value="">-- Select an office --</option>
//             <option value="Naziya Sheikh">Naziya Sheikh</option>
//             <option value="Relief Dental Clinic">Relief Dental Clinic</option>
//           </select>
//         </div>

//         {/* Form appears only if an office is selected */}
//         {selectedOffice && (
//           <>
//             <div className="form-row">
//               <div className="form-group">
//                 <label>Rep Name</label>
//                 <input type="text" placeholder="Rep Name" />
//               </div>
//               <div className="form-group">
//                 <label>Reference #</label>
//                 <input type="text" placeholder="Reference #" />
//               </div>
//               <div className="form-group">
//                 <label>Patient Name</label>
//                 <input type="text" placeholder="Patient Name" />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label>Phone Number</label>
//                 <input type="text" placeholder="Phone Number" />
//               </div>
//               <div className="form-group">
//                 <label>Member ID</label>
//                 <input type="text" placeholder="Member ID" />
//               </div>
//             </div>

//             <div className="button-container">
//               <button type="submit">Submit Form</button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FormDetails;



import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FormDetails.css';

const FormDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedOffice = location.state?.selectedOffice || "";

  // If user opens FormDetails directly, redirect back to ViewForm
  if (!selectedOffice) {
    navigate('/');
    return null;
  }

  return (
    <div className="form-container">
      <h2>View Insurance Form</h2>
      <div className="form-row">
        <div className="form-group">
          <label>Rep Name</label>
          <input type="text" placeholder="Rep Name" />
        </div>
        <div className="form-group">
          <label>Reference #</label>
          <input type="Number" placeholder="Reference #" />
        </div>
        <div className="form-group">
          <label>Patient Name</label>
          <input type="text" placeholder="Patient Name" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <label>Member ID</label>
          <input type="text" placeholder="Member ID" />
        </div>
      </div>

      <div className="button-container">
        <button type="submit">Submit Form</button>
      </div>
    </div>
  );
};

export default FormDetails;