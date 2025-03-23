import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import jsPDF from "jspdf";

const Invoice = () => {
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("deliveryInfo"));
    const orderId = `ORD-${Math.floor(Math.random() * 1000000)}`;
    const orderDate = new Date().toLocaleString();

    setOrderDetails({ ...details, orderId, orderDate });
  }, []);

  const generateInvoice = () => {
    const doc = new jsPDF();
    doc.text("Invoice", 90, 10);
    doc.text(`Order ID: ${orderDetails.orderId}`, 10, 20);
    doc.text(`Order Date: ${orderDetails.orderDate}`, 10, 30);
    doc.text(`Customer Name: ${orderDetails.name}`, 10, 40);
    doc.text(`Contact: ${orderDetails.contactNumber}`, 10, 50);
    doc.text(`Delivery Address: ${orderDetails.address}`, 10, 60);
    doc.text(`Payment Method: ${orderDetails.paymentMethod}`, 10, 70);
    
    doc.save(`Invoice_${orderDetails.orderId}.pdf`);
  };

  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Invoice 🧾
      </Typography>
      <Typography variant="h6">Order ID: {orderDetails.orderId}</Typography>
      <Typography>Order Date: {orderDetails.orderDate}</Typography>
      <Typography>Customer Name: {orderDetails.name}</Typography>
      <Typography>Contact: {orderDetails.contactNumber}</Typography>
      <Typography>Delivery Address: {orderDetails.address}</Typography>
      <Typography>Payment Method: {orderDetails.paymentMethod}</Typography>

      <Box mt={3}>
        <Button variant="contained" color="secondary" onClick={generateInvoice}>
          Download Invoice
        </Button>
      </Box>
    </Container>
  );
};

export default Invoice;
