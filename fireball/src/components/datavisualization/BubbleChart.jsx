import React, { useState } from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

export default function BubbleChart({ meteorData }) {

  ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

  //# of meteorites in 1990 + size
  //# [,,size of]

  // const oneMeteor = {
  //   fall: "Fell",
  //   geolocation: { latitude: '50.775', longitude: '6.08333' },
  //   id: "1",
  //   mass: "21",
  //   name: "Aachen",
  //   nametype: "Valid",
  //   recclass: "L5",
  //   reclat: "50.775000",
  //   reclong: "6.083330",
  //   year: "1880-01-01T00:00:00.000"
  // }

  // [1880,1900,1920,1940,1960,1980,2000,2020]

  //



  const [data, setData] = useState({
    datasets: [{
      label: 'Visual representation of meteor size',
      //data: []Object  {x: n, y: n, R: n}
      data: [{
        x: 20,
        y: 30,
        r: 15,
      }, {
        x: 100,
        y: 10,
        r: 10
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }]
  })

  const handleBubbleData = (arr) => {
    console.log(meteorData)
  }

  handleBubbleData()


  return (
    <Bubble
      data={data}
    />
  )
}
