import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import CartProvider from "./Components/ContextReducer/ContextReducer";
import Cart from "./Screens/Cart";
import MyOrder from "./Screens/MyOrder";

const App = () => {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/myorders" element={<MyOrder />} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
