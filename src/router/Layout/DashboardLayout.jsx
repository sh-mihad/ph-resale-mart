import React from 'react';
import Navbar from '../../Pages/ShareedPages/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="drawer">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                   
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                       
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;