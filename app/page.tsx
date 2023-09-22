import { BASE_URL } from '@/constants';

const HomePage = async () => {
  const data = await fetch(`${BASE_URL}`).then((res) => res.json());

  return <div>{JSON.stringify(data)}</div>;
};

export default HomePage;
