import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import HistoryItem from "./HistoryItem";
import historyData from "../utils/HomeHistoyData";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons"; 
const HomeHistory = () => {

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
        {historyData.map((item) => {
          let IconComponent;
          if (item.iconType === "Ionicons") IconComponent = Ionicons;
          else if (item.iconType === "Feather") IconComponent = Feather;
          else if (item.iconType === "MaterialCommunityIcons")
            IconComponent = MaterialCommunityIcons;

          return (
             <HistoryItem key={item.id} {...item} />
          );
        })}
      </View>
    </View>
  );
};

export default HomeHistory;
