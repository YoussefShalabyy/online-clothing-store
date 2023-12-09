import React from 'react'
import { Outlet } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  Link,
  Avatar,
  Drawer,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Appbar(drawerWidth) {
    const navigate = useNavigate();

  return (
    <AppBar  
    // sx={{ width: `calc(100% - ${240}px)`, ml: `${240}px` }}
  >
    <Toolbar>
      <Link 
        sx={{
          flexGrow: 1,
          fontSize: "25px",
        //   "&:hover": { fontSize: "28px" },
          
        }}
        underline="none"
        
        color="inherit"
      >
       Online Clothing Store
      </Link>
      

      <Typography mr={"10px"} variant="body1" color="inherit">
        user name
      </Typography>

      <Avatar alt="Y" src="" sx={{ width: 40, height: 40 }}>
        Y
      </Avatar>
    </Toolbar>
  </AppBar>
  )
}
