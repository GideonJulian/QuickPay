import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const categories = [
  { label: "Electricity", icon: "bulb-outline" },
  { label: "Internet & Landline", icon: "wifi-outline" },
  { label: "TV Subscription", icon: "tv-outline" },
  { label: "Water", icon: "water-outline" },
  { label: "Mobile Recharge", icon: "phone-portrait-outline" },
];
const index = () => {
  const [selected, setSelected] = useState(null);
  return (
    <View
      style={{
        backgroundColor: "#111111",
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 20,
      }}
    >
      <View>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>
          Select a Category
        </Text>
        <View>
          {categories.map((item, index) => (
            <CategoryItem
              key={index}
              label={item.label}
              icon={item.icon}
              selected={selected === index}
              onPress={() => setSelected(index)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default index;
const CategoryItem = ({ label, icon, selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: selected ? "#4f46e54d" : "#1c1c1e",
        padding: 10,
        borderRadius: 12,
        borderWidth: selected ? 2 : 0,
        borderColor: "#4f46e5",
        marginBottom: 12,
      }}
    >
      {/* Left Icon */}
      <View
        style={{
          backgroundColor: "#292546",
          padding: 10,
          borderRadius: 10,
          marginRight: 15,
        }}
      >
        <Ionicons name={icon} size={22} color="#7d73ff" />
      </View>

      {/* Label */}
      <Text style={{ color: "white", fontSize: 16, flex: 1 }}>{label}</Text>

      {/* Right Arrow */}
      <Ionicons name="chevron-forward" size={22} color="#fff" />
    </TouchableOpacity>
  );
};
