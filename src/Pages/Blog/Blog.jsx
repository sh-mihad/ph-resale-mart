import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        PH-Resale-Mart
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">The</span>
                    </span>{' '}
                    skill, is your best future best friend
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Course Arena is the biggest online tutorial platform.You can learn several course from here and grow your skill.
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
                <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div className="mr-4">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
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
                    </div>
                    <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">What are the different ways to manage a state in a React application?</h6>
                        <p className="mb-3 text-sm text-gray-900">
                        React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app
                        </p>

                    </div>
                </div>
                <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div className="mr-4">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
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
                    </div>
                    <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">
                        How does prototypical inheritance work?
                        </h6>
                        <p className="mb-3 text-sm text-gray-900">
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.
                        </p>

                    </div>
                </div>
                <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div className="mr-4">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
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
                    </div>
                    <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">
                        React vs. Angular vs. Vue?

                        </h6>
                        <p className="mb-3 text-sm text-gray-900">
                        Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                        </p>

                    </div>
                </div>
                <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                    <div className="mr-4">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
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
                    </div>
                    <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">
                            How does NodeJS handle multiple requests at the same time?
                        </h6>
                        <p className="mb-3 text-sm text-gray-900">
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;