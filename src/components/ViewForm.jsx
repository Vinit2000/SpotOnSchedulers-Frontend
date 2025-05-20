import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewForm.css'; 

function ViewForm() {
  const [selectedOffice, setSelectedOffice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedOffice !== '') {
      navigate('/FormDetails', { state: { selectedOffice } });
    } else {
      alert('Please select an office');
    }
  };

  return (
    <div className="container">
      <h3>View Insurance Form</h3>
      <div className="card">
        <div className="form-group">
          <label>Select Office</label>
          <select
            className="form-control"
            value={selectedOffice}
            onChange={(e) => setSelectedOffice(e.target.value)}
          >
            <option value="">-- Select Office --</option>
            <option value="Naziya Sheikh">Naziya Sheikh</option>
            <option value="Relief Dental Clinic">Relief Dental Clinic</option>
          </select>
        </div>

        <div className="submit-btn-container">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit 
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewForm;