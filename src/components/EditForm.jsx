import React, { useState } from 'react';
import VerificationForm from './VerificationForm';
import './EditForm.css';

const EditForm = () => {
  const [selectedOffice, setSelectedOffice] = useState('');

  const handleOfficeChange = (e) => {
    setSelectedOffice(e.target.value);
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:5000/getinsuranceform");
        setOffices(res.data); // Fixed this line
      } catch (error) {
        console.log("Error getting data", error);
      }
    }

    getData();
  }, []);

  return (
    
    <div className="container">
        <div className="edit-form">
        <h2>Select Office</h2>
        <div className="form-group">
          <label htmlFor="office">Office</label>
          <select id="office" value={selectedOffice} onChange={handleOfficeChange}>
            <option value="">-- Choose an Office --</option>
            <option value="Office A">Office A</option>
            <option value="Office B">Office B</option>
          </select>
        </div>

        {selectedOffice && (
          <div className="verification-wrapper">
            <h3>Verification Form for {selectedOffice}</h3>
            <VerificationForm office={selectedOffice} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditForm;
