import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#111111" },
        headerTitleAlign: "center",
        headerTitleStyle: { color: "white" },
      }}
    >
      <Stack.Screen
        name="send-money"
        options={{
          headerTitle: "Send Money",
          headerBackVisible: true,
          headerBackTitleVisible: false,
             headerTintColor: "white",
          headerBackImage: () => (
            <Ionicons name="chevron-back" size={26} color="white" />
          ),
        }}
      />
    </Stack>
  );
}
