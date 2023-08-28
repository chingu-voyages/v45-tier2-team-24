import { useEffect, useState } from 'react';
import './App.css';
import DataTable from './components/table/Table';
import SliderFilter from './components/slider_filter/slider';
import { filterRanges } from './utils/helpers/filterBetweenTwoRanges';
import axios from 'axios';

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
    console.log(filteredRange)
  };

  return (
    <>
      {sortedData? 
          <div className="p-4 phone:w-full tablet:w-[18rem] absolute phone:bottom-0 tablet:top-0 tablet:left-0 desktop:top-[10%] desktop:left-[10%]">
          <SliderFilter handleChange={handleChange} value={value} />
          {sortedData.map((item, index) => (
            <DataTable key={item.id || index} data={item} isOpen={openDropdown} setIsOpen={setOpenDropdown} />
          ))}
        </div>
      : <p>Loading...</p>}

    </>
  );
}

export default App;
