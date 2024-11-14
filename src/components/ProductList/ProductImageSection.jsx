import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

 const ProductImageSection = () => {
  const [images, setImages] = useState([]); // To hold uploaded images
  const [selectedImage, setSelectedImage] = useState(null); // To hold the image clicked for large preview

  // Handle image upload
  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setImages([...images, ...newImages]);
    if (!selectedImage) setSelectedImage(newImages[0]); // Select first image by default if none is selected
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex">
      {/* Sidebar Thumbnail Section */}
      <div className="w-1/4 p-4 bg-gray-100">
        <div className="mb-4 text-center">
          <div
            {...getRootProps()}
            className="cursor-pointer border-2 border-dashed border-gray-400 p-4 rounded-md hover:bg-gray-200"
          >
            <input {...getInputProps()} />
            <i className="fas fa-camera text-4xl text-gray-500"></i> {/* Camera icon */}
            <p>Add Image</p>
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="space-y-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer w-[50px]"
              onClick={() => setSelectedImage(image.preview)} // Set the clicked image as selected
            >
              <img
                src={image.preview}
                alt={`Thumbnail ${index}`}
                className="w-full h-auto border border-gray-200"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Image Display Area */}
      <div className="w-[300px]">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-auto border border-gray-300"
          />
        ) : (
          <div className="text-center text-gray-500">
            <p>Select an image from the sidebar to preview</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImageSection;
