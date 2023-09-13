import { LikedIcon, NotLikedIcon } from "./WishlistButtonStyled";

export const WISHLIST_STATUS = {
  notLiked: "notLiked",
  liked: "liked",
};

const getStatus = (status = WISHLIST_STATUS.notLiked) =>
  ({
    [WISHLIST_STATUS.notLiked]: NotLikedIcon,
    [WISHLIST_STATUS.liked]: LikedIcon,
  }[status]);

const WishlistButton = ({ status, ...otherProps }) => {
  const ProductWishlistIcon = getStatus(status);
  return <ProductWishlistIcon {...otherProps} />;
};

export default WishlistButton;
