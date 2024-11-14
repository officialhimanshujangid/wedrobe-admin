import  { useState } from "react";
import { useDropzone } from "react-dropzone";
import ProductImageSection from "./ProductImageSection";

const ProductListCard = () => {
  const [productName, setProductName] = useState("Cloud-based Healthcare Management System Dev...");
  const [isEditing, setIsEditing] = useState(false);
  const [images, setImages] = useState([]);

  // Handle image upload
  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setImages([...images, ...newImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Edit product name
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="lg:flex block justify-start p-5 bg-gray-50">
      <ProductImageSection />
      <div className="">
        <div className="flex items-center mb-4">
          {isEditing ? (
            <input
              type="text"
              value={productName}
              onChange={handleNameChange}
              className="flex-1 border border-gray-300 p-2 rounded-md"
            />
          ) : (
            <h2 className="text-2xl font-bold flex-1">{productName}</h2>
          )}
          <button
            onClick={isEditing ? handleSaveClick : handleEditClick}
            className="ml-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        <div className="mt-6 ">
          <div className="text-lg">
            Category: <span className="font-semibold">Hospital Software</span>
          </div>
          <div className="text-lg">
            Sub-category: <span className="font-semibold">Hospital Management System</span>
          </div>
          <div className="text-lg">
            Group: <span className="font-semibold">Software Development</span>
          </div>

          {/* Additional Specifications */}
          <div className="mt-8">
            <h3 className="text-xl font-bold">Specification/Additional Details</h3>
            <p className="mt-2">License Duration: Lifetime</p>
            <p>Download Option: Free demo available</p>
            <p>Key Features: Doctor's Appointment Portal</p>
            <p>Additional Features: Pharmacy Billing</p>
            <p>Supported Platforms: Windows, Android, Mac, iOS</p>
            <p>Device Compatibility: PC & Mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductListCard;
