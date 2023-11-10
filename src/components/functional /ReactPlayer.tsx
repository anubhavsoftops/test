import useFetch from "./useFetchHook";

const ReactPlayerComponent = () => {

  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  console.log(data); // Add this line for debugging

  if (isLoading) return <>Loading...</>;

  if (error) return <>{"An error has occurred: " + error}</>;

  return (
    <div>
      <h1>hi data</h1>
      {!isLoading &&
        data?.map((e: any, idx: number) => <h1 key={idx}>{e.name}</h1>)}
    </div>
  );
};
export default ReactPlayerComponent;
