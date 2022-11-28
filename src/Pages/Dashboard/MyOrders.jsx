import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../contex/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(UserAuth)

    const { data: bookings, isLoading, } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await fetch(`https://ph-resale-mart-server-sh-mihad.vercel.app/bookings?email=${user.email}`)
            const data = await res.json()
            return data
        }
    })
    // console.log(bookings);



    return (
        <div className='w-full'>
            {
               bookings?.length >=1? <>
                           <h1 className='text-3xl font-semibold'>Total Orders : {bookings?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Product Name</th>
                            <th>Location</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr
                                key={i}
                                className="hover">
                                <th>{i + 1}</th>
                                <td> <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={booking.itemPhoto?booking.itemPhoto :"https://nckenya.com/wp-content/themes/consultix/images/no-image-found-360x260.png"} className='' alt="Product" />
                                    </div>
                                </div></td>
                                <td>{booking.itemName ? booking.itemName :"Product Name is missing"}</td>
                                <td>{booking.location}</td>
                                <td>{booking.itemPrice} Taka</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
               </>
               :
               <div>
               <h1 className='text-3xl mb-10'>You have not any products let's book something</h1>
               <Link to="/"><button className='btn '>Home</button> </Link>
               </div>
            }
        </div>
    );
};

export default MyOrders;