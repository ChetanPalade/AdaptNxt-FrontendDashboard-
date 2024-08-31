
import { Tooltip } from 'react-tooltip';
import React from 'react';
import { LineChart, Line, PieChart, Pie,ResponsiveContainer, Cell, Legend,XAxis,YAxis } from 'recharts';
import { CartesianGrid,Label } from 'recharts';
import './dashboard.css';
import { FiAlertCircle } from "react-icons/fi";


const lineData = [
  { date: '6/30/2024-7/6/2024', orders: 1600, sales: 1400, averageOrderValue: 4 },
  { date: '07/07/2024-7/13/2024', orders: 800, sales: 800, averageOrderValue: 2 },
  { date: '07/14/2024-7/27/2024', orders: 800, sales: 550, averageOrderValue: 1 },

];

const dataFormatter = sales => {
  if (sales > 1000) {
    return `${(sales / 1000).toString()}k`
  }
  return sales.toString()
}

const pieData = [
  { name: 'WooCommerce Store', value: 55.8 },
  { name: 'Shopify Store', value: 44.2 },
];

const COLORS = ['#FF8042','#14967a', ]
function Dashboard() {
  return (
    <div className="dashboard ">
      <div className="charts">
        <div  style={{ width: '60%', height: "100%" }} className="chart">
          <h3 className='p-3'>Sales vs Orders <span> <FiAlertCircle /></span> </h3>
          <ResponsiveContainer width="100%" height={300}>
      <LineChart data={lineData}>
        {/* Gridlines */}
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e3ec"  />
        
        {/* X-Axis */}
        <XAxis dataKey="date" 
          tick={{ 
            stroke:"#6c757d",
            strokeWidth:1,
            fontSize: 13,
            fontFamily: "Roboto",
          }}>
          <Label offset={-10} position="insideBottom" />
        </XAxis>
        
        
        <YAxis yAxisId="left" 
          tickFormatter={dataFormatter}
          tick={{
            stroke:"#6c757d",
            strokeWidth:1,
            fontSize: 13,
            fontFamily: "Roboto",
           
          }}>
          <Label angle={-90} position="insideLeft"  />
        </YAxis>

      
        <YAxis yAxisId="right" orientation="right" 
          tick={{ 
            stroke:"#6c757d",
            strokeWidth:1,
            fontSize: 13,
            fontFamily: "Roboto" 
          }}>
        
        </YAxis>
        
        {/* Tooltip */}
        <Tooltip />
        
        {/* Legend */}
        <Legend verticalAlign="top" align="center" />

        {/* Lines */}
        <Line 
          yAxisId="left" 
          type="monotone" 
          dataKey="orders" 
          stroke='#FF8042' 
          strokeWidth={2} 
          name="orders"
          activeDot={{r:8}}
 
          
        />
        <Line 
          yAxisId="left" 
          type="monotone" 
          dataKey="sales" 
          stroke="#14967a" 
          strokeWidth={2} 
          name="sales" 
          activeDot={{r:8}}

        />
        <Line 
          yAxisId="right" 
          type="monotone" 
          dataKey="averageOrderValue" 
          stroke="#000000" 
          strokeWidth={2} 
          strokeOpacity={0}
          dot={false}         
          activeDot={false}   
          legendType="none"    
        />
        <text
          x="50%" 
          y="50%" 
          textAnchor="right"
          dominantBaseline="right"
          fontSize="12px"
          fontWeight="normal"
          fill="#000"
        >
     
        </text>
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ width: '35%', height: "100%"}} className="chart">
          <h3  className='p-3'>Portion of Sales <span> <FiAlertCircle /></span> </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="44.2%"
                cy="55.8%"
                outerRadius={100}
                fill="#8884d8"
                label={({ percent }) => `${(percent * 100)}%`}
                transform= "-25.2deg"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`${index}`} fill={COLORS[index % COLORS.length]} />
                 
                ))}
                <Label
                value= "Total 2569"
                position="center"
                fontSize="18px"
                fontWeight="bold"
                fill="#333"
              />
              </Pie>
              <Legend verticalAlign="bottom" align="right" iconType="circle" />
              
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
