import React from "react";
import { Container, Typography, Grid, Card, CardContent, Button, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCatalog = () => {
  const navigate = useNavigate();

  // Sample products
  const products = [
    { id: 1, name: "Organic Bio-Fertilizer", price: "$25", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Eco Pesticide", price: "$30", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Compost Booster", price: "$20", image: "https://via.placeholder.com/200" },
  ];

  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Bio-Chemical Product Catalog
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ p: 2, textAlign: "center", boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{product.name}</Typography>
                <Typography variant="body1" color="textSecondary">{product.price}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => navigate(`/delivery-details/${product.id}`, { state: { product } })}

                >
                  Buy Now
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

export default ProductCatalog;


