import React from 'react';
import classes from './Button.module.scss';

const { generalButton } = classes;

const Button = ({title}) => {
    return (
        <button className={generalButton}>
            {title}
        </button>
    );
};

export default Button;