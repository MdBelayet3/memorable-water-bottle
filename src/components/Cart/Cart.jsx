import './Cart.css'
import PropTypes from 'prop-types';
const Cart = ({cart, handleRemoveCart}) => {
    return (
        <div>
            <h2>Shopping Card : {cart.length}</h2>
            <div className="cart-container">
                {cart.map(bottle=> <div key={bottle.id}>
                    <img  src={bottle.img}></img>
                    <button onClick={() => handleRemoveCart(bottle.id)} className='btn'>Remove</button>
                </div>)}
            </div>
        </div>
    );
};

Cart.propTypes ={
    cart : PropTypes.array.isRequired,
    handleRemoveCart : PropTypes.func.isRequired,
}

export default Cart;