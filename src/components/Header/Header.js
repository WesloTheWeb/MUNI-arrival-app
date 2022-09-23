import React from 'react';
import { logo } from '../../assets/index';
import Button from '../Button/Button';
import classes from './Header.module.scss';

const { headerContainer } = classes;

const Header = (props) => {
    return (
        <header className={headerContainer}>
            <figure>
                <img
                    src={logo}
                    alt="muni logo" />
                <h1>Muni Arrival App</h1>
            </figure>
            <div>
                <Button
                    title="view more"
                />
            </div>
        </header>
    );
};

export default Header;