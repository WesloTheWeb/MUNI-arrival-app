import React from 'react';
import classes from './Button.module.scss';

const { generalButton } = classes;

const Button = ({ title, clicked}) => {
    return (
        <button 
            className={generalButton}
            onClick={clicked}    
        >
            {title}
        </button>
    );
};

export default Button;