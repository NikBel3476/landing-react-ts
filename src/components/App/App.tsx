import React from 'react';

import '../../styles/fonts.css';
import '../../styles/common.css';

import Intro from '../Intro';
import Specialization from "../Specialization";
import Portfolio from "../Portfolio";
import PricingPolicy from "../PricingPolicy";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

function App() {
    return (
        <div>
            <Intro/>
            <Specialization />
            <Portfolio />
            <PricingPolicy />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;

// npm install clsx – для классов
// npm i -D typescript-plugin-css-modules – для работы css modules + ts
