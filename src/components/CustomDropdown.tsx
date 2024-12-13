import { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  label?: string;
  name?: string;
}

const CustomDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  required,
  label,
  name
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label} {required && <span className="text-purple-600">*</span>}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg 
                 focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                 transition-all duration-200 flex justify-between items-center"
      >
        <span className={value ? 'text-gray-900' : 'text-gray-500'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg 
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 
                     ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`
        absolute z-20 left-0 mt-2 w-full 
        bg-white rounded-xl shadow-lg 
        transform opacity-0 scale-95 
        transition-all duration-200 ease-in-out
        ${isOpen ? 'opacity-100 scale-100' : 'invisible'}
      `}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              onChange(option.value);
              setIsOpen(false);
            }}
            className="block w-full px-4 py-3 text-left text-gray-700 
                      hover:bg-purple-50 hover:text-purple-600
                      transition-colors duration-200 
                      first:rounded-t-xl last:rounded-b-xl"
          >
            {option.label}
          </button>
        ))}
      </div>
      
      {/* Hidden input for form submission */}
      <input
        type="hidden"
        name={name}
        value={value}
        required={required}
      />
    </div>
  );
};

export default CustomDropdown; 