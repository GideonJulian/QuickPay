import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

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
            <Text style={{color: '#1f75ff', fontWeight: '500', fontSize:14}}>View All</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeHistory;
