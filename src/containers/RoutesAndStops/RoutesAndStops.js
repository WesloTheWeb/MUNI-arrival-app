import { React, useState } from 'react';
import MuniRoute from '../../components/MuniRoute/MuniRoute';
import MuniStop from '../../components/MuniStop/MuniStop';
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
                {routeState
                    ? (<>
                        <MuniRoute
                            letter="F"
                            muniRouteName="Market & Wharves"
                        />
                        <MuniRoute
                            letter="F"
                            muniRouteName="Market & Wharves"
                        />
                    </>
                    )
                    : null
                }
                {stopsState
                    ? (
                        <>
                            <MuniStop
                                muniStopName="Jones St & Beach St."
                            />
                        </>
                    ) : null}
            </section>
        </div>
    );
};

export default RoutesAndStops;