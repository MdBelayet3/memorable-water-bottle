import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addCartToLS, getStoredCart, removeFromLS } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    // useState and useEffect hook for load data local json 
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('Bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, [])

    // load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length)
        if (bottles.length) {
            const storedCardId = getStoredCart()
            // console.log(storedCardId,bottles);
            const saveCart = [];
            for(const id of storedCardId){
                // console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                // console.log(bottle);
                if(bottle){
                    saveCart.push(bottle);
                }
            }
            console.log(saveCart);
            setCart(saveCart);
        }
    }, [bottles])

    //useState and event handler for hold and handle btn clicked data 

    const [cart, setCart] = useState([]);

    const handleAddCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addCartToLS(bottle.id)
    }

    // event handler for remove data for cart
    const handleRemoveCart = id => {
        //remove from visual cart
        const remaining = cart.filter(bottle => bottle.id !== id);
        setCart(remaining); 
        // remove from local storage
        removeFromLS(id);
    }

    return (
        <div>
            <h1>Memorable Bottle available : {bottles.length}</h1>
            <Cart handleRemoveCart={handleRemoveCart} cart={cart}></Cart>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle bottle={bottle} key={bottle.id} handleAddCart={handleAddCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;