import { FC } from 'react';
import InputField from '../components/InputField';

const Login: FC = () => {
  return (
    <div className="flex flex-col items-center h-screen pt-16 bg-gray-200">
      <div className='w-6/12 h-32 mb-4 bg-white'></div>
      <form className='flex flex-col items-center'>
        <InputField
          type='email'
          name='email'
          placeholder='Email'
          autoComplete='off'
          className='px-4 py-1 mb-4 w-72'
        />

        <InputField
          type='password'
          name='password'
          placeholder='Password'
          className='px-4 py-1 mb-4 w-72'
        />
        
        <button type="submit" className="px-10 py-1 font-medium text-red-600 bg-white border border-transparent shadow-sm py-1text-sm hover:bg-red-700 hover:text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
