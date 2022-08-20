import { StyleSheet, Text, View, Image, ImageBackground, PushNotificationIOS } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { styles } from './styles'

interface ImageCard {
  photo: string,
  rating: number,
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