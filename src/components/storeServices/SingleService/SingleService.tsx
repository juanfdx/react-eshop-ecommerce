import './SingleService.scss';
// COMPONENTS
import { Icon } from '../../shared/Icon/Icon';

type SingleServiceProps = {
  type: string;
  title: string;
  text: string;
}


export const SingleService = ({ type, title, text }: SingleServiceProps) => {
  
  return (
    <div className='service'>
      <div className='service__icon-box'>
        <Icon type={type} className='service__icon'/>
      </div>

      <div className='service__text-box'>
        <h3 className='service__h3'>{title}</h3>
        <p className='service__p'>{text}</p>
      </div>      
    </div>
  )
}