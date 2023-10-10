import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/userAction";

import { GlobalStyles } from "./styles/Global";

import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import Catalogue from "./routes/catalogue/Catalogue";
import Authentication from "./routes/authentication/Authentication";
import Wishlist from "./routes/wishlist/Wishlist";
import Checkout from "./routes/checkout/Checkout";

function App() {
  const dispatch= useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
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
