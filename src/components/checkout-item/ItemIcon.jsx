import { ItemIconContainer, ThumbnailPhoto, Quantity } from "./ItemIconStyled";

const ItemIcon = (props) => {
  const { alt, src, quantity } = props;
  return (
    <ItemIconContainer>
      <ThumbnailPhoto className="product-image" src={src} alt={alt} />
      <Quantity className="product-quantity">{quantity}</Quantity>
    </ItemIconContainer>
  );
};

export default ItemIcon;
