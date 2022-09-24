import React from 'react';
import classes from './MuniRoute.module.scss';

const {muniRoute, muniRouteCurrent, letterContainer } = classes;
const MuniRoute = ({disableHL, letter, muniRouteName}) => {
    return (
        <div className={disableHL ? muniRouteCurrent : muniRoute}>
            <span className={letterContainer}>{letter}</span>
            <span>{muniRouteName}</span>
        </div>
    );
};


export default MuniRoute;