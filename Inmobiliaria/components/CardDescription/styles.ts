import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 160,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 22,
    color: "#151525",
    paddingTop: 20
  },
  row: {
    flexDirection: "row",
    paddingTop: 10,
  },
  textLocation: {
    color: "#737373",
  },
  lastRow: {
    justifyContent: "space-between",
  },
  icons: {
    justifyContent: "space-between",
  },
  textIcon: {
    fontWeight: '700',
    fontSize: 17
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
