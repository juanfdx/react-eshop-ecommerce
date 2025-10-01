import './FormSelect.scss';
// COMPONENTS
import { FaAngleDown } from 'react-icons/fa6';


type FormSelectProps = {
  selectRef?: React.RefObject<HTMLSelectElement | null>;
  id: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


export const FormSelect = ({selectRef, id, name, value, onChange}: FormSelectProps) => {
  

  return (
    <div className='form-select'>

      <select 
        ref={selectRef}
        id={id}
        className='form-select__select'
        name={name} 
        value={value}
        onChange={onChange}
      >
        <option value="newest">Newest</option>
        <option value="price-lowest">Price (lowest)</option>
        <option value="price-highest">Price (highest)</option>
        <option value="name-a">Name (a-z)</option>
        <option value="name-z">Name (z-a)</option>
      </select>

      <FaAngleDown className='form-select__arrow' />
    </div>
  )
}