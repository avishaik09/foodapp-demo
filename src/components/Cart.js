import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";


function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());

    console.log(cartItems);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
      <FoodItems  {...cartItems[0].card.info} />;
        {cartItems.map((Items) => {
          <FoodItems key={Items.card.info.id} {...Items.info} />;
        })}
      </div>
    </div>
  );
}

export default Cart;
