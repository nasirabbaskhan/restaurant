// Define the type for the fetchData function
// export type FetchDataFunction = () => Promise<DbData[]>;
// interface DbData {
//   _id: string;
//   name: string;
// }
// export type FetchDataFunction = () => Promise<DbData[]>;

// Your fetchData function implementation
// const fetchData = async () => {
//   const res = await fetch("http://localhost:3000/api/rest", {
//     cache: "no-store",
//   });
//   const response = await res.json();
//   console.log("res new", response);
//   return response;
// };
export default async function Home() {
  // const res = await fetch("http://localhost:3000/api/rest");
  // const response = await res.json();
  // console.log("res new", response);
  // const data = await fetchData();
  // console.log(data);
  return (
    <>
      <h1>nasir</h1>
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
