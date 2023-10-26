import React from "react";
import { ItemIconContainer, ThumbnailPhoto, Quantity } from "./ItemIconStyled.tsx";

type ItemIconProps = {
  alt: string;
  src: string;
  quantity: number;
}

const ItemIcon: React.FC<ItemIconProps> = ({ alt, src, quantity }) => {
  return (
    <ItemIconContainer>
      <ThumbnailPhoto className="product-image" src={src} alt={alt} />
      <Quantity className="product-quantity">{quantity}</Quantity>
    </ItemIconContainer>
  );
};

export default ItemIcon;
