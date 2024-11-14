import { useEffect, useState } from "react"
import ProductListCard from "../components/ProductList/ProductListCard"

import axios from "axios"
import { Button, Loader } from "rizzui"
import { useNavigate } from "react-router-dom"

function ProductList() {
  const [itemsNum, setItemsNum] = useState(20)
  const [loading ,setLoading] = useState(false)
  const [allProducts, setAllProducts] = useState([])
  const fetchData = async () => {
    try {
      setLoading(true)
      const responce = await axios.get(`https://dummyjson.com/products?limit=${itemsNum}`)
      if (responce && responce?.data && responce.status == 200) {
        setAllProducts(responce?.data?.products)
      }
      setLoading(false)
    }
    catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [itemsNum])

  const navigate = useNavigate()
  return (
    <div>
      <div>
        <div className='flex justify-between items-center px-3 py-2 font-bold  text-lg'>
          <div className=''>All Products</div>
          <div className=''>
            <Button className="bg-sidebarTheme-dark" onClick={()=>navigate("/product-create")} >
             + Create Product
            </Button>
          </div>

        </div>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-2'>
          {allProducts?.reverse()?.map((product) => (
            <ProductListCard
              key={product.slug}
           product={product} 
            />
          ))}
        </div>
        <div onClick={()=>{setItemsNum((num) => num + 10)}} className="text-center flex justify-center items-center py-3 text-xl font-semibold border bg-white capitalize shadow my-2 rounded-lg ">
     { loading ? <span><Loader color="secondary" variant="threeDot" size="xl" /></span> : 'Load more'  }
        </div>
      </div>
    </div>
  )
}

export default ProductList
