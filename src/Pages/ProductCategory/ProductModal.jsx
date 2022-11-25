import React from 'react';

const ProductModal = ({BuyerName,BuyerEmail,itemPrice,itemName,location}) => {
    return (
        <div>
            {/* The button to open modal */}
           

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl">{itemName}</h3>
                   <div className='flex gap-5'>
                   <h3 className="font-semi bold mt-5 text-lg">Prie : {itemPrice}</h3>
                    <h3 className="font-semibold mt-5 text-lg">Location : {location}</h3>
                   </div>
                    <div className="form-control">
                            <label className="label">
                               
                            </label>
                            <input type="text" defaultValue={BuyerName} disabled className='input input-bordered' placeholder="email" />

                        </div>
                    <div className="form-control">
                            <label className="label">
                               
                            </label>
                            <input type="email" defaultValue={BuyerEmail} disabled className='input input-bordered' placeholder="email" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                               
                            </label>
                            <input type="number"  className='input input-bordered' placeholder="Phone Number" />

                        </div>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn w-full">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;