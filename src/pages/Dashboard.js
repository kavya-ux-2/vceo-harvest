import React, { useState, useEffect } from "react";
import { Container, Grid2, Card, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SellIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HistoryIcon from "@mui/icons-material/History";
import { motion } from "framer-motion";
import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import ChatIcon from "@mui/icons-material/Chat";
import Chatbot from "../components/Chatbot";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
   const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setRole("vendor"); // Change to "farmer" if applicable
    });
    return () => unsubscribe();
  }, []);

  const toggleChat = () => {
    setChatOpen((prev) => !prev);
  };

  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 5, textAlign: "center" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            Hello, {user ? user.email : "User"}!
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Welcome to your Dashboard
          </Typography>
        </motion.div>
        <Grid2 container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          <Grid2 item xs={12} sm={6} md={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, cursor: "pointer" }} onClick={() => navigate("/sell") }>
                <SellIcon fontSize="large" color="primary" />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">Sell Waste</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, cursor: "pointer" }} onClick={() => navigate("/buy") }>
                <ShoppingBasketIcon fontSize="large" color="primary" />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">Buy Products</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, cursor: "pointer" }} onClick={() => navigate("/RecentActivities") }>
                <HistoryIcon fontSize="large" color="primary" />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">Recent Activities</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, cursor: "pointer" }} onClick={() => navigate("/ProfilePage") }>
                <AccountCircleIcon fontSize="large" color="primary" />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">Profile</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, cursor: "pointer" }} onClick={() => navigate("/") }>
                <HomeIcon fontSize="large" color="primary" />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">Back to Home</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid2>
        </Grid2>
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
                    left:20,
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
      </Container>
      <Box sx={{ mt: 8, py: 3, textAlign: "center", bgcolor: "primary.main", color: "white" }}>
        <Typography variant="body2">© 2025 Vendor-to-Farmer Connect. All rights reserved.</Typography>
      </Box>
    </div>
  );
};

export default Dashboard;

