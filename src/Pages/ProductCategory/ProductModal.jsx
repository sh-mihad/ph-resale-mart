import React from 'react';
import toast from 'react-hot-toast';


const ProductModal = ({ BuyerName, BuyerEmail, itemPrice, itemName, location, setOrder,itemeId ,itemPhoto}) => {


    const handleBooking = (event) => {
        event.preventDefault()
        // setOrder(null)

        const form = event.target;
   
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking ={
            name,
            email,
            phone,
            itemeId,
            itemPrice,
            location,
            itemName,
            itemPhoto
        }

        fetch("http://localhost:5000/bookings",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        }).then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success("Booking is Successfully Done")
                setOrder(null)
            }
        })
        .catch(err=>{
            toast.error("Something went to wrong")
        })

      
        

    }


    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl">{itemName}</h3>

                    <div className='flex gap-5 mt-5'>
                    <h3 className="font-semiboldbold text-xl">Product Price : {itemPrice}</h3>  
                    <h3 className="font-semiboldbold text-xl">Locaton: {location}</h3>  
                    </div>

                    <form onSubmit={handleBooking}>

                        <div className="form-control">
                            <label className="label">

                            </label>
                            <input type="text" name='name' defaultValue={BuyerName} readOnly className='input input-bordered' placeholder="email" />

                        </div>
                        <div className="form-control">
                            <label className="label">

                            </label>
                            <input type="email" name='email' defaultValue={BuyerEmail} readOnly className='input input-bordered' placeholder="email" />

                        </div>
                        <div className="form-control">
                            <label className="label">

                            </label>
                            <input type="number" name='phone' required className='input input-bordered' placeholder="Phone Number" />

                        </div>
                        <input type="submit" className='btn w-full mt-4' value="Book Now" />
                    </form>
                    <div className="modal-action">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;