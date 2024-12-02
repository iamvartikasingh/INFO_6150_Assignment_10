// src/components/CompanyShowcase.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';

function CompanyShowcase() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <>
      {/* Add NavBar */}
      <NavBar />

      <Container style={{ padding: "4%" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Company Showcase
        </Typography>
        <Grid container spacing={3}>
          {companies.length > 0 ? (
            companies.map((company) => (
              <Grid item xs={12} sm={6} md={4} key={company._id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="190"
                    image={company.images[0]?.url || 'https://via.placeholder.com/190'} // Fallback image if none exist
                    alt={company.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{company.name}</Typography>
                    <Typography>{company.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography>No companies available.</Typography>
          )}
        </Grid>
      </Container>

      {/* Add Footer */}
      <Footer />
    </>
  );
}

export default CompanyShowcase;