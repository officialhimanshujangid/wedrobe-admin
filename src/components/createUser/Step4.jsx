import React, { useState } from 'react';
import { Input, Button, Select, Textarea, Radio, FileInput } from 'rizzui'; // Assuming RizzUI provides these components

const Step4 = () => {
  const [brandData, setBrandData] = useState({
    brandName: '',
    websiteURL: '',
    description: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    businessType: '',
    taxId: '',
    vendorType: '',
    brandLogo: null, // To store the uploaded file
  });

  const businessTypes = [
    { value: 'retail', label: 'Retail' },
    { value: 'wholesale', label: 'Wholesale' },
    { value: 'manufacturer', label: 'Manufacturer' },
    { value: 'service', label: 'Service Provider' },
  ];

  const vendorTypes = [
    { value: 'individual', label: 'Individual' },
    { value: 'company', label: 'Company' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrandData({
      ...brandData,
      [name]: value,
    });
  };

  const handleSelectChange = (value, name) => {
    setBrandData({
      ...brandData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBrandData({
      ...brandData,
      brandLogo: file, // Store the uploaded file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Brand Details:', brandData);
    // Further submit functionality, such as an API call to save vendor data
  };

  return (
<div className='max-h-[600px] lg:w-[550px] w-full  overflow-auto p-6 bg-white text-slate-900 rounded-lg shadow-lg hideScrollbar'>
  <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    <Input
      label='Brand Name'
      name='brandName'
      value={brandData.brandName}
      onChange={handleChange}
      required
      className='mb-4 col-span-1 md:col-span-2' // Use col-span-1 for mobile
    />

    <Textarea
      label='Brand Description'
      name='description'
      value={brandData.description}
      onChange={handleChange}
      required
      className='mb-4 col-span-1 md:col-span-2'
    />

    <Input
      label='Contact Email'
      name='contactEmail'
      value={brandData.contactEmail}
      onChange={handleChange}
      type='email'
      required
      className='mb-4 col-span-1 md:col-span-2'
    />

    <Input
      label='Contact Phone Number'
      name='contactPhone'
      value={brandData.contactPhone}
      onChange={handleChange}
      type='tel'
      required
      className='mb-4 col-span-1 md:col-span-2'
    />

    <Select
      label='Business Type'
      options={businessTypes}
      value={brandData.businessType}
      onChange={(value) => handleSelectChange(value, 'businessType')}
      placeholder='Select Business Type'
      required
      className='mb-4 col-span-1 md:col-span-2'
    />

    <Input
      label='Business License/Tax ID'
      name='taxId'
      value={brandData.taxId}
      onChange={handleChange}
      required
      className='mb-4 col-span-1 md:col-span-2'
    />

    {/* Radio Button for Vendor Type */}
    <div className='mb-4 col-span-1 md:col-span-2'>
      <label className='text-sm font-semibold mb-2 block'>Vendor Type</label>
      <div className='flex flex-col md:flex-row space-x-0 md:space-x-4'>
        {vendorTypes.map((type) => (
          <Radio
            key={type.value}
            label={type.label}
            value={type.value}
            checked={brandData.vendorType === type.value}
            onChange={() => setBrandData({ ...brandData, vendorType: type.value })}
          />
        ))}
      </div>
    </div>

    {/* File Input for Brand Logo */}
    <div className='mb-4 col-span-1 md:col-span-2'>
      <FileInput
        label="Upload Brand Logo"
        rounded="pill"
        name='brandLogo'
        accept='image/*'
        onChange={handleFileChange}
        required
        className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100'
      />
    </div>
  </form>
</div>

  );
};

export default Step4;