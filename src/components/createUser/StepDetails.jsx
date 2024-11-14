import React from 'react';

const StepDetails = ({step}) => {
  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return {
          title: "Step 1: Category Information",
          description: "Provide details about the category your business or brand falls under. This will help us organize your offerings appropriately.",
        };
    
      case 2:
        return {
          title: "Step 2: Location Information",
          description: "Enter the physical address or operating location of your business. This will be used to identify the geographical reach of your brand.",
        };
    
      case 3:
        return {
          title: "Step 3: Personal Information",
          description: "Fill out your personal details, such as full name, email address, and phone number. We’ll use this information to reach out to you regarding your account.",
        };
    
      case 4:
        return {
          title: "Step 4: Brand Information",
          description: "Provide details about your brand, including your brand’s name, website, business type, and any other information that will help us represent your brand correctly.",
        };
    
      case 5:
        return {
          title: "Step 5: Additional URLs",
          description: "Enter any additional URLs relevant to your brand, such as social media profiles or alternative websites. This information will help enhance your online presence.",
        };
    
      case 6:
        return {
          title: "Step 6: Additional Information",
          description: "Share any additional information that might be relevant to your brand. This could include specific business policies, operational details, or special considerations.",
        };
    
      default:
        return { 
          title: "", 
          description: "" 
        };
    }
    
  };
  
  return (
    <div className={'text-white font-medium text-2xl  '}>
    <div className="flex">
      <span className="me-2 mt-2.5 h-0.5 w-11 " /> Step{' '}
      {step } of 5
    </div>
    <article className="mt-4 @3xl:mt-9">
      <h1
        className={ 'text-xl text-white @3xl:text-2xl @7xl:text-3xl @[113rem]:text-4xl'}
      >
        {renderStepContent(step)?.title}
      </h1>
      <p
        className={'mt-3 text-sm leading-relaxed @3xl:text-base'}
      >
        {renderStepContent(step)?.description}
      </p>
    </article>
  </div>
  );
};

export default StepDetails;