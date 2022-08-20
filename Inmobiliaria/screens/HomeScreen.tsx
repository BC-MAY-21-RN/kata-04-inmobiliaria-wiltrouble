import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import realState from "../assets/data/realState.json";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const renderItem = ({ item }) => (
    <Card
      photo={item.imgURL}
      title={item.title}
      ratingDate={item.rating}
      location={item.location}
      beds={item.beds}
      baths={item.baths}
      area={item.area}
      price={item.price}
      fav={item.fav}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList data={realState} renderItem={renderItem} showsVerticalScrollIndicator={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
