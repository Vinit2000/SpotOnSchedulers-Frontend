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
//       const res= await axios.post("http://localhost:5000/adddentalform",formData);
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
//           <button type="button" onClick={addDentalForm}>Submit Form</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddForm;



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


