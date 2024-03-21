import { FC } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login: FC = () => {
  return (
    <div className="flex flex-col items-center h-screen pt-16 bg-gray-200">
      <div className='w-2/3 h-32 mb-4 bg-white'></div>
      <form action='/dashboard' className='flex flex-col items-center'>
        <InputField
          size={72}
          type='text'
          name='username'
          placeholder='Your username'
          autoComplete='off'
        />

        <InputField
          size={72}
          type='password'
          name='password'
          placeholder='Your password'
        />
        
        <Button
          size={72}
          text="Login"
          type="submit"
          color="green"
        />
      </form>
    </div>
  );
};

export default Login;
