import React from 'react';
import './VerificationForm.css';

const FormField = ({ label }) => (
  <div className="vf-form-field">
    <label className="vf-form-label">{label}</label>
    <div className="vf-checkbox-group">
      <label><input type="checkbox" /> Disabled</label>
      <label><input type="checkbox" /> Required</label>
    </div>
    <div className="vf-custom-label-group">
      <label className="vf-custom-label">Custom Label</label>
      <input type="text" className="vf-custom-input" placeholder="Enter custom label" />
    </div>
  </div>
);

const VerificationForm = ({ office }) => {
  const fields = [
    'Date of Verification', 'Rep Name', 'Reference #',
    'Patient Name', 'Patient DOB', 'Phone Number'
  ];

  return (
    <div className="vf-container">
      <h2 className="vf-heading">Select Form Field</h2>
      <input type="text" className="vf-office-input" value={office} readOnly />
      <div className="vf-form-grid">
        {fields.map((field, index) => (
          <FormField key={index} label={field} />
        ))}
      </div>
    </div>
  );
};

export default VerificationForm;
