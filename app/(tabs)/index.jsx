import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Image } from "react-native";
import userImage from "../../assets/images/user.png";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";
const index = () => {
  const { user } = useAuth();
  const [eyeShow, setEyeShow] = useState(true);
  const handleHideShow = () => {
    setEyeShow(!eyeShow);
  };
  return (
    <View style={{ backgroundColor: "#111111", flex: 1, paddingVertical: 45 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          QuickPay
        </Text>
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 20,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        >
          <Image
            source={userImage}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={{ color: "#a0a0a0" }}>Your Balance</Text>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 32 }}>
            $1,243.52
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
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  balanceContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
