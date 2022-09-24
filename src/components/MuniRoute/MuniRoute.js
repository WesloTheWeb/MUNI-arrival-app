import React from 'react';
import classes from './MuniRoute.module.scss';

const {muniRoute, muniRouteCurrent, letterContainer } = classes;
const MuniRoute = ({disableHL, letter, stopName}) => {
    return (
        <div className={disableHL ? muniRouteCurrent : muniRoute}>
            <span className={letterContainer}>{letter}</span>
            <span>{stopName}</span>
        </div>
    );
};


export default MuniRoute;