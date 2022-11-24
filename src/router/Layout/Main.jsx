import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/ShareedPages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet/>
        </div>
    );
};

export default Main;