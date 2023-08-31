import './App.css'
import Map from './components/map/Map'
import DataTable from './components/table/Table'
import SliderFilter from './components/slider_filter/slider';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const [openDropdown, setOpenDropdown] = useState(null);

  const [sortedData, setSortedData] = useState(null);
  const [filteredRange, setFilteredRange] = useState(null);

  const [value, setValue] = useState([992.5, 100000]);

  useEffect(() => {
    const apiUrl = "https://data.nasa.gov/resource/gh4g-9sfh.json";
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

  const handleChange = (event, newValue) => {
    setValue(newValue);

    const newFilteredData = filterRanges(newValue[0], newValue[1], data);
    setFilteredRange(newFilteredData);
  };

  return (
    <>
      {sortedData? 
          <div className="rounded-md z-10 p-3 bg-slate-50 bg-opacity-60 phone:w-full tablet:w-[17rem] absolute phone:bottom-0 tablet:top-[15%] tablet:left-0 desktop:top-[10%] desktop:left-[10%]">
          <SliderFilter handleChange={handleChange} value={value} />
          {sortedData.map((item, index) => (
            <DataTable key={item.id || index} data={item} isOpen={openDropdown} setIsOpen={setOpenDropdown} />
          ))}
        </div>
      : <p>Loading...</p>}
      {data == null? ( <p>Loading...</p> ) 
        : ( <Map data={data} />)}
    </>
  );
}

export default App;
