/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Avatar, Badge } from "rizzui"
import React from 'react';
import { useNavigate } from "react-router-dom";
const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};
const getRandomBadgeColor = () => {
    const colors = ['secondary', 'info', 'warning', 'danger', 'success'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
};
function TransactionCard({
    name,
    id,
    type,
    time,
    payment,
    service,
    amount,
    notes,
    mail,
    phone,
    bookingId,
    avatar
}) {
    // Format the time to display booking dates
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    const badgerColor =  getRandomBadgeColor()


    const startDate = new Date(time);
    const endDate = addDays(startDate, 3);
    const navigate = useNavigate()

    return (
        <div onClick ={()=>navigate(`/invoice/${bookingId}`)} className="max-w-md border cursor-pointer mx-auto  p-4 m-2 rounded-xl shadow-lg">
            <div className="flex flex-col items-center space-y-4 mb-6">
                <img
                    className="w-16 h-16 rounded-full ring-4 ring-blue-600"
                    src={avatar}
                    alt="Avatar"
                />
                 {/* <Avatar
       src={avtar}
        name="John Doe"
        className="ring-2 ring-green ring-offset-background ring-offset-2"
      /> */}
                <div className="text-center">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-sm opacity-75">Vendor ID: {id}</p>
                    <Badge color={`${badgerColor}`} className={`  text-white mt-2`}>{type}</Badge>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#fff] shadow border p-3 rounded-lg text-center">
                    <h2 className="text-md font-semibold text-blue-400">Booking Time</h2>
                    <p className="text-sm mt-1">
                        <span className="font-medium">{formatDate(startDate)} - {formatDate(endDate)}</span>
                    </p>
                </div>

                <div className="bg-[#fff] shadow border p-3 rounded-lg text-center">
                    <h2 className="text-md font-semibold text-green-400">Payment</h2>
                    <p className="text-sm mt-1">{payment}</p>
                </div>

                <div className="bg-[#fff] shadow border p-3 rounded-lg text-center">
                    <h2 className="text-md font-semibold text-blue-400">Service Type</h2>
                    <p className="text-sm mt-1">{service}</p>
                </div>

                <div className="bg-[#fff] shadow border p-3 rounded-lg text-center">
                    <h2 className="text-md font-semibold text-blue-400">Amount</h2>
                    <p className="text-sm mt-1">{amount}</p>
                </div>
            </div>

            <div className="bg-[#fff] shadow border p-1 mt-1 rounded-lg text-center">
                <h2 className="text-md font-semibold text-yellow-400">Additional Notes</h2>
                <p className="text-sm mt-1">{notes}</p>
            </div>

            <div className="bg-[#fff] shadow border p-1 mt-1 rounded-lg text-center">
                <h2 className="text-md font-semibold text-blue-400">Contact Information</h2>
                <p className="text-sm mt-2">Email: {mail}</p>
                <p className="text-sm">Phone: {phone}</p>
            </div>
        </div>
    );
}

export default TransactionCard;
