import { useEffect, useState } from 'react';
import './App.css'
import DataTable from './components/table/Table'
import axios from 'axios';

function App() {
  const [data, setData] = useState(null)
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sortedData, setSortedData] = useState(null)

  useEffect(() => {
    const apiUrl = "https://data.nasa.gov/resource/gh4g-9sfh.json"
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
        const sortedData = response.data.sort((a, b) => new Date(b.year) - new Date(a.year)).slice(0, 3);
        setSortedData(sortedData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data: ", error);
      });
      
  }, []);
  
  return (
    <>
    {sortedData == null? <p>Loading...</p> : <div className="p-4 phone:w-full tablet:w-[18rem] absolute phone:bottom-0 tablet:top-0 tablet:left-0 desktop:top-[10%] desktop:left-[10%]"  >
      {sortedData.map((item, index) => (
        <DataTable key={index} data={item} isOpen={openDropdown} setIsOpen={setOpenDropdown} />
      ))}
    </div>}
    
    </>
  )
}

export default App
