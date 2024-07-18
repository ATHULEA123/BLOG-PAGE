import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import Header from "../Header";
import Blogentry from "../Blogentry";
import { toast } from "react-toastify";

import "../Dashboard/style.css";

function BlogManager() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
  });

  const createdAt = new Date();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/blogs", {
        title: formData.title,
        image: formData.image,
        description: formData.description,
        createdAt: createdAt,
      });
      console.log(response.data);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w3-row">
      <Header />
      <div className="w3-col l6">
        <Form
          formData={formData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>

      <div className="w3-col l6 s12">
        <Blogentry
          title={formData.title}
          image={formData.image}
          description={formData.description}
          createdAt={createdAt}
        />
      </div>
    </div>
  );
}

export default BlogManager;
