import React, { useState } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  scales,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import Slider from '@mui/material/Slider'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ScatterChart({ meteorData }) {

  const options = {
    scales: {
      y: {
        type: 'linear',
      },
      x: {
        type: 'linear',
      }
    },

  };

  const [x, setX] = useState(1800)
  const [y, setY] = useState(1000000)

  const meteorSightingsByYear = (meteorData) => {


    let newData = meteorData.map(meteor => {
      return {
        x: new Date(meteor.year).getFullYear(),
        y: Number(meteor.mass),
      }
    })

    newData = newData.filter(meteor => meteor.x >= x && meteor.y <= y)

    return newData
  }

  console.log(meteorSightingsByYear(meteorData))

  const data = {
    datasets: [
      {
        label: '# Meteor mass size by year',
        data: meteorSightingsByYear(meteorData),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };


  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }


  return (
    <div className='flex flex-col items-center w-16'>


      <span className=' flex h-72 items-center'>
        <Slider
          orientation="vertical"
          value={y}
          min={1000}
          max={y >= 4700000 ? 23000000 : 2500000}
          step={y <= 100000 ? 5000 : 50000}
          aria-label="Mass"
          valueLabelDisplay="auto"
          onChange={(e) => setY(e.target.value)}
          onKeyDown={preventHorizontalKeyboardNavigation}
          sx={{ height: 240 }}
        />
        <Scatter redraw={false} options={options} data={data} />
      </span>

      <span>
        <Slider
          orientation='horizontal'
          aria-label="Year Recorded"
          value={x}
          min={400}
          max={2013}
          step={x <= 1600 ? 100 : 5}
          onChange={(e) => setX(e.target.value)}
          valueLabelDisplay='auto'
          sx={{ width: 350 }} />
        <Typography>First Year Sighted</Typography>
      </span>
    </div >
  )
}
