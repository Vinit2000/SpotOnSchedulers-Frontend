import { useState } from "react";
import './MasterForm.css';

function MasterForm() {
  const [formData, setFormData] = useState({
    DateOfVerification: "",
    RepName: "",
    Reference: "",
    PatientName: "",
    PatientDOB: "",
    PhoneNo: "",
    MemberId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({
      DateOfVerification: "",
      RepName: "",
      Reference: "",
      PatientName: "",
      PatientDOB: "",
      PhoneNo: "",
      MemberId: ""
    });
  };

  return (
    <div className="form-container">
      <h1>Master Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {/* <div className="form-group">
            <label>Date of Verification</label>
            <input
              type="date"
              name="DateOfVerification"
              value={formData.DateOfVerification}
              onChange={handleChange}
            />
          </div> */}
          <div className="form-group">
            <label>Rep Name</label>
            <input
              type="text"
              name="RepName"
              value={formData.RepName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Reference #</label>
            <input
              type="text"
              name="Reference"
              value={formData.Reference}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Patient Name</label>
            <input
              type="text"
              name="PatientName"
              value={formData.PatientName}
              onChange={handleChange}
            />
          </div>
          {/* <div className="form-group">
            <label>Patient DOB</label>
            <input
              type="date"
              name="PatientDOB"
              value={formData.PatientDOB}
              onChange={handleChange}
            />
          </div> */}
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="PhoneNo"
              value={formData.PhoneNo}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* <div className="form-row">
          <div className="form-group">
            <label>Member ID</label>
            <input
              type="text"
              name="MemberId"
              value={formData.MemberId}
              onChange={handleChange}
            />
          </div>
        </div> */}

        <div className="button-set">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MasterForm;
