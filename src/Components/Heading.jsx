import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import FastfoodIcon from "@material-ui/icons/Fastfood";

export default function Heading() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <FastfoodIcon />
        <Typography
          variant="h5"
          style={{
            color: "#fff",
            fontFamily: "'Ubuntu', sans-serif",
            marginLeft: "5px",
          }}
        >
          Restaurant App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
