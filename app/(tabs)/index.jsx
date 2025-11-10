import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Image } from "react-native";
import userImage from "../../assets/images/user.png";
const index = () => {
  const { user } = useAuth();
  return (
    <View style={{ backgroundColor: "#111111", flex: 1, paddingVertical: 45, }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          alignItems: 'center' 
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

      </View>
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  balanceContainer: {

  }
})