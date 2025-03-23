import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // Redirect to login after signup
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold">Signup</Typography>
      <Box component="form" onSubmit={handleSignup} sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 2, px: 4 }}>
          Signup
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
