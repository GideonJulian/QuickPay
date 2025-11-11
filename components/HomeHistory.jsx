import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import HistoryItem from "./HistoryItem";

const HomeHistory = () => {
  const historyData = [
    {
      id: 1,
      icon: "💸",
      title: "Sent to John",
      price: "-$50.00",
      date: "2024-06-10",
    },
  ];
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#f5f5f5", fontSize: 20 }}>
          Recent Transcations
        </Text>
        <Pressable>
          <Link href={""}>
            <Text style={{ color: "#1f75ff", fontWeight: "500", fontSize: 14 }}>
              View All
            </Text>
          </Link>
        </Pressable>
      </View>
      <View style={{ marginTop: 10, gap: 10 }}>
        {historyData.map((item) => (
        <HistoryItem />
        ))}
      </View>
    </View>
  );
};

export default HomeHistory;
