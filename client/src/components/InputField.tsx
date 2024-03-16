import { FC, InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
}

const InputField: FC<InputFieldProps> = ({ name, className, ...props }) => (
  <input id={name} name={name} {...props} className={className}/>
);

export default InputField;
