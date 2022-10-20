import React from 'react';

import '../../styles/fonts.css';
import '../../styles/common.css';

import Intro from '../Intro';
import Specialization from "../Specialization";
import Portfolio from "../Portfolio";
import PricingPolicy from "../PricingPolicy";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import Copyright from "../Copyright";

function App() {
    return (
        <React.StrictMode>
            <Intro/>
            <Specialization />
            <Portfolio />
            <PricingPolicy />
            <ContactUs />
            <Footer />
            <Copyright />
        </React.StrictMode>
    );
}

export default App;
