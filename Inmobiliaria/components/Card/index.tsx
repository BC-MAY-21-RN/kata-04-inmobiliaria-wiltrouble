import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardImage from "../CardImage";
import CardDescription from "../CardDescription";

interface Card {
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: number;
  price: number;
  fav: boolean;
  ratingDate: number;
  id: number;
  photo: string;
}

const Card = ({
  title,
  location,
  beds,
  baths,
  area,
  price,
  fav,
  ratingDate,
  photo,
}: Card) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "40%" }}>
        <CardImage photo={photo} rating={ratingDate} />
      </View>
      <View style={{ width: "60%" }}>
        <CardDescription
          title={title}
          location={location}
          beds={beds}
          baths={baths}
          area={area}
          price={price}
          fav={fav}
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FDFF",
    width: "100%",
    borderRadius: 20,
    flexDirection: "row",
    paddingVertical: 10,
  },
  leftContainer: {},
});
