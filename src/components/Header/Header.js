import React from 'react';
import { logo } from '../../assets/index';
import classes from './Header.module.scss';

const { headerContainer } = classes;

const Header = (props) => {
    return (
        <div className={headerContainer}>
            <figure>
                <img
                    src={logo}
                    alt="muni logo" />
                <h1>Muni Arrival App</h1>
            </figure>
        </div>
    );
};

export default Header;