import React from 'react';

const ProductCategory = () => {
    return (
        <div className="  bg-rose-500 my-8 py-14">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <a
            href="/"
            aria-label="View"
            className="inline-block mb-5 rounded-full sm:mx-auto"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          Explore From Categories
          </h2>
          <p className="text-base text-white md:text-lg sm:px-4">
          Laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats. Lid est laborum dolo rumes fugats untras.
          </p>
          <hr className="w-full my-8 border-gray-300" />
        </div>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 w-4/5 mx-auto'>
            {
                [...Array(3)].map(product=>
                    <div className="card card-compact w-full  bg-base-100 shadow-xl px-6">
                        <h1 className='text-2xl font-bold my-2'>Laptop</h1>
                    <figure><img  src="https://placeimg.com/400/225/arch" alt="Shoes" className='h-full' /></figure>
                    <div className="card-body">
                      <div className="card-actions ">
                        <button className="btn btn-xs btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>)
            }
        </div>
      </div>
    );
};

export default ProductCategory;