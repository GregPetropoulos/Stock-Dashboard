import React from 'react'
import {Chart} from 'react-google-charts'


const MarketOverview = () => {
    const chartEvents = [
        {
          eventName: "select",
          callback({ chartWrapper }) {
            console.log("Selected ", chartWrapper.getChart().getSelection());
          }
        }
      ];


      const data = [
        ["Time", "Stock"],
        [1, 12],
        // [2, 5.5],
        // [3, 14],
        // [4, 5],
        // [5, 3.5],
        [6, 19]
      ];
      
      const options = {
        title: "Time vs. Stock",
        hAxis: { title: "Time", viewWindow: { min: 0, max:6 } },
        vAxis: { title: "Stock", viewWindow: { min: 0, max: 19 } },
        legend: "none"
      };
      


  return (
      
      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        graphID="ScatterChart"
        width="100%"
        height="400px"
        chartEvents={chartEvents}
      />
  )
}

export default MarketOverview