import CartItem from '../components/CartItem';
import './CartScreen.css'

//component

const CartScreen = () => {
  return (
    <div className='cartscreen'>
      <div className='cartscreen__left'>
      </div>

       <CartItem/>
      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>Subtotal (0) items</p>
          <p>$458.69</p>
        </div>

        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen;