export const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api/rest", {
    cache: "no-store",
  });
  const response = await res.json();
  console.log("res new", response);
  return response;
};

export default async function Home() {
  const data = await fetchData();
  // console.log(data);
  return (
    <>
      <div>Hello</div>
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
