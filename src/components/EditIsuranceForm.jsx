

import React, { useState,useEffect } from 'react';
import './EditForm.css';
import axios from 'axios'

const EditInsuranceForm = () => {
  // const offices = ['Office A', 'Office B'];
  const  [offices,setOffices]=useState([]);
  const [selectedOffice, setSelectedOffice] = useState('');

  const [formFields, setFormFields] = useState([
    // { id: 1, label: 'Date of Verification', disabled: false, required: false, customLabel: '' },
    { id: 2, label: 'Rep Name', disabled: false, required: false, customLabel: '' },
    { id: 3, label: 'Reference #', disabled: false, required: false, customLabel: '' },
    { id: 4, label: 'Patient Name', disabled: false, required: false, customLabel: '' },
    // { id: 5, label: 'Patient DOB', disabled: false, required: false, customLabel: '' },
    { id: 6, label: 'Phone Number', disabled: false, required: false, customLabel: '' },
    { id: 7, label: 'Subscriber', disabled: false, required: false, customLabel: '' },
    // { id: 8, label: 'Subscriber DOB', disabled: false, required: false, customLabel: '' },
  ]);

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...formFields];
    updatedFields[index][field] = value;
    setFormFields(updatedFields);
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:5000/getdentalform");
        setOffices(res.data); // Fixed this line
      } catch (error) {
        console.log("Error getting data", error);
      }
    }

    getData();
  }, []);

  return (
    <div className="form-container-1">
      <h1 className="title">Select Form Field</h1>

      <div className="form-layout">
        <div className="dropdown-container">
          <select
            value={selectedOffice}
            onChange={(e) => setSelectedOffice(e.target.value)}
            className="dropdown"
          >
            <option value="">Select Office</option>
            {offices.map((office, index) => (
              <option key={office._id} value={office.name}>{office.name}</option>
            ))}
          </select>
        </div>

        {selectedOffice && (
          <div className="fields-container">
            <h2 className="subtitle">Verification Form for {selectedOffice}</h2>

            <div className="fields-grid">
              {formFields.map((field, index) => (
                <div key={field.id} className="field-box">
                  <h3 className="field-label">{field.label}</h3>

                  <label><input
                    type="checkbox"
                    checked={field.disabled}
                    onChange={(e) => handleFieldChange(index, 'disabled', e.target.checked)}
                  /> Disabled</label>

                  <label><input
                    type="checkbox"
                    checked={field.required}
                    onChange={(e) => handleFieldChange(index, 'required', e.target.checked)}
                  /> Required</label>

                  <div className="custom-label">
                    <label>Custom Label</label>
                    <input
                      type="text"
                      value={field.customLabel}
                      onChange={(e) => handleFieldChange(index, 'customLabel', e.target.value)}
                      placeholder="Enter custom label"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditInsuranceForm;
