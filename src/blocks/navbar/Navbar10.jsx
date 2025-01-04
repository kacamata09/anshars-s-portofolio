'use client';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// @mui
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// override media queries injected by theme.mixins.toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    minHeight: 84,
    paddingLeft: 0,
    paddingRight: 0,
  },
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    '@media all': {
      minHeight: 72,
    },
  },
  [theme.breakpoints.down('sm')]: {
    '@media all': {
      minHeight: 64,
    },
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
}));

export default function Navbar10({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      color="inherit"
      elevation={0}
      sx={{
        px: 3,
        backgroundColor: {
          xs: '#1c1c1c', // Abu-abu untuk layar kecil
          sm: isScrolled ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0)', // Transparan di layar besar
        },
        transition: 'background-color 0.3s ease',
        position: {
          xs: 'relative', // Tidak fixed di perangkat kecil
          sm: 'fixed',    // Fixed di perangkat besar
        },
      }}
    >
      <StyledToolbar>{children}</StyledToolbar>
    </AppBar>
  );
}

Navbar10.propTypes = { children: PropTypes.any };
