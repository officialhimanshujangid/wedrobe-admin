// import React from 'react'

import { FaCalendarCheck, FaUsers, FaDollarSign } from 'react-icons/fa';
import MetricCard from "../components/dashboard/MetricCard"
import SalesChart from '../components/dashboard/SalesChart';
import VendorRatingChart from '../components/dashboard/VendorRatingChart';
import TodayEventsTable from '../components/dashboard/TodayEventsTable';
import BookingPieChart from '../components/dashboard/BookingPieChart';
import ProductCard from '../components/dashboard/ProductCard';
import { topproducts } from '../constants/dashboardConstants';
import SupportAssistant from '../components/dashboard/SupportAssistant';
import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/dashboard/ChatBox';



function Dashboard() {

  const navigate = useNavigate()

  const metrics = [
    {
      name: 'Total Bookings',
      size: '150',
      greentext: 'Increase of',
      text: '30 since last month',
      value: 75,
      icon: <FaCalendarCheck className="text-4xl text-blue-400" />, // Changed to calendar check icon
    },
    {
      name: 'Project Sales',
      size: '$25,000',
      greentext: 'Revenue',
      text: 'generated this month',
      value: 60,
      icon: <FaDollarSign className="text-4xl text-green-400" />,
    },
    {
      name: 'New Clients',
      size: '20',
      greentext: 'Added',
      text: 'to our portfolio',
      value: 50,
      icon: <FaUsers className="text-4xl text-yellow-400" />,
    },

  ];

  return (
    <>
      <div className="bg-white rounded-lg ">

        <div className="grid  sm:grid-cols-2 grid-col-1 gap-3">
          
        <ChatBox />
          <SalesChart />

   
        </div>



        <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>
        <BookingPieChart />
     
        
          <div className='my-1 flex flex-col justify-between'> 
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              image={metric.icon}
              name={metric.name}
              size={metric.size}
              greentext={metric.greentext}
              text={metric.text}
              value={metric.value}
            />
          ))}
          </div>
          <VendorRatingChart />
        </div>
        <div className=''>
         
          <TodayEventsTable />
       
        </div>

<div>
  <div className='flex justify-between items-center px-3 py-2 font-bold  text-lg'>
    <div className=''>Top Products</div>
    <div onClick={()=>navigate(`/product-list`)} className='border-b-2 border-black cursor-pointer'>See More</div>
    </div>
<div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-2'>
        {topproducts.map((product) => (
        <ProductCard
          key={product.slug}
          className="your-custom-class"
          title={product.title}
          thumbnail={product.thumbnail}
          slug={product.slug}
          description={product.description}
          price={product.price}
          sale_price={product.sale_price}
          colors={product.colors}
          product={product.product}
        />
      ))}
        </div>
</div>
       

        <SupportAssistant />
      </div>
    </>
  )
}

export default Dashboard