import React, { useState } from "react";
import "./pages.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="form-container">
      <div className="keepTouch">
        <div className="touch">
          <h2>keep in Touch</h2>
          <h4>Email Address</h4>
          <span>abc123@gmail.com</span>
        </div>
        <div className="bussiness">
          <h2>Bussiness Address</h2>
          <p>Logo Networks Pvt. Ltd. </p>
          <p> Attic Space, 3rd Floor, Lotus,</p>
          <p>80 Feet Road, Koramangala </p>
          <p>4th Block, acdedssfsf - 560034</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
