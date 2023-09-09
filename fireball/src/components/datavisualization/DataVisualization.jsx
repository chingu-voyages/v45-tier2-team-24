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
    <div className="w-full h-screen flex items-center align-middle">
      {
        meteorData === null ? <Loading /> :
          <div className="w-full">
            <Charts meteorData={meteorData} />
          </div>
      }
    </div>
  )
}
