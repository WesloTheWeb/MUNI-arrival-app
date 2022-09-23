import { React, useContext } from 'react';
import { RoutesContext } from '../../context/RoutesContext';
import classes from './NavButton.module.scss';

const { generalButton } = classes;

const NavButton = ({ title, clicked }) => {

    const { viewingRoutes, setViewingRoutes } = useContext(RoutesContext);

    const handleClick = () => {
        setViewingRoutes(!viewingRoutes)
        console.log('Viewing routes:' + viewingRoutes)
    };

    return (
        <button
            className={generalButton}
            onClick={handleClick}
        >
            {viewingRoutes ? 'Return home' : title}
        </button>
    );
};

export default NavButton;