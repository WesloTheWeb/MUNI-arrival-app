import { React, useState } from 'react';
import classes from './RoutesAndStops.module.scss';

const { container, tabs, selectedOption } = classes;

const RoutesAndStops = (props) => {

    const [routeState, setRouteState] = useState(true);
    const [stopsState, setStopsState] = useState(false);

    const selectStopsHandler = () => {
        setRouteState(false);
        setStopsState(true);
    };

    const selectRoutesHandler = () => {
        setRouteState(true);
        setStopsState(false);
    }

    return (
        <section className={container}>
            <section className={tabs}>
                <div
                    className={routeState ? selectedOption : null}
                    onClick={selectRoutesHandler}
                >
                    Routes
                </div>
                <div
                    className={stopsState ? selectedOption : null}
                    onClick={selectStopsHandler}>
                    Stops
                </div>
            </section>
        </section>
    );
};


export default RoutesAndStops;