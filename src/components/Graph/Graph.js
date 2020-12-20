import React, {useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import "./Graph.css";

function Graph() {


    const [graphData, setGraphData] = useState([]);


    const data = [{
        x: 10,
        y: 20
    }, {
        x: 15, 
        y:10
    }]

    const createMockData = () => {
        let data = [];
        let value = 50;
        for(var i = 0; i < 366; i++){
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
            data.push({ x: date, y: value});
        }
        setGraphData(data)
    }

    useEffect(() => {
        createMockData();
    }, [])


    return (
        <div className="graph">
            <Line 
            data={{
                datasets: 
                [
                    {
                       type:"line",
                       data: graphData
                    }
                ]
            }}

            options= {{
                maintainAspectRatio: false,
                legend: false,
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                scales: {
                    xAxes: [
                        {
                            type: "time",
                            time: {
                                format: "MM/DD/YY",
                                tooltipFormat: "ll",
                            },
                            ticks: {
                                display: false,
                            }
                        }
                    ],
                    yAxes: [{
                        ticks: {
                            display: false
                        }
                    }]
                }
            }}

            />
            <h2>graph of stock</h2>
        </div>
    )
}

export default Graph
