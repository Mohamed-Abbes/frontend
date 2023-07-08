import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box maxWidth={400} mx="auto" mt={4}>
      <Typography variant="h5" align="center" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
          type="email"
        />
        <TextField
          label="Message"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
