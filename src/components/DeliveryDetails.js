import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const DeliveryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return <Typography variant="h6" color="error">Error: No product found!</Typography>;
  }

  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Enter Delivery Details
      </Typography>
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="body1" color="textSecondary">{product.price}</Typography>

      <TextField label="Full Name" fullWidth sx={{ mt: 2 }} />
      <TextField label="Address" fullWidth sx={{ mt: 2 }} />
      <TextField label="Contact Number" fullWidth sx={{ mt: 2 }} />

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate("/payment", { state: { product } })}
      >
        Proceed to Payment
      </Button>
    </Container>
  );
};

export default DeliveryDetails;
