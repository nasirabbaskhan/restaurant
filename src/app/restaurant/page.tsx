"use client";
import React, { useState } from "react";
import RestaurantSignUp from "../components/RestaurantSignUp";
import RestaurantLogIn from "../components/RestaurantLogIn";
import RestaurantHeader from "../components/RestaurantHeader";

export default function Restaurant() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  return (
    <div>
      <RestaurantHeader />
      <h1 className="text-3xl text-center">SignUp/ Login page</h1>
      {isSignUp ? <RestaurantLogIn /> : <RestaurantSignUp />}

      <div className="lg:ml-96 ml-10 mt-2">
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? (
            <div className="text-2xl">
              Do not Have Account? <a className="text-blue-500">SignUp</a>
            </div>
          ) : (
            <div className="text-2xl">
              Already Have Account? <a className="text-blue-500">LogIn</a>{" "}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
