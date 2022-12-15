import React from 'react';
import Pricing from '../../components/Pricing';
import PricingForMain from '../../components/PricingForMain';
import Header from '../../components/Header/Header';

const PricingPage = () => {
    return (
        <div>
            <Header />
            <Pricing />
            <PricingForMain />
        </div>
    );
}

export default PricingPage;
