import './CustomSelect.scss';
import { useEffect, useRef, useState } from 'react';

type CustomSelectProps<T extends string | number> = {
  options: T[];
  value?: T | null;
  onChange?: (value: T) => void;
  placeholder?: string;
  small?: boolean;
};

export const CustomSelect = <T extends string | number>({
  options = [],
  value = null,
  onChange,
  placeholder = 'Select an option',
  small = false
}: CustomSelectProps<T>) => {

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // If value is 0 (falsy), fallback to placeholder only if nullish
  const selectedLabel = value ?? placeholder;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // The dropdown closes immediately on any screen resize
  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleSelect = (option: T) => {
    onChange?.(option);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setIsOpen(true);
        setHighlightedIndex((prev) => (prev + 1) % options.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setIsOpen(true);
        setHighlightedIndex((prev) =>
          prev <= 0 ? options.length - 1 : prev - 1
        );
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          handleSelect(options[highlightedIndex]);
        } else {
          setIsOpen((o) => !o);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };


  
  return (
    <div
      className={`custom-select`}
      ref={containerRef}
      tabIndex={0}
      role="listbox"
      aria-expanded={isOpen}
      aria-activedescendant={
        highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined
      }
      onKeyDown={handleKeyDown}
    >
      <div
        className={`custom-select__selected ${small ? 'custom-select__selected--small' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLabel}
        <span className="custom-select__arrow">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <ul className="custom-select__list">
          {options.map((option, index) => (
            <li
              key={option}
              id={`option-${index}`}
              role="option"
              className={`custom-select__option ${
                option === value ? 'selected' : ''
              } ${highlightedIndex === index ? 'highlighted' : ''}`}
              onClick={() => handleSelect(option)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
