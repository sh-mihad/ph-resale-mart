import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
   
    return (
        <Link 
            to={`/category/${category._id}`}
            className="card card-compact w-full  bg-base-100 shadow-xl px-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
            <h1 className='text-2xl font-bold my-2'>{category.title}</h1>
            <figure><img src={category.image} alt="Shoes" className='h-52' /></figure>
            <div className="card-body">
                <div className="card-actions ">
                    <button className=" text-rose-600 font-bold text-md">Shop Now..</button>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;