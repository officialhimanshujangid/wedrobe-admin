import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetailsGallery from "../components/ProductDetails/ProductDetailsGallery"
import ProductDetailsSummery from "../components/ProductDetails/ProductDetailsSummery"
import ProductDeliveryOptions from "../components/ProductDetails/ProductDeliveryOptions"
import ProductListCard from "../components/ProductList/ProductListCard"



function ProductDetails() {
const {productId} = useParams()
const [productDetails,setProductDetails] = useState(null)
const [allProducts,setAllProducts] = useState(null)
const fetchData = async()=>{
    try{
        const response = await axios.get(`https://dummyjson.com/products/${productId}`)
        if(response.status === 200 ){
            setProductDetails(response?.data)
        }
    }
    catch(error){
        console.log(error)
    }
}
useEffect(()=>{
fetchData()
},[productId])
const fetchOtherData = async () => {
    try {
    
      const responce = await axios.get(`https://dummyjson.com/products?limit=9`)
      if (responce && responce?.data && responce.status == 200) {
        setAllProducts(responce?.data?.products)
      }
    
    }
    catch (error) {
      console.log(error)
    
    }
  }
  useEffect(() => {
    fetchOtherData()
  }, [])


    return (
        <>
     <div></div>
        <div className="mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-12 gap-6">
          <div className="col-span-1 xl:col-span-1 3xl:col-span-7 mb-7 lg:mb-10 3xl:pr-10">
            <ProductDetailsGallery productGallery2={productDetails?.images} />
          </div>
          <div className="col-span-1 xl:col-span-1 3xl:col-span-5">
            <ProductDetailsSummery product={productDetails} />
            <ProductDeliveryOptions />
            {/* <ProductDetailsDescription /> */}
            {/* <ProductDetailsReview /> */}
          </div>
        </div>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-2'>
          {allProducts?.map((product) => (
         
            <ProductListCard
              key={product.slug}
           product={product} 
            />
          ))}
        </div>
      </div>
      </>
    )
}

export default ProductDetails
