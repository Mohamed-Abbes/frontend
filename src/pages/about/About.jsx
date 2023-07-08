import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem', textAlign:"justify",maxWidth:'50vw',marginTop:'30px' }}>
      Welcome to our Blog! At Blog up, we're passionate about sharing knowledge, insights, and stories. Our mission is to provide valuable content to our readers, covering a wide range of topics such as technology, lifestyle, travel, and more.</Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem', textAlign:"justify", maxWidth:'50vw',marginTop:'50px' }}>
      Join us on this journey as we explore fascinating subjects, unravel the latest trends, and dive into captivating stories. We're committed to delivering high-quality content that sparks curiosity and enriches your reading experience.
      </Typography>
    </Box>
  );
};

export default About