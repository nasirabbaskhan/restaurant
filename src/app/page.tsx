// async function fetchData() {
//   try {
//     const res = await fetch("http://localhost:3000/api/rest");
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const response = await res.json();
//     console.log("res new", response);
//     return response;
//   } catch (error) {
//     console.log((error as { message: string }).message);
//   }
// }

export default async function Home() {
  // const data = await fetchData();
  // console.log("final data", data);
  return (
    <>
      <div>Hello</div>
      {/* {data.map((item: any) => {
        return (
          <div key={item._id}>
            <div>{item.name}</div>
          </div>
        );
      })} */}
    </>
  );
}
