import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FormDetails.css';
import axios from 'axios'

const FormDetails = () => {
  const [formData, setFormData] = useState({
    name:'',
    representativeName:'',
    reference:'',
    phoneNumber:'',
    patientId:''
  });
  const location = useLocation();
  const navigate = useNavigate();
  const selectedOffice = location.state?.selectedOffice || "";

  
  if (!selectedOffice) {
    navigate('/');
    return null;
  }

const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }));
  };

  
  const handleSubmit=async()=>{
    try{
      const res=await axios.post("http://localhost:5000/addinsuranceform",formData);
      alert("Form Submitted");
      setFormData({
        name:'',
        representativeName:'',
        reference:'',
        phoneNumber:'',
        patientId:''
      })
    }
    catch(error){
      console.log("Error submitting data");
    }
  }

  return (
    <div className="form-container">
      <h2>View Insurance Form</h2>
      <div className="form-row">
        <div className="form-group">
          <label>Rep Name</label>
          <input type="text" placeholder="Rep Name" onChange={handleChange} name='representativeName' value={formData.representativeName}/>
        </div>
        <div className="form-group">
          <label>Reference #</label>
          <input type="Number" placeholder="Reference #" onChange={handleChange} name='reference' value={formData.reference}/>
        </div>
        <div className="form-group">
          <label>Patient Name</label>
          <input type="text" placeholder="Patient Name" onChange={handleChange} name='name' value={formData.name}/>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" onChange={handleChange} name='phoneNumber' value={formData.phoneNumber}/>
        </div>
        <div className="form-group">
          <label>Member ID</label>
          <input type="text" placeholder="Member ID" onChange={handleChange} name='patientId' value={formData.patientId}/>
        </div>
      </div>

      <div className="button-container">
        <button type="submit" onClick={handleSubmit}>Submit Form</button>
      </div>
    </div>
  );
};

export default FormDetails;