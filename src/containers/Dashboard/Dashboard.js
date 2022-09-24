import React from 'react';
import classes from './Dashboard.module.scss';

const { dashboardContainer, prediction, predictionNearest, predictionMinutes, predictionLabel
} = classes;

//TODO: Breakdown the CSS to SCSS module.

const Dashboard = (props) => {
    return (
        // <section className={dashboardContainer}>
        //     <div className={prediction}>
        //         <div className={predictionNearest}>
        //             <div className={predictionMinutes}>6</div>
        //             <div className={predictionLabel}>minutes</div>
        //         </div>
        //     </div>
        // </section>
        <div className="view view-predictions">
            <div className="predictions">
                <div className="prediction prediction--nearest">
                    <div className="prediction__minutes">6</div>
                    <div className="prediction__label">minutes</div>
                </div>
                <div className="prediction">
                    <div className="prediction__minutes">11</div>
                </div>
                <div className="prediction">
                    <div className="prediction__minutes">18</div>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;