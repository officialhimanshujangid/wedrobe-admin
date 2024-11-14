import { FaRegHeart } from "react-icons/fa";

/* eslint-disable react/prop-types */
function ProductCard({

    title,
    thumbnail,
    slug,
    description,
    price,
    sale_price,
    colors,
    product,
   
  }) {

    const generateSlug = (str) => str.toLowerCase().replace(/ /g, '-'); // Example slug generator
    const toCurrency = (num) => `$${num.toFixed(2)}`; // Example currency formatter
  
    return (
        <div key={product} className="bg-white  border p-6 rounded-lg shadow-lg">
             
      <div className="relative">
      <div className="relative mx-auto  w-full overflow-hidden rounded-lg bg-gray-100">
  <div
    className="h-80 w-full bg-cover bg-center"
    style={{ backgroundImage: `url(${thumbnail})` }}
    alt={title} // Note: alt is not applicable for a div
  />
</div>

        <button className="absolute end-3 top-3"><FaRegHeart /></button>
      </div>

      <div className="pt-3">
        <a href={`/product/${slug ?? generateSlug(title)}`}>
          <h6 className="mb-1 truncate font-semibold transition-colors hover:text-primary">
            {title}
          </h6>
        </a>

        <p className="truncate">{description}</p>
        <div className="mt-2 flex items-center font-semibold text-gray-900">
          {toCurrency(Number(price))}
          {sale_price && (
            <del className="ps-1.5 text-[13px] font-normal text-gray-500">
              {toCurrency(Number(sale_price))}
            </del>
          )}
        </div>

        {colors?.length ? (
          <div className="flex space-x-2 mt-2">
            {product?.colors.map((color) => (
              <div
                key={color}
                className={`w-6 h-6 rounded-full border-2 border-white`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        ) : null}
      </div>
 
        </div>
    )
}

export default ProductCard
