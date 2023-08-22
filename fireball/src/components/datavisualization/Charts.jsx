import { useState } from 'react'
import PieChart from './PieChart'
import BarChart from './ScatterChart';
import BubbleChart from './BubbleChart';
import ScatterChart from './ScatterChart';

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
    <div className='flex flex-col items-center justify-center w-full'>

      <div className='flex'>
        <button onClick={() => handleShowChart('pie')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pie Chart</button>
        <button onClick={() => handleShowChart('scatter')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Scatter Chart</button>
        <button onClick={() => handleShowChart('bubble')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Bubble</button>
      </div>

      {showCharts.pie && <PieChart meteorData={meteorData} />}
      {showCharts.scatter && <ScatterChart meteorData={meteorData} />}
      {showCharts.bubble && <BubbleChart meteorData={meteorData} />}
    </div>
  )
}
