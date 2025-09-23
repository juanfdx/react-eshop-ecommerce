import './FormPassword.scss';
import { useState } from 'react';
// COMPONENTS
import { BsEye, BsEyeSlash } from "react-icons/bs";

type FormPasswordProps = {
  inputRef?: React.RefObject<HTMLInputElement>
  id: string
  name: string
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error: string
}


export const FormPassword = ({inputRef, id, name, placeholder, value, onChange, error}: FormPasswordProps) => {

  const [showPassword, setShowPassword] = useState(false);

  
  return (
    <div className='form-password'>

      <button 
        type='button'
        className={`form-password__show-password-btn`} 
        onClick={()=> setShowPassword(!showPassword) }
      >
        {showPassword  ? ( 
          <BsEyeSlash className='form-password__icon' />
        ) : (
          <BsEye className='form-password__icon' />
        )}
      </button>

      <input 
        ref={inputRef}
        id={id}
        className='form-password__input' 
        type={showPassword ? 'text' : 'password'}
        autoComplete='off'
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error &&
        <p className='form-password__label'>{error}</p>
      }

    </div>
  )
}