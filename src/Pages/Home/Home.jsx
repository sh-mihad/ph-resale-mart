import React from 'react';
import Spinner from '../../Component/Spinner';
import Banner from './Banner';
import ProductCategory from './ProductCategory';
import ReviewSection from './ReviewSection';

const Home = () => {
    return (
        <div>
           <Banner/>
           <ProductCategory/>
           
           <ReviewSection/>
        </div>
    );
};

export default Home;