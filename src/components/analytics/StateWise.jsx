/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { anlyticsResponse } from "../../constants/analyticsConstant";
import { AdvancedRadio, RadioGroup, Tab, Text } from "rizzui";
import { ResponsiveContainer, Tooltip, Legend, PieChart, Pie, Cell, RadialBarChart, RadialBar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

function StateWise({ activeTab }) {
  const [activeTab3, setActiveTab3] = useState('averageMonthly');
  const [filteredData, setFilteredData] = useState({});
  const [chartType, setChartType] = useState("pie");
  const handlePaymentChange = (e) => {
    setChartType(e.target.value)
  }
  // Handle Tab change to switch between monthly, daily, and yearly graphs
  const handleTabChange3 = (tab) => {
    setActiveTab3(tab);
  };

  useEffect(() => {
    if (activeTab !== null && activeTab !== undefined) {
      const data = anlyticsResponse?.analytics?.data.filter((ele) => ele.categoryId == activeTab);
      const result = getAverageDataByLocation(data);
      setFilteredData(result);
    } else {
      const data = anlyticsResponse?.analytics?.data;
      const result = getAverageDataByLocation(data);
      setFilteredData(result);
    }
  }, [activeTab]);

  function getAverageDataByLocation(data) {
    const locationMap = {};

    data.forEach((entry) => {
      const { state, monthlyData, dailyData, yearlyData } = entry;

      const monthlyAvg = monthlyData.reduce((sum, month) => sum + month.count, 0) / monthlyData.length;
      const dailyAvg = dailyData.reduce((sum, day) => sum + day.count, 0) / dailyData.length;
      const yearlyAvg = yearlyData.reduce((sum, year) => sum + year.count, 0) / yearlyData.length;

      if (!locationMap[state]) {
        locationMap[state] = {
          monthlyTotal: 0,
          dailyTotal: 0,
          yearlyTotal: 0,
          count: 0,
        };
      }

      locationMap[state].monthlyTotal += monthlyAvg;
      locationMap[state].dailyTotal += dailyAvg;
      locationMap[state].yearlyTotal += yearlyAvg;
      locationMap[state].count++;
    });

    const finalAverages = {};
    Object.keys(locationMap).forEach((state) => {
      const { monthlyTotal, dailyTotal, yearlyTotal, count } = locationMap[state];
      finalAverages[state] = {
        averageMonthly: Number((monthlyTotal / count).toFixed(2)),
        averageDaily: Number((dailyTotal / count).toFixed(2)),
        averageYearly: Number((yearlyTotal / count).toFixed(2)),
      };
    });

    return finalAverages;
  }

  // Prepare data for rendering in Recharts
  const prepareChartData = () => {
    return Object.keys(filteredData).map((location) => ({
      name: location,
      value: filteredData[location][activeTab3],
    }));
  };
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div>
      <Tab>
        <Tab.List>
          <Tab.ListItem onClick={() => handleTabChange3("averageMonthly")}>
            Month
          </Tab.ListItem>
          <Tab.ListItem onClick={() => handleTabChange3("averageDaily")}>
            Day
          </Tab.ListItem>
          <Tab.ListItem onClick={() => handleTabChange3("averageYearly")}>
            Year
          </Tab.ListItem>
        </Tab.List>
      </Tab>
      <div className="px-2 py-2">
     <RadioGroup className="grid grid-cols-2 sm:grid-cols-5 mx-auto gap-4" value={chartType} onChange={handlePaymentChange}>
        <AdvancedRadio
          name="chart"
          value="pie"
          inputClassName="[&:checked~span_.icon]:block"
        >
          <span className="flex justify-between">
            <Text as="b">Pie Chart</Text>
          </span>
        </AdvancedRadio>
        <AdvancedRadio
          name="chart"
          value="radialBar"
          inputClassName="[&:checked~span_.icon]:block"
        >
          <span className="flex justify-between">
            <Text as="b">RadialBar Chart</Text>
          </span>
        </AdvancedRadio>
        <AdvancedRadio
          name="chart"
          value="radar"
          inputClassName="[&:checked~span_.icon]:block"
        >
          <span className="flex justify-between">
            <Text as="b">Radar Chart</Text>
          </span>
        </AdvancedRadio>
      </RadioGroup>
     </div>

    
{chartType === 'pie'   &&  <div>
     <ResponsiveContainer width="100%" height={400}>
  <PieChart>
    <Pie
      data={prepareChartData()} 
      dataKey="value" 
      nameKey="name" 
      cx="50%" 
      cy="50%" 
      fill="#8884d8" 
      label
      outerRadius={140} 
      cornerRadius={0}
      innerRadius={40}
      paddingAngle={0}
    >
         {prepareChartData().map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
</ResponsiveContainer>
     </div>}
     {chartType === 'radialBar'   &&  <div>
    <ResponsiveContainer width="100%" height={400}>
  <RadialBarChart
    cx="50%"
    cy="50%"
    innerRadius="60%"  // Smaller inner radius to make the bars thicker
    outerRadius="100%"  // Larger outer radius for a bigger chart
    barSize={40}       // Increase bar size for better visibility
    data={prepareChartData()}
    startAngle={180} 
    endAngle={0}
  >
    <RadialBar
      minAngle={15}
      label={{ position: 'insideEnd', fill: '#000' }} // Better label positioning and color
      background
      clockWise
      dataKey="value"
    >
      {prepareChartData().map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </RadialBar>

    <Legend
      iconSize={10}
      layout="horizontal"
      verticalAlign="bottom"
      align="center"
    />
    <Tooltip 
      contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} // Custom tooltip style
      cursor={{ fill: 'transparent' }}  // Remove cursor for clean hover effect
    />
  </RadialBarChart>
</ResponsiveContainer>
     </div>}
{chartType === 'radar'   &&  <div>
    <ResponsiveContainer width="100%" height={400}>
  <RadarChart
    cx="50%"
    cy="50%"
    outerRadius="70%"  // Slightly smaller for better fitting in the container
    data={prepareChartData()}  // Data for the radar chart
  >
    {/* Polar grid lines */}
    <PolarGrid stroke="#ccc" />

    {/* Angle axis with customized label */}
    <PolarAngleAxis dataKey="name" tick={{ fill: '#333', fontSize: 12 }} />

    {/* Radius axis with custom domain */}
    <PolarRadiusAxis 
      angle={30} 
      domain={[0, Math.max(...prepareChartData().map(d => d.value))]} 
      tick={{ fill: '#666' }} 
    />

    {/* Radar area and shape */}
    <Radar
      name="Chart Data"
      dataKey="value"
      stroke={COLORS[0]}  // Use the first color from the palette for the stroke
      fill={COLORS[1]}  // Use the second color for fill
      fillOpacity={0.7}  // Increase opacity for better visibility
    />

    {/* Legend with better placement and size */}
    <Legend 
      verticalAlign="top" 
      align="center" 
      wrapperStyle={{ top: 10, left: 0 }} 
    />

    {/* Tooltip with better styling */}
    <Tooltip 
      contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} 
      cursor={{ stroke: 'none' }}  // Remove the stroke effect on hover
    />
  </RadarChart>
</ResponsiveContainer>
     </div>}
    </div>
  );
}

