import './Icon.scss';
// COMPONENTS
import { FiMenu } from "react-icons/fi";
import { UserIcon } from '../customIcons/UserIcon';
import { MagnifierIcon } from '../customIcons/MagnifierIcon';
import { CartIcon } from '../customIcons/CartIcon';
import { BsArrowRight } from 'react-icons/bs';
import { Shipping } from '../customIcons/Shipping';
import { Guarantee } from '../customIcons/Guarantee';
import { Support } from '../customIcons/Support';
import { Payment } from '../customIcons/Payment';

type IconProps = {
  type: string;
  className?: string
};


export const Icon = ({ type, className }: IconProps) => {
  
  return (
    <>
      {/* header icons */}
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
      {/* categories */}
      {type === 'link' &&
        <BsArrowRight className={`icon ${className}`} />
      }
      {/* store services */}
      {type === 'shipping' &&
        <Shipping className={`icon ${className}`} />
      }
      {type === 'guarantee' &&
        <Guarantee className={`icon ${className}`} />
      }
      {type === 'support' &&
        <Support className={`icon ${className}`} />
      }
      {type === 'payment' &&
        <Payment className={`icon ${className}`} />
      }
    </>
  )
}