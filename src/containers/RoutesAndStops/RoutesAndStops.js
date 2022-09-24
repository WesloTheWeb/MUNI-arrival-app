import { React, useState } from 'react';
import MuniRoute from '../../components/MuniRoute/MuniRoute';
import classes from './RoutesAndStops.module.scss';

const { container, tabs, selectedOption, selectionGrid } = classes;

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
        <div className={container}>
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
            <section className={selectionGrid}>
                <MuniRoute
                    letter="F"
                    stopName="Market & Wharves"
                />
                <MuniRoute
                    letter="F"
                    stopName="Market & Wharves"
                />

            </section>
        </div>
    );
};


export default RoutesAndStops;