import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "20px 10px 0",
    height: "150px",
  },
}));

export default function RestaurantCard(props) {
  const classes = useStyles();

  // handle state
  const [hoverOver, setHoverOver] = useState(false);
  const [isClicked, setClicked] = useState(false);

  function handleHoverOver() {
    setHoverOver(true);
  }

  function handleHoverOut() {
    setHoverOver(false);
  }

  function changeSize() {
    setClicked(!isClicked);
  }

  // cut the rating-star img for different rating scores
  var score = props.rating.aggregate_rating;
  var starDimensionSetting;
  if (score <= 0.5) {
    starDimensionSetting = "320px";
  } else if (score > 0.5 && score <= 1) {
    starDimensionSetting = "360px";
  } else if (score > 1 && score <= 1.5) {
    starDimensionSetting = "340px";
  } else if (score > 1.5 && score <= 2) {
    starDimensionSetting = "400px";
  } else if (score > 2 && score <= 2.5) {
    starDimensionSetting = "380px";
  } else if (score > 2.5 && score <= 3) {
    starDimensionSetting = "440px";
  } else if (score > 3 && score <= 3.5) {
    starDimensionSetting = "420px";
  } else if (score > 3.5 && score <= 4) {
    starDimensionSetting = "480px";
  } else if (score > 4 && score <= 4.5) {
    starDimensionSetting = "460px";
  } else if (score > 4.5 && score <= 5) {
    starDimensionSetting = "500px";
  }
  const ratingStar = {
    background:
      "url('https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png') 0 -" +
      starDimensionSetting,
    display: "inline-block",
    verticalAlign: "middle",
    width: "108px",
    height: "20px",
    marginBottom: "8px",
  };

  return (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        elevation={hoverOver ? 8 : 1}
        onMouseOver={handleHoverOver}
        onMouseOut={handleHoverOut}
        style={{
          cursor: hoverOver && "pointer",
          backgroundColor: hoverOver ? "#f6f6f6" : "white",
          borderTop: isClicked && "2px solid #cf1b1b",
          borderLeft: isClicked && "2px solid #cf1b1b",
        }}
        onClick={changeSize}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  onMouseOver={handleHoverOver}
                  onMouseOut={handleHoverOut}
                  style={{
                    textDecoration: hoverOver && "underline",
                  }}
                >
                  {props.id + ". " + props.name}
                </Typography>

                {isClicked && <div style={ratingStar}></div>}

                {isClicked && (
                  <Typography
                    variant="body2"
                    gutterBottom
                    color="textSecondary"
                    style={{ display: "inline", marginLeft: "10px" }}
                  >
                    {props.reviews + " reviews"}
                  </Typography>
                )}

                <Typography variant="body2" gutterBottom>
                  {props.currency.repeat(props.price) + " · " + props.cuisine}
                </Typography>

                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {props.address}
                </Typography>

                {isClicked && (
                  <Typography variant="body2" color="textSecondary">
                    {props.phone}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid item>
              {isClicked && (
                <Typography variant="body2" color="textSecondary">
                  {props.distance + "m"}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
