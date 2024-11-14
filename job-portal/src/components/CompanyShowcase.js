// src/components/CompanyShowcase.js
import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

function CompanyShowcase() {
  // Sample company data
  const companies = [
    { id: 1, name: 'Tech Corp', description: 'Leading in tech solutions' },
    { id: 2, name: 'Innovate Ltd', description: 'Innovative software solutions' },
    { id: 3, name: 'Creative Studio', description: 'Creative design agency' },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Company Showcase
      </Typography>
      <Grid container spacing={3}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{company.name}</Typography>
                <Typography>{company.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CompanyShowcase;