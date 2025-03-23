import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true); // Controls chat visibility

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response (Replace with actual API call)
    const botReply = { sender: "bot", text: "This is an AI response!" };
    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 1000);

    setInput(""); // Clear input field
  };

  // Toggle chat visibility
  if (!isOpen) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        width: 350,
        height: 400,
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        overflow: "hidden",
        position: "fixed",
        bottom: 20,
        right: 20,
      }}
    >
      {/* Chat Header with Close Button */}
      <Box
        sx={{
          bgcolor: "#1976D2",
          color: "white",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Chat with Us 🤖</Typography>
        <IconButton onClick={() => setIsOpen(false)} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Messages Area */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              bgcolor: msg.sender === "user" ? "#DCF8C6" : "#EAEAEA",
              color: "black",
              borderRadius: "10px",
              px: 2,
              py: 1,
              maxWidth: "75%",
              mb: 1,
            }}
          >
            <Typography variant="body2">{msg.text}</Typography>
          </Box>
        ))}
      </Box>

      {/* Input Field and Send Button */}
      <Box sx={{ display: "flex", p: 2, gap: 1, borderTop: "1px solid #ccc" }}>
        <TextField
          fullWidth
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <Button variant="contained" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default Chatbot;
