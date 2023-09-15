import { useEffect, useState } from "react"
import axios from "axios"
import Charts from "./Charts"
import styles from '../../styles/DataVisualization.module.css'


const Loading = () => {
  return (
    <div>
      Loading...
    </div>
  )
}

export default function DataVisualization({chartOpen}) {

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
    <div className="w-full h-full flex justify-center items-center">
      {
        meteorData === null ? <Loading /> :
          <div>
            <Charts meteorData={meteorData} chartOpen={chartOpen} />
          </div>
      }
    </div>
  )
}
