import './CartItem.css'
import {Link} from 'react-router-dom';

function CartItem() {
  return (
    <div className='cartitem'>
        <div className='cartitem_image' >
            <img src='https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='Produc name'/>
        </div>

        <Link className ="cartitem_name">
            <p>Product 1</p>
        </Link>

        <p className='cartitem__price'>$458.65</p>

        <select className='cartitem__select'>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>

        </select>

        <button className='cartitem__deletebtn'>
            <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default CartItem