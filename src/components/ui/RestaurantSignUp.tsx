import { Span } from "next/dist/trace";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import React, { useState } from "react";
import * as yup from "yup";

interface Result {
  email: string;
  password: string;
  name: string;
  city: string;
  address: string;
  // Add other fields as needed
}

interface PostResponse {
  result: Result;
  success: boolean;
}
export default function RestaurantSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contect, setContect] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [errors, setErrors] = useState("");

  const router = useRouter();
  // for validation from yup
  const signupValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().max(10).min(4),
    name: yup.string().required().max(12).min(4),
    city: yup.string().required().max(12).min(4),
    address: yup.string().required().max(12).min(4),
    contect: yup.number().required().min(10),
  });
  const handleSignUp = async () => {
    // validation
    if (password !== c_password) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
    }

    try {
      const result = await signupValidationSchema.validate({
        email,
        password,
        name,
        city,
        address,
        contect,
      });
      if (!result) {
        return;
      }
      const response = await fetch(
        "https://restaurant-ya6d.vercel.app/api/rest",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            name,
            city,
            address,
            contect,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      // Handle success or failure based on responseData.success
      if (responseData.success) {
        const { result } = responseData;
        // console.log(result);
        // delete the password bcz we do not want to stor on localstorage
        delete result.password;
        localStorage.setItem("restaurantUser", JSON.stringify(result));
        // after signup we will direct to dashnoard
        router.push("/restaurant/dashboard");
        // Handle sign up failure
      }
      setErrors("");
    } catch (error: any) {
      console.log(error.errors);

      setErrors(error.errors);
    }
  };
  // console.log(errors);
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
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
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
              onChange={(e) => {
                setC_Password(e.target.value);
                setPasswordError(false);
              }}
              placeholder="Confirm password"
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {passwordError && (
            <span className="text-red-600">
              Password and Confirm Password fields are not Match
            </span>
          )}

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

          {/* show the errors */}
          <div className="mt-6 mb-4 text-red-700">{errors}</div>
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
