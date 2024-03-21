import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DropdownProps {
  text: string;
  options: { label: string; path: string }[];
}

const Dropdown: FC<DropdownProps> = ({ text, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="py-1 ">
        {text}
      </button>
      {isOpen && (
        <div className="mb-2">
          {options.map((option) => (
            <button
              key={option.label}
              onClick={() => handleSelect(option.path)}
              className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
