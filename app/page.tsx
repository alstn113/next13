import { BASE_URL } from '@/constants';

const HomePage = async () => {
  const data = await fetch(`${BASE_URL}`).then((res) => res.json());

  return (
    <div>
      <div>Next13 Test Project</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default HomePage;
