import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./LineGraph.css"
function LineGraph({componentState}){
  const figureDetails = componentState.figureDetails
  
  const xvals = figureDetails.xvals

    const ds = figureDetails?.figureData.map(data => {
        return {
            label: data.title,
            ...data.lineGraphStyle,
            data: data.yvals
        }
    })

    const data = {
    labels: xvals,
    datasets: ds,
    };

  return (
    <div id="line-graph">
        <Line data={data}  options={{ maintainAspectRatio: false, responsive: true }}/>
    </div>
  );
};

export default LineGraph;