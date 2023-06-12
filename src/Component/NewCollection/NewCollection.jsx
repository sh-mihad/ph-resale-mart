import React from "react";
import { Link } from "react-router-dom";

const NewCollection = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  New Collections
                </h2>

                <p className="mt-4 text-gray-500">
                  Visit our sites or subscribe our newsletters for new update of
                  products and collections.
                </p>
              </header>

              <Link
                to="/"
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-green-500 border rounded hover:shadow focus:outline-none focus:ring"
              >
                Shop All
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <Link to="/" className="block group">
                  <img
                    src="https://johnlewis.scene7.com/is/image/JohnLewis/laptop-carousel2-140922"
                    alt="laptop"
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Dell Laptop
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">৳25000</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/" className="block group">
                  <img
                    src="https://store.blackview.hk/cdn/shop/products/Tab7-wifi-Blue_01.jpg?v=1666853218"
                    alt="tablate"
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      New Tablate
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">৳10000</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
