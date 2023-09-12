import { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import axios from "axios";
import "./aos.css";
// components import
import Hero from "./components/hero/Hero";
import Map from "./components/map/Map";
import DataTable from "./components/table/Table";
import SliderFilter from "./components/slider_filter/slider";
import Team from "./components/teamabout/Team";
import DataVisualization from "./components/datavisualization/DataVisualization";
// helper function
import { filterRanges } from "./utils/helpers/filterBetweenTwoRanges";
import { filterSelected } from "./utils/helpers/filterSelectedData";
// imgs
import meteor from "./images/meteor.png";

const App = () => {
  //state handlers
  const [loading, setLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  //api meteor data
  const [data, setData] = useState(null);
  const [sortedData, setSortedData] = useState(null);
  const [filteredRange, setFilteredRange] = useState(null);
  const [value, setValue] = useState([990, 100000]);
  const [selectedMeteorite, setSelectedMeteorite] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2750);
  }, []);

  useEffect(() => {
    AOS.init();

    const apiUrl = "https://data.nasa.gov/resource/gh4g-9sfh.json";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        const sortedData = response.data
          .sort((a, b) => new Date(b.year) - new Date(a.year))
          .slice(0, 3);
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

  const selectedMeteorObject = sortedData
    ? filterSelected(selectedMeteorite, data)
    : null;

  const handleClick = () => {
    setSelectedMeteorite(null);
  };

  return (
    <div className="app-wrapper">
      {loading ? (
        <div className="app-load-container w-full h-screen flex flex-col items-center justify-center">
          <img src={meteor} />
          Meteorite landing . . .
        </div>
      ) : (
        <>
          <div className="hero-wrapper relative" data-aos="flip-left">
            <Hero />
          </div>
          <div className="sky-background">
            <div className="star"></div>
            <div className="relative w-full h-screen z-10">
              <Team />
            </div>
            <div className="map-wrapper relative flex">
              {sortedData ? (
                <div className="rounded-md z-10 p-3 bg-slate-50 bg-opacity-60 phone:w-full tablet:w-[17rem] absolute phone:bottom-0 tablet:top-[15%] tablet:left-0 desktop:top-[10%] desktop:left-[10%]">
                  <SliderFilter handleChange={handleChange} value={value} />
                  {selectedMeteorObject ? (
                    <DataTable
                      key={selectedMeteorObject.id}
                      data={selectedMeteorObject}
                      selectedMeteor={selectedMeteorObject}
                      isOpen={openDropdown}
                      setIsOpen={setOpenDropdown}
                    />
                  ) : (
                    sortedData.map((item, index) => (
                      <DataTable
                        key={item.id || index}
                        data={item}
                        isOpen={openDropdown}
                        setIsOpen={setOpenDropdown}
                      />
                    ))
                  )}
                  <button
                    className="text-center w-full rounded-md border-black border-2 hover:bg-stone-900 hover:text-cyan-300"
                    onClick={handleClick}
                  >
                    Show Latest 3 Meteors
                  </button>
                </div>
              ) : (
                <div className="spinner"></div>
              )}
            </div>
            {data == null ? (
              <div className="spinner"></div>
            ) : (
              <Map
                data={data}
                setSelectedMeteorite={setSelectedMeteorite}
                filteredRange={filteredRange}
              />
            )}

            {/* <div className='datavisualization-wrapper relative'>
            <DataVisualization />
            </div> */}
          </div>
        </>
      )}
      {/* <Team />
      <div className='relative'>
        {sortedData ?
          <div className="rounded-md z-10 p-3 bg-slate-50 bg-opacity-60 phone:w-full tablet:w-[17rem] absolute phone:bottom-0 tablet:top-[15%] tablet:left-0 desktop:top-[10%] desktop:left-[10%]">
            <SliderFilter handleChange={handleChange} value={value} />
            {selectedMeteorObject ?
              <DataTable key={selectedMeteorObject.id} data={selectedMeteorObject} selectedMeteor={selectedMeteorObject} isOpen={openDropdown} setIsOpen={setOpenDropdown} />
              :
              sortedData.map((item, index) => (
                <DataTable key={item.id || index} data={item} isOpen={openDropdown} setIsOpen={setOpenDropdown} />
              ))
            }
            <button className='text-center w-full rounded-md border-black border-2 hover:bg-stone-900 hover:text-cyan-300' onClick={handleClick}>Show Latest 3 Meteors</button>
          </div>
          : <p>Loading...</p>}
        {data == null ? (<p>Loading...</p>)
          : (<Map data={data} setSelectedMeteorite={setSelectedMeteorite} filteredRange={filteredRange} />)}
      </div>

      <DataVisualization /> */}
    </div>
  );
};

export default App;
