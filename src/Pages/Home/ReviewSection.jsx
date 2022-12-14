import React from 'react';

const ReviewSection = () => {
    return (
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-screen-sm sm:text-center sm:mx-auto">
     
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
         What Our Coustomer Says
          </h2>
          <p className="text-base  md:text-lg sm:px-4">
          Laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats. Lid est laborum dolo rumes fugats untras.
          </p>
          <hr className="w-full my-8 border-gray-300" />
        </div>
      <div className="grid gap-8 my-16 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="p-8 bg-white border rounded shadow-sm">
          <a
            href="/"
            aria-label="Article"
            title="Jingle Bells"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Jingle Bells
          </a>
          <p className="mb-5 text-gray-700">
            Some pilots get picked and become television programs. Some don't,
            become nothing.
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Vasile Melinte
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
               Seller
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <a
            href="/"
            aria-label="Article"
            title="Happy new Year"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Happy new Year
          </a>
          <p className="mb-5 text-gray-700">
            Pommy ipsum smeg head whizz morris dancers come hither, bugger
            codswallop gob. Taking the mick middle class bog.
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                John Doe
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Buyer
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <a
            href="/"
            aria-label="Article"
            title="Why i love C++"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
             Trustg Selling Platform
          </a>
          <p className="mb-5 text-gray-700">
            Sportacus andrew weatherall goose Refined gentlemen super mario des
            lynam alpha trion zap rowsdower.
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Andrew Larkin
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
               Seller
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ReviewSection;