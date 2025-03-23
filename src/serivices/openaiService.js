import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, IconButton, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      }, {
        headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` }
      });
      
      const botReply = response.data.choices[0].message.content;
      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <Box sx={{ width: 350, height: 500, p: 2, position: "fixed", bottom: 20, right: 20, bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" sx={{ textAlign: "center", mb: 2, fontWeight: "bold", color: "primary.main" }}>AI Chatbot</Typography>
      <Paper sx={{ height: "80%", overflowY: "auto", p: 2, bgcolor: "#f5f5f5" }}>
        {messages.map((msg, index) => (
          <Typography key={index} sx={{ textAlign: msg.sender === "user" ? "right" : "left", my: 1, p: 1, borderRadius: 1, bgcolor: msg.sender === "user" ? "#c8e6c9" : "#eeeeee" }}>
            {msg.text}
          </Typography>
        ))}
      </Paper>
      <Box sx={{ display: "flex", mt: 2 }}>
        <TextField fullWidth variant="outlined" size="small" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." />
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chatbot;