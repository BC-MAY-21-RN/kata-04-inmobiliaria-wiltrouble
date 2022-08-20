import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
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