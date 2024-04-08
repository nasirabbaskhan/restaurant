"use client";
import { realpathSync } from "fs";
import { useState } from "react";
import * as yup from "yup";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import refreshData from "@/lib/utils/refresh";

export default function AddFoodItems() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");
  const { toast } = useToast();
  const itemValidationSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    path: yup.string().required().url(),
    description: yup.string().required(),
  });
  const handleAddItems = async () => {
    try {
      //validation
      const result = await itemValidationSchema.validate({
        name,
        price,
        path,
        description,
      });
      if (!result) {
        return;
      }

      let restData = JSON.parse(
        localStorage.getItem("restaurantUser") as string
      );
      let resto_id;
      if (restData) {
        resto_id = restData._id;
        console.log("resto_idis:", resto_id);
        console.log(restData);
      }

      const response = await fetch(
        "https://restaurant-ya6d.vercel.app/api/rest/food",
        {
          method: "POST",
          body: JSON.stringify({ name, price, path, description, resto_id }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const res = await response.json();
      console.log("nasir res", res);
      if (res.success) {
        toast({
          title: " Successfull",
          description: "Food item Successfully Added!",
        });
      } else {
        alert("food item is not submitted");
      }
      //post
      setErrors("");
      await refreshData();
    } catch (error: any) {
      console.log(error.errors);
      setErrors(error.errors);
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font max-w-[600px] mx-auto md:mt-6 -mt-5">
        <div className="  bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Add Your Items
          </h2>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Food Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Food Name"
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Price
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Path
            </label>
            <input
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="Enter Image Path"
              type="text"
              id="address"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Description
            </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              type="text"
              id="contect"
              name="contact"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* show  validation errors */}
          <div className="text-red-500">{errors}</div>
          <button
            onClick={handleAddItems}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Item
          </button>
        </div>
      </section>
    </>
  );
}
