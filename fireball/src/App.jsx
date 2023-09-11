import { useState, useEffect } from 'react';
import './App.css'
import AOS from 'aos';
import './aos.css'
// components import
import Hero from './components/hero/Hero'
import Map from './components/map/Map'
import DataTable from './components/table/Table'
import SliderFilter from './components/slider_filter/slider';
import Team from "./components/teamabout/Team";
import { filterRanges } from './utils/helpers/filterBetweenTwoRanges';
import { filterSelected } from './utils/helpers/filterSelectedData';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataVisualization from './components/datavisualization/DataVisualization';



const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    AOS.init();
  }, [])

  const [data, setData] = useState(null);

  const [openDropdown, setOpenDropdown] = useState(null);

  const [sortedData, setSortedData] = useState(null);
  const [filteredRange, setFilteredRange] = useState(null);

  const [value, setValue] = useState([990, 100000]);

  const [selectedMeteorite, setSelectedMeteorite] = useState(null);


  return (
    <>
      <div className="container flex justify-center">
        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="main-content" data-aos="flip-left">
            <Hero />
            <Team />
          </div>
        )}
      </div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="main-content" data-aos="flip-left">
          <Hero />
          <Team />
        </div>
      )}
      <Team />
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

      <DataVisualization />
    </>
  );
}

export default App;
