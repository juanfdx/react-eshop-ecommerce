import './CustomPriceSelect.scss';
import { useEffect, useRef, useState } from 'react';
// UTILS
import { formatPriceNoFraction } from '../../../utils/currencyUtils';

type CustomPriceSelectProps = {
  label: string; // e.g. "Min" or "Max"
  steps: number[];
  value: number | null;
  onChange: (value: string) => void;
  type: 'min' | 'max'; // helps filter options properly
  relatedValue?: number | null; // opposite bound (for filtering logic)
};


export const CustomPriceSelect = ({
  label,
  steps,
  value,
  onChange,
  type,
  relatedValue = null,
}: CustomPriceSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter steps based on type
  const filteredSteps =
    type === 'min'
      ? steps
          .slice(0, -1)
          .filter((s) => s !== 0)
          .filter((s) => relatedValue === null || s < relatedValue)
      : steps
          .slice(1)
          .filter((s) => relatedValue === null || s > relatedValue);

  // Combined options with placeholder
  const options = [{ key: label, value: '' }, ...filteredSteps.map((s) => ({ key: formatPriceNoFraction(s), value: s.toString() }))];

  const selectedOption = options.find((opt) => opt.value === (value ? value.toString() : ''));
  const selectedLabel = selectedOption ? selectedOption.key : label;

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

  // Close dropdown on resize
  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
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
        setHighlightedIndex((prev) => (prev <= 0 ? options.length - 1 : prev - 1));
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          handleSelect(options[highlightedIndex].value);
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
      ref={containerRef}
      tabIndex={0}
      className="custom-price-select"
      role="listbox"
      aria-expanded={isOpen}
      onKeyDown={handleKeyDown}
    >
      <div className="custom-price-select__selected" onClick={() => setIsOpen(!isOpen)}>
        {selectedLabel}
        <span className="custom-price-select__arrow">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <ul className="custom-price-select__list">
          {options.map((option, index) => (
            <li
              key={option.value || `placeholder-${label}`}
              className={`custom-price-select__option ${
                value?.toString() === option.value ? 'selected' : ''
              } ${highlightedIndex === index ? 'highlighted' : ''}`}
              onClick={() => handleSelect(option.value)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option.key}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
