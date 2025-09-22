import './SubmitBtn.scss';

type SubmitBtnProps = {
  text: string;
  isSubmitting: boolean;
}


export const SubmitBtn = ({ text, isSubmitting }: SubmitBtnProps) => {

  return (
    <button 
      type="submit" 
      className={`submit-btn ${(isSubmitting) ? 'submit-btn--submitting' : ''}`} 
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Sending...' : text}
    </button>
  )
}