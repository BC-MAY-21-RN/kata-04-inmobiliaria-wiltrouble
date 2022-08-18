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
      
      <View style={{width: '35%', backgroundColor: 'red'}}>
        <CardImage photo={house1.imgURL} rating='4.7'/>
      </View>
      <View style={{width: '65%', backgroundColor: 'orange'}}>
        <CardDescription />
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
    flexDirection: 'row',
    paddingVertical: 10,
  },
  
  leftContainer: {},
});