export default StateWise;













    //   function getAverageDataByLocation(data) {
    //     const locationMap = {};
      
    //     // Group data by location
    //     data.forEach((entry) => {
    //       const { location, monthlyData, dailyData, yearlyData } = entry;
      
    //       if (!locationMap[location]) {
    //         locationMap[location] = {
    //           monthlyTotal: 0,
    //           dailyTotal: 0,
    //           yearlyTotal: 0,
    //           monthlyCount: 0,
    //           dailyCount: 0,
    //           yearlyCount: 0,
    //         };
    //       }
      
    //       // Sum monthly data
    //       monthlyData.forEach((month) => {
    //         locationMap[location].monthlyTotal += month.count;
    //         locationMap[location].monthlyCount++;
    //       });
      
    //       // Sum daily data
    //       dailyData.forEach((day) => {
    //         locationMap[location].dailyTotal += day.count;
    //         locationMap[location].dailyCount++;
    //       });
      
    //       // Sum yearly data
    //       yearlyData.forEach((year) => {
    //         locationMap[location].yearlyTotal += year.count;
    //         locationMap[location].yearlyCount++;
    //       });
    //     });
    //     console.log( locationMap,"hdfbsvjshfhsadF")
    //     // Calculate averages
    //     const result = {};
    //     Object.keys(locationMap).forEach((location) => {
    //       const { monthlyTotal, dailyTotal, yearlyTotal, monthlyCount, dailyCount, yearlyCount } = locationMap[location];
      
    //       result[location] = {
    //         averageMonthlyData: monthlyTotal / monthlyCount,
    //         averageDailyData: dailyTotal / dailyCount,
    //         averageYearlyData: yearlyTotal / yearlyCount,
    //       };
    //     });
       
    //     return result;
    //   }