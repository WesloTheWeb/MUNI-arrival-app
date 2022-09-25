import { React, useState } from 'react';
import MuniRoute from '../../components/MuniRoute/MuniRoute';
import MuniStop from '../../components/MuniStop/MuniStop';
import classes from './RoutesAndStops.module.scss';

const { container, tabs, selectedOption, selectionGrid } = classes;

const RoutesAndStops = ({ routeData, stopsData }) => {

    const [routeState, setRouteState] = useState(true);
    const [stopsState, setStopsState] = useState(false);

    const selectStopsHandler = () => {
        setRouteState(false);
        setStopsState(true);
    };

    const selectRoutesHandler = () => {
        setRouteState(true);
        setStopsState(false);
    };

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
                {routeState
                    ? (
                        routeData.map((line, idx) => {
                            return (
                                <>
                                    <MuniRoute
                                        key={idx}
                                        letter={line.id}
                                        muniRouteName={line.title}
                                    />
                                </>
                            );
                        })
                    )
                    : null
                }
                {stopsState
                    ? (
                        stopsData.map((location) => {
                            return (
                                <>
                                    <MuniStop
                                        muniStopName={location.stop.title}
                                    />
                                </>
                            );
                        })
                    ) : null}
            </section>
        </div>
    );
};

export default RoutesAndStops;