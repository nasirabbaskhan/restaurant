import AddFoodItems from "@/components/ui/AddFoodItems";
import RestaurantHeader from "@/components/ui/RestaurantHeader";
import Link from "next/link";
import React from "react";

export default function AddFood() {
  return (
    <>
      <RestaurantHeader />
      <div className="mt-5">
        {/* go to DashBoard */}
        <Link href="/restaurant/dashboard">
          <button className="bg-blue-500 py-2 px-3 rounded text-white">
            Dash Board
          </button>
        </Link>
        <AddFoodItems />
      </div>
    </>
  );
}
