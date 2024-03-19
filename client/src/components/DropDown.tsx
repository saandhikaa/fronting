import { FC, useState } from 'react';

interface DropdownProps {
  text: string;
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ text, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        {text}
      </button>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => onSelect(option)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
