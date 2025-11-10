import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import userImage from "../../assets/images/user.png";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Index = () => {
  const { user } = useAuth();
  const [eyeShow, setEyeShow] = useState(true);

  const handleHideShow = () => setEyeShow(!eyeShow);

  // ✅ Include `iconType` for each feature
  const features = [
    {
      icon: "credit-card-plus-outline",
      iconType: "MaterialCommunityIcons",
      label: "Fund Wallet",
    },
    {
      icon: "phone-portrait-outline",
      iconType: "Ionicons",
      label: "Buy Airtime",
    },
    { icon: "credit-card", iconType: "Feather", label: "Pay Bills" },
    { icon: "zap", iconType: "Feather", label: "Send Money" },
  ];

  return (
    <View style={{ backgroundColor: "#111111", flex: 1, paddingVertical: 45 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>QuickPay</Text>
        <View style={styles.profileContainer}>
          <Image source={userImage} style={styles.profileImage} />
        </View>
      </View>

      {/* Balance */}
      <View style={styles.balanceContainer}>
        <Text style={{ color: "#a0a0a0" }}>Your Balance</Text>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Text style={styles.balanceText}>
            {eyeShow ? "$1,243.52" : "********"}
          </Text>
          <TouchableOpacity onPress={handleHideShow}>
            {eyeShow ? (
              <Feather name="eye" size={20} color="#a0a0a0" />
            ) : (
              <Feather name="eye-off" size={20} color="#a0a0a0" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Feature Grid */}
      <View style={styles.gridContainer}>
        {features.map((item, index) => (
          <GreyBox
            key={index}
            icon={item.icon}
            iconType={item.iconType}
            label={item.label}
          />
        ))}
      </View>
    </View>
  );
};

export default Index;

// ✅ GreyBox Component that chooses correct icon source dynamically
const GreyBox = ({ icon, iconType, label }) => {
  const renderIcon = () => {
    switch (iconType) {
      case "MaterialCommunityIcons":
        return <MaterialCommunityIcons name={icon} size={26} color="#1f75ff" />;
      case "Ionicons":
        return <Ionicons name={icon} size={26} color="#1f75ff" />;
      case "Feather":
      default:
        return <Feather name={icon} size={26} color="#1f75ff" />;
    }
  };

  return (
    <View style={styles.greyBox}>
      <View style={styles.iconBg}>{renderIcon()}</View>

      <Text style={styles.greyBoxText}>{label}</Text>
    </View>
  );
};

// ✅ Styles
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  profileContainer: {
    width: 35,
    height: 35,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  balanceContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  balanceText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
    padding: 10,
  },
  greyBox: {
    width: "48%",
    backgroundColor: "#1c1c1c",
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  greyBoxText: {
    color: "#f5f5f5",
    marginTop: 8,
    fontWeight: "500",
  },
  iconBg: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#1f75ff33",
    justifyContent: "center",
    alignItems: "center",
  },
});
