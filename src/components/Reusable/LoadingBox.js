import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingBox(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        backgroundColor: '#f0f0f0', // Changed background color
        padding: '1rem', // Added padding
        borderRadius: '8px', // Added border radius
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Added box shadow
      }}
    >
      <CircularProgress sx={{ color: '#04C4E0' }} /> {/* Changed color */}
      {props.children}
    </Box>
  );
}
