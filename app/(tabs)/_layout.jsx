import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarStyle: {
          backgroundColor: "#1c1c1c",
          borderTopColor: "transparent",
          height: 67,
        },
        tabBarActiveTintColor: ''
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="history" options={{ title: "history" }} />
      <Tabs.Screen name="payment" options={{ title: "Payment" }} />
    </Tabs>
  );
}
