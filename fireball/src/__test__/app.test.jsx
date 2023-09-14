import React from "react";
import App from "../App";
import Hero from "../components/hero/Hero";
//import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react"; // (or /dom, /vue, ...)
import {expect, test} from "vitest"
//app loader container
it("should show meteorite loading screen", () => {
  render(<App />)
  const loadingScreen = screen.queryByText("/Meteortie Landing.../i");
  expect(loadingScreen).toBeDefined();
});

//Hero

//Team

//Data visualization

//Map

//