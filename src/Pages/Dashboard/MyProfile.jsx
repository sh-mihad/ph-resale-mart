import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { UserAuth } from '../../contex/AuthProvider';

const MyProfile = () => {
    const { user,logout } = useContext(UserAuth)
    const { data: currrentUser, isLoading,error } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user.email}`,{
                headers:{
                    auhurizaton :`bearar ${localStorage.getItem("ph-resale-token")}`
                }
            })
            if(res.status === 401 || res.status === 403){
               logout().then(()=>{}).catch(err=>console.log(err))
            }
            const data = await res.json()
            return data
        }
    })

    // console.log(currrentUser);
    return (
        <div className='m-12'>
            <div className="avatar">
                <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={currrentUser?.photo} alt='' />
                </div>
            </div>
            {
                currrentUser?.userCategory === "Buyer" && <button className='btn '>Make A seller</button>
            }
        </div>
    );
};

export default MyProfile;