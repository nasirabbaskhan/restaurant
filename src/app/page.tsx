import Image from "next/image";
// interface DbData {
//   _id: string;
//   email: string;
//   password: string;
//   name: string;
//   city: string;
//   address: string;
//   contect: string;
// }
interface foodItems {
  name: string;
  price: number;
  path: string;
  description: string;
}

// Your fetchData function implementation
const fetchData = async () => {
  const res = await fetch("https://restaurant-ya6d.vercel.app/api/rest/food", {
    cache: "no-store",
  });
  const response = await res.json();
  // console.log("res new", response);
  return response;
};
export default async function Home() {
  const data: foodItems[] = await fetchData();
  // console.log(data);
  return (
    <>
      <h1>nasir</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>name: {item.name}</div>
            <div>price: {item.price}</div>

            <div>Path: {item.path}</div>
            <div>Description: {item.description}</div>
          </div>
        );
      })}
    </>
  );
}
