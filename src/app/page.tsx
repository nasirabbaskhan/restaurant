interface DbData {
  _id: string;
  email: string;
  password: string;
  name: string;
  city: string;
  address: string;
  contect: string;
}

// Your fetchData function implementation
const fetchData = async () => {
  const res = await fetch("https://restaurant-ya6d.vercel.app/api/rest", {
    cache: "no-store",
  });
  const response = await res.json();
  // console.log("res new", response);
  return response;
};
export default async function Home() {
  const data: DbData[] = await fetchData();
  console.log(data);
  return (
    <>
      <h1>nasir</h1>
      {data.map((item) => {
        return (
          <div key={item._id}>
            <div>Email: {item.email}</div>
            <div>password: {item.password}</div>
            <div>name: {item.name}</div>

            <div>city: {item.city}</div>
            <div>address: {item.address}</div>
            <div>contect: {item.contect}</div>
          </div>
        );
      })}
    </>
  );
}
