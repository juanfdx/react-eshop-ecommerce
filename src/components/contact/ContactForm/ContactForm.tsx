import './ContactForm.scss';
import { useEffect, useRef } from 'react';
import { Form, useActionData } from 'react-router';
// COMPONENTS
import { FormInput } from '../../Form/FormInput/FormInput';
import { FormTextarea } from '../../Form/FormTextarea/FormTextarea';
import { SubmitBtn } from '../../Form/SubmitBtn/SubmitBtn';



export const ContactForm = () => {

  const { errors } = useActionData() || {};

  const inputNameRef    = useRef<HTMLInputElement>(null);
  const inputEmailRef   = useRef<HTMLInputElement>(null);
  const inputSubjectRef = useRef<HTMLInputElement>(null);
  const inputMessageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputNameRef.current) inputNameRef.current.focus();
  }, [])
  

  return (
    <div className='contact-form'>
      <Form method='post'>

        {/* NAME */}
        <FormInput 
          inputRef={inputNameRef} 
          id={'name'} 
          type={'text'} 
          name={'name'}
          placeholder={'Your Name'} 
          error={errors?.name}
        />

        {/* EMAIL */}
        <FormInput 
          inputRef={inputEmailRef} 
          id={'email'} 
          type={'email'} 
          name={'email'} 
          placeholder={'Your Email'} 
          error={errors?.email}
        />

        {/* SUBJECT */}
        <FormInput 
          inputRef={inputSubjectRef} 
          id={'subject'} 
          type={'text'} 
          name={'subject'} 
          placeholder={'Subject'} 
          error={errors?.subject} 
        />

        {/* MESSAGE */}
        <FormTextarea 
          textareaRef={inputMessageRef} 
          id={'message'} 
          name={'message'} 
          placeholder={'Your Message'} 
          error={errors?.message} 
        />

        <SubmitBtn variant={'small'} text={'Send Message'} isSubmitting={false} />

      </Form>
    </div>
  )
}