import React from 'react';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Statistics =()=>{
const assiments = [
    { name: 'html and css', mark:50 },
    { name: 'bootstrap', mark:55 },
    { name: 'tailwind', mark:52 },
    { name: 'java script', mark:57 },
    { name: 'react js', mark:53 },
    { name: 'netlify', mark:60 },
    { name: 'html', mark:53 },
    
  ]; 
      
      return (
        <div className='w-full h-1/2 '>
            <PieChart width={800} height={800} >
          <Pie
            dataKey="mark"
            startAngle={180}
            endAngle={0}
            data={assiments}
            
            cx="50%"
            cy="50%"
            outerRadius={210}
            fill="#b6092e"
            label
          />
          <Tooltip></Tooltip>
        </PieChart>
      
        </div>
        
 
      );
};

export default Statistics;