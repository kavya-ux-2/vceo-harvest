// import React, { useState, useEffect } from "react";
// import { Container, Card, CardContent, Typography, Button, LinearProgress, Box } from "@mui/material";
// import { db } from "../firebase/firebase-config";

// import { doc, getDoc, updateDoc } from "firebase/firestore";

// const Transportation = ({ requestId }) => {
//   const [status, setStatus] = useState("Pending");
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const fetchTransportationStatus = async () => {
//       const requestRef = doc(db, "wasteRequests", requestId);
//       const requestSnap = await getDoc(requestRef);
//       if (requestSnap.exists()) {
//         setStatus(requestSnap.data().transportStatus || "Pending");
//         updateProgress(requestSnap.data().transportStatus);
//       }
//     };
//     fetchTransportationStatus();
//   }, [requestId]);

//   const updateProgress = (status) => {
//     if (status === "Pending") setProgress(10);
//     else if (status === "In-Transit") setProgress(50);
//     else if (status === "Delivered") setProgress(100);
//   };

//   const handleStatusUpdate = async (newStatus) => {
//     const requestRef = doc(db, "wasteRequests", requestId);
//     await updateDoc(requestRef, { transportStatus: newStatus });
//     setStatus(newStatus);
//     updateProgress(newStatus);
//   };

//   return (
//     <Container sx={{ mt: 5, textAlign: "center" }}>
//       <Card sx={{ p: 3, boxShadow: 3 }}>
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold">Transportation Status</Typography>
//           <Typography variant="h6" color="primary" sx={{ mt: 2 }}>{status}</Typography>
//           <Box sx={{ mt: 3, width: "100%" }}>
//             <LinearProgress variant="determinate" value={progress} />
//           </Box>
//           <Box sx={{ mt: 3 }}>
//             {status === "Pending" && (
//               <Button variant="contained" color="warning" onClick={() => handleStatusUpdate("In-Transit")}>
//                 Start Transport
//               </Button>
//             )}
//             {status === "In-Transit" && (
//               <Button variant="contained" color="success" onClick={() => handleStatusUpdate("Delivered")}>
//                 Mark as Delivered
//               </Button>
//             )}
//           </Box>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default Transportation;
