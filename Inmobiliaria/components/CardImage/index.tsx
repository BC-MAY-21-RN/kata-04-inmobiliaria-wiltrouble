import { StyleSheet, Text, View, Image, ImageBackground, PushNotificationIOS } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
interface ImageCard {
  photo: string,
  rating: number,
}

const CardImage = ({photo, rating}:ImageCard) => {
  console.log(photo);
  
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: photo }} />
      <View style={styles.ratingContainer}>
        <AntDesign name="star" size={24} color="#EEBA00" />
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
  )
}

export default CardImage

const styles = StyleSheet.create({
  container: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  rating: {
    color: "#7A6229",
    fontWeight: "600",
    fontSize: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    backgroundColor: "#FBEDB7",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    bottom: 27,
    borderRadius: 15,
    padding: 5,
  },
})