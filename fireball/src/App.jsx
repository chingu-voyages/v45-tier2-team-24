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
import { AppBar, Box, Dialog, IconButton, Modal, Toolbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <div className="relative w-full h-screen z-10">
              <Team />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-around p-4 gap-4">
              <div className="self-center">
                <DataVisualization />
              </div>
              <div className="grid-rows-2">
                <div className="flex flex-col items-center">
                  <button
                    onClick={handleOpen}
                    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
                  >
                    See meteorites that have fallen near you!
                  </button>
                  <img
                    src="src\images\meteorFacts.png"
                    className="rounded-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3"
                  />
                </div>
              </div>
            </div>

            <Dialog fullScreen open={open} onClose={handleClose}>
              <AppBar sx={{ position: "relative" }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>

              <Box className="sky-background h-full">
                {data == null ? (
                  <div className="spinner"></div>
                ) : (
                  <Map
                    data={data}
                    setSelectedMeteorite={setSelectedMeteorite}
                    filteredRange={filteredRange}
                  />
                )}
                {sortedData ? (
                  <div className="flex justify-center">
                    <div className="rounded-md p-3 bg-slate-50 bg-opacity-60 phone:w-full tablet:w-[17rem] ">
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
                  </div>
                ) : (
                  <div className="spinner"></div>
                )}
              </Box>
            </Dialog>
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
