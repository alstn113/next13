const HomePage = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    (res) => res.json(),
  );

  return <div>{JSON.stringify(data)}</div>;
};

export default HomePage;
