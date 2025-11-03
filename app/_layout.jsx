import { Stack } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const AuthContxt = createContext();
export const useAuth = () => useContext(AuthContxt);
export default function RootLayout() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // fake loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#0D0D0D",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }
  return (
    <AuthContxt.Provider value={{ user, setUser }}>
      <Stack screenOptions={{ headerShown: false, contentStyle: {backgroundColor: '#111111'} }}>
        {user === null ? (
          <Stack.Screen name="(auth)" />
        ) : (
       
          <Stack.Screen name="(tabs)" />
        )}
      </Stack>
    </AuthContxt.Provider>
  );
}
