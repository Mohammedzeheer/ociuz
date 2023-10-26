import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      designation: '',
      address: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone" />
      <input type="text" name="designation" value={formData.designation} onChange={handleChange} required placeholder="Designation" />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
