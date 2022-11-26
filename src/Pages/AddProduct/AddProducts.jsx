import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { json, useNavigate } from 'react-router-dom';
import Spinner from '../../Component/Spinner';
import { UserAuth } from '../../contex/AuthProvider';

const AddProducts = () => {

    const [categorys,setCatetgorys] = useState([])
    const [loading ,setLoading] = useState(true)
   const {user} = useContext(UserAuth)
   const navigate = useNavigate()

//    console.log(user)
    useEffect(()=>{
      fetch("http://localhost:5000/product-categories")
      .then(res=>res.json())
      .then(data=>setCatetgorys(data))
    },[])

//    console.log(categorys);

    const {register,handleSubmit,formState: { errors },reset} = useForm()


    const submitedLoginForm = data => {
        // console.log(data);
        setLoading(true)
        const formData = new FormData();
        formData.append('image', data.photo[0]);

        fetch('https://api.imgbb.com/1/upload?key=2fbe1796a4bf3cd52ba5028ba7992a29', {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success && user){
                const image = result.data.display_url;
                
                const productDetails ={
                    name :data.name,
                    prductCategoryId : data.productCategoryId,
                    resalePrice : data.resalePrice,
                    orginalPrice : data.orginalPrice,
                    productCondtion : data.productConditon,
                    yearsOfUse : data.useTime,
                    productPhoto : image,
                    sellerLocation : data.location,
                    phoneNumber : data.phone,
                    productDetails : data.details,
                    sellerNmae : user.displayName,
                    sellerEmail : user.email

                }

                

                fetch("http://localhost:5000/add-product",{
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(productDetails)

                })
                .then(res=>res,json())
                .then(data=>{
                    if(data.ok){

                        toast.success("Your Product is sucecsesfuly Aded")
                        reset()
                        setLoading(false)
                        navigate("/dashboard/my-products")
                        
                    }
                })

            }
          
        })

        if(loading){
            return <Spinner/>
        }
       

    }

    return (
        <div className="w-full my-16">
        <div className=" w-full ">
            <div className="card w-9/12 mx-auto shadow-2xl bg-base-100">
                <h1 className="text-2xl mt-5 text-center font-bold">Add Product</h1>
                <form onSubmit={handleSubmit(submitedLoginForm)} className="card-body mb-0 ">
                   <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                   <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" placeholder="Product Name" className="input input-bordered"
                            {...register("name", {
                                required: "Invalid  Fild",

                            })}
                        />
                        {errors.name && <p className='text-sm mt-2 text-red-700'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <select className="select input-bordered input w-full max-w-xs" {...register("productCategoryId")}>
                      
                      {
                        categorys?.map(category=><option key={category._id} value={category._id}>{category.title} </option>)
                      }
                        
                    </select>

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input type="number" placeholder="Resale Price" className="input input-bordered"
                            {...register("resalePrice", {
                                required: "Invalid  Fild",

                            })}
                        />
                        {errors.resalePrice && <p className='text-sm mt-2 text-red-700'>{errors.resalePrice.message}</p>}
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Orginal Price</span>
                        </label>
                        <input type="number" placeholder="Orginal Price" className="input input-bordered"
                            {...register("orginalPrice", {
                                required: "Invalid  Fild",

                            })}
                        />
                        {errors.orginalPrice && <p className='text-sm mt-2 text-red-700'>{errors.orginalPrice.message}</p>}
                    </div>

                  
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Condition</span>
                        </label>
                        <select className="select input-bordered input w-full max-w-xs" {...register("productConditon")}>
                        <option value="Fresh Conditon">Fresh Conditon </option>
                        <option value="Fair Conditoin">Fair Conditoin</option>
                        <option value="Good Condition">Good Condition</option>
                    </select>

                    </div>
                      
                  
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">years of use</span>
                        </label>
                        <input type="number" placeholder="years of use" className="input input-bordered"
                            {...register("useTime", {
                                required: "Invalid  Fild",

                            })}
                        />
                        {errors.useTime && <p className='text-sm mt-2 text-red-700'>{errors.useTime.message}</p>}
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text mt-3">Upload Product Photo</span>
                        </label>
                        <input type="file" className='' placeholder="email" {...register("photo", {
                            required: "Upload your photo"
                        })} />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Locatioin</span>
                        </label>
                        <input type="text" placeholder="Location" className="input input-bordered"
                            {...register("location", {
                                required: "Invalid Password Fild"
                            })}

                        />
                        {errors.location && <p className='text-sm mt-2 text-red-700'>{errors.location.message}</p>}

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="number" placeholder="Phone Number" className="input input-bordered"
                            {...register("phone", {
                                required: "Invalid  Fild",

                            })}
                        />
                        {errors.phone && <p className='text-sm mt-2 text-red-700'>{errors.phone.message}</p>}
                    </div>
                   </div>
                   <div className="form-control ">
                    <textarea className="textarea  w-full input-bordered" placeholder="About Something for your prduct" 
                    {...register("details",{
                        required:"Invalid Fild"
                    })}
                    
                    ></textarea>
                        {errors.details && <p className='text-sm mt-2 text-red-700'>{errors.details.message}</p>}
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary w-full" value="Add Products" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddProducts;