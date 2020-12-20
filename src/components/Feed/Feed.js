import React from 'react';
import "./Feed.css";
import Graph from "../Graph/Graph"

function Feed() {
    return (
        <div className="feed">
            <div className="feed__main">
                <div className="feed__chart">
                    <div className="feed__value">
                        <h2>price of stock</h2>
                        <p>change of stock during the day</p>
                    </div>
                    <div className="feed__graph">
                        <Graph />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feed
