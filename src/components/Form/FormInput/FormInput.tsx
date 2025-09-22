import './FormInput.scss';

type FormInputProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: string;
}


export const FormInput = ({inputRef, id, type, name, placeholder, value, onChange, errors}: FormInputProps) => {
  
  return (
    <div className='form-input'>
      <input 
        ref={inputRef}
        id={id}
        className='form-input__input'
        name={name}
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      { (errors) &&
        <p className='form-input__error'>{errors}</p>
      }
    </div>
  )
}