import { useReducer, useState } from 'react'
import PieChart from './PieChart'

/**
 * reducer state:
 * 
 * which chart is visible
 * active filter // mass/location/etc
 */

export default function Charts({ meteorData }) {

  const initialState = {
    visibleChart: 'pie',
    currentFilter: pieMassFilter,
  }

  const pieMassFilter = () => {

  }

  // dispatch({type: 'currentFilter', payLoad: {}})

  function reducer(action) {

    switch (action) {
      case '':

        break;

    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <button>Pie Chart</button>
      <button>Bar Chart</button>
      <PieChart massData={massData} locationData={locationData} />
      <BarChart massData={massData} />
    </div>
  )
}
