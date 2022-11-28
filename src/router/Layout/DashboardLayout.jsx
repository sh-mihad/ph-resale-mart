import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserAuth } from '../../contex/AuthProvider';
import useUserStatus from '../../customHook/useUserStatus';
import Navbar from '../../Pages/ShareedPages/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(UserAuth);
    const [userRole] = useUserStatus(user.email)
    console.log(userRole)


    return (
        <div>
            <Navbar />

            <div className="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  m-10">

                    <Outlet></Outlet>


                </div>
                <div className="drawer-side border ">
                    <label htmlFor="dashboard-drawer " className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to="/dashboard/">My Profile</Link></li>
                        {
                            userRole?.userCategory === "Buyer" && <li><Link to="/dashboard/my-orders">My Orders</Link></li>
                        }
                        {
                            userRole?.userCategory === "Seller" && <>
                                <li><Link to="/dashboard/my-products">My Products</Link></li>
                                <li><Link to="/dashboard/add-product">Add Product</Link></li>
                            </>
                        }
                        {
                            userRole.userCategory === "Admin" && <>
                                <li><Link to="/dashboard/all-sellers">All Sellers </Link></li>
                                <li><Link to="/dashboard/all-buyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/all-admin">All Admin</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;