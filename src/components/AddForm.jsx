import React from 'react';
import './AddForm.css';

function AddForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted');
  };
  


  useEffect(() => {
    async function addData() {
      try {
        const res = await axios.get("http://localhost:5000/addinsuranceform");
        setOffice(res.data); // Fixed this line
      } catch (error) {
        console.log("Error getting data", error);
      }
    }

    addData();
  }, []);

  return (
       <div className="form-container">
      <h2>Add Dental Office</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="required">Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="form-group">
            <label className="required" >Email</label>
            <input id="email" name="email" type="text" required />
          </div>
          <div className="form-group">
            <label className="required">Password</label>
            <input id="password" name="password" type="text" required />
          </div>
          <div className="form-group">
            <label className="required" >Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="text" required />
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Submit Form</button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;