// import React, { useState } from "react";
// import { Container, TextField, Button, Typography, MenuItem, Card, CardContent } from "@mui/material";
// import { auth} from "../firebase/firebase-config";
// import { db } from "../firebase/firebase-config";  // Ensure the path is correct


// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// const wasteTypes = ["Plastic", "Metal", "Organic", "E-Waste", "Paper", "Glass"];

// const RequestPickup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     wasteType: "",
//     quantity: "",
//     location: "",
//     preferredTime: "",
//     image: null,
//   });
  
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageUpload = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const user = auth.currentUser;
//       if (!user) {
//         alert("You must be logged in to request a pickup");
//         return;
//       }
//       await addDoc(collection(db, "waste_pickups"), {
//         userId: user.uid,
//         wasteType: formData.wasteType,
//         quantity: formData.quantity,
//         location: formData.location,
//         preferredTime: formData.preferredTime,
//         status: "Pending",
//         createdAt: serverTimestamp(),
//       });
//       alert("Pickup request submitted successfully!");
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error submitting request:", error);
//       alert("Error submitting pickup request. Please try again.");
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Card sx={{ p: 3, boxShadow: 3 }}>
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold" gutterBottom>
//             Request Waste Pickup
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               select
//               label="Waste Type"
//               name="wasteType"
//               value={formData.wasteType}
//               onChange={handleChange}
//               required
//               sx={{ mb: 2 }}
//             >
//               {wasteTypes.map((type) => (
//                 <MenuItem key={type} value={type}>{type}</MenuItem>
//               ))}
//             </TextField>
//             <TextField
//               fullWidth
//               label="Quantity (kg or liters)"
//               name="quantity"
//               type="number"
//               value={formData.quantity}
//               onChange={handleChange}
//               required
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Pickup Location"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Preferred Pickup Time"
//               name="preferredTime"
//               type="datetime-local"
//               value={formData.preferredTime}
//               onChange={handleChange}
//               required
//               sx={{ mb: 2 }}
//               InputLabelProps={{ shrink: true }}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               style={{ marginBottom: "16px" }}
//             />
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Submit Request
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default RequestPickup;
