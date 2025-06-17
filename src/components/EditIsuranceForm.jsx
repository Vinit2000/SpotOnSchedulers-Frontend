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
  if (!selectedOffice) {
    alert('Please select an office first');
    return;
  }

  setIsSubmitting(true);

  try {
    const selectedOfficeObj = offices.find(office => office.name === selectedOffice);

    if (!selectedOfficeObj) {
      alert('Selected office not found.');
      setIsSubmitting(false);
      return;
    }

    const fieldMapping = {
      'Patient Name': 'isNameDisabled',
      'Rep Name': 'isRepresentativeNameDisabled',
      'Reference #': 'isReferenceDisabled',
      'Phone Number': 'isPhoneNumberDisabled',
      // Add more if needed
    };

    const updatePayload = {};

    formFields.forEach(field => {
      const backendField = fieldMapping[field.label];
      if (backendField) {
        updatePayload[backendField] = !!field.disabled; // disabled flag

        // Optional if backend supports:
        // updatePayload[`${backendField}Required`] = !!field.required;
        // updatePayload[`${backendField}CustomLabel`] = field.customLabel || '';
      }
    });

    const response = await axios.put(`http://localhost:5000/editinsuranceform/${selectedOfficeObj._id}`, updatePayload);

    if (response.status === 200) {
      alert('Form configuration saved successfully!');
    }
  } catch (error) {
    console.error("Error saving form configuration:", error);
    alert('Error saving form configuration. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};



  useEffect(() => {
    const getOffices = async () => {
      setIsLoadingOffices(true);
      setErrorMessage('');
      try {
        const res = await axios.get("http://localhost:5000/getdentalform");
        setOffices(res.data);
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
            <h2 className="subtitle">Verification Form {selectedOffice}</h2>

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
