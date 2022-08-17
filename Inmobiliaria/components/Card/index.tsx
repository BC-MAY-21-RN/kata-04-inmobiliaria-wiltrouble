import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import realState from "../../assets/data/realState.json";
import CardImage from "../CardImage";
import CardDescription from "../CardDescription";
const house1 = realState[0];

const Card = () => {
  return (
    <View style={styles.container}>
      <CardImage photo={house1.imgURL} rating='4.7'/>
      <CardDescription />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FDFF",
    width: "100%",
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row'
  },
  
  leftContainer: {},
});
