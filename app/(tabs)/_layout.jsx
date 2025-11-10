import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
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
        tabBarActiveTintColor: "#4f46e5",
        tabBarInactiveTintColor: "#a0a0a5",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "history",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="history" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Payment",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="wallet-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
            tabBarIcon: ({ size, color }) => (
           <FontAwesome5 name="user" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
