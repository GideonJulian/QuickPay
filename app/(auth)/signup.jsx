import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native";

const signup = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 34, fontWeight: "bold" }}>
            QuickPay
          </Text>
          <Text style={{ color: "#d1d5db", fontSize: 22, paddingVertical: 10 }}>
            Welcom Back
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Login" style={styles.login} />
        </View>
      </View>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#111111",
    paddingVertical: 50,
  },
  buttonContainer: {
    height: 12,
    padding: 10,
    backgroundColor: "#1F2937",
  },
});
