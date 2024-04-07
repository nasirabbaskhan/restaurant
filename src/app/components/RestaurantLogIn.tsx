import { Span } from "next/dist/trace";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function RestaurantLogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false); // for validation
  const [result, setResult] = useState(); // for geting response in result
  const router = useRouter();
  const handleLogin = async () => {
    if (!email || !password) {
      setErr(true);
      return false;
    } else {
      setErr(false);
    }
    try {
      const res = await fetch("https://restaurant-ya6d.vercel.app/api/rest", {
        method: "POST",
        body: JSON.stringify({ email, password, logIn: true }),
        //logIn flage pass to API for login
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const resData = await res.json();
      console.log("resdata", resData);
      const { result } = resData;
      setResult(result);
      if (resData.success) {
        const { result } = resData;
        // alert("login successful");
        delete result.password;
        localStorage.setItem("restaurantUser", JSON.stringify(result));
        router.push("/restaurant/dashboard");
      } else {
        alert("login faild");
      }
    } catch (error) {
      console.log((error as { message: string }).message);
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font max-w-[600px] mx-auto md:mt-12 -mt-5">
        <div className="  bg-white rounded-lg p-8 flex flex-col  w-full mt-10 ">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Log In
          </h2>

          <div className="relative mb-8">
            <div>
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email ID"
                value={email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {err && !email && (
              <span className="text-red-600">Email field is required *</span>
            )}
          </div>
          <div className="relative mb-8">
            <div>
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                value={password}
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {err && !password && (
              <span className="text-red-600">Password field is required *</span>
            )}
            {!result && (
              <span className="text-red-600">
                Possword or Email is not match
              </span>
            )}
          </div>

          <button
            onClick={handleLogin}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Log In
          </button>
        </div>
      </section>
    </>
  );
}
