import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div>
      <h1 className='mb-2 text-2xl text-blue-500'>Welcome to the Home Page</h1>
      <p className='mb-4'>This is the home page of your application.</p>
      <Link to="/login" className='italic text-blue-600'>Go to login page</Link>
    </div>
  );
}

export default Home;
