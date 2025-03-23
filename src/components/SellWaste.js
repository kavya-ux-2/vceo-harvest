import React, { useState } from "react";
import { Container, Typography, Button, Stepper, Step, StepLabel, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const steps = ["Request Pickup", "Team Assignment", "Waste Collection", "Transportation", "Payment to Seller"];

const SellWaste = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [wasteDetails, setWasteDetails] = useState({ type: "", quantity: "", location: "" });
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === 0 && (!wasteDetails.type || !wasteDetails.quantity || !wasteDetails.location)) {
      alert("Please fill all waste details.");
      return;
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Sell Waste
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Enter Waste Details:</Typography>
          <TextField
            label="Type of Waste"
            fullWidth
            margin="normal"
            value={wasteDetails.type}
            onChange={(e) => setWasteDetails({ ...wasteDetails, type: e.target.value })}
          />
          <TextField
            label="Quantity (kg)"
            type="number"
            fullWidth
            margin="normal"
            value={wasteDetails.quantity}
            onChange={(e) => setWasteDetails({ ...wasteDetails, quantity: e.target.value })}
          />
          <TextField
            label="Pickup Location"
            fullWidth
            margin="normal"
            value={wasteDetails.location}
            onChange={(e) => setWasteDetails({ ...wasteDetails, location: e.target.value })}
          />
        </Box>
      )}

      {activeStep === steps.length ? (
        <Typography variant="h5" color="success.main" sx={{ mt: 3 }}>
          Waste processing complete! Payment has been sent to your account.
        </Typography>
      ) : (
        <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      )}

      <Button variant="outlined" color="secondary" sx={{ mt: 3, ml: 2 }} onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </Button>
    </Container>
  );
};

export default SellWaste;
