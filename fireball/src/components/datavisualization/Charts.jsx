import { useReducer, useState } from 'react'
import PieChart from './PieChart'
import BarChart from './BarChart';
import ScatterPlot from './ScatterPlot';

/**
 * reducer state:
 * 
 * which chart is visible
 * active filter // mass/location/etc
 */

export default function Charts({ meteorData }) {

  const [showCharts, setShowCharts] = useState({
    pie: true,
  })

  const handleShowChart = (type) => {
    let newState = {}
    newState[type] = true

    setShowCharts(newState)
  }

  return (
    <div>

      <div>
        <button onClick={() => handleShowChart('pie')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pie Chart</button>
        <button onClick={() => handleShowChart('bar')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Bar Chart</button>
        <button onClick={() => handleShowChart('scatter')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Scatter Plot</button>
      </div>

      {showCharts.pie && <PieChart meteorData={meteorData} />}
      {showCharts.bar && <BarChart />}
      {showCharts.scatter && <ScatterPlot />}
    </div>
  )
}
