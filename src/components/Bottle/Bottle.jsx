import './Bottle.css'
import PropTypes from 'prop-types';

const Bottle = ({bottle, handleAddCart}) => {
    const {name,img,price} = bottle;
    return (
        <div className="bottle-container">
            <h2>{name}</h2>
            <img src={img} alt="" />
            <h3>Price : ${price}</h3>
            <button onClick={()=> handleAddCart(bottle)} className='btn'>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
    handleAddCart : PropTypes.func.isRequired,
}

export default Bottle;