import React from 'react';

const Banner = () => {
    return (
        <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">PH-Resale Mart</p>
              </div>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Start making money!
               
               
              </h2>
              <p className="text-gray-700 text-base md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.</p>
            </div>
            <div className="flex items-center space-x-3">
              <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </a>
              <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="w-8/12 ">
              <img className="object-cover" src="https://m.media-amazon.com/images/I/61cjgSurDdS._AC_SL1500_.jpg" alt="" />
            </div>
            <div className="w-8/12 -ml-16 lg:-ml-32">
              <img className="object-cover" src="https://static-01.daraz.com.bd/p/e915ebcec36f67e341c6cac6ee9e97a6.png.png" alt="" />
            </div>
          </div>
        </div>
       
      </div>
    );
};

export default Banner;