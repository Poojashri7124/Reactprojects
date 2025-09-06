import React, { useState } from 'react';
import './Formvalidate.css'

function Formvalidate() {
  const [formData, setFormData] = useState({
    name: '',
    department:'',
    email: '',
    contact: ''

  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const validateContact = (contact) => {
    const re = /^[0-9]{10}$/;  
    return re.test(contact);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email,department,contact } = formData;

    if (!name) {
      alert('Name is required');
      return;
    }
    if(!department){
        alert('Department is required');
    }
    if (!email) {
      alert('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      alert('Email is not valid');
      return;
    }
    if(!contact){
        alert('Contact is required');
        return;
    }
    if(!validateContact(contact)){
        alert('Contact is not valid')
    }

    alert('Form submitted successfully!');
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label><br />
        <input type="text" 
        name="name" 
        placeholder = "Enter your name"
        value={formData.name} 
        onChange={handleChange} />
      </div>
      <div>
        <label>Department:</label> <br/>
        <input type = "text" 
        name="department" 
        placeholder= "Enter your dept" 
        value={formData.department} 
        onChange={handleChange}/>
      </div>
     
      <div>
        <label>Email:</label><br />
        <input type="text" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} />
      </div>
      <div>
        <label>Contact:</label>
        <input type="number" 
        name = "contact" 
        value={formData.contact} 
        onChange={handleChange}/>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Formvalidate;
