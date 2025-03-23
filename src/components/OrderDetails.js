import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  if (!order) {
    return <Typography variant="h6" color="error">Order details not found.</Typography>;
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Order Details
      </Typography>

      <Card sx={{ p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold">{order.item}</Typography>
          <Typography variant="body1"><strong>Order ID:</strong> {id}</Typography>
          <Typography variant="body2" color="textSecondary"><strong>Date:</strong> {order.date}</Typography>
          <Typography variant="body2" color="textSecondary"><strong>Status:</strong> {order.status}</Typography>
          <Typography variant="body2" color="textSecondary"><strong>Type:</strong> {order.type}</Typography>
          
          {order.type === "Bought" && (
            <>
              <Typography variant="body2" color="textSecondary"><strong>Price:</strong> $25</Typography>
              <Typography variant="body2" color="textSecondary"><strong>Payment:</strong> Paid via UPI</Typography>
            </>
          )}

          <Button variant="contained" color="secondary" sx={{ mt: 3 }} onClick={() => navigate("/Invoice")}>
            Download Invoice
          </Button>
        </CardContent>
      </Card>

      <Button variant="outlined" color="primary" sx={{ mt: 3 }} onClick={() => navigate("/RecentActivities")}>
        Back to Recent Activities
      </Button>
    </Container>
  );
};

export default OrderDetails;
