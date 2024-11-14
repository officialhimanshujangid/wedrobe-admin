/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AdvancedRadio, RadioGroup, Tab, Text } from "rizzui";
import { anlyticsResponse } from "../../constants/analyticsConstant";
import { useEffect, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, LabelList, Legend, Line, LineChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";

function CategoriWise({ activeTab2, activeTab }) {
  const [activeTab3, setActiveTab3] = useState("monthlyData");
  const [filteredData, setFilteredData] = useState(0)
  const [printingData, setPrintingData] = useState([]);
  const [chartType, setChartType] = useState("bar");

  const handleTabChange3 = (tab) => {
    setActiveTab3(tab);
  };


  useEffect(() => {
    if (activeTab !== null && activeTab !== undefined) {
      const data = anlyticsResponse?.analytics?.data.filter((ele) => ele.categoryId == activeTab);
      setFilteredData(data)
    } else {
      const data = anlyticsResponse?.analytics?.data
      setFilteredData(data)
    }
  }, [activeTab])

  const handlePaymentChange = (e) => {
    setChartType(e.target.value)
  }



  const aggregateDataByCategory = (data) => {
    let aggregatedMonthly = {};
    let aggregatedDaily = {};
    let aggregatedYearly = {};

    data.forEach((category) => {
      // Aggregate monthly data
      category.monthlyData.forEach((month) => {
        if (!aggregatedMonthly[month.month]) {
          aggregatedMonthly[month.month] = 0;
        }
        aggregatedMonthly[month.month] += month.count;
      });

      // Aggregate daily data
      category.dailyData.forEach((day) => {
        if (!aggregatedDaily[day.day]) {
          aggregatedDaily[day.day] = 0;
        }
        aggregatedDaily[day.day] += day.count;
      });

      // Aggregate yearly data
      category.yearlyData.forEach((year) => {
        if (!aggregatedYearly[year.year]) {
          aggregatedYearly[year.year] = 0;
        }
        aggregatedYearly[year.year] += year.count;
      });
    });

    return {
      monthlyData: Object.entries(aggregatedMonthly).map(([month, count]) => ({ month, count })),
      dailyData: Object.entries(aggregatedDaily).map(([day, count]) => ({ day, count })),
      yearlyData: Object.entries(aggregatedYearly).map(([year, count]) => ({ year, count })),
    };
  };



  useEffect(() => {


    if (filteredData) {
      const aggregatedResult = aggregateDataByCategory(filteredData);
      setPrintingData(aggregatedResult[activeTab3]); // Set the active tab data (monthly, daily, or yearly)
    }
  }, [activeTab3, filteredData]);
  const dataKeyMap = {
    monthlyData: "month",
    dailyData: "day",
    yearlyData: "year",
  };
  const CustomCircle = (props) => {
    const { cx, cy, fill, payload } = props;
    return (
      <circle cx={cx} cy={cy} r={5} fill={fill} />
    );
  };

  return (
    <div>
      <Tab>
        <Tab.List>
          <Tab.ListItem onClick={() => handleTabChange3("monthlyData")}>
            Month
          </Tab.ListItem>
          <Tab.ListItem onClick={() => handleTabChange3("dailyData")}>
            Day
          </Tab.ListItem>
          <Tab.ListItem onClick={() => handleTabChange3("yearlyData")}>
            Year
          </Tab.ListItem>
        </Tab.List>
      </Tab>
     <div className="px-2 py-2">
     <RadioGroup className="grid grid-cols-2 sm:grid-cols-5 mx-auto gap-4" value={chartType} onChange={handlePaymentChange}>
        <AdvancedRadio
          name="chart"
          value="bar"
          inputClassName="[&:checked~span_.icon]:block"
        >
          <span className="flex justify-between">
            <Text as="b">Bar Chart</Text>
          </span>
        </AdvancedRadio>
        <AdvancedRadio
          name="chart"
          value="line"
          inputClassName="[&:checked~span_.icon]:block"
        >
          <span className="flex justify-between">
            <Text as="b">Line Chart</Text>
          </span>
        </AdvancedRadio>
        <AdvancedRadio
          name="chart"
          value="area"
          inputClassName="[&:checked~span_.icon]:block"
        >
          <span className="flex justify-between">
            <Text as="b">Area Chart</Text>
          </span>
        </AdvancedRadio>
        <AdvancedRadio
          name="chart"
          value="composed"
          inputClassName="[&:checked~span_.icon]:block"
        >
          <span className="flex justify-between">
            <Text as="b">Composed Chart</Text>
          </span>
        </AdvancedRadio>
        <AdvancedRadio
          name="chart"
          value="scatter"
          inputClassName="[&:checked~span_.icon]:block"
        >
          <span className="flex justify-between">
            <Text as="b">Scatter Chart</Text>
          </span>
        </AdvancedRadio>
      </RadioGroup>
     </div>


      {chartType === 'bar' && <div className="mt-8">
        {printingData && printingData.length > 0 &&
          <ResponsiveContainer width="100%" height={400} className='px-0'>
            <BarChart data={printingData} margin={{ top: 20, right: 10, left: 0, bottom: 10}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={`${dataKeyMap[activeTab3] || ""}`} tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" />
              <YAxis tick={{ fontSize: 12 }}/>
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" barSize={50} radius={[10, 10, 0, 0]} cursor="pointer">
                <LabelList dataKey="count" position="top" style={{ fontSize: 14, fill: "#000" }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        }
      </div>}
      {chartType === 'line' && (
        <div className="mt-8">
          {printingData && printingData.length > 0 && (
            <ResponsiveContainer width="100%" height={400} className='px-0'>
              <LineChart data={printingData} margin={{ top: 20, right: 10, left: 0, bottom: 10}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={`${dataKeyMap[activeTab3] || ""}`} tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} >
                   <LabelList dataKey="count" position="top" style={{ fontSize: 14, fill: "#000" }} />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      )}
      {chartType === 'area' && (
        <div className="mt-8">
          {printingData && printingData.length > 0 && (
            <ResponsiveContainer width="100%" height={400} className='px-0'>
            <AreaChart data={printingData} margin={{ top: 20, right: 10, left: 0, bottom: 10}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={`${dataKeyMap[activeTab3] || ""}`} tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={0.4} fill="#8884d8">
                <LabelList dataKey="count" position="top" style={{ fontSize: 14, fill: "#000" }} />
              </Area>
            </AreaChart>
          </ResponsiveContainer>
          )}
        </div>
      )}
      {chartType === 'scatter' && (
        <div className="mt-8">
          {printingData && printingData.length > 0 && (
          <ResponsiveContainer width="100%" height={400} className="px-0">
          <ScatterChart
            data={printingData}
            margin={{ top: 20, right: 10, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey={`${dataKeyMap[activeTab3] || ""}`}
              tick={{ fontSize: 12 }}
              interval={0}
              angle={-45}
              textAnchor="end"
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Scatter
              name={`${dataKeyMap[activeTab3] || ""}`}
              dataKey="count"
              fill="#8884d8"
            >
              <LabelList
                dataKey="count"
                position="top"
                style={{ fontSize: 14, fill: "#000" }}
              />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
        
         
           
          )}
        </div>
      )}
      {chartType === 'composed' && (
        <div className="mt-8">
          {printingData && printingData.length > 0 && (
            <ResponsiveContainer width="100%" height={400} className='px-0'>
            <ComposedChart data={printingData} margin={{ top: 20, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={`${dataKeyMap[activeTab3] || ""}`} tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" />
              <YAxis />
              <Tooltip />
              <Legend />
              
              {/* Area Chart */}
              <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={0.4} fill="#8884d8">
                <LabelList dataKey="count" position="top" style={{ fontSize: 14, fill: "#000" }} />
              </Area>
          
              {/* Line Chart */}
              <Line type="monotone" dataKey="count" stroke="#ff7300" />
          
              {/* Bar Chart */}
              <Bar dataKey="count" barSize={20} fill="#413ea0" />
          
            </ComposedChart>
          </ResponsiveContainer>
          )}
        </div>
      )}


    </div>
  );
}

export default CategoriWise;
