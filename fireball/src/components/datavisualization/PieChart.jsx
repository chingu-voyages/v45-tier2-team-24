
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from 'react-chartjs-2'
import axios from 'axios'

export default function PieChart({ meteorData }) {

  ChartJS.register(ArcElement, Tooltip, Legend)

  //filter options: mass , location
  //       that logic is in the parent component
  const initialData = {
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
        borderWidth: 2,
      },
    ],
  }
  const [data, setData] = useState(initialData)

  /*
  {
    fall: "Fell",
    geolocation: { latitude: '50.775', longitude: '6.08333' },
    id: "1",
    mass: "21",
    name: "Aachen",
    nametype: "Valid",
    recclass: "L5",
    reclat: "50.775000",
    reclong: "6.083330",
    year: "1880-01-01T00:00:00.000"
  }
  */



  /**
   * 
   * @param {arr[]} meteorData 
   * Takes an array of meteor data & returns an array of countries
   */
  // function filterByCountry(meteorData) {

  //   const mdata = meteorData.filter(meteor => meteor.reclong !== undefined || meteor.reclat !== undefined)

  //   const onlyCountries = mdata.map(meteor => {
  //     const { reclat, reclong } = meteor

  //     const config = {
  //       method: 'get',
  //       url: `https://api.geoapify.com/v1/geocode/reverse?lat=${reclat}&lon=${reclong}&apiKey=757017f694ad4b1ea2af41c1cd88b9fe`,
  //       headers: {}
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         console.log(response)
  //         return response.data.features[0].properties.country
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   })

  //   const labels = onlyCountries.reduce((p,c,i) => {

  //   },[])



  //   const data = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: '# Meteorites by size',
  //         data: massData(meteorData),
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)',
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)',
  //         ],
  //         borderWidth: 3,
  //       },
  //     ],
  //   }

  //   /**
  //    * 
  //    * 
  //    */

  // }

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
      <span className="">

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setData(filterByMass(meteorData))
          }}
        >Mass</button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setData(filterByCountry(meteorData))
          }}
        >Continent</button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setData(filterByFallen(meteorData))
          }}
        >Fallen</button>
      </span>
    </div>

  )
}
