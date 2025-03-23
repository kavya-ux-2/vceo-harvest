// import React, { useState, useEffect } from "react";
// import { Container, Card, CardContent, Typography, Button, LinearProgress } from "@mui/material";
// import { db } from "../firebase/firebase-config";

// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { motion } from "framer-motion";

// const WasteCollection = ({ requestId }) => {
//   const [collectionStatus, setCollectionStatus] = useState("pending");
//   const [progress, setProgress] = useState(0);
  
//   useEffect(() => {
//     const fetchCollectionStatus = async () => {
//       const requestRef = doc(db, "wasteRequests", requestId);
//       const requestSnap = await getDoc(requestRef);
//       if (requestSnap.exists()) {
//         setCollectionStatus(requestSnap.data().collectionStatus || "pending");
//       }
//     };
//     fetchCollectionStatus();
//   }, [requestId]);
  
//   const handleStartCollection = async () => {
//     setCollectionStatus("in-progress");
//     setProgress(50);
//     await updateDoc(doc(db, "wasteRequests", requestId), { collectionStatus: "in-progress" });
//   };
  
//   const handleCompleteCollection = async () => {
//     setCollectionStatus("completed");
//     setProgress(100);
//     await updateDoc(doc(db, "wasteRequests", requestId), { collectionStatus: "completed" });
//   };
  
//   return (
//     <Container sx={{ mt: 5, textAlign: "center" }}>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//         <Card sx={{ p: 3, boxShadow: 3 }}>
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold" gutterBottom>Waste Collection</Typography>
//             <Typography variant="body1" color="textSecondary">Status: {collectionStatus}</Typography>
//             <LinearProgress variant="determinate" value={progress} sx={{ my: 2 }} />
//             {collectionStatus === "pending" && (
//               <Button variant="contained" color="primary" onClick={handleStartCollection}>
//                 Start Collection
//               </Button>
//             )}
//             {collectionStatus === "in-progress" && (
//               <Button variant="contained" color="success" onClick={handleCompleteCollection}>
//                 Complete Collection
//               </Button>
//             )}
//           </CardContent>
//         </Card>
//       </motion.div>
//     </Container>
//   );
// };

// export default WasteCollection;
