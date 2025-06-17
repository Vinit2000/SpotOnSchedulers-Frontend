import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FormDetails.css';
import axios from 'axios';

const FormDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    representativeName: '',
    reference: '',
    phoneNumber: '',
    patientId: ''
  });

  // State for disabled flags fetched from backend
  const [disabledFlags, setDisabledFlags] = useState({
    isNameDisabled: false,
    isRepresentativeNameDisabled: false,
    isReferenceDisabled: false,
    isPhoneNumberDisabled: false,
    isPatientIdDisabled: false
  });

  const location = useLocation();
  const navigate = useNavigate();

  const selectedOffice = location.state?.selectedOffice || "";

  useEffect(() => {
    if (!selectedOffice) {
      navigate('/');
      return;
    }

    // Fetch the disabled flags for the selected office from backend
    async function fetchDisabledFlags() {
      try {
        // Assuming your backend has a route to get one office by name or id
        const res = await axios.get(`http://localhost:5000/getinsuranceform/${selectedOffice._id || selectedOffice.id || selectedOffice}`);
        // Update disabled flags from the fetched data
        setDisabledFlags({
          isNameDisabled: res.data.isNameDisabled || false,
          isRepresentativeNameDisabled: res.data.isRepresentativeNameDisabled || false,
          isReferenceDisabled: res.data.isReferenceDisabled || false,
          isPhoneNumberDisabled: res.data.isPhoneNumberDisabled || false,
          isPatientIdDisabled: res.data.isPatientIdDisabled || false,
        });
      } catch (error) {
        console.error('Error fetching disabled flags:', error);
      }
    }

    fetchDisabledFlags();
  }, [selectedOffice, navigate]);

  if (!selectedOffice) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/addinsuranceform", formData);
      alert("Form Submitted");
      setFormData({
        name: '',
        representativeName: '',
        reference: '',
        phoneNumber: '',
        patientId: ''
      });
    } catch (error) {
      console.log("Error submitting data");
    }
  };

  return (
    <div className="form-container">
      <h2>View Insurance Form</h2>
      <div className="form-row">
        {/* Conditionally render inputs based on disabledFlags */}
        {!disabledFlags.isRepresentativeNameDisabled && (
          <div className="form-group">
            <label>Rep Name</label>
            <input
              type="text"
              placeholder="Rep Name"
              onChange={handleChange}
              name='representativeName'
              value={formData.representativeName}
            />
          </div>
        )}

        {!disabledFlags.isReferenceDisabled && (
          <div className="form-group">
            <label>Reference #</label>
            <input
              type="number"
              placeholder="Reference #"
              onChange={handleChange}
              name='reference'
              value={formData.reference}
            />
          </div>
        )}

        {!disabledFlags.isNameDisabled && (
          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              placeholder="Patient Name"
              onChange={handleChange}
              name='name'
              value={formData.name}
            />
          </div>
        )}
      </div>
      <div className="form-row">
        {!disabledFlags.isPhoneNumberDisabled && (
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              onChange={handleChange}
              name='phoneNumber'
              value={formData.phoneNumber}
            />
          </div>
        )}

        {!disabledFlags.isPatientIdDisabled && (
          <div className="form-group">
            <label>Member ID</label>
            <input
              type="text"
              placeholder="Member ID"
              onChange={handleChange}
              name='patientId'
              value={formData.patientId}
            />
          </div>
        )}
      </div>
      <div className="button-container">
        <button type="submit" onClick={handleSubmit}>Submit Form</button>
      </div>
    </div>
  );
};

export default FormDetails;
