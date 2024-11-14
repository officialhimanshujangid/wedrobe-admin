import { useState } from 'react';
import { Input, Button } from 'rizzui'; // Assuming RizzUI provides these components

const Step5 = () => {
  const [formData, setFormData] = useState({
    websiteUrl: '',
    facebookUrl: '',
    instagramUrl: '',
    youtubeUrl: '',
    twitterUrl: '',
    linkedinUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Add your form submission logic here
  };

  return (
    <div className='max-h-[600px] w-full md:w-[600px] overflow-auto p-6 bg-white text-slate-900 rounded-lg shadow-lg hideScrollbar'>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Input
          label='Website URL'
          name='websiteUrl'
          value={formData.websiteUrl}
          onChange={handleChange}
          required
          className='mb-3 col-span-1 md:col-span-2'
        />

        <Input
          label='Facebook URL'
          name='facebookUrl'
          value={formData.facebookUrl}
          onChange={handleChange}
          className='mb-3 col-span-1 md:col-span-2'
        />

        <Input
          label='Instagram URL'
          name='instagramUrl'
          value={formData.instagramUrl}
          onChange={handleChange}
          className='mb-3 col-span-1 md:col-span-2'
        />

        <Input
          label='YouTube URL'
          name='youtubeUrl'
          value={formData.youtubeUrl}
          onChange={handleChange}
          className='mb-3 col-span-1 md:col-span-2'
        />

        <Input
          label='Twitter URL'
          name='twitterUrl'
          value={formData.twitterUrl}
          onChange={handleChange}
          className='mb-3 col-span-1 md:col-span-2'
        />

        <Input
          label='LinkedIn URL'
          name='linkedinUrl'
          value={formData.linkedinUrl}
          onChange={handleChange}
          className='mb-3 col-span-1 md:col-span-2'
        />

        
      </form>
    </div>
  );
};

export default Step5;
