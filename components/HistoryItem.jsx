import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HistoryItem = ({ id, icon, title, price, date }) => {
  return (
    <View style={Styles.item}>
      <View key={id}> </View>
    </View>
  );
};

export default HistoryItem;

const Styles = StyleSheet.create({
  item: {
    width: "100%",
    padding: 10,
    backgroundColor: "#2a2a2a",
    borderRadius: 8,
    marginBottom: 10,
  },
});
