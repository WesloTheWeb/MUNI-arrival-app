import { React, useState } from 'react';
import MuniRoute from '../../components/MuniRoute/MuniRoute';
import classes from './CurrentStop.module.scss';

const { container, selectedTag, streetNameContainer, currentStopContainer } = classes;
const CurrentStop = ({ letter, stopName, location }) => {

    // TODO: Find a way to import svgs without the inline jsx.
    const mapPin = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
    `

    return (
        <section className={container}>
            <span className={selectedTag}>selected</span>
            <div className={currentStopContainer}>
                <MuniRoute
                    disableHL="true"
                    letter="F"
                    stopName="Market & Wharves"
                />
            </div>
            <span className={streetNameContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFF" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Jones St &amp; Beach St
            </span>
        </section>
    );
};

export default CurrentStop;