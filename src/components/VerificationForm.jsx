import React, { useState } from 'react';
import axios from 'axios';
import './VerificationForm.css';

const FormField = ({ label, officeId, onUpdate }) => {
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);
  const [customLabel, setCustomLabel] = useState('');

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/updateinsuranceform/${officeId}`, {
        [label]: { disabled, required, customLabel }
      });
      onUpdate(); // Trigger parent to refresh data
    } catch (error) {
      console.error('Error updating field:', error);
    }
  };

  return (
    <div className="vf-form-field">
      <label className="vf-form-label">{label}</label>
      <div className="vf-checkbox-group">
        <label>
          <input 
            type="checkbox" 
            checked={disabled} 
            onChange={(e) => setDisabled(e.target.checked)} 
          /> Disabled
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={required} 
            onChange={(e) => setRequired(e.target.checked)} 
          /> Required
        </label>
      </div>
      <div className="vf-custom-label-group">
        <label className="vf-custom-label">Custom Label</label>
        <input 
          type="text" 
          className="vf-custom-input" 
          value={customLabel}
          onChange={(e) => setCustomLabel(e.target.value)}
          placeholder="Enter custom label" 
        />
      </div>
      {/* <button onClick={handleSave} className="vf-save-btn">Save</button> */}
    </div>
  );
};

const VerificationForm = ({ office, onUpdate }) => {
  const fields = [
    'Date of Verification', 'Rep Name', 'Reference #',
    'Patient Name', 'Patient DOB', 'Phone Number'
  ];

  return (
    <div className="vf-container">
      <h2 className="vf-heading">Select Form Field</h2>
      <input 
        type="text" 
        className="vf-office-input" 
        value={office} 
        readOnly 
      />
      <div className="vf-form-grid">
        {fields.map((field, index) => (
          <FormField 
            key={index} 
            label={field} 
            officeId={office}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default VerificationForm;