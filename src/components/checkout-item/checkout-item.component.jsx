import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

const CheckoutItem = ({ cartItem }) => {
  const { removeItemFromCart, addItemToCart, decrementItemQuantity } = useContext(CartContext);
  const { imageUrl, name, quantity, price } = cartItem;

  const onRemoveItemHandler = () => {
    removeItemFromCart(cartItem);
  };

  const onAddItemHandler = () => {
    addItemToCart(cartItem);
  }

  const onDecrementQuantity = () => {
    decrementItemQuantity(cartItem);
  }

  return (
    <div>
      <img src={imageUrl} />
      <span>{name}</span>
      <div>
        <Button onClick={onDecrementQuantity}>-</Button>
        <span>{quantity}</span>
        <Button onClick={onAddItemHandler}>+</Button>
      </div>
      <span>{price}</span>
      <Button onClick={onRemoveItemHandler}>Remove</Button>
    </div>
  );
};

export default CheckoutItem;
