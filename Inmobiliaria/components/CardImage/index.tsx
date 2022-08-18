import { StyleSheet, Text, View, Image, ImageBackground, PushNotificationIOS } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
interface ImageCard {
  photo: string,
  rating: string,
}

const CardImage = ({photo, rating}:ImageCard) => {
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
    //backgroundColor: 'red',
    //width: '100%',
    height: 150,
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
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    bottom: 5,
    borderRadius: 6
  },
})