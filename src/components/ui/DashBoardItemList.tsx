import { NextResponse } from "next/server";
import React from "react";

interface FoodItem {
  _id: string;
  name: string;
  price: number;
  path: string;
  description: string;
}
const fetchingGashboard = async () => {
  try {
    const response = await fetch(
      "https://restaurant-ya6d.vercel.app/api/rest/food/hh",
      {
        cache: "no-store",
      }
    );
    const res = await response.json();
    console.log("aneela res", res);

    return res;
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json(error);
  }
};
export default async function DashBoardItemList() {
  const data: FoodItem[] = await fetchingGashboard();
  console.log("datta,", data);
  return (
    <>
      <div className="container mt-6">
        <h1 className="text-4xl text-center mb-4">Food Items</h1>
        <table className="mx-auto">
          <thead>
            <tr>
              <th className="border border-black p-3">S.N</th>
              <th className="border border-black p-3">Name</th>
              <th className="border border-black p-3">Price</th>
              <th className="border border-black p-3">Description</th>
              <th className="border border-black p-3">Image</th>
              <th className="border border-black p-3"> Operation</th>
              <th className="border border-black p-3">Operation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border border-black p-3">{index + 1}</td>
                  <td className="border border-black p-3">{item.name}</td>
                  <td className="border border-black p-3">{item.price}</td>
                  <td className="border border-black p-3">
                    {item.description}
                  </td>
                  <td className="border border-black p-3">Image</td>
                  <td className="border border-black bg-blue-500 shadow-lg">
                    <button className=" py-2 px-6 text-white rounded">
                      Delete
                    </button>{" "}
                  </td>
                  <td className="border border-black bg-blue-500 shadow-lg">
                    <button className=" py-2 px-6 text-white rounded">
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
