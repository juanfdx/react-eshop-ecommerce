import './FormTextarea.scss';


type FormTextareaProps = {
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>;
  id: string;
  name: string;
  rows?: number;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: string;
}

export const FormTextarea = ({textareaRef, id, name, rows = 10, placeholder, value, onChange, error}: FormTextareaProps) => {
  
  return (
    <div className='form-textarea'>
      <textarea 
        ref={textareaRef}
        id={id}
        className='form-textarea__textarea'
        name={name}
        rows={rows}
        placeholder={placeholder}
        autoComplete='off'
        value={value}
        onChange={onChange}
      >
      </textarea>

      {error &&
        <p className='form-textarea__error'>{error}</p>
      }
    </div>
  )
}