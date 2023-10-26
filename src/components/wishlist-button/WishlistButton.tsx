import React, { ButtonHTMLAttributes} from "react";

import { LikedIcon, NotLikedIcon } from "./WishlistButtonStyled.tsx";

export enum WISHLIST_STATUS {
  notLiked = "notLiked",
  liked= "liked",
};

const getStatus = (status = WISHLIST_STATUS.notLiked) =>
  ({
    [WISHLIST_STATUS.notLiked]: NotLikedIcon,
    [WISHLIST_STATUS.liked]: LikedIcon,
}[status]);
  
export type WishlistButtonProps = {
  status?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const WishlistButton = ({ status, ...otherProps }) => {
  const ProductWishlistIcon = getStatus(status);
  return <ProductWishlistIcon {...otherProps} />;
};

export default WishlistButton;
