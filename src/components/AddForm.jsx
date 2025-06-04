// import React,{useState} from 'react';
// import './AddForm.css';
// import axios from 'axios'

// function AddForm() {
//   const [formData,setFormData]=useState({
//     name:'',
//     email:'',
//     password:'',
//     confirmPassword:''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // console.log('Form submitted');
//   };
  


//   const addDentalForm=async()=>{
//     try{
<<<<<<< HEAD
//       const res= await axios.post("http://localhost:5000/adddentalform",formData);
=======
//       const res= await axios.post("https://sos-backend-jwug.onrender.com/adddentalform",formData);
>>>>>>> 5a9119077685b11e3bfdb00b9aa313d6ed739227
//       setFormData({
//         name:'',
//         email:'',
//         password:'',
//         confirmPassword:''
//       })
//       alert("Form submitted");
//     }
//     catch(error){
//       console.log("Error sumitting data");
//     }
//   }

//   return (
//        <div className="form-container">
//       <h2>Add Dental Office</h2>
//       <hr />
//       <form onSubmit={handleSubmit}>
//         <div className="form-row">
//           <div className="form-group">
//             <label className="required">Name</label>
//             <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange}/>
//           </div>
//           <div className="form-group">
//             <label className="required" >Email</label>
//             <input id="email" name="email" type="text" required value={formData.email} onChange={handleInputChange}/>
//           </div>
//           <div className="form-group">
//             <label className="required">Password</label>
//             <input id="password" name="password" type="text" required value={formData.password} onChange={handleInputChange}/>
//           </div>
//           <div className="form-group">
//             <label className="required" >Confirm Password</label>
//             <input id="confirmPassword" name="confirmPassword" type="text" required value={formData.confirmPassword} onChange={handleInputChange}/>
//           </div>
//         </div>
//         <div className="button-container">
<<<<<<< HEAD
//           <button type="button" onClick={addDentalForm}>Submit Form</button>
//         </div>
=======
//           <button type="submit" onClick={addDentalForm}>Submit Form</button>
//         </div>

        
>>>>>>> 5a9119077685b11e3bfdb00b9aa313d6ed739227
//       </form>
//     </div>
//   );
// }

// export default AddForm;
<<<<<<< HEAD



=======
>>>>>>> 5a9119077685b11e3bfdb00b9aa313d6ed739227
import React, { useState } from 'react';
import './AddForm.css';
import axios from 'axios';

function AddForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
<<<<<<< HEAD
    event.preventDefault(); // prevent page refresh

    try {
      const res = await axios.post("http://localhost:5000/adddentalform", formData);

      // Optional: Check if res.data confirms success
      if (res.status === 200) {
        alert("Form submitted successfully!");

        // Reset form fields
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred while submitting the form.");
=======
    event.preventDefault(); // Prevents page reload

    try {
      const res = await axios.post(
        "https://sos-backend-qhl0.onrender.com/adddentalform",
        formData
      );
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data");
>>>>>>> 5a9119077685b11e3bfdb00b9aa313d6ed739227
    }
  };

  return (
    <div className="form-container">
      <h2>Add Dental Office</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="required">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="required">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="required">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="required">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
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
<<<<<<< HEAD


=======
  
>>>>>>> 5a9119077685b11e3bfdb00b9aa313d6ed739227
