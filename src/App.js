import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/Navigation/Navigation";
import Checkout from "./pages/Checkout/Checkout";
import Contacts from "./pages/Contacts/Contacts";
import Error from "./pages/Error/Error";
import ProductItem from "./pages/ProductItem/ProductItem";
//import CartContextProvider from "./context/CartContextProvider";
import { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import UserAccount from "./pages/UserAccount/UserAccount";
import OrderPlaced from "./pages/OrderPlaced/OrderPlaced";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OrderList from "./pages/UserAccount/OrderList/OrderList";
import UserInfo from "./pages/UserAccount/UserInfo/UserInfo";
import ReviewList from "./pages/UserAccount/ReviewList/ReviewList";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        {/* <CartContextProvider> */}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/user" element={<UserAccount />}>
              <Route path="/user/data" element={<UserInfo />} />
              <Route path="/user/orders" element={< OrderList/>} />{" "}
              <Route path="/user/reviews" element={<ReviewList />} />
            </Route>
            <Route path="/order-placed" element={<OrderPlaced />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="products/:productId" element={<ProductItem />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        {/* </CartContextProvider> */}
      </BrowserRouter>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
