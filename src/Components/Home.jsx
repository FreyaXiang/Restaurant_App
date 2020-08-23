import React, { useState } from "react";
import axios from "axios";
import { getDistance } from "geolib";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SearchBox from "./SearchBox";
import RestaurantCard from "./RestaurantCard";
import Maps from "./Maps";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "'Ubuntu', sans-serif",
    textAlign: "center",
    margin: "15% auto 50px",
    width: "50%",
  },
  gridContainer: {
    backgroundColor: "#fff",
    padding: "30px 10px",
  },
}));

export default function Home() {
  const classes = useStyles();

  // handle state
  const [restaurants, setData] = useState([]);

  const [userLocationArray, setUserLocationArray] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const [isFinished, setFinished] = useState(false);

  function handleUserLocation(userLocation) {
    setUserLocationArray(userLocation);
  }

  // fetch data from Zomato API using axios
  function search(userLocation, restaurantName) {
    var query = restaurantName === "" ? "" : "&q=" + restaurantName;
    var urlLink =
      "https://developers.zomato.com/api/v2.1/search?start=0&count=10" +
      query +
      "&lat=" +
      userLocation[1] +
      "&lon=" +
      userLocation[0];

    setLoading(true);

    axios({
      method: "GET",
      url: urlLink,
      headers: {
        "user-key": "a26ab6f479fab165848f3c41334dd07c",
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setData(response.data.restaurants);
        setLoading(false);
        setFinished(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {!isFinished && (
        <Typography variant="h4" className={classes.title}>
          Find Restaurants near you.
        </Typography>
      )}
      <SearchBox
        search={search}
        setLocation={handleUserLocation}
        isLoading={isLoading}
      />
      {isFinished && (
        <Grid container className={classes.gridContainer}>
          <Grid
            item
            xs={12}
            sm={6}
            container
            justify="center"
            alignItems="center"
          >
            <Maps userLocation={userLocationArray} restaurants={restaurants} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            container
            justify="center"
            alignItems="center"
          >
            {restaurants.map((item, index) => {
              return (
                <Grid item xs={10} sm={6}>
                  <RestaurantCard
                    key={index}
                    id={index + 1}
                    name={item.restaurant.name}
                    cuisine={item.restaurant.cuisines}
                    address={item.restaurant.location.address}
                    price={item.restaurant.price_range}
                    currency={item.restaurant.currency}
                    rating={item.restaurant.user_rating}
                    reviews={item.restaurant.all_reviews_count}
                    phone={item.restaurant.phone_numbers}
                    distance={getDistance(
                      {
                        latitude: Number(item.restaurant.location.latitude),
                        longitude: Number(item.restaurant.location.longitude),
                      },
                      {
                        latitude: Number(userLocationArray[1]),
                        longitude: Number(userLocationArray[0]),
                      }
                    )}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      )}
    </div>
  );
}
