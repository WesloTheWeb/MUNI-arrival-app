import React from 'react';
import classes from './MuniStop.module.scss';

const { muniStop } = classes;

const MuniStop = ({muniStopName}) => {
    return (
        <div className={muniStop}>
            {muniStopName}
        </div>
    );
};


export default MuniStop;