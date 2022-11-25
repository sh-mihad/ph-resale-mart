import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-rose-700">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">{error.status}</h1>
            <div className="bg-white px-2 text-sm rounded rotate-12 absolute">
               {error.statusText}
            </div>
            <button className="mt-5">
                <p
                    className="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-rose-700 border border-current">
                        <Link to="/">Go Home</Link>
                    </span>
                </p>
            </button>
        </main>
    );
};

export default ErrorPage;