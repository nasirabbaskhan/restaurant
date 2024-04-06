import React from "react";

export default function RestaurantLogIn() {
  return (
    <>
      <section className="text-gray-600 body-font max-w-[600px] mx-auto md:mt-12 -mt-5">
        <div className="  bg-white rounded-lg p-8 flex flex-col  w-full mt-10 ">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Log In
          </h2>

          <div className="relative mb-8">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              placeholder="Enter Email ID"
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-8">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              password
            </label>
            <input
              placeholder="Enter Password"
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
}
