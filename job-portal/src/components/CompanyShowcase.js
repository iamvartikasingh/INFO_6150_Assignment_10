// src/components/CompanyShowcase.js
import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

function CompanyShowcase() {
  const companies = [
    { 
      id: 1, 
      name: 'Tech Corp', 
      description: 'Leading in tech solutions',
      image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 2, 
      name: 'Innovate Ltd', 
      description: 'Innovative software solutions',
      image: 'https://images.pexels.com/photos/1666667/pexels-photo-1666667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 3, 
      name: 'Creative Studio', 
      description: 'Creative design agency',
      image: 'https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 4, 
      name: 'Green Solutions', 
      description: 'Sustainable and green tech solutions',
      image: 'https://images.pexels.com/photos/2783862/pexels-photo-2783862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 5, 
      name: 'FinTech Pro', 
      description: 'Revolutionizing finance through technology',
      image: 'https://images.pexels.com/photos/2742049/pexels-photo-2742049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 6, 
      name: 'Healthcare Plus', 
      description: 'Innovative healthcare solutions',
      image: 'https://images.pexels.com/photos/3694884/pexels-photo-3694884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 7, 
      name: 'EduGrow', 
      description: 'Next-gen educational platforms',
      image: 'https://images.pexels.com/photos/3643533/pexels-photo-3643533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 8, 
      name: 'Retail Masters', 
      description: 'Retail optimization and management',
      image: 'https://images.pexels.com/photos/358530/pexels-photo-358530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    { 
      id: 9, 
      name: 'AutoMotive Tech', 
      description: 'Automotive technology and innovations',
      image: 'https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  return (
    <Container style={{padding:"4%"}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Company Showcase
      </Typography>
      <Grid container spacing={3}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <Card>
              <CardMedia
                component="img"
                height="190"
                image={company.image}
                alt={company.name}
              />
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