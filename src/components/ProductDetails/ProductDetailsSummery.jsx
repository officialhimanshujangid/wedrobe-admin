/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { FormProvider } from 'react-hook-form'; // Adjust as necessary
import { FaHeart } from 'react-icons/fa';

import { PiShoppingCartSimple } from 'react-icons/pi'; // Adjust the import path as necessary
import { AdvancedRadio, Button, RadioGroup, Text, Title } from 'rizzui';
const sizes = ['6', '7', '8', '9', '10']
const toCurrency = (value) => `$${value?.toFixed(2)}`;
const calculatePercentage = (price, salePrice) => {
    return Math.round(((salePrice - price) / salePrice) * 100);
};
const colors = ['#FF69B4', '#BA55D3', '#FFD700']
export default function ProductDetailsSummery({ product }) {
    return (
        <>
            <div className="border-b border-gray-300 pb-6 lg:pb-8">
                <Title as="h2" className="mb-2.5 font-bold text-2xl">
                    {product?.title}
                </Title>
                <Text as="p" className="text-base">
                    {product?.description}
                </Text>
            </div>

            <FormProvider >
                <form className="pb-8 pt-5" >
                    <div className="mb-1.5 mt-2 flex items-end font-lexend text-base">
                        <div className="-mb-0.5 text-2xl font-semibold text-gray-900 lg:text-3xl">
                            {toCurrency(product?.price)}
                        </div>
                        <del className="ps-1.5 font-medium text-gray-500">
                            {toCurrency(Number(product?.price) + 30)}
                        </del>
                        <div className="ps-1.5 text-red-500">
                            ({calculatePercentage(product?.price, Number(product?.price) + 30)}% OFF)
                        </div>
                    </div>
                    <div className="font-medium text-green-600">
                        Inclusive of all taxes
                    </div>

                    <div className="mb-3.5 flex items-start justify-between pt-6">
                        <Title as="h6" className="font-inter text-sm font-medium">
                            Select Size
                        </Title>
                        <Button size="sm" variant="text" className="h-auto py-0 underline">
                            Size Guide
                        </Button>
                    </div>
                    <RadioGroup
                        //   value={value}
                        //   setValue={onChange}
                        className="flex flex-wrap items-center gap-4"
                    >
                        {sizes?.map((size) => (
                            <AdvancedRadio
                                key={size}
                                value={size}
                                contentClassName={'px-3 py-2 min-w-[unset] min-h-[unset] flex items-center justify-between content-classname border-primary ring-primary ring-1'}
                            >
                                {size}
                            </AdvancedRadio>
                        ))}
                    </RadioGroup>

                    {/* <GetSize sizes={product?.sizes} /> */}

                    <Title as="h6" className="mb-3.5 mt-6 font-inter text-sm font-medium">
                        Select Color
                    </Title>
                    {colors?.length > 0 ? (
                        <div className="flex space-x-2 mt-2">
                            {colors.map((color) => (
                                <div
                                    key={color}
                                    className={`w-6 h-6 rounded-full border-2 border-white`}
                                    style={{ backgroundColor: color }}
                                />
                            )
                            )}
                        </div>
                    ) : null }


                    {/* <GetColor colors={product?.colors} /> */}

                    <div className="grid grid-cols-1  gap-4 pt-7 md:grid-cols-2 xl:gap-6">
                        <Button
                            size="xl"

                            
                            isLoading={product?.isLoading}
                            className="h-12 text-sm lg:h-14 bg-sidebarTheme-dark text-white lg:text-base"
                        >
                            <PiShoppingCartSimple className="me-2 h-5 w-5 lg:h-[22px] lg:w-[22px]" />
                            Add To Cart
                        </Button>
                        <Button
                            size="xl"


                            className="h-12 text-sm lg:h-14 lg:text-base"
                        >
                            <FaHeart className="me-2 h-5 w-5 lg:h-[22px] lg:w-[22px]" />
                            WishList
                        </Button>
                        {/* <WishlistButton /> */}
                    </div>
                </form>
            </FormProvider>
        </>
    );
}
