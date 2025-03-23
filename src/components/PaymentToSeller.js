// import React, { useState } from "react";
// import { Container, Typography, Button, Card, CardContent, CircularProgress } from "@mui/material";
// import { motion } from "framer-motion";

// const PaymentToSeller = () => {
//   const [paymentStatus, setPaymentStatus] = useState("pending");
//   const [loading, setLoading] = useState(false);

//   const handlePayment = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setPaymentStatus("completed");
//       setLoading(false);
//     }, 3000); // Mock API delay
//   };

//   return (
//     <Container sx={{ mt: 5, textAlign: "center" }}>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//         <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
//           Payment to Seller
//         </Typography>
//         <Typography variant="h6" color="textSecondary">
//           Ensure secure and timely transactions for completed waste collections.
//         </Typography>
//       </motion.div>

//       <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, mt: 4 }}>
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold">Payment Status: {paymentStatus}</Typography>
//           {loading ? <CircularProgress sx={{ mt: 2 }} /> : null}
//           {paymentStatus === "pending" && (
//             <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handlePayment}>
//               Process Payment
//             </Button>
//           )}
//           {paymentStatus === "completed" && (
//             <Typography variant="h6" color="success.main" sx={{ mt: 2 }}>
//               Payment Successfully Completed!
//             </Typography>
//           )}
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default PaymentToSeller;