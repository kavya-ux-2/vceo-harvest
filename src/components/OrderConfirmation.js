import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    const deliveryInfo = JSON.parse(localStorage.getItem("deliveryInfo"));
    const paymentMethod = localStorage.getItem("paymentMethod");
    
    const orderId = `ORD-${Math.floor(Math.random() * 1000000)}`;
    const orderDate = new Date().toLocaleString();

    setOrderDetails({ ...deliveryInfo, paymentMethod, orderId, orderDate });
  }, []);

  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Order Confirmed! 🎉
      </Typography>
      <Typography variant="h6">Order ID: {orderDetails.orderId}</Typography>
      <Typography>Order Date: {orderDetails.orderDate}</Typography>
      <Typography>Payment Method: {orderDetails.paymentMethod}</Typography>
      <Typography>Delivery Address: {orderDetails.address}</Typography>

      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={() => navigate("/OrderTracking")}>
          Track Order
        </Button>
      </Box>
    </Container>
  );
};

export default OrderConfirmation;
