import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import flowchart from "../assets/flowchart.png";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ChatIcon from "@mui/icons-material/Chat";
import Chatbot from "../components/Chatbot";

const Home = () => {
  const [user, setUser] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGetStarted = () => {
    navigate(user ? "/dashboard" : "/signup");
  };

  const toggleChat = () => {
    setChatOpen((prev) => !prev);
  };

  return (
    <div>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        {/* Hero Section */}
        <Box textAlign="center" sx={{ py: 5 }}>
          <Typography variant="h3" fontWeight="bold">
            Welcome to Vendor-to-Farmer Connect
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Bridging waste vendors and farmers for a greener tomorrow.
          </Typography>
          <Button variant="contained" sx={{ mt: 4 }} onClick={handleGetStarted}>
            Get Started
          </Button>
        </Box>

        {/* How Our App Works - Flowchart */}
        <Box textAlign="center" sx={{ mt: 5 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            How Our App Works
          </Typography>
          <img src={flowchart} alt="How It Works" width="100%" />
        </Box>

        {/* Education on Waste Management */}
        <Box textAlign="center" sx={{ mt: 5 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Education on Waste Management
          </Typography>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/gKSPSKiB9PE"
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <Box sx={{ mt: 3 }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/HOiOVELWdcc"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>

        {/* Testimonial Section */}
        <Box textAlign="center" sx={{ mt: 5 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            What Our Users Say
          </Typography>
          <Card sx={{ p: 3, mt: 2 }}>
            <Typography variant="body1" fontStyle="italic">
              "This platform has helped me turn waste into a valuable resource for farming. Highly recommended!"
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: "bold" }}>
              - Rajayya, Farmer
            </Typography>
          </Card>
          <Card sx={{ p: 3, mt: 2 }}>
            <Typography variant="body1" fontStyle="italic">
              "This platform has helped me find best organic Fertilizers for farming. Best choice!"
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: "bold" }}>
              - Thallam Rajitha, Farmer
            </Typography>
          </Card>
        </Box>

        {/* Interactive FAQ Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
            Frequently Asked Questions
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How does the platform work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our platform connects waste vendors with farmers, facilitating waste collection, processing, and utilization efficiently.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Is the service free?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, farmers and vendors can sign up and use the platform for free. Additional premium services may be introduced in the future.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>

      {/* Chatbot Floating Icon */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          cursor: "pointer",
          backgroundColor: "#4caf50",
          borderRadius: "50%",
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
        }}
        onClick={toggleChat}
      >
        <ChatIcon sx={{ color: "white" }} />
      </Box>

      {/* Chatbot UI */}
      {chatOpen && (
        <Box
          sx={{
            position: "fixed",
            bottom: 80,
            left: 20,
            bgcolor: "white",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1001
          }}
        >
          <Chatbot onClose={toggleChat} />
        </Box>
      )}

      {/* Footer Section */}
      <Box sx={{ mt: 5, bgcolor: "#f5f5f5", py: 3, textAlign: "center" }}>
        <Typography variant="body2">&copy; 2025 Vendor-to-Farmer Connect. All rights reserved.</Typography>
      </Box>
    </div>
  );
};

export default Home;

