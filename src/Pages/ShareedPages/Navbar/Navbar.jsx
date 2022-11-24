import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../../contex/AuthProvider';

const Navbar = () => {
    const { user,logout } = useContext(UserAuth)

    console.log(logout);

    const handleLogout =()=>{
       logout()
    }



    console.log(user)
    const menuItem = <>
        <li className='font-semibold '><Link to="/">Home</Link></li>
        <li className='font-semibold '><Link to="/about">About</Link></li>
      
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100">
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">PH-Resale Mart</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <>
                        <div className="avatar ml-2">
                            <div className="w-12  rounded-full">
                                <img src={user.photoURL} alt="userImage" title={user.displayName} />
                            </div>
                        </div>
                        <button onClick={handleLogout} className="btn ml-2">Logout</button>
                    </> 
                    :
                   <Link to="/login"><button className="btn ml-2">Login</button></Link>
                }
            </div>
        </div>  
    );
};

export default Navbar;