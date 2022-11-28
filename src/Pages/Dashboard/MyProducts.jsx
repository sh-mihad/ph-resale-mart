import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../contex/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(UserAuth)
    const { data: myProducts, refetch } = useQuery({
        queryKey: ["myProducts"],
        queryFn: async () => {
            const res = await fetch(`https://ph-resale-mart-server-sh-mihad.vercel.app/get-products?email=${user?.email}`)
            const data = await res.json()
            console.log(data)
            return data;
        }
    })

    // product status update handler
    const handleSold = (id) => {
        fetch(`https://ph-resale-mart-server-sh-mihad.vercel.app/product-status/${id}`, {
            method: "PUT",

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Your Product Suceccfully Sold")
                    refetch()
                }
            })
    }

    // produt delete handler
    const handleDelete = (id) => {
        fetch(`https://ph-resale-mart-server-sh-mihad.vercel.app/delete-products/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Delete Successfull")
                    refetch()
                }
            })
    }
    // console.log(myProducts)
    return (
        <div className='w-full'>
            {
                myProducts?.length >= 1 ? <>
                    <h1 className='text-3xl font-semibold'>Total Products : {myProducts?.length}</h1>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Photo</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Manage Product</th>
                                    <th>Delete Product</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myProducts?.map((product, i) => <tr
                                        key={i}
                                        className="hover">
                                        <th>{i + 1}</th>
                                        <td> <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src={product.productPhoto ? product.productPhoto : "https://nckenya.com/wp-content/themes/consultix/images/no-image-found-360x260.png"} className='' alt="Product" />
                                            </div>
                                        </div></td>
                                        <td>{product.name ? product.name : "Product Name is missing"}</td>
                                        <td>{product.resalePrice} Taka</td>
                                        <td>
                                            {
                                                product.productStatus === "sold" ? <h4 className=' text-green-600 font-bold' disabled>Sold</h4>
                                                    :
                                                    <>
                                                        <div className="dropdown dropdown-right">
                                                            <label tabIndex={0} className="btn btn-xs m-1">Manage</label>
                                                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                                <li onClick={()=>handleSold(product?._id)}> <a>Selled</a></li>
                                                                <li><a>Advertised</a></li>
                                                            </ul>
                                                        </div>
                                                    </>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(product?._id)} className='btn btn-sm'>Delete</button>
                                        </td>
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

export default MyProducts;