import './Icon.scss';
// COMPONENTS
import { FiMenu } from "react-icons/fi";
import { UserIcon } from '../../CustomIcons/UserIcon';
import { MagnifierIcon } from '../../CustomIcons/MagnifierIcon';
import { CartIcon } from '../../CustomIcons/CartIcon';

type IconProps = {
  type: string;
  className?: string
};


export const Icon = ({ type, className }: IconProps) => {
  
  return (
    <>
      {type === 'menu' && (
        <FiMenu className={`icon ${className}`} />
      )}
      {type === 'user' && (
        <UserIcon className={`icon ${className}`} />
      )}
      {type === 'magnifier' && (
        <MagnifierIcon className={`icon ${className}`} />
      )}
      {type === 'cart' && (
        <CartIcon className={`icon ${className}`} />
      )}
    </>
  )
}