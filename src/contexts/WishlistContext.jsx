import { createContext, useState } from "react";

export const addOrRemoveWishlistItem = (wishlistItems, product) => {
  // find if wishlist array contains the product
  const existingWishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === product.id
  );

  // if found, update the product status and remove from array
  if (existingWishlistItem) {
    return wishlistItems.filter(
      (wishlistItem) => wishlistItem.id !== product.id
    );
  }

  // return new array with updated product status
  return [...wishlistItems, { ...product, status: "liked" }];
};

export const WishlistContext = createContext({
  wishlistItems: [],
  updateWishlist: () => {},
  toggleStatus: () => {},
});

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const updateWishlist = (product) => {
    setWishlistItems(addOrRemoveWishlistItem(wishlistItems, product));
  };

  const value = {
    wishlistItems,
    updateWishlist,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
