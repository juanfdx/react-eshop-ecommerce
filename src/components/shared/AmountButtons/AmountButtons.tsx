import './AmountButtons.scss';
// INTERFACES
import type { ProductVariation } from '../../../interfaces/product.interface';

type AmountButtonsProps = {
  variant: ProductVariation;
  amount: number;
  setAmount: (amount: number) => void;
  addToCart: () => void
}


export const AmountButtons = ({variant, amount, setAmount, addToCart}: AmountButtonsProps) => {

  
  return (
    <div className='amount-buttons'>

      <div className='amount-buttons__container'>
        <button 
          className='amount-buttons__btn' 
          onClick={() => { if (amount > 1) setAmount(amount - 1) }}
        >
          -
        </button>

        <input 
          id='amount'
          className='amount-buttons__input-amount'
          type="number" 
          name='amount' 
          value={amount} 
          readOnly
        />

        <button 
          className='amount-buttons__btn'
          onClick={() => {
            if (amount < 20 && amount < variant?.stock) {
              setAmount(amount + 1);
            }
          }}
        >
          +
        </button>
      </div>

      <button
        disabled={variant?.stock <= 0} 
        className={`amount-buttons__add-btn ${variant?.stock <= 0 ? 'amount-buttons__add-btn--disabled' : ''}`} 
        onClick={addToCart}
      >
        {variant?.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>

    </div>
  )
}