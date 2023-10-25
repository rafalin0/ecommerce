import {
  CheckoutItemContainer,
  ItemName,
  ItemTotalPrice,
} from "./CheckoutItemStyled.jsx";
import ItemIcon from "./ItemIcon.jsx";

function CheckoutItem({ cartItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  const total = quantity * price;
  return (
    <CheckoutItemContainer>
      <ItemIcon src={imageUrl} alt={`${name}`} quantity={quantity} />
      <ItemName className="name">{name}</ItemName>
      <ItemTotalPrice>₱ {total}</ItemTotalPrice>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
