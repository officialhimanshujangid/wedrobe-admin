/* eslint-disable react/prop-types */
import { FaRegHeart } from 'react-icons/fa';
import { BiEdit } from "react-icons/bi";

import { useNavigate } from 'react-router-dom';

const ProductListCard = ({ product , key }) => {

  const {
    title,
    id,
    description,
    price,
    discountPercentage,
    stock,
    brand,
    sku,
    warrantyInformation,
    availabilityStatus,
    thumbnail,
  } = product;
  const toCurrency = (num) => `$${num.toFixed(2)}`; // Example currency formatter
const navigate = useNavigate()
  return (
    <div key={key}  className={`bg-white cursor-pointer border p-6 rounded-lg shadow-lg`}>
      <div className="relative">
        <div className="relative mx-auto w-full overflow-hidden rounded-lg bg-gray-100">
          <div onClick={()=>navigate(`/product-details/${id}`)}
            className="h-80 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnail})` }}
            alt={title}
          />
        </div>

        <button onClick={()=>navigate(`/product-edit/${id}`)} className="absolute hover:scale-110 transition-transform duration-300 ease-in-out start-3 top-3">
  <BiEdit size={20} />
</button>
<button className="absolute end-3 top-3 transition-transform duration-300 ease-in-out hover:text-red-500">
  <FaRegHeart size={20} />
</button>

      </div>

      <div onClick={()=>navigate(`/product-details/${id}`)} className="pt-3">
  
          <h6 className="mb-1 truncate font-semibold transition-colors hover:text-primary">
            {title}
          </h6>
      

        <p className="truncate">{description}</p>
        <div className="mt-2 flex items-center font-semibold text-gray-900">
          {toCurrency(Number(price))}
          {discountPercentage && (
            <del className="ps-1.5 text-[13px] font-normal text-gray-500">
              {toCurrency(Number(price + (price * discountPercentage / 100)))}
            </del>
          )}
        </div>

        <div className="mt-4 text-sm text-gray-700">
  <div className="flex flex-col space-y-1">
    <div className="flex justify-between">
      <span className="font-semibold">Brand:</span>
      <span>{brand}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">SKU:</span>
      <span>{sku}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">Warranty:</span>
      <span>{warrantyInformation}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">Status:</span>
      <span className={`font-bold ${availabilityStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
        {availabilityStatus} ({stock} {stock === 1 ? 'item' : 'items'} available)
      </span>
    </div>
  </div>
</div>


        {/* {reviews.length > 0 && (
          <div className="mt-3">
            <h6 className="font-semibold">Reviews:</h6>
            {reviews.map((review, index) => (
              <div key={index} className="mt-1">
                <p className="text-sm">
                  <strong>{review.reviewerName}:</strong> {review.comment} 
                  <span className="ml-2 font-semibold">{review.rating} ★</span>
                </p>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductListCard;
