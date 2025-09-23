import './FormCheckbox.scss';
// COMPONENTS
import { BsCheckLg } from "react-icons/bs";


type FormCheckboxProps = {
  id: string;
  name: string;
  label: string;
  isChecked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const FormCheckbox = ({ id, label, name, isChecked = true, onChange }: FormCheckboxProps) => {
  
  return (
    <div className='form-checkbox'>
      
      <input 
        id={id}
        className='form-checkbox__checkbox'
        type='checkbox'
        name={name} 
        onChange={onChange}
      />

      <label htmlFor={id} className='form-checkbox__label'>{label}</label>

      <BsCheckLg 
        className={`form-checkbox__icon ${isChecked ? 'form-checkbox__icon--checked' : ''}`} 
      />

    </div>
  )
}