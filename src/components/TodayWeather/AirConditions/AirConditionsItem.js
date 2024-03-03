import { Box, Grid, SvgIcon } from '@mui/material';
import React from 'react';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import { ReactComponent as HumidityIcon } from '../../../assets/humidity.svg';

const AirConditionsItem = (props) => {
  let iconContent;

  if (props.type === 'temperature')
    iconContent = <ThermostatIcon sx={{ fontSize: '24px', color: 'orange' }} />;
  else if (props.type === 'wind')
    iconContent = <AirIcon sx={{ fontSize: '24px', color: 'blue' }} />;
  else if (props.type === 'clouds')
    iconContent = <FilterDramaIcon sx={{ fontSize: '24px', color: 'gray' }} />;
  else if (props.type === 'humidity')
    iconContent = (
      <SvgIcon
        component={HumidityIcon}
        inheritViewBox
        sx={{ fontSize: '24px', color: 'green' }}
      />
    );

  return (
    <Grid
      item
      xs={3}
      sx={{
        padding: '0',
        height: '100px',
      }}
    >
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100%',
          height: '50px',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'rgba(0, 0, 0, .7)',
            padding: 0,
          }}
        >
          {iconContent}
        </Box>
        <Box
          sx={{
            color: 'rgba(0, 0, 0, .7)',
            fontSize: { xs: '14px', sm: '16px', md: '18px' },
            paddingLeft: { xs: '0px', sm: '4px', md: '6px' },
            paddingTop: { xs: '2px', sm: '0px' },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {props.title}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: '50px' }}
      >
        <Box
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: { xs: '16px', sm: '18px', md: '20px' },
            color: 'black',
            lineHeight: 1,
          }}
        >
          {props.value}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AirConditionsItem;