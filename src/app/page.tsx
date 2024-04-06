// interface DbData {
//   _id: string;
//   name: string;
// }

// Your fetchData function implementation
const fetchData = async () => {
  const res = await fetch("https://restaurant-ya6d.vercel.app/api/rest", {
    cache: "no-store",
  });
  const response = await res.json();
  console.log("res new", response);
  return response;
};
export default async function Home() {
  const data = await fetchData();
  console.log(data);
  return (
    <>
      <h1>nasir</h1>
      {data.map((item: any) => {
        return (
          <div key={item._id}>
            <div>{item.name}</div>
          </div>
        );
      })}
    </>
  );
}
