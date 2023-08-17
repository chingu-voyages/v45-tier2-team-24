
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

/**
 * Possible charts/ways to filter data
 * 
 * CHARTJS
 * https://www.chartjs.org/docs/latest/getting-started/usage.html
 * 
 * Scatter Plot: Track size of meteorite data
 * Bar Chart/Line Graph: # Of meteorites per year
 * 
 * 
 * RANGE: 
 * All meteors by year
 * All meteors by size
 * All meteors by location (lat/longitute)
 *     US / Europe / Asia / Australia / Canada / South America ?
 * 
 * OVER TIME:
 * # of meteors over time, visualization (1880-most recent)
 * 
 * Scatter Plot Map: Use the latitude and longitude to create a scatter plot map that shows the location where the meteorite fell. The size or color of the points could represent the mass of the meteorite.

Bar Chart: Create a bar chart to display the mass of the meteorite. You can categorize the bars by year, name, or classification.

Pie Chart: If you want to show the distribution of meteorites by their fall status (e.g., "Fell" or "Found"), you could use a pie chart.

Timeline Chart: Represent the occurrences of meteorites over time using a timeline chart. This could show the number of meteorites that fell in each year.

Bubble Chart: Create a bubble chart with the meteorite names on the X-axis, the mass on the Y-axis, and the size of the bubbles representing the mass. This can provide an overview of mass distribution among different meteorites.

Heatmap: If you have a dataset with multiple meteorites and their geolocations, you could create a heatmap to visualize the concentration of meteorite falls in different regions.

Radar Chart: Use a radar chart to show attributes like mass, year, and classification all on the same chart. Each attribute could be represented by a different axis.

Line Chart: If you have a dataset with multiple meteorites over time, you could use a line chart to show how the mass or other attributes have changed over the years.

Histogram: Create a histogram to display the distribution of meteorite masses. This can help you understand the most common mass ranges.
* 
 */

import { useEffect, useState } from "react"
import axios from "axios"
import Charts from "./Charts"
const Loading = () => {
  return (
    <div>
      Loading...
    </div>
  )
}

export default function DataVisualization() {

  const meteorAPI = 'https://data.nasa.gov/resource/gh4g-9sfh.json'
  const [meteorData, setMeteorData] = useState(null)

  const getMeteorData = async () => {
    const res = await axios.get(meteorAPI)
    setMeteorData(res.data)
  }

  useEffect(() => {
    getMeteorData()
  }, [])

  return (
    <div>

      {
        meteorData === null ? <Loading /> :
          <div>
            <Charts meteorData={meteorData} />
          </div>
      }

    </div>
  )
}
