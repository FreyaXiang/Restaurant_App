import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Paper, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "white",
    borderRadius: 25,
    margin: "50px auto",
    padding: 20,
    width: "70%",
    display: "block",
  },
  text: {
    marginBottom: 10,
  },
  icon: {
    height: "40px",
    width: "40px",
  },
}));

export default function SearchBox(props) {
  const classes = useStyles();

  // handle state
  const [item, setItem] = useState({
    restaurantLocation: "Time Square, Manhattan, NYC",
    restaurantName: "",
  });

  function handleName(event) {
    const { name, value } = event.target;
    setItem((prv) => {
      return {
        ...prv,
        [name]: value,
      };
    });
  }

  // Get the user location
  // default location is Time Square, Manhattan, NY
  // longitude, latitiude
  const [userLocation, setUserLocation] = useState(["-73.985130", "40.758896"]);

  // get user location and handle error
  function handleLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setItem((prv) => {
      return {
        ...prv,
        restaurantLocation: "Current Location",
      };
    });
    setUserLocation([position.coords.longitude, position.coords.latitude]);
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
      default:
        console.log("Other error occurred");
    }
  }

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container spacing={3} direction="row">
        <Grid item xs={12} sm={5}>
          <TextField
            placeholder="Time Square, Manhattan, NYC"
            fullWidth
            className={classes.text}
            value={item.restaurantLocation}
            onClick={handleLocation}
            name="restaurantLocation"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            placeholder="restaurant name..."
            rows={1}
            fullWidth
            className={classes.text}
            value={item.restaurantName}
            onChange={handleName}
            name="restaurantName"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          container
          justify="center"
          alignItems="center"
        >
          <Button
            onClick={() => {
              props.search(userLocation, item.restaurantName);
              props.setLocation(userLocation);
            }}
            variant="contained"
            color="secondary"
            className={classes.icon}
          >
            {props.isLoading ? <div className="loader"></div> : <SearchIcon />}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
