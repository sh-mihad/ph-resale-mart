import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/ShareedPages/Footer';
import Navbar from '../../Pages/ShareedPages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Main;