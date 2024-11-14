/* eslint-disable react/prop-types */

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

// Booking data based on provided input
const bookingData = [
  { name: 'Lehenga Rental', value: 450 },
  { name: 'Photography', value: 300 },
  { name: 'Marriage Home', value: 200 },
  { name: 'Sound System', value: 150 },
  { name: 'Catering', value: 100 },
];

// Colors for each pie slice
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',"#1E5945"];

const CustomLabel = ({ value1, value2 }) => {
  return (
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
      <tspan x="50%" dy="-1.2em" fontSize="20">{value1}</tspan>
      <tspan x="50%" dy="1.2em" fontSize="14">{value2}</tspan>
    </text>
  );
};

const BookingPieChart = () => {
  return (
    <div className="bg-white border overflow-x-auto  shadow text-center rounded-lg py-4 pr-2 my-2">
               <div className=" text-xl px-4 over font-bold text-center">Top Bookings</div>
               <ResponsiveContainer width="95%" height={400}>
      <PieChart className="[&_.recharts-layer:focus]:outline-none [&_.recharts-sector:focus]:outline-none dark:[&_.recharts-text.recharts-label]:first-of-type:fill-white">
        <Pie
          data={bookingData}
          cornerRadius={40}
          innerRadius={100}
          outerRadius={120}
          paddingAngle={10}
          fill="#BFDBFE"
          stroke="rgba(0,0,0,0)"
          dataKey="value"
          cx="50%"
          cy="50%"
          label
        >
          {/* <Label
            width={30}
            position="center"
            content={
              <CustomLabel value1={bookingData[1].value} value2={'Used of 100'} />
            }
          /> */}
          {bookingData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
    </div>
  );
};

export default BookingPieChart;
