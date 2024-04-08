import DashBoardItemList from "@/components/ui/DashBoardItemList";
import RestaurantHeader from "@/components/ui/RestaurantHeader";
import Link from "next/link";

export default function Dashboard() {
  // const [foodItem, setFooditem] = useState(false);
  return (
    <>
      <RestaurantHeader />
      {/* go to add item page */}
      <Link href="/restaurant/dashboard/add">
        <button className="bg-blue-500 py-2 px-3 rounded text-white">
          Add Item
        </button>
      </Link>
      <DashBoardItemList />
    </>
  );
}
