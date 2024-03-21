import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: number;
  text: string;
  color?: 'green' | 'red' | 'blue';
}

const Button: FC<ButtonProps> = ({ size, text, color, ...props }) => {
  let colorClass = '';
  switch (color) {
    case 'green':
      colorClass = 'text-green-600 hover:bg-green-500 hover:text-white';
      break;
    case 'red':
      colorClass = 'text-red-600 hover:bg-red-500 hover:text-white';
      break;
    case 'blue':
      colorClass = 'text-blue-600 hover:bg-blue-500 hover:text-white';
      break;
    default:
      colorClass = 'text-gray-600 hover:bg-gray-500 hover:text-white';
      break;
  }

  return (
    <button className={`w-${size} h-8 ${colorClass} bg-white font-bold`} {...props}>
      { text }
    </button>
  );
};

export default Button;
