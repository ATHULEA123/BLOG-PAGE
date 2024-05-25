// import React,{useState} from "react";

// import Form from "./Form";
// import Header from "../Header";
// import Blog from "./Blog";

// const Main = () => {


  
//   return (
//     <>
//       <div className="w3-row">
//         <Header />
//         <div className="w3-col l6">
//         <Form />
   
//         </div>

//         <div className="w3-col l6 s12">
//         <Blog />
//         </div>
//       </div>
     
//     </>
//   );
// };

// export default Main;

import React, { useState } from 'react';
import axios from 'axios';
import Form from "./Form";
import Header from "../Header";
import Blog from "./Blog";
import "../Dashboard/style.css";

function BlogManager() {
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    description: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/blogs", {
        title:formData.title,
        image:formData.imageUrl,
        description:formData.description
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="w3-row">
           <Header />
            <div className="w3-col l6">
          <Form formData={formData} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
       
           </div>
    
           <div className="w3-col l6 s12">
           <Blog formData={formData} />
           </div>
         </div>
    
  );
}

export default BlogManager;






