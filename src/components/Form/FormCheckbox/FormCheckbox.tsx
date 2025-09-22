import './FormCheckbox.scss';
// COMPONENTS
import { BsCheckLg } from "react-icons/bs";


type FormCheckboxProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isChecked?: boolean
}


export const FormCheckbox = ({ onChange, isChecked = true }: FormCheckboxProps) => {
  
  return (
    <div className='form-checkbox'>
      
      <input 
        id='remember-me'
        className='form-checkbox__checkbox'
        type='checkbox'
        name='checkbox' 
        onChange={onChange}
      />

      <label htmlFor='remember-me' className='form-checkbox__label'>Remember me</label>

      <BsCheckLg 
        className={`form-checkbox__icon ${isChecked ? 'form-checkbox__icon--checked' : ''}`} 
      />

    </div>
  )
}