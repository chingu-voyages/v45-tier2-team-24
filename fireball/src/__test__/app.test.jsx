import React from "react";
import App from "../App";
import Hero from "../components/hero/Hero";
import Team from "../components/teamabout/Team";
import Map from "../components/map/Map";
//import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react"; // (or /dom, /vue, ...)
import { describe, expect, test, vi } from "vitest";
//app loader container
it("should show meteorite loading screen", () => {
  render(<App />);
  const loadingScreen = screen.queryByText("/Meteortie Landing.../i");
  expect(loadingScreen).toBeDefined();
});

//Hero

//Team
it("should render 4 astronaut image elements", () => {
  render(<Team />);
  expect(screen.getAllByRole("img")).to.have.lengthOf(4);
});
//Data visualization

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
