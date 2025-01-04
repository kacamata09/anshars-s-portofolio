import React, { useState } from 'react';
import { Button, TextField, Stack, Typography, Box } from '@mui/material';
import SvgIcon from '@/components/SvgIcon';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ContainerWrapper from '@/components/ContainerWrapper';

export default function ContactMe({ heading, caption, list }) {
  const [message, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setIsMessageSent(true);
      setMessage('');
    }
  };

  return (
    <ContainerWrapper sx={{ py: 6 }}>
      <Stack id="contact-me" alignItems="center" spacing={4}>
        {/* Animasi pada judul */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography fontFamily={'GoodbyeDespair, Arial, sans-serif'} variant="h2" sx={{ fontWeight: 'bold' }}>
            {heading} {/* Display dynamic heading */}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography color='white' variant="h6" align="center" sx={{ maxWidth: 600 }}>
            {caption} {/* Display dynamic caption */}
          </Typography>
        </motion.div>

        {/* Animasi pada tombol kontak */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Box sx={{ width: '100%', maxWidth: 600 }}>
            <Stack spacing={2}>
              {list.map(({ label, href, icon, color }, index) => (
                <Button
                  key={index}
                  variant="contained"
                  color={color} // Use dynamic color from data
                  fullWidth
                  startIcon={<SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })}  color="background.default" />}
                  href={href}
                  target="_blank"
                  sx={{
                    borderRadius: '30px', // Rounded corners for a sleek look
                    height: '50px', // Increased height for better visual appeal
                    textTransform: 'none', // Prevents text from being uppercased
                    fontSize: '1rem', // Slightly larger text
                    boxShadow: 3, // Adds a soft shadow for more depth
                    '&:hover': {
                      boxShadow: 6, // Darker shadow on hover
                      transform: 'scale(1.05)', // Slight scale effect on hover
                      transition: 'all 0.3s ease-in-out', // Smooth transition
                    }
                  }}
                >
                  {label} 
                </Button>
              ))}
            </Stack>
          </Box>
        </motion.div>

        {/* Animasi pada formulir kontak */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Box sx={{ width: '100%', maxWidth: 600 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Kirim Pesan
            </Typography>
            <form onSubmit={handleMessageSubmit}>
              <TextField
                label="Pesan"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary" type="submit">
                Kirim Pesan
              </Button>
            </form>

            {isMessageSent && (
              <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
                Pesan berhasil terkirim! Terima kasih telah menghubungi saya.
              </Typography>
            )}
          </Box>
        </motion.div> */}

      </Stack>
    </ContainerWrapper>
  );
}

ContactMe.propTypes = {
  heading: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired, // Expecting icon object
      color: PropTypes.oneOf(['primary', 'secondary', 'error', 'success', 'info', 'warning']).isRequired, // Added color validation
    })
  ).isRequired,
};
