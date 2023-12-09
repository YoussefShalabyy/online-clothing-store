

import React from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import Drawerr from "../MUI-components/Drawerr";

const drawerWidth = 240;


const Root = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
          <Drawerr drawerWidth={drawerWidth}/>

    
    <Box 
      sx={{ 
        ml: isSmallScreen ? '0px' : '240px', // Adjust margin-left based on screen size
        mt: '64px', 
        display: "flex", 
        justifyContent: "center" 
      }}
      className="border"
    >
      <Outlet />
    </Box>
    </div>
  );
};

export default Root;
