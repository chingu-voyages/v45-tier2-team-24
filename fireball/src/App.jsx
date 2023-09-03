import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataVisualization from './components/datavisualization/DataVisualization';

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
      <DataVisualization />
    </>
  );
}

export default App;
