import { Typography } from '@mui/material';
import React from 'react';
import { getUTCDatetime } from '../../utilities/DatetimeUtils';

const UTCDatetime = () => {
  const utcFullDate = getUTCDatetime();
  const utcTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '400',
        fontSize: { xs: '14px', sm: '16px' }, // Increased font size
        color: 'rgba(255, 255, 255, .9)', // Adjusted color and opacity
        lineHeight: 1.5, // Adjusted line height
        paddingRight: '2px',
        fontFamily: 'Roboto', // Changed font family
      }}
    >
      {utcFullDate} GMT
    </Typography>
  );
  return utcTimeValue;
};

export default UTCDatetime;
