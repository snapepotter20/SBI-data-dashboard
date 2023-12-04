import React, { useState, useEffect } from "react";
// import "./App.css";
import Tiles from "./Tiles";

function QuarterData() {
  const [selectedQuarter, setSelectedQuarter] = useState("0");
  const [metricsData, setMetricsData] = useState([]);

  useEffect(() => {
    getData();
  }, [selectedQuarter]);

  const getData = async () => {
    try {
      let data = await fetch("http://localhost:8000/");
      data = await data.json();
      console.log(data);
      await setMetricsData(data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };
  console.log(metricsData, selectedQuarter);

  return (
    <div className="app">
      <h1 className="heading">SBI Dashboard</h1>
      <select onChange={(e) => setSelectedQuarter(e.target.value)} className="dropdown">
        <option value={0}>Select Quarter</option>
        <option value={1}>Quarter 1</option>
        <option value={2}>Quarter 2</option>
        <option value={3}>Quarter 3</option>
        <option value={4}>Quarter 4</option>
      </select>

      <Tiles title="Quarter 1" metricsData={metricsData} selectedQuarter={selectedQuarter}/>
      
    </div>
  );
}

export default QuarterData;
