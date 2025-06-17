import React, { useState, useEffect } from 'react';
import VerificationForm from './VerificationForm';
import axios from 'axios';
import './EditForm.css';

const EditForm = () => {
  const [selectedOffice, setSelectedOffice] = useState('');
  const [offices, setOffices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOffices = async () => {
    try {
      const res = await axios.get("https://sos-backend-jwug.onrender.com/getinsuranceform");
      setOffices(res.data);
    } catch (error) {
      console.error("Error getting data", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOffices();
  }, []);

  const handleOfficeChange = (e) => {
    setSelectedOffice(e.target.value);
  };

  const handleFormUpdate = async () => {
    // Refresh data after form updates
    await fetchOffices();
  };

  if (isLoading) return <div>Loading offices...</div>;

  return (
    <div className="edit-container">
      <div className="edit-form">
        <h2>Select Office</h2>
        <div className="form-group">
          <label htmlFor="office">Office</label>
          <select 
            id="office" 
            value={selectedOffice} 
            onChange={handleOfficeChange}
          >
            <option value="">-- Choose an Office --</option>
            {offices.map(office => (
              <option key={office._id} value={office._id}>
                {office.name}
              </option>
            ))}
          </select>
        </div>

        {selectedOffice && (
          <div className="verification-wrapper">
            <h3>Verification Form for {
              offices.find(o => o._id === selectedOffice)?.name || selectedOffice
            }</h3>
            <VerificationForm 
              office={selectedOffice}
              onUpdate={handleFormUpdate}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditForm;