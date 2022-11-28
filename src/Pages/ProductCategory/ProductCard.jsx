import React from 'react';

const ProductCard = ({product,setOrder}) => {
    // console.log(product);
    const {name,resalePrice,productPhoto,productDetails,productCondtion,phoneNumber,orginalPrice,sellerNmae,sellerLocation,yearsOfUse,
      productStatus} = product
    return (
        <div className="card border  pt-5 bg-base-100 shadow-xl">
        <figure><img src={productPhoto}  className="h-80" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          {name}
         {
          productStatus === "sold" &&  <div className="badge badge-secondary">{productStatus}</div>
         }
          </h2>
          <div className="card-actions">
            <div className="badge badge-outline font-semibold p-2">Sale-Price : ${resalePrice}</div> 
            <div className="badge badge-outline font-semibold line-through p-2">Orginal Price : ${orginalPrice}</div>
          </div>
          <p className='font-semibold'>Product Condition : {productCondtion}</p>
          <p className='font-semibold'>Seller Name : {sellerNmae}</p>
          <p className='font-semibold'>Location : {sellerLocation}</p>
          <p className='font-semibold'>Years of use : {yearsOfUse} Year</p>
       
        <label htmlFor="booking-modal" disabled={productStatus==="sold"} onClick={setOrder(product)}  className="btn ">Get Product</label>
       
         
        </div>
      </div>
    );
};

export default ProductCard;