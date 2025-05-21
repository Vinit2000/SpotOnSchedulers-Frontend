import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FormDetails.css';

const FormDetails = () => {
 const [formData, setFormData] = useState({
    name:'',
    representativeName:'',
    reference:'',
    phoneNumber:'',
    patientId:''
  });
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