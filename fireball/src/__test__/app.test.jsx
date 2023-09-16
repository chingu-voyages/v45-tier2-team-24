import React from "react";
import App from "../App";
import Hero from "../components/hero/Hero";
import Team from "../components/teamabout/Team";
<<<<<<< Updated upstream
import Map from "../components/map/Map";
//import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react"; // (or /dom, /vue, ...)
import { describe, expect, test, vi } from "vitest";
=======
import ScatterChart from "../components/datavisualization/ScatterChart";
import PieChart from "../components/datavisualization/PieChart";
//import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react"; // (or /dom, /vue, ...)
import { describe, expect, test } from "vitest";
//utility functions
import { meteorSightingsByYear } from "../utils/helpers/filterByYear";
>>>>>>> Stashed changes
//app loader container
it("should show meteorite loading screen", () => {
  render(<App />);
  const loadingScreen = screen.queryByText("/Meteortie Landing.../i");
  expect(loadingScreen).toBeDefined();
});

//Hero

//Team
describe("Team Component", () => {
  it("renders without errors", () => {
    render(<Team />);
  });
  it("renders 4 astronaut image elements", () => {
    render(<Team />);
    expect(screen.getAllByRole("img")).to.have.lengthOf(4);
  });
});
//Data visualization
describe("Data Visualization Tests", async () => {

  const meteorDataRes = await fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
  const meteorData = await meteorDataRes.json()



  describe("Utility Functions", () => {
    describe("Filter by Mass", () => {
      it("should return an array of numbers", () => {



        expect(meteorSightingsByYear(meteorData)).toBeTypeOf('array')
      })
    })
  })

  describe("Scatter Plot", () => {

    it("should work", () => {
      render(<ScatterChart meteorData={meteorData} />);
    })



  })

  describe("Pie Chart", () => {
    it("should render", () => {
      render(<PieChart meteorData={meteorData} />)
    })
  })

})
//Map

describe("Map Component", () => {
  it("renders without errors", () => {
    render(<Map />);
  });

  it("renders the map container", () => {
    const { container } = render(<Map />);
    const mapContainer = container.querySelector(".leaflet-container");
    expect(mapContainer).toBeInTheDocument();
  });

  it("renders tile layer", () => {
    const { getByText } = render(<Map />);
    const attributionText = getByText("OpenStreetMap");
    expect(attributionText).toBeInTheDocument();
  });
});

//
