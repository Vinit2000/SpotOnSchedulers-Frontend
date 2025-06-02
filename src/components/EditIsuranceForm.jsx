import React, { useState, useEffect } from 'react';
import './EditForm.css';
import axios from 'axios'

const EditInsuranceForm = () => {
  const [offices, setOffices] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formFields, setFormFields] = useState([
    { id: 2, label: 'Rep Name', disabled: false, required: false, customLabel: '' },
    { id: 3, label: 'Reference #', disabled: false, required: false, customLabel: '' },
    { id: 4, label: 'Patient Name', disabled: false, required: false, customLabel: '' },
    { id: 6, label: 'Phone Number', disabled: false, required: false, customLabel: '' },
    { id: 7, label: 'Subscriber', disabled: false, required: false, customLabel: '' },
  ]);

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...formFields];
    updatedFields[index][field] = value;
    setFormFields(updatedFields);
  };

  const handleSubmit = async () => {
    if (!selectedOffice) {
      alert('Please select an office first');
      return;
    }

    setIsSubmitting(true);

    try {
      // Find the selected office object
      const selectedOfficeObj = offices.find(office => office.name === selectedOffice);
      
      const dataToSave = {
        officeName: selectedOffice,
        officeId: selectedOfficeObj?._id || null,
        formFields: formFields,
        updatedAt: new Date().toISOString()
      };

      // Save to your backend - adjust the endpoint as needed
      const response = await axios.post("https://sos-backend-jwug.onrender.com/saveinsuranceform", dataToSave);
      
      if (response.status === 200 || response.status === 201) {
        alert('Form configuration saved successfully!');
        // Optionally reset form or redirect
        // setSelectedOffice('');
        // setFormFields(formFields.map(field => ({ ...field, disabled: false, required: false, customLabel: '' })));
      }
    } catch (error) {
      console.error("Error saving form configuration:", error);
      alert('Error saving form configuration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:5000/getdentalform");
        setOffices(res.data);
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
              <option key={index} value={office.name}>{office.name}</option>
            ))}
          </select>
        </div>

        {selectedOffice && (
          <div className="fields-container">
            <h2 className="subtitle">Verification Form for {selectedOffice}</h2>

            <div className="fields-grid">
              {formFields.map((field, index) => (
                <div className="field-box">
                <h3 className="field-label">{field.label}</h3>
              
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={field.disabled}
                      onChange={(e) => handleFieldChange(index, 'disabled', e.target.checked)}
                    />
                    Disabled
                  </label>
              
                  <label>
                    <input
                      type="checkbox"
                      checked={field.required}
                      onChange={(e) => handleFieldChange(index, 'required', e.target.checked)}
                    />
                    Required
                  </label>
                </div>
              
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
        <div className="button-set">
          <button 
            type="button" 
            onClick={handleSubmit}
            disabled={isSubmitting || !selectedOffice}
          >
            {isSubmitting ? 'Saving...' : 'Submit'}
          </button>
        </div>    
      </div>
    </div>
  );
};

export default EditInsuranceForm;