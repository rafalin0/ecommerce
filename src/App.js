import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Authentication from "./routes/authentication/Authentication";
import Wishlist from "./routes/wishlist/Wishlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="catalogue" element={<Shop />} />
        <Route path="account" element={<Authentication />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
}

export default App;
