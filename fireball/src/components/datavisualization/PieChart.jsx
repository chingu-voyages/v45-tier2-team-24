import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Pie } from 'react-chartjs-2'

export default function PieChart({ meteorData }) {

  ChartJS.register(ArcElement, Tooltip, Legend)

  const initialData = {
    labels: ['0-1000', '1000-10000', '10000-20000', '20000-50000', '50000-100000', '100k+'],
    datasets: [
      {
        label: '# Meteorites by size',
        data: massData(meteorData), //[120,127,78,278,27,6]
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
        borderWidth: 2,
      }
    ],
  }
  const [data, setData] = useState(initialData)

  function massData(meteorData) {
    return meteorData.map(meteor => meteor.mass ? meteor.mass : 0).reduce((a, c) => {

      if (c <= 1000) { a[0]++ }
      else if (c <= 10000) { a[1]++ }
      else if (c <= 20000) { a[2]++ }
      else if (c <= 50000) { a[3]++ }
      else if (c <= 100000) { a[4]++ }
      else { a[5]++ }

      return a
    }, [0, 0, 0, 0, 0, 0])
  }

  function filterByRecclass(meteorData) {
    const recclassCount = {}

    meteorData.forEach(record => {
      const recclass = record.recclass;
      if (!recclassCount[recclass]) {
        recclassCount[recclass] = 1;
      } else {
        recclassCount[recclass]++;
      }
    });

    let labels = []
    let cData = []

    let n = 0;
    for (let key in recclassCount) {
      if (recclassCount[key] > 40) {
        labels.push(key)
        cData.push(recclassCount[key])
      } else {
        n += recclassCount[key]
      }
    }

    labels.push('misc')
    cData.push(n)

    const data = {
      labels: labels,
      datasets: [
        {
          label: '# Most Common Meteorite Compositions',
          data: cData,
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
    }

    return data

  }

  function filterByMass(meteorData) {

    const data = {
      labels: ['0-1000', '1000-10000', '10000-20000', '20000-50000', '50000-100000', '100k+'],
      datasets: [
        {
          label: '# Meteorites by size',
          data: massData(meteorData),
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
    }

    return data
  }

  function filterByFallen(meteorData) {

    const fallenData = meteorData.reduce((a, c) => {

      if (c.fall === "Fell") { a[0]++ }
      else { a[1]++ }
      return a
    }, [0, 0])

    const data = {
      labels: ['Fallen to Earth', 'Not Fallen Yet'],
      datasets: [
        {
          label: 'Known Orbiting/Fallen Meteorites',
          data: fallenData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 2,
        },
      ],
    };

    return data
  }




  return (
    <div className=" flex flex-col items-center">
      <Pie data={data} />
      <span>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setData(filterByMass(meteorData))
          }}
        >Mass</button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setData(filterByFallen(meteorData))
          }}
        >Fallen</button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setData(filterByRecclass(meteorData))
          }}
        >Classification</button>
      </span>
    </div>

  )
}
