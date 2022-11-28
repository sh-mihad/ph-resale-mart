import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { UserAuth } from '../../contex/AuthProvider';

const MyProfile = () => {
    const { user,logout } = useContext(UserAuth)
    const { data: currrentUser, isLoading,error } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await fetch(`https://ph-resale-mart-server-sh-mihad.vercel.app/users?email=${user.email}`,{
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
        <div className='card  p-10 bg-base-100 shadow-xl m-12 '>
            <div className='block  md:flex gap-10 '>
            <div className="avatar ">
                <div className="w-40 mx-auto lg:mx-0 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={currrentUser?.photo} alt='' />
                </div>
            </div>
            <div className=' md:flex-1 my-4 lg:my-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
            <p className='text-xl font-semibold'>
                Name : <br />
                <span className='text-2xl'>{currrentUser?.name}</span>
             </p>
             <p className='text-xl font-semibold'>
                Email : <br />
                <span className='text-2xl'>{currrentUser?.email}</span>
             </p>
            </div>
            </div>
            </div>
          
        </div>
    );
};

export default MyProfile;