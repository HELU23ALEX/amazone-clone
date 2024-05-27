import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Order from "./pages/Orders/Order";
import Cart from "./pages/Cart/Cart";
import Result from "./pages/Results/Result";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51PK2nI04iki8M6Be7bstsxVesBJJyPuZjYbmAto7jgBj7ewgrGS83wUb51JkddM4Ota683D5NWlfAPvw93iJQ3Xj00Wj0oOyCC"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/payments" element={<Payment />} /> */}
        <Route
          path="/payments"
          element={
            <ProtectedRoute msg={"you must login"} redirect={"/payments"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        {/* <Route path="/order" element={<Order />} /> */}

         <Route
          path="/order"
          element={
            <ProtectedRoute
              msg={"you must login in to access orders"}
              redirect={"/order"}
            >
              <Order />
            </ProtectedRoute>
          }
        />


        
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;


