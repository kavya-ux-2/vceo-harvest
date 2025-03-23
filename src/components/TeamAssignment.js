// import React, { useState, useEffect } from "react";
// import { Container, Typography, Card, CardContent, CircularProgress } from "@mui/material";
// import { motion } from "framer-motion";
// import { db } from "../firebase/firebase-config";
// import { collection, getDocs, addDoc } from "firebase/firestore";

// const TeamAssignment = () => {
//   const [teams, setTeams] = useState([]);
//   const [assignedTeam, setAssignedTeam] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTeams = async () => {
//       try {
//         const teamsCollection = collection(db, "teams");
//         const teamSnapshot = await getDocs(teamsCollection);
//         const teamList = teamSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setTeams(teamList);
//         if (teamList.length > 0) {
//           assignTeam(teamList);
//         }
//       } catch (error) {
//         console.error("Error fetching teams:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTeams();
//   }, []);

//   const assignTeam = async (teamList) => {
//     const availableTeam = teamList.find((team) => team.status === "available");
//     if (availableTeam) {
//       setAssignedTeam(availableTeam);
//       await addDoc(collection(db, "assignments"), {
//         teamId: availableTeam.id,
//         teamName: availableTeam.name,
//         status: "assigned",
//         timestamp: new Date(),
//       });
//     }
//   };

//   return (
//     <Container sx={{ mt: 5, textAlign: "center" }}>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//         <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
//           Team Assignment
//         </Typography>
//         {loading ? (
//           <CircularProgress />
//         ) : assignedTeam ? (
//           <Card sx={{ mt: 3, p: 3, boxShadow: 3 }}>
//             <CardContent>
//               <Typography variant="h5" fontWeight="bold" color="secondary">
//                 Assigned Team: {assignedTeam.name}
//               </Typography>
//               <Typography variant="body1" color="textSecondary">
//                 Contact: {assignedTeam.contact}
//               </Typography>
//               <Typography variant="body1" color="textSecondary">
//                 Location: {assignedTeam.location}
//               </Typography>
//             </CardContent>
//           </Card>
//         ) : (
//           <Typography variant="h6" color="error">
//             No available teams at the moment.
//           </Typography>
//         )}
//       </motion.div>
//     </Container>
//   );
// };

// export default TeamAssignment;

