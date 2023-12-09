import React from 'react'
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

export default function Li(props) {
  const navigate = useNavigate();

  return (
    <ListItem disablePadding>
    <ListItemButton
      onClick={() => {
        navigate(props.navi);
      }}
    >
      <ListItemText primary={props.name} />
    </ListItemButton>
  </ListItem>

  )
}
