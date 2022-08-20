import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  EvilIcons,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {styles} from './styles'

interface CardDescription {
  title: string,
  location: string,
  beds: number,
  baths: number,
  area: number,
  price: number,
  fav: boolean,
}

const CardDescription = ({title, location, beds, baths, area, price, fav} : CardDescription) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.row]}>
        <EvilIcons name="location" size={24} color="#200E32" />
        <Text style={styles.textLocation}>{location}</Text>
      </View>
      <View style={[styles.row, styles.icons]}>
        <Ionicons name="bed-outline" size={24} color="#747783" />
        <Text style={styles.textIcon}>{beds}</Text>
        <MaterialCommunityIcons name="shower" size={24} color="#747783" />
        <Text style={styles.textIcon}>{baths}</Text>
        <Feather name="layout" size={24} color="#747783" />
        <Text style={styles.textIcon}>{area} m2</Text>
      </View>
      <View style={[styles.row, styles.lastRow]}>
        <Text style={styles.price}>{price} $</Text>
        <Ionicons name="heart-circle-sharp" size={34} color="#00B074" />
      </View>
    </View>
  );
};

export default CardDescription;