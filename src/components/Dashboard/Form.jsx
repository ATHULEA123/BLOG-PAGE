

// import React, { useState } from "react";
// import "../Dashboard/style.css";
// import axios from "axios";

//  function Form({ onFormSubmit }) {

//   const [formData, setFormData] = useState({
//     title: "",
//     imageUrl: "",
//     description: ""
//   });

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [name]: value
//   //   }));
//   // };




//   const handleSubmit= async (event) => {
//     event.preventDefault();
//     console.log(event.target);
//     const formData = {
//       title:event.target.title.value,
//       image:event.target.imageUrl.value,
//       description:event.target.description.value
//     }
//     try {
//       const response = await axios.post("http://localhost:5000/api/blogs", formData);
//       setFormData(response.data);
      
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <form className="form"  onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             required
//             name="title"
//             id="title"
//             type="text"
//             placeholder="Type here"
           
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="imageUrl">Image URL</label>
//           <input
//             required
//             name="imageUrl"
//             id="imageUrl"
//             type="text"
            
//           />
//         </div>
      
//         <div className="form-group">
//           <label htmlFor="description">content</label>
//           <textarea
//             required
//             cols={50}
//             rows={10}
//             id="description"
//             name="description"
          
//           />
//         </div>
//         <button type="submit" className="form-submit-btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Form;

import React from 'react';

function Form({ formData, handleSubmit, handleInputChange }) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            required
            name="title"
            id="title"
            type="text"
            placeholder="Type here"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            required
            name="imageUrl"
            id="imageUrl"
            type="text"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Content</label>
          <textarea
            required
            cols={50}
            rows={10}
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="form-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;



