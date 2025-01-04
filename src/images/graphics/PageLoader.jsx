'use client';

// @mui
import { keyframes } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

//@project
import LogoSection from '@/components/logo';

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(-360deg) }
`;

const dotAnimation = keyframes`
  0% { transform: rotate(-360deg) }
  100% { transform: rotate(0deg) }
`;

/***************************  PAGE LOADER  ***************************/

export default function PageLoader() {
  const commonProps = { disableShrink: true, size: 90, variant: 'determinate', thickness: 1, color: 'primary' };
  return (
    <Stack direction="row" sx={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
        <LogoSection isIcon />
      {/* <Avatar sx={{ width: 65, height: 65, bgcolor: 'white', '& .MuiBox-root': { height: 'fit-content', width: 28 } }}>
      </Avatar> */}
      {/* <CircularProgress
        color="primary"  // Ini akan menggunakan warna merah jika primary diatur merah di tema MUI
        {...commonProps}
        value={100}
        sx={{
          position: 'absolute',
          zIndex: 1,
          '& .MuiCircularProgress-circle': {
            stroke: 'red',  // Mengubah warna stroke menjadi merah
            strokeLinecap: 'round',
            strokeDasharray: '6 9.5 !important',
          },
          animation: `${dotAnimation} 6s linear infinite`
        }}
      />
      <CircularProgress
        {...commonProps}
        value={60}
        sx={{
          position: 'absolute',
          zIndex: 1,
          '& .MuiCircularProgress-circle': {
            stroke: 'red',  // Mengubah warna stroke menjadi merah
            strokeLinecap: 'round',
          },
          animation: `${rotateAnimation} 35s linear infinite`
        }}
      /> */}
    </Stack>
  );
  
}
