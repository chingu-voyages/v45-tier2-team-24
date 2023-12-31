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
import meteorImage from "./images/meteorFacts.png";

const App = () => {
  //state handlers
  const [loading, setLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [chartOpen, setChartOpen] = useState(false);
  const [tableOpen, setTableOpen] = useState(false);
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
    }, 3000);
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

  const toggleChart = () => {
    if (!chartOpen && tableOpen) {
      setChartOpen(true);
      setTableOpen(false);
    } else {
      setChartOpen(!chartOpen);
    }
  };

  const toggleTable = () => {
    if (!tableOpen && chartOpen) {
      setTableOpen(true);
      setChartOpen(false);
    } else {
      setTableOpen(!tableOpen);
    }
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
          <div className=" h-max">
            <div
              className="relative w-full h-max z-10 sky-background"
              id="team"
            >
              <Team />
            </div>
            <div className="flex justify-center items-center w-full" id="map">
              <div className="flex flex-col items-center desktop:w-[60rem] desktop:h-[52rem] desktop:mt-[3rem] tablet:h-[35rem] phone:h-[25rem]">
                <button
                  onClick={handleOpen}
                  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
                >
                  See meteorites that have fallen near you!
                </button>
                <img
                  src={meteorImage}
                  className="rounded-md desktop:h-[40rem] desktop:w-[50rem] tablet:w-[30rem] tablet:h-[28rem] phone:w-full phone:h-[20rem]"
                />
              </div>
            </div>

            <Dialog
              fullScreen={screen.width < 420 ? true : false}
              maxWidth={screen.width >= 420 ? "xl" : false}
              open={open}
              onClose={handleClose}
            >
              <Box>
                <button
                  onClick={toggleChart}
                  className="absolute z-50 bottom-[1.5rem]  right-[1.2rem] h-[5rem] w-[5rem] phone:top-[7rem] phone:left-[80%]"
                >
                  {chartOpen ? (
                    <button className="bg-slate-50 bg-opacity-60 rounded-md text-red-600 hover:bg-orange-400 font-bold text-xl">
                      Close Chart
                    </button>
                  ) : (
                    <button className="bg-slate-50 bg-opacity-60 rounded-md text-cyan-600 hover:bg-orange-400 font-bold text-xl">
                      Open Chart
                    </button>
                  )}
                </button>
                {chartOpen && (
                  <div className="absolute bottom-[2rem] right-[1rem] w-[33rem] h-[26rem] z-10 bg-slate-50 bg-opacity-60 rounded-md phone:w-[90%]">
                    <DataVisualization chartOpen={chartOpen} />
                  </div>
                )}

                {/* X button */}
                <div className="absolute top-3 right-3 z-10 bg-white rounded h-[2rem] w-[2rem] flex justify-center items-center pl-[12px]">
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </div>

                {/* map open button */}
                <button
                  onClick={toggleTable}
                  className="absolute z-50 bottom-[1.5rem]  left-[1.2rem] h-[5rem] w-[5rem] phone:top-[3rem] phone:left-[80%]"
                >
                  {tableOpen ? (
                    <button className="bg-slate-50 bg-opacity-60 rounded-md text-red-600 hover:bg-orange-400 font-bold text-xl">
                      Close table
                    </button>
                  ) : (
                    <button className="bg-slate-50 bg-opacity-60 rounded-md text-cyan-600 hover:bg-orange-400 font-bold text-xl">
                      Open table
                    </button>
                  )}
                </button>

                {/* map info table */}
                {tableOpen && (
                  <>
                    {sortedData ? (
                      <div className="rounded-md z-10 p-3 bg-slate-50 bg-opacity-60 phone:w-full tablet:w-[17rem] absolute phone:bottom-0 tablet:top-[11.5%] tablet:left-0 desktop:top-[10%] desktop:left-[10%]">
                        <SliderFilter
                          handleChange={handleChange}
                          value={value}
                        />
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
                      <p>Loading...</p>
                    )}
                  </>
                )}

                <Map
                  data={data}
                  setSelectedMeteorite={setSelectedMeteorite}
                  filteredRange={filteredRange}
                  setTableOpen={setTableOpen}
                  setChartOpen={setChartOpen}
                />
              </Box>
            </Dialog>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
