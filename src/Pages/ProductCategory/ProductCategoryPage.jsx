import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserAuth } from '../../contex/AuthProvider';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const ProductCategoryPage = () => {

    const [order,setOrder] = useState(null)
   const{user} = useContext(UserAuth)
    const products = useLoaderData();

  console.log(order);
   
    return (
        <div className='grid gap-10 w-11/12 mx-auto grid-cols-1 lg:grid-cols-3 my-32 '>
           {
            products?.map((product,i)=><ProductCard
            key={i}
            setOrder={setOrder}
            product={product}
            ></ProductCard>)
           }

           
        {
            user && order &&    <ProductModal
            BuyerName ={user.displayName}
            BuyerEmail = {user.email}
            itemName = {order.name}
            location ={order.sellerLocation}
            itemPrice ={order.resalePrice}
            setOrder={setOrder}
            itemeId = {order._id}
            itemPhoto = {order.productPhoto}
            />
        }
        </div>
    );
};

export default ProductCategoryPage;