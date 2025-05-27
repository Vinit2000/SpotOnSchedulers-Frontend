import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewForm.css'; // Optional: add custom styles here
import axios from 'axios'

function ViewForm() {
  const [office,setOffice]=useState([])
  const [selectedOffice, setSelectedOffice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:5000/getinsuranceform");
        setOffice(res.data); // Fixed this line
      } catch (error) {
        console.log("Error getting data", error);
      }
    }

    getData();
  }, []);

  const handleOfficeChange = (e) =>{
    const selectedOffice = e.target.value;
    if(selectedOffice !== ''){
      navigate('/form-details', {state:{selectedOffice}});
    }
  }

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
            {office.map((n) => (
          <option key={n._id} value={n._id}>
            {n.name}
          </option>
        ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ViewForm;