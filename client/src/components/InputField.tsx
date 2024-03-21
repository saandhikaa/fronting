import { FC, InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  size: number;
  name: string;
}

const InputField: FC<InputFieldProps> = ({ size, name, ...props }) => (
  <div className='flex mb-4 -translate-x-14'>
    <label htmlFor={name} className='w-28'>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
    <input id={name} name={name} {...props} className={`w-${size} h-8 px-2`}/>
  </div>
);

export default InputField;
