import React, { useState } from "react";

function Form({ formData, handleSubmit, handleInputChange }) {
  const [validationMessages, setValidationMessages] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleBlur = (event) => {
    const { name, value } = event.target;
    let message = ""; // Initialize the message variable

    if (name === "title" && value.trim().length < 5) {
      message = "Title must be at least 5 characters long.";
    } else if (name === "image" && !/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/.test(value)) {
      message = "Please enter a valid image URL (jpg, jpeg, png, gif).";
    } else if (name === "description" && value.trim().length < 20) {
      message = "Description must be at least 20 characters long.";
    }

    setValidationMessages((prev) => ({ ...prev, [name]: message }));
    event.target.setCustomValidity(message);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <p className="enter">ENTER</p>
          <label htmlFor="title">Title</label>
          <input
            required
            name="title"
            id="title"
            type="text"
            placeholder="Type here"
            value={formData.title}
            onChange={handleInputChange}
            onBlur={handleBlur}
            minLength={5}
          />
          <div className="error-message">{validationMessages.title}</div>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            required
            name="image"
            id="image"
            type="text"
            value={formData.image}
            onChange={handleInputChange}
            onBlur={handleBlur}
            pattern="https?://.*\.(jpg|jpeg|png|gif)"
          />
          <div className="error-message">{validationMessages.image}</div>
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
            onBlur={handleBlur}
            minLength={20}
          />
          <div className="error-message">{validationMessages.description}</div>
        </div>
        <button type="submit" className="form-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
