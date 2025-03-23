import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, Button, TextField, Avatar, Box } from "@mui/material";
import { auth, db } from "../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ name: "", email: "", phone: "", address: "" });
  const [editing, setEditing] = useState(false);
  const [newProfilePic, setNewProfilePic] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setProfile(userDoc.data());
        }
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSave = async () => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, profile);
      setEditing(false);
    }
  };

  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        My Profile
      </Typography>
      <Card sx={{ maxWidth: 500, mx: "auto", p: 3, textAlign: "center", boxShadow: 3 }}>
        <Avatar src={newProfilePic || "https://via.placeholder.com/150"} sx={{ width: 100, height: 100, mx: "auto", mb: 2 }} />
        {editing ? (
          <>
            <input type="file" accept="image/*" onChange={(e) => setNewProfilePic(URL.createObjectURL(e.target.files[0]))} />
            <TextField fullWidth label="Name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} sx={{ my: 1 }} />
            <TextField fullWidth label="Phone" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} sx={{ my: 1 }} />
            <TextField fullWidth label="Address" value={profile.address} onChange={(e) => setProfile({ ...profile, address: e.target.value })} sx={{ my: 1 }} />
            <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>Save</Button>
          </>
        ) : (
          <>
            <Typography variant="h6" fontWeight="bold">{profile.name}</Typography>
            <Typography variant="body1" color="textSecondary">{profile.email}</Typography>
            <Typography variant="body2" color="textSecondary">Phone: {profile.phone}</Typography>
            <Typography variant="body2" color="textSecondary">Address: {profile.address}</Typography>
            <Button variant="outlined" color="primary" onClick={() => setEditing(true)} sx={{ mt: 2 }}>Edit Profile</Button>
          </>
        )}
      </Card>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="secondary" onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
      </Box>
    </Container>
  );
};

export default Profile;
