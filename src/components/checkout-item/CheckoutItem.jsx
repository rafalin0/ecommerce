import {
  CheckoutItemContainer,
  CheckoutItemDesc,
} from "./CheckoutItemStyled.jsx";

function CheckoutItem({ cartItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  const total = quantity * price;
  return (
    <CheckoutItemContainer>
      <CheckoutItemDesc>
        <img className="product-image" src={imageUrl} alt={`${name}`} />
        <span className="product-quantity">{quantity}</span>
        <p className="name">{name}</p>
      </CheckoutItemDesc>
      <div className="total">
        <p>₱ {total}</p>
      </div>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
