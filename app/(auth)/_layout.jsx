import { Stack, Tabs } from "expo-router";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export default function AuthLayout() {
  return (
    <Stack style={{ backgroundColor: "#111111", flex: 1 }}>
      <Stack.Screen name="AuthScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
