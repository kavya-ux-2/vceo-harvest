import React, { useEffect, useState } from "react";
import { Container, Typography, Box, CircularProgress, Stepper, Step, StepLabel } from "@mui/material";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase-config";
import { doc, onSnapshot } from "firebase/firestore";

const steps = ["Order Placed", "Processing", "Shipped", "Out for Delivery", "Delivered"];

const OrderTracking = () => {
  const { orderId } = useParams();
  const [orderStatus, setOrderStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) return;
    
    const orderRef = doc(db, "orders", orderId);
    const unsubscribe = onSnapshot(orderRef, (doc) => {
      if (doc.exists()) {
        setOrderStatus(doc.data().status);
      } else {
        setOrderStatus("Unknown");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [orderId]);

  const getCurrentStep = () => {
    return steps.indexOf(orderStatus) !== -1 ? steps.indexOf(orderStatus) : 0;
  };

  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Order Tracking
      </Typography>
      {loading ? (
        <CircularProgress sx={{ mt: 3 }} />
      ) : (
        <Box sx={{ mt: 4 }}>
          <Stepper activeStep={getCurrentStep()} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Typography variant="h6" sx={{ mt: 3 }}>
            Current Status: {orderStatus}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default OrderTracking;
