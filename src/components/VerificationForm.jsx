import React from 'react';
import './VerificationForm.css';

const FormField = ({ label }) => (
  <div className="form-field">
    <label className="form-label">{label}</label>
    <div className="checkbox-group">
      <label>
        <input type="checkbox" /> Disabled
      </label>
      <label>
        <input type="checkbox" /> Required
      </label>
    </div>
    <div className="custom-label-group">
      <label className="custom-label">Custom Label</label>
      <input type="text" className="custom-input" />
    </div>
  </div>
);

const VerificationForm = ({ office }) => {
  const fields = [
    'Date of Verification',
    'Rep Name',
    'Reference #',
    'Patient Name',
    'Patient DOB',
    'Phone Number',
    
  ];

  return (
    <div>
      {/* <h3 className="selected-office">Verification Form for {office}</h3> */}
      <div className="form-container">
        {fields.map((field, index) => (
          <FormField key={index} label={field} />
        ))}
      </div>
    </div>
  );
};

export default VerificationForm;
