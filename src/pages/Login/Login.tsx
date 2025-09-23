import './Login.scss';
import { Form, Link, useActionData } from 'react-router';
// COMPONENTS
import { FormInput } from '../../components/Form/FormInput/FormInput';
import { FormPassword } from '../../components/Form/FormPassword/FormPassword';
import { FormCheckbox } from '../../components/Form/FormCheckbox/FormCheckbox';
import { SubmitBtn } from '../../components/Form/SubmitBtn/SubmitBtn';


export const Login = () => {

  const { errors } = useActionData() || {};


  return (
    <section className='login'>
      <div className='login__container'>
        <Form method='post' className='login__form'>

          <h4 className='login__title'>login</h4>
          
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

          {/* REMEMBER ME */}
          <FormCheckbox 
            id={'rememberMe'} 
            label={'Remember me'} 
            name={'rememberMe'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.checked)}
          />

          <SubmitBtn text={'Login'} isSubmitting={false} />

          <p className='login__text'>
            Not a member yet?
            <Link  to="/register" className="login__link">Register</Link>
          </p>

        </Form>
      </div>
    </section>
  )
}