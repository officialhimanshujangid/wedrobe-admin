import React, { useState } from 'react';
import { Input, Button } from 'rizzui'; // Assuming RizzUI provides Input and Button components

const Step3 = () => {
  const [formData, setFormData] = useState({
    loginEmail: '',
    firstName: '',
    lastName: '',
    additionalEmail: '',
    contactNumber: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    state: '',
    city: '',
    pincode: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Add further submit functionality
  };

  return (
    <div className='max-h-[600px] w-full md:w-[600px] overflow-auto p-6 bg-white text-slate-900 rounded-lg shadow-lg hideScrollbar'>
    <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <Input
        label='Login Email'
        name='loginEmail'
        value={formData.loginEmail}
        onChange={handleChange}
        required
        className='mb-4 col-span-1 md:col-span-2' // Stacked on mobile, full width on medium+
      />
  
      <Input
        label='First Name'
        name='firstName'
        value={formData.firstName}
        onChange={handleChange}
        required
        className='mb-4 col-span-1' // Stacked on mobile
      />
  
      <Input
        label='Last Name'
        name='lastName'
        value={formData.lastName}
        onChange={handleChange}
        required
        className='mb-4 col-span-1' // Stacked on mobile
      />
  
      <Input
        label='Additional Email'
        name='additionalEmail'
        value={formData.additionalEmail}
        onChange={handleChange}
        className='mb-4 col-span-1' // Stacked on mobile
      />
  
      <Input
        label='Contact Number'
        name='contactNumber'
        value={formData.contactNumber}
        onChange={handleChange}
        required
        className='mb-4 col-span-1' // Stacked on mobile
      />
  
      <Input
        label='Address Line 1'
        name='addressLine1'
        value={formData.addressLine1}
        onChange={handleChange}
        required
        className='mb-4 col-span-1 md:col-span-2' // Full width on medium+
      />
  
      <Input
        label='Address Line 2'
        name='addressLine2'
        value={formData.addressLine2}
        onChange={handleChange}
        className='mb-4 col-span-1 md:col-span-2' // Full width on medium+
      />
  
      <Input
        label='Address Line 3'
        name='addressLine3'
        value={formData.addressLine3}
        onChange={handleChange}
        className='mb-4 col-span-1 md:col-span-2' // Full width on medium+
      />
  
      <Input
        label='State'
        name='state'
        value={formData.state}
        onChange={handleChange}
        required
        className='mb-4 col-span-1' // Stacked on mobile
      />
  
      <Input
        label='City'
        name='city'
        value={formData.city}
        onChange={handleChange}
        required
        className='mb-4 col-span-1' // Stacked on mobile
      />
  
      <Input
        label='Pincode'
        name='pincode'
        value={formData.pincode}
        onChange={handleChange}
        required
        className='mb-4 col-span-1' // Stacked on mobile
      />
    </form>
  </div>
  
  );
};

export default Step3;
