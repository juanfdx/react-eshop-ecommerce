import './FormSelect.scss';
// COMPONENTS
import { FaAngleDown } from 'react-icons/fa6';


type FormSelectProps = {
  selectRef?: React.RefObject<HTMLSelectElement | null>;
  id: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {key: string , value: string}[]
}


export const FormSelect = ({selectRef, id, name, value, onChange, options}: FormSelectProps) => {
  

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
        {options?.map((option) => (
          <option key={option.value} value={option.value}>{option.key}</option>
        ))}
      </select>

      <FaAngleDown className='form-select__arrow' />
    </div>
  )
}