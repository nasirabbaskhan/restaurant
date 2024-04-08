import { Span } from "next/dist/trace";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as yup from "yup";

export default function RestaurantLogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMached, setIsmatched] = useState(true);
  const [result, setResult] = useState(""); // for geting response in result
  const [errors, setErrors] = useState(""); // for validation

  const router = useRouter();

  // for validation from yup
  const signInValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().max(10).min(4),
  });
  const handleLogin = async () => {
    try {
      const results = await signInValidationSchema.validate({
        email,
        password,
      });
      if (!results) {
        return;
      }
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
        setResult("");
        router.push("/restaurant/dashboard");
      } else {
        setIsmatched(false);
        // alert("login faild");
      }
      setErrors("");
    } catch (error: any) {
      console.log(error.errors);

      setErrors(error.errors);
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

            {!isMached && (
              <span className="text-red-600">
                Possword or Email is not match
              </span>
            )}
          </div>
          <div className="mt-6 mb-4 text-red-700">{errors}</div>
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
