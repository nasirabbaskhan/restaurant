import React, { useState } from "react";

export default function RestaurantSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contect, setContect] = useState("");

  const handleSignUp = async () => {
    console.log(email, password, c_password, name, city, address, contect);
    let result = await fetch("https://restaurant-ya6d.vercel.app/api/rest", {
      method: "POST",
      body: JSON.stringify({ email, password, name, city, address, contect }),
    });
    result = await result.json();
    console.log(result);
    if (result) {
      alert("Restaurant Registration Successfully");
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font max-w-[600px] mx-auto md:mt-6 -mt-5">
        <div className="  bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email ID"
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Confirm password
            </label>
            <input
              value={c_password}
              onChange={(e) => setC_Password(e.target.value)}
              placeholder="Confirm password"
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Restaurant Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Resturant Name"
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter City Name"
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Address
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Full Address"
              type="text"
              id="address"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Contect No
            </label>
            <input
              value={contect}
              onChange={(e) => setContect(e.target.value)}
              placeholder="Enter Contect No"
              type="text"
              id="contect"
              name="contact"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleSignUp}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
}
