



import { CheckCircleIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Input, Button, Textarea, Select, FileInput, RadioGroup, AdvancedRadio, Text, Switch } from 'rizzui';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const [formData, setFormData] = useState({
        title: 'abc',
        sku: 'cb',
        productType: 'dfb',
        categories: 'db',
        description: 'bdb',
        price: '50',
        costPrice: '27',
        retailPrice: '88',
        salePrice: '28',
        currentStock: '585',
        lowStock: '85',
        image: null,
        payment: '889',
        freeShipping: false,
        shippingCharges: '500'
    });

    // Handle input change for text-based inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Handle Select change
    const handleSelectChange = (name, value) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Handle image file upload
    const handleImageUpload = (e) => {
        setFormData((prevState) => ({ ...prevState, image: e.target.files[0] }));
    };

    // Handle radio change for payment method
    const handlePaymentChange = (value) => {
        setFormData((prevState) => ({ ...prevState, payment: value }));
    };

    // Handle switch for free shipping
    const handleShippingSwitch = (e) => {
        setFormData((prevState) => ({ ...prevState, freeShipping: e.target.checked }));
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    const productTypes = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
    ];

    const categories = [
        { label: 'Electronics', value: 'electronics' },
        { label: 'Fashion', value: 'fashion' },
        { label: 'Home & Garden', value: 'home_garden' },
    ];

    const paymentOptions = [
        { value: 'single', title: 'Single Payment', description: 'Charge a one-time fee' },
        { value: 'double', title: 'EMI Payment', description: 'Pay in easy EMI' },
        { value: 'triple', title: 'Pay Later', description: 'Purchase now, Pay Later' },
    ];
    
    const breadcrumpData = [
        {
          name :"App",
          link:"/"
        },
        {
          name :"Product List",
          link:"/product-list"
          
        },
        {
          name :"Edit product",
          link:null
        }
      ]
    return (
      
       <>
       <Breadcrumb breadcrumpData={breadcrumpData} />
        <div className=''>
            <h1 className="text-2xl font-semibold mb-3">Edit Product</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Summary Section */}
                <div className="font-semibold text-lg border-b-2 border-dashed border-slate-700 mt-5">Summary</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Product Title"
                        required
                    />
                    <Input
                        label="SKU"
                        name="sku"
                        value={formData.sku}
                        onChange={handleInputChange}
                        placeholder="Product SKU"
                        required
                    />
                </div>

                {/* Product Type and Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Select
                        label="Product Type"
                        options={productTypes}
                        name="productType"
                        value={formData.productType}
                        onChange={(value) => handleSelectChange('productType', value)}
                        required
                    />
                    <Select
                        label="Categories"
                        name="categories"
                        options={categories}
                        value={formData.categories}
                        onChange={(value) => handleSelectChange('categories', value)}
                        required
                    />
                </div>

                {/* Description */}
                <Textarea
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Product Description"
                    required
                />

                {/* Image Upload */}
                <div className="font-semibold text-lg border-b-2 border-dashed border-slate-700 mt-5">Upload Images</div>
                <FileInput
                    label="Upload Image"
                    size="xl"
                    rounded="lg"
                    accept="image/*"
                    onChange={handleImageUpload}
                />

                {/* Stock and Price Details */}
                <div className="font-semibold text-lg border-b-2 border-dashed border-slate-700 mt-5">Stock and Price Details</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Input
                        label="Price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                        type="number"
                        required
                    />
                    <Input
                        label="Cost Price"
                        name="costPrice"
                        value={formData.costPrice}
                        onChange={handleInputChange}
                        placeholder="Cost Price"
                        type="number"
                        required
                    />
                    <Input
                        label="Retail Price"
                        name="retailPrice"
                        value={formData.retailPrice}
                        onChange={handleInputChange}
                        placeholder="Retail Price"
                        type="number"
                    />
                    <Input
                        label="Sale Price"
                        name="salePrice"
                        value={formData.salePrice}
                        onChange={handleInputChange}
                        placeholder="Sale Price"
                        type="number"
                    />
                </div>

                {/* Stock Levels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                        label="Current Stock"
                        name="currentStock"
                        value={formData.currentStock}
                        onChange={handleInputChange}
                        placeholder="Current Stock Level"
                        type="number"
                        required
                    />
                    <Input
                        label="Low Stock Level"
                        name="lowStock"
                        value={formData.lowStock}
                        onChange={handleInputChange}
                        placeholder="Low Stock Level"
                        type="number"
                        required
                    />
                </div>

                {/* Payment Type Details */}
                <div className="font-semibold text-lg border-b-2 border-dashed border-slate-700 mt-5 mb-2">Payment Type Details</div>
                <RadioGroup className="grid grid-cols-1 sm:grid-cols-3 mx-auto gap-4">
                    {paymentOptions.map((item) => (
                        <AdvancedRadio
                            key={item.value}
                            name="payment"
                            value={item.value}
                            inputClassName="[&:checked~span_.icon]:block"
                            checked={formData.payment === item.value}
                            onChange={() => handlePaymentChange(item.value)}
                        >
                            <span className="flex justify-between">
                                <Text as="b">{item.title}</Text>
                                <CheckCircleIcon className="icon hidden h-5 w-5 text-secondary" />
                            </span>
                            <Text>{item.description}</Text>
                        </AdvancedRadio>
                    ))}
                </RadioGroup>

                {/* Shipping Details */}
                <div className="font-semibold text-lg border-b-2 border-dashed border-slate-700 mt-5 mb-2">Shipping Details</div>
                <div className="grid sm:grid-cols-2 grid-cols-1">
                    <Switch
                        variant="flat"
                        color="secondary"
                        label="Free Shipping"
                        checked={formData.freeShipping}
                        onChange={handleShippingSwitch}
                    />
                    {!formData.freeShipping && (
                        <Input
                            label="Shipping Charges"
                            name="shippingCharges"
                            value={formData.shippingCharges}
                            onChange={handleInputChange}
                            placeholder="Shipping Charges"
                            type="number"
                        />
                    )}
                </div>

                {/* Submit and Save as Draft */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Button type="button" color="secondary">
                        Save as Draft
                    </Button>
                    <Button type="submit" color="primary">
                        Create Product
                    </Button>
                </div>
            </form>
        </div>
       </>


    );
};

export default EditProduct;
