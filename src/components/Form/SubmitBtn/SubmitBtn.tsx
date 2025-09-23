import './SubmitBtn.scss';

type SubmitBtnProps = {
  variant?: 'small';
  text: string;
  isSubmitting: boolean;
}


export const SubmitBtn = ({ variant, text, isSubmitting }: SubmitBtnProps) => {


  return (
    <button 
      type="submit" 
      className={`submit-btn 
        ${variant === 'small' ? 'submit-btn--small' : ''} 
        ${(isSubmitting) ? 'submit-btn--submitting' : ''}
      `} 
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Sending...' : text}
    </button>
  )
}