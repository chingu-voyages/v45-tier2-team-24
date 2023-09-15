# Meteorite Landing Data

## Overview

This app was created for the Chingu Voyage 45 Tier 2. It pulls data from the
[Nasa Open Data Portal Meteorite Landings API](https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh)

#### LIVE LINK : (https://v45-tier2-team-24.vercel.app/)

## Features

- The data is sorted and displayed into both a pie chart and a scatter plot. Users can change the range of the X and Y axis on the scatter plot and also choose which data to view in the pie chart. 

- A user's location is obtained when the application loads and that location is used to center the map that opens in a modal.

- Within the map component, a user can click on dots representing meteorites that have fallen near them. There is a table where the chosen meteorite's data is displayed. 

- On the Team component a user can hover over or tap on one of the astronaut avatars to learn more about each developer that worked on the project.


## Tech Used / Dependencies

- This is a React App created with Vite

- Add-on packages include: <br>

  1. [Chart.js](https://www.chartjs.org/)
  2. [React-Chartjs-2](https://react-chartjs-2.js.org/)
  3. [React-Leaflet](https://react-leaflet.js.org/)
  4. [Prettier](https://www.npmjs.com/package/prettier)
  5. [MaterialUI](https://mui.com/)
     
- Fonts from [Google Fonts](https://fonts.google.com/)

- Icons from [Material Icons](https://mui.com/material-ui/material-icons/)

- Styled with [TailwindCSS](https://tailwindcss.com/)

- Testing with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Getting Started

Fireball was built using Vite.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/chingu-voyages/v45-tier2-team-24.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run NPM run dev
   ```js
   npm run dev
   ```
