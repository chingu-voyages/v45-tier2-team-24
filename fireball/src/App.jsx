import { useEffect, useState } from 'react';
import './App.css'
import DataTable from './components/table/Table'
import axios from 'axios';

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const apiUrl = "https://data.nasa.gov/resource/gh4g-9sfh.json"
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data: ", error);
      });
  }, []);
  
  return (
    <>
    {data==null? <p>Loading...</p> : <DataTable  data={data}/>}
    
    </>
  )
}

export default App
