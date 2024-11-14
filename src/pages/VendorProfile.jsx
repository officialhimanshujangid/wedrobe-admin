import  { useState } from "react";
import { Input, Button, Stepper } from "rizzui";

const VendorProfile = () => {
  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState({
    loginEmail: "",
    firstName: "",
    lastName: "",
    additionalEmail: "",
    contactNumber: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    state: "",
    city: "",
    pincode: "",
    brandName: "",
    websiteURL: "",
    description: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    businessType: "",
    taxId: "",
    vendorType: "",
    brandLogo: null,
    facebookUrl: "",
    instagramUrl: "",
    youtubeUrl: "",
    twitterUrl: "",
    linkedinUrl: "",
    additionalCategories: "",
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className=" mx-auto p-6 bg-white ">
         <Stepper  currentIndex={step - 1}>
      <Stepper.Step
        variant="outline"
        color="primary"
        title="Profile Information"

      />

      <Stepper.Step
        variant="outline"
        color="primary"
        title="Brand Information"

      />

      <Stepper.Step
        variant="outline"
        color="primary"
        title="Links"

      />
      <Stepper.Step
        variant="outline"
        color="primary"
        title="Additional Information"

      />

    </Stepper>
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
      {step === 1 && (
        <div className="space-y-4">
          <Input
            label="First Name"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
            placeholder="John"
          />
          <Input
            label="Last Name"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />
          <Input
            label="Email"
            name="loginEmail"
            value={profileData.loginEmail}
            onChange={handleChange}
            placeholder="john@example.com"
          />
          <Input
            label="Additional Email"
            name="additionalEmail"
            value={profileData.additionalEmail}
            onChange={handleChange}
            placeholder="john.alt@example.com"
          />
          <Input
            label="Contact Number"
            name="contactNumber"
            value={profileData.contactNumber}
            onChange={handleChange}
            placeholder="123-456-7890"
          />
          <Button onClick={nextStep}>Next</Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <Input
            label="Brand Name"
            name="brandName"
            value={profileData.brandName}
            onChange={handleChange}
            placeholder="Brand XYZ"
          />
          <Input
            label="Website URL"
            name="websiteURL"
            value={profileData.websiteURL}
            onChange={handleChange}
            placeholder="https://example.com"
          />
          <Input
            label="Description"
            name="description"
            value={profileData.description}
            onChange={handleChange}
            placeholder="Brief description of your business"
          />
          <Input
            label="Contact Person"
            name="contactPerson"
            value={profileData.contactPerson}
            onChange={handleChange}
            placeholder="John Doe"
          />
          <Input
            label="Contact Email"
            name="contactEmail"
            value={profileData.contactEmail}
            onChange={handleChange}
            placeholder="contact@example.com"
          />
          <Input
            label="Contact Phone"
            name="contactPhone"
            value={profileData.contactPhone}
            onChange={handleChange}
            placeholder="123-456-7890"
          />
          <div className="flex justify-between">
            <Button onClick={prevStep}>Previous</Button>
            <Button onClick={nextStep}>Next</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <Input
            label="Facebook URL"
            name="facebookUrl"
            value={profileData.facebookUrl}
            onChange={handleChange}
            placeholder="https://facebook.com/yourpage"
          />
          <Input
            label="Instagram URL"
            name="instagramUrl"
            value={profileData.instagramUrl}
            onChange={handleChange}
            placeholder="https://instagram.com/yourprofile"
          />
          <Input
            label="Youtube URL"
            name="youtubeUrl"
            value={profileData.youtubeUrl}
            onChange={handleChange}
            placeholder="https://youtube.com/yourchannel"
          />
          <Input
            label="Twitter URL"
            name="twitterUrl"
            value={profileData.twitterUrl}
            onChange={handleChange}
            placeholder="https://twitter.com/yourhandle"
          />
          <Input
            label="LinkedIn URL"
            name="linkedinUrl"
            value={profileData.linkedinUrl}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/yourprofile"
          />
          <div className="flex justify-between">
            <Button onClick={prevStep}>Previous</Button>
            <Button onClick={nextStep}>Next</Button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <Input
            label="Additional Categories"
            name="additionalCategories"
            value={profileData.additionalCategories}
            onChange={handleChange}
            placeholder="Category 1, Category 2"
          />
          <div className="flex justify-between">
            <Button onClick={prevStep}>Previous</Button>

  

            <Button onClick={() => alert("Profile saved!")}>Save</Button>
          </div>
        </div>
      )}
       
    </div>
  );
};

export default VendorProfile;
