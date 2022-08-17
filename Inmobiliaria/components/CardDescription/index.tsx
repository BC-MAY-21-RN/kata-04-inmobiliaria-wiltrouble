import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  EvilIcons,
  Ionicons,
  Feather,
  Fontisto,
  MaterialCommunityIcons
} from "@expo/vector-icons";


const CardDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CardDescription</Text>
      <View style={styles.row}>
        <EvilIcons name="location" size={24} color="#200E32" />
        <Text style={styles.textLocation}>location</Text>
      </View>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Ionicons name="bed-outline" size={24} color="#747783" />
        <Text>3</Text>
        <MaterialCommunityIcons name="shower" size={24} color="#747783" />
        <Text>2</Text>
        <Feather name="layout" size={24} color="#747783" />
        
        <Text>23 m2</Text>
      </View>
      <View style={styles.row}>
        <Text>23 $S</Text>
        <Ionicons name="heart-circle-sharp" size={34} color="#00B074" />
      </View>
    </View>
  );
};

export default CardDescription;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 10,
    padding: 'auto',
    backgroundColor: 'red'
  },
  title: {
    fontWeight: '500',
    fontSize: 22,
    color: '#151525'
  },
  row: {
    flexDirection: "row",
  },
  textLocation: {
    color: '#737373'
  }
});
