import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { CartProvider } from "./contexts/CartContext";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WishlistProvider } from "./contexts/WishlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
