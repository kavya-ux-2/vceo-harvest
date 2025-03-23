import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./components/login";
import Signup from "./components/signup";
import SellWaste from "./components/SellWaste.js";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductCatalog from "./components/ProductCatalog";
import DeliveryDetails from "./components/DeliveryDetails.js";
import Payment from "./components/Payment";
import OrderConfirmation from "./components/OrderConfirmation.js";
import OrderTracking from"./components/OrderTracking.js";
import Invoice from "./components/Invoice.js";
import RecentActivities from"./components/RecentActivities.js";
import OrderDetails from "./components/OrderDetails.js";
import ProfilePage from "./components/ProfilePage.js";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sell" element={<SellWaste />} />
          <Route path="/sell" element={<SellWaste />} />
          <Route path="/SellWaste" element={<SellWaste />} />
          <Route path="/buy" element={<ProductCatalog />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/delivery-details/:id" element={<DeliveryDetails />} />
          <Route path="/OrderConfirmation" element={<OrderConfirmation/>}/>
          <Route path="/OrderTracking" element={<OrderTracking/>}/>
          <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route path="/ProfilePage" element={<ProfilePage/>}/>
          <Route path="/Invoice" element={<Invoice/>}/>
          <Route path="/Chatbot" element={<Chatbot/>}/>
          <Route path="RecentActivities" element={<RecentActivities/>}/>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

