import React from 'react';

import '../../styles/fonts.css';
import '../../styles/common.css';

import Intro from '../Intro';
import Specialization from "../Specialization";

function App() {
    return (
        <div>
            <Intro/>
            <Specialization />
        </div>
    );
}

export default App;

// npm install clsx – для классов
// npm i -D typescript-plugin-css-modules – для работы css modules + ts
