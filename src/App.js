import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GlobalStyles } from "./styles/Global";

import Spinner from "./components/spinner/Spinner.tsx";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop.tsx";

import { checkUserSession } from "./store/user/userAction.ts";
import { selectCurrentUser } from "./store/user/userSelector.ts";

const SignInSuccess = lazy(() =>
  import("./routes/sign-in-success/SignInSuccess.tsx")
);
const Navigation = lazy(() => import("./routes/navigation/Navigation.tsx"));
const Home = lazy(() => import("./routes/home/Home.tsx"));
const Catalogue = lazy(() => import("./routes/catalogue/Catalogue.tsx"));
const Authentication = lazy(() =>
  import("./routes/authentication/Authentication.tsx")
);
const Wishlist = lazy(() => import("./routes/wishlist/Wishlist.tsx"));
const Checkout = lazy(() => import("./routes/checkout/Checkout.tsx"));

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyles />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="catalogue/*" element={<Catalogue />} />
          <Route
            path="account"
            element={currentUser ? <SignInSuccess /> : <Authentication />}
          />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
