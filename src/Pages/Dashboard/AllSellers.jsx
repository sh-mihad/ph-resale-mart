import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

    const { data: buyers, isLoading, } = useQuery({
        queryKey: ["buyers"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/all-sellers`)
            const data = await res.json()
            return data
        }
    })
    console.log(buyers);


    return (
        <div className=''>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>User Category</th>
                            <th>Manage User</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers?.map((buyer, i) => <tr
                                key={i}
                            >

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask rounded-full w-12 h-12">
                                                <img src={buyer.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{buyer.name}</div>
                                            <div className="text-sm opacity-50">{buyer.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-lg">{buyer.userCategory}</span>
                                </td>
                                <th>
                                    <div className="dropdown dropdown-right dropdown-end">
                                        <label tabIndex={0} className="btn btn-outline btn-xs">Manage</label>
                                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li className='text-sm'><a>Make Admin</a></li>
                                            <li className='text-sm'><a>Delete</a></li>
                                        </ul>
                                    </div>
                                </th>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;