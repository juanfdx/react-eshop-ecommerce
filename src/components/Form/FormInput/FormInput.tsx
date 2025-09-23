import './FormInput.scss';

type FormInputProps = {
  inputRef?: React.RefObject<HTMLInputElement | null>;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}


export const FormInput = ({inputRef, id, type, name, placeholder, value, onChange, error}: FormInputProps) => {
  
  return (
    <div className='form-input'>
      <input 
        ref={inputRef}
        id={id}
        className='form-input__input'
        name={name}
        type={type} 
        placeholder={placeholder}
        autoComplete='off'
        value={value}
        onChange={onChange}
      />

      {error &&
        <p className='form-input__error'>{error}</p>
      }
    </div>
  )
}