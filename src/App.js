import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import CurrentStop from './containers/CurrentStop/CurrentStop';
import Dashboard from './containers/Dashboard/Dashboard';

function App() {

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF">
      <defs>
        <font id="muniapp" horiz-adv-x="1000" >
          <font-face font-family="muniapp" font-weight="400" font-stretch="normal" units-per-em="1000" ascent="850" descent="-150" />
          <missing-glyph horiz-adv-x="1000" />
          <glyph glyph-name="left-open-big" unicode="&#xe800;" d="M452-20q26-26 0-48-26-26-48 0l-392 394q-24 24 0 50l392 394q22 26 48 0 26-22 0-48l-358-372z" fill="#FFF" horiz-adv-x="465" />
          <glyph glyph-name="right-open-big" unicode="&#xe801;" d="M13-20l358 370-358 372q-26 26 0 48 26 26 48 0l392-394q24-26 0-50l-392-394q-22-26-48 0-26 22 0 48z" fill="#FFF" horiz-adv-x="465" />
          <glyph glyph-name="ccw" unicode="&#xe802;" d="M532 736q170 0 289-120t119-290-119-290-289-120q-142 0-252 88l70 74q84-60 182-60 126 0 216 90t90 218-90 218-216 90q-124 0-214-87t-92-211l142 0-184-204-184 204 124 0q2 166 122 283t286 117z" fill="#FFF" horiz-adv-x="940" />
          <glyph glyph-name="location" unicode="&#xe803;" d="M250 750q104 0 177-73t73-177q0-106-62-243t-126-223l-62-84q-10 12-27 35t-60 89-76 130-60 147-27 149q0 104 73 177t177 73z m0-388q56 0 96 40t40 96-40 95-96 39-95-39-39-95 39-96 95-40z" fill="#FFF" horiz-adv-x="500" />
        </font>
      </defs>
      </svg>
  `

  return (
    <div className="App">
      <Header />
      <CurrentStop
        letter="F"
        stopName="Market & Wharves"
      />
    </div>
  );
}

export default App;

{/*  */}