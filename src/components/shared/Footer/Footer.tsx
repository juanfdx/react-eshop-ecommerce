import './Footer.scss';


export const Footer = () => {

  const year = new Date().getFullYear();
  
  return (
    <footer className='footer'>
      <p className='footer__text'>&copy; {year} e-SHOP All rights reserved.</p>
    </footer>
  )
}