import React from 'react';
import { logo } from '../../assets/index';
import NavButton from '../NavButton/NavButton';
import classes from './Header.module.scss';

const { headerContainer } = classes;

const Header = ({viewRoutes}) => {
    return (
        <header className={headerContainer}>
            <figure>
                <img
                    src={logo}
                    alt="muni logo" />
                <h1>Muni Arrival App</h1>
            </figure>
            <div>
                <NavButton
                    clicked={viewRoutes}
                    title="view Routes & Stops"
                />
            </div>
        </header>
    );
};

export default Header;