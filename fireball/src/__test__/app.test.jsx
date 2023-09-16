import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import Hero from "../components/hero/Hero";
import Team from "../components/teamabout/Team";
import ScatterChart from "../components/datavisualization/ScatterChart";
import PieChart from "../components/datavisualization/PieChart";
import Map from "../components/map/Map";
import DataTable from "../components/table/Table";
import { describe, expect, test, vi } from "vitest";
import data from "../components/map/data"
//utility functions
import { meteorSightingsByYear } from "../utils/helpers/filterByYear";
//meteor API data
let meteorData;

beforeAll(async () => {
  const meteorDataRes = await fetch('https://data.nasa.gov/resource/gh4g-9sfh.json');
  meteorData = await meteorDataRes.json();
});

describe('METEOR_DATA', () => {
  it('should return data', () => {
    expect(meteorData).toBeInstanceOf(Array);
  });
});

//app loader container
it("should show meteorite loading screen", () => {
  render(<App />);
  const loadingScreen = screen.queryByText("/Meteortie Landing.../i");
  expect(loadingScreen).toBeDefined();
});

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
describe("DATA_VISUALIZATION", async () => {

  describe("Scatter Plot", () => {
    it("should render", () => {
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

//Table Component
describe("DataTable Component", () => {
  it("Render Component", () => {
    render(<DataTable data={meteorData}/>);
  });

  it("Show One Button", () => {
    render(<DataTable data={meteorData}/>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(1);
  })
  
});