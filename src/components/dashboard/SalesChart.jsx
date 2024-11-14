import  { useState } from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { salesData } from '../../constants/dashboardConstants';
import { AdvancedRadio, RadioGroup, Text } from 'rizzui';

const SalesChart = () => {
  const [selectedRange, setSelectedRange] = useState('total');

  const getDataForRange = (range) => {
    const totalMonths = salesData.length;
    if (range === 'last3Months') {
      return salesData.slice(Math.max(totalMonths - 3, 0));
    } else if (range === 'last6Months') {
      return salesData.slice(Math.max(totalMonths - 6, 0));
    } else {
      return salesData; // total data
    }
  };
  const options = [
    {
      value: 'last3Months',
      title: 'Last 3 Months',
      description: 'View data from the last 3 months.',
    },
    {
      value: 'last6Months',
      title: 'Last 6 Months',
      description: 'View data from the last 6 months.',
    },
    {
      value: 'total',
      title: 'Total Data',
      description: 'View all available data.',
    },
  ];

  // const handleChange = (event) => {
  //   setSelectedRange(event.target.value);
  // };

  const filteredData = getDataForRange(selectedRange);

  return (
    <div className="bg-white border overflow-x-auto shadow rounded-lg py-4 pr-2 my-2">
      <div className=" text-xl px-4 font-bold text-center">Last 1 Year Sales Data</div>
  
      <RadioGroup
        value={selectedRange}
        setValue={setSelectedRange}
        className="grid grid-cols-3 max-w-2xl mx-auto gap-4"
      >
        {options.map((item) => (
          <AdvancedRadio
          size='sm'
            key={item.value}
            name="dataRange"
            value={item.value}
            inputClassName="[&:checked~span_.icon]:block"
          >
            <span className="flex justify-between">
              <Text as="b">{item.title}</Text>
            </span>
           
          </AdvancedRadio>
        ))}
      </RadioGroup>
  
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={filteredData}>
          <XAxis
            dataKey="month"
            tick={{ fontSize: 10, fill: 'black' }}
          />
          <YAxis
            tick={{ fontSize: 10, fill: 'black' }}
            domain={[0, 'dataMax + 2000']}
            tickFormatter={(value) => `₹${value}`}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
          <Bar dataKey="expectedSales" fill="#D73061" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
