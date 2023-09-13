import { useState } from "react";
import PieChart from "./PieChart";
import ScatterChart from "./ScatterChart";

export default function Charts({ meteorData }) {
  const [showCharts, setShowCharts] = useState({
    pie: true,
  });

  const handleShowChart = (type) => {
    let newState = {};
    newState[type] = true;

    setShowCharts(newState);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-w-[360px]">
      <div className="flex">
        <button
          onClick={() => handleShowChart("pie")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Pie Chart
        </button>
        <button
          onClick={() => handleShowChart("scatter")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Scatter Chart
        </button>
      </div>
      {showCharts.pie && <PieChart meteorData={meteorData} />}
      {showCharts.scatter && <ScatterChart meteorData={meteorData} />}
    </div>
  );
}
