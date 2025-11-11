import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HistoryItem = ({ icon, title, price, date, type }) => {
  // Define colors based on transaction type
  const getColors = () => {
    switch (type) {
      case "music":
      case "airtime":
        return {
          iconBg: "#ef444433",
          iconColor: "#f87171",
          priceColor: "#ffffff",
        };
      case "wallet":
        return {
          iconBg: "#22c55e33",
          iconColor: "#4ade80",
          priceColor: "#4ade80",
        };
      default:
        return {
          iconBg: "#1f75ff33",
          iconColor: "#60a5fa",
          priceColor: "#f5f5f5",
        };
    }
  };

  const colors = getColors();

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftSection}>
        <View style={[styles.iconBg, { backgroundColor: colors.iconBg }]}>
          {React.cloneElement(icon, { color: colors.iconColor, size: 22 })}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>

      <Text style={[styles.price, { color: colors.priceColor }]}>{price}</Text>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2a2a2a",
    borderRadius: 12,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "column",
  },
  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  date: {
    color: "#a0a0a0",
    fontSize: 12,
    marginTop: 2,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
  },
});
