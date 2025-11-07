import { useEffect, useRef } from "react";
import {
  Animated,
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

export default function CustomPopup({
  visible,
  message,
  type = "error",
  onClose,
}) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 6,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);
  if (!visible) return null;
  return (
    <Modal transparent animationType="none" visible={visible}>
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.popup,
            {
              opacity,
              transform: [{ scale }],
              backgroundColor: type === "error" ? "white" : "#4CAF50",
            },
          ]}
        >
          <Text style={styles.message}>{message}</Text>

          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Okay</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  popup: {
    width: "80%",
    borderRadius: 16,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  message: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 14,
  },
});
