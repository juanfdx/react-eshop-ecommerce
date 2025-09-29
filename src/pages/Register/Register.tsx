import './Register.scss';
import { Form, Link, useActionData } from 'react-router';
// COMPONENTS
import { FormInput } from '../../components/form/FormInput/FormInput';
import { FormPassword } from '../../components/form/FormPassword/FormPassword';
import { SubmitBtn } from '../../components/form/SubmitBtn/SubmitBtn';


export const Register = () => {

  const { errors } = useActionData() || {};


  return (
    <section className='register'>
      <div className='register__container'>
        <Form method='POST'>

          <h4 className='register__title'>register</h4>

          {/* FIRST NAME */}
          <FormInput 
            id={'firstName'}
            type={'text'} 
            name={'firstName'} 
            placeholder={'First Name'} 
            error={errors?.firstName}
          />

          {/* LAST NAME */}
          <FormInput 
            id={'lastName'}
            type={'text'} 
            name={'lastName'} 
            placeholder={'Last Name'}
            error={errors?.lastName} 
          />

          {/* EMAIL */}
          <FormInput 
            id={'email'} 
            type={'email'} 
            name={'email'} 
            placeholder={'Email'}
            error={errors?.email} 
          />

          {/* PASSWORD */}
          <FormPassword 
            id={'password'} 
            name={'password'} 
            placeholder={'Password'} 
            error={errors?.password} 
          />

          {/* CONFIRM PASSWORD */}
          <FormPassword 
            id={'confirmPassword'} 
            name={'confirmPassword'} 
            placeholder={'Confirm Password'} 
            error={errors?.confirmPassword} 
          />

          {/* BUTTON */}
          <SubmitBtn text={'Register'} isSubmitting={false} />

          <p className='register__text'>
            Already a member?
            <Link  to="/login" className="register__link">Login</Link>
          </p>

        </Form>
      </div>
    </section>
  )
}