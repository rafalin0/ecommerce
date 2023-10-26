import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { GlobalStyles } from "./styles/Global";

import Navigation from "./routes/navigation/Navigation.tsx";
import Home from "./routes/home/Home.tsx";
import Catalogue from "./routes/catalogue/Catalogue.tsx";
import Authentication from "./routes/authentication/Authentication.tsx";
import Wishlist from "./routes/wishlist/Wishlist.tsx";
import Checkout from "./routes/checkout/Checkout.tsx";
import { checkUserSession } from "./store/user/userAction.ts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="catalogue/*" element={<Catalogue />} />
          <Route path="account" element={<Authentication />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
