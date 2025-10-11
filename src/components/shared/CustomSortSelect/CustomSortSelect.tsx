import './CustomSortSelect.scss';
import { useEffect, useRef, useState } from 'react';
// INTERFACES
import type { SortOption } from '../../../data/data-selectors';


type CustomSortSelectProps = {
  options: SortOption[];
  value?: string | null; // stores the selected option's value
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const CustomSortSelect= ({options, value = null, placeholder = 'Select an option', onChange}: CustomSortSelectProps) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);
  const selectedLabel = selectedOption ? selectedOption.key : placeholder;


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
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


  const handleSelect = (option: SortOption) => {
    onChange?.(option.value);
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
      className="custom-sort-select"
      ref={containerRef}
      tabIndex={0}
      role="listbox"
      aria-expanded={isOpen}
      aria-activedescendant={
        highlightedIndex >= 0 ? `option-${options[highlightedIndex]._id}` : undefined
      }
      onKeyDown={handleKeyDown}
    >
      <div className="custom-sort-select__selected" onClick={() => setIsOpen(!isOpen)}>
        {selectedLabel}
        <span className="custom-sort-select__arrow">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <ul className="custom-sort-select__list">
          {options.map((option, index) => (
            <li
              key={option._id}
              id={`option-${option._id}`}
              role="option"
              className={`custom-sort-select__option ${
                option.value === value ? 'selected' : ''
              } ${highlightedIndex === index ? 'highlighted' : ''}`}
              onClick={() => handleSelect(option)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option.key}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}
