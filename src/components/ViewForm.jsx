import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ViewForm.css';

function ViewForm() {
  const [offices, setOffices] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchOffices = async () => {
    try {
      const res = await axios.get("https://sos-backend-qhl0.onrender.com/getdentalform");
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
    const selectedId = e.target.value;
    setSelectedOffice(selectedId);
    if (selectedId) {
      navigate('/form-details', { state: { selectedOffice: selectedId } });
    }
  };

  if (isLoading) return <div>Loading offices...</div>;

  return (
    <div className="view-container">
      <h3>View Insurance Form</h3>
      <div className="card">
        <div className="form-group">
          <label>Select Office</label>
          <select
            className="form-control"
            value={selectedOffice}
            onChange={handleOfficeChange}
          >
            <option value="">-- Select Office --</option>
            {offices.map(office => (
              <option key={office._id} value={office._id}>
                {office.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ViewForm;