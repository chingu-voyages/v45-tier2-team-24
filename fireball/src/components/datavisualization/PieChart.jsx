
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from 'react-chartjs-2'


export default function PieChart({ meteorData }) {

  ChartJS.register(ArcElement, Tooltip, Legend)

  //filter options: mass , location
  //       that logic is in the parent component
  const [filteredMeteorites, setFilteredMeteorites] = useState([...meteorData])

  useEffect(() => {
    const filterByMass = filteredMeteorites.map(meteor => meteor.mass ? meteor.mass : 0).reduce((a, c) => {

      if (c <= 1000) { a[0]++ }
      else if (c <= 10000) { a[1]++ }
      else if (c <= 20000) { a[2]++ }
      else if (c <= 50000) { a[3]++ }
      else if (c <= 100000) { a[4]++ }
      else { a[5]++ }

      return a
    }, [0, 0, 0, 0, 0, 0])
    console.log(filterByMass)

    setFilteredMeteorites(filterByMass)

  }, [])

  const data = {
    labels: ['0-1000', '1000-10000', '10000-20000', '20000-50000', '50000-100000', '100k+'],
    datasets: [
      {
        label: '# Meteorites by size',
        data: filteredMeteorites,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 3,
      },
    ],
  };

  return (

    <Pie data={data} />

  )
}
