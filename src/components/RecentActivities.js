import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, Grid, Chip, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RecentActivities = () => {
  const navigate = useNavigate();

  // Sample recent activities (Replace with backend data)
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: "Bought",
      item: "Organic Bio-Fertilizer",
      date: "March 10, 2025",
      status: "Delivered",
    },
    {
      id: 2,
      type: "Sold",
      item: "5kg Plastic Waste",
      date: "March 8, 2025",
      status: "Picked Up",
    },
    {
      id: 3,
      type: "Bought",
      item: "Eco Pesticide",
      date: "March 5, 2025",
      status: "Shipped",
    },
  ]);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Recent Activities
      </Typography>

      <Grid container spacing={3}>
        {activities.map((activity) => (
          <Grid item xs={12} sm={6} md={4} key={activity.id}>
            <Card sx={{ p: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{activity.item}</Typography>
                <Typography variant="body2" color="textSecondary">{activity.date}</Typography>
                <Chip
                  label={activity.type === "Bought" ? "Purchased" : "Sold"}
                  color={activity.type === "Bought" ? "primary" : "success"}
                  sx={{ mt: 1 }}
                />
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  Status: {activity.status}
                </Typography>
                <Button
  variant="contained"
  color="secondary"
  sx={{ mt: 2 }}
  onClick={() => navigate(`/order-details/${activity.id}`, { state: { order: activity } })}
>
  View Details
</Button>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button variant="outlined" color="primary" sx={{ mt: 3 }} onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </Button>
    </Container>
  );
};

export default RecentActivities;
