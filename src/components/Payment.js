import React, { useState, useEffect } from "react";
import { Container, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [billingInfo, setBillingInfo] = useState({});

  useEffect(() => {
    const savedInfo = localStorage.getItem("deliveryInfo");
    if (savedInfo) setBillingInfo(JSON.parse(savedInfo));
  }, []);

  const handlePayment = () => {
    if (!paymentMethod) return alert("Please select a payment method!");
    navigate("/OrderConfirmation");
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Payment & Billing
      </Typography>
      <Typography variant="h6" fontWeight="bold" mt={2}>Billing Information</Typography>
      <Typography>Name: {billingInfo.name}</Typography>
      <Typography>Contact: {billingInfo.contactNumber}</Typography>
      <Typography>Address: {billingInfo.address}</Typography>

      <FormControl component="fieldset" sx={{ mt: 3 }}>
        <Typography variant="h6" fontWeight="bold">Select Payment Method:</Typography>
        <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <FormControlLabel value="upi" control={<Radio />} label="UPI" />
          <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
          <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery (COD)" />
        </RadioGroup>
      </FormControl>

      <Box mt={3}>
        <Button variant="contained" color="primary" fullWidth onClick={handlePayment}>
          Confirm & Pay
        </Button>
      </Box>
    </Container>
  );
};

export default PaymentPage;

