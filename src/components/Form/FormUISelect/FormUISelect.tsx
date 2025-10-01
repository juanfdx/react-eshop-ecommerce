import './FormUISelect.scss';
// COMPONENTS
import { FaAngleDown } from 'react-icons/fa6';

type FormSelectProps = {
  selectRef?: React.RefObject<HTMLSelectElement | null>;
  id: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}



export const FormUISelect = ({selectRef, id, name, value, onChange}: FormSelectProps) => {
  
  //Non-standard custom UI Select
  return (
    <div className='form-ui-select'>

      <select 
        ref={selectRef}
        id={id}
        name={name} 
        value={value}
        onChange={onChange}
      >
        <button>
          {/* @ts-expect-error: Non-standard element used for custom UI */}
          <selectedcontent></selectedcontent>
          <FaAngleDown className='form-ui-select__arrow' />
        </button>
        <option value="newest">Newest</option>
        <option value="price-lowest">Price (lowest)</option>
        <option value="price-highest">Price (highest)</option>
        <option value="name-a">Name (a-z)</option>
        <option value="name-z">Name (z-a)</option>
      </select>

    </div>
  )
}