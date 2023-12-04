import React from "react";

const Tiles = ({ metricsData, selectedQuarter }) => {
  return (
    <div className="metrics-tile">
      {metricsData.map((item, index) => (
        <div className="quarterData">
            <h1>{`Quarter${index+1}`}</h1>
          {parseInt(selectedQuarter) === index + 1 ? (
            <div className="quarterData-card">
              <h2 key={index} className="dataCard">{`Quarter Revenue  :  INR ${item.quarterrevenue}`}</h2>
              <h2 key={index} className="dataCard">{`Net Income  :  INR ${item.netincome}`}</h2>
              <h2 key={index} className="dataCard">{`Profit Percentage  :  ${item.profit}`}</h2>
              <h2 key={index} className="dataCard">{`Profit Income  :  INR ${item.profitincome}`}</h2>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Tiles;
