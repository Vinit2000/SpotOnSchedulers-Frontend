import React, { useState, useEffect } from 'react';

const EditInsuranceForm = () => {
  const [offices, setOffices] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState('');
  const [isLoadingOffices, setIsLoadingOffices] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [formFields, setFormFields] = useState([
    { id: 2, label: 'Rep Name', disabled: false, required: false, customLabel: '' },
    { id: 3, label: 'Reference #', disabled: false, required: false, customLabel: '' },
    { id: 4, label: 'Patient Name', disabled: false, required: false, customLabel: '' },
    { id: 6, label: 'Phone Number', disabled: false, required: false, customLabel: '' },
    { id: 7, label: 'Subscriber', disabled: false, required: false, customLabel: '' },
  ]);

  const handleFieldChange = (index, field, value) => {
    setErrorMessage('');
    setSuccessMessage('');
    const updatedFields = [...formFields];
    updatedFields[index][field] = value;
    setFormFields(updatedFields);
  };

  const handleSubmit = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    if (!selectedOffice) {
      setErrorMessage('Please select an office first.');
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedOfficeObj = offices.find(office => office.name === selectedOffice);

      const dataToSave = {
        officeName: selectedOffice,
        officeId: selectedOfficeObj?._id || null,
        formFields: formFields,
        updatedAt: new Date().toISOString()
      };

      const response = await fetch("https://sos-backend-qhl0.onrender.com/saveinsuranceform", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSave),
      });

      if (response.ok) {
        setSuccessMessage('Form configuration saved successfully!');
      } else {
        const errorData = await response.json();
        setErrorMessage(`Error saving form configuration: ${errorData.message || response.statusText}. Please check the backend endpoint.`);
        console.error("Server error response:", errorData);
      }
    } catch (error) {
      setErrorMessage('Network error or unexpected issue. Please try again.');
      console.error("Error saving form configuration:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const getOffices = async () => {
      setIsLoadingOffices(true);
      setErrorMessage('');
      try {
        const response = await fetch("https://sos-backend-qhl0.onrender.com/getdentalform");
        if (response.ok) {
          const data = await response.json();
          setOffices(data);
        } else {
          const errorData = await response.json();
          setErrorMessage(`Failed to load offices: ${errorData.message || response.statusText}`);
          console.error("Error fetching offices:", errorData);
        }
      } catch (error) {
        setErrorMessage('Failed to connect to the office data service.');
        console.error("Error getting data:", error);
      } finally {
        setIsLoadingOffices(false);
      }
    };
    getOffices();
  }, []);

  return (
    <div className="edit-container">
      <div className="edit-form">
        <h1 className="title">Select Form Field</h1>

        {successMessage && (
          <div className="alert-success" role="alert">
            <span>{successMessage}</span>
          </div>
        )}
        {errorMessage && (
          <div className="alert-error" role="alert">
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="form-layout">
          <div className="dropdown-container">
            <label htmlFor="office-select">Select Office:</label>
            <select
              id="office-select"
              value={selectedOffice}
              onChange={(e) => {
                setSelectedOffice(e.target.value);
                setErrorMessage('');
                setSuccessMessage('');
              }}
              className="dropdown"
              disabled={isLoadingOffices}
            >
              <option value="">
                {isLoadingOffices ? 'Loading Offices...' : 'Select Office'}
              </option>
              {offices.map((office, index) => (
                <option key={index} value={office.name}>
                  {office.name}
                </option>
              ))}
            </select>
            {isLoadingOffices && (
              <p className="dropdown-loading">Fetching offices...</p>
            )}
          </div>

          {selectedOffice && (
            <div className="fields-container">
              <h2 className="subtitle">
                Verification Form for <span className="subtitle-office">{selectedOffice}</span>
              </h2>
              <div className="fields-grid">
                {formFields.map((field, index) => (
                  <div key={field.id} className="field-box">
                    <h3 className="field-label">{field.label}</h3>
                    <div className="field-checkboxes">
                      <label>
                        <input
                          type="checkbox"
                          checked={field.disabled}
                          onChange={(e) => handleFieldChange(index, 'disabled', e.target.checked)}
                        />
                        <span>Disabled</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          checked={field.required}
                          onChange={(e) => handleFieldChange(index, 'required', e.target.checked)}
                        />
                        <span>Required</span>
                      </label>
                    </div>
                    <div>
                      <label htmlFor={`custom-label-${field.id}`}>Custom Label:</label>
                      <input
                        id={`custom-label-${field.id}`}
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

        <div className="submit-container">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || !selectedOffice}
            className={`submit-btn${isSubmitting || !selectedOffice ? ' disabled' : ''}`}
          >
            {isSubmitting ? 'Saving...' : 'Submit Configuration'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditInsuranceForm;
