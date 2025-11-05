import { Stack } from "expo-router";

import { AuthProvider, useAuth } from "../context/AuthContext";


export default function RootLayout() {
  const { user } = useAuth()  

  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#111111" },
        }}
      >
        {user === null ? (
          <Stack.Screen name="(auth)" />
        ) : (
          <Stack.Screen name="(tabs)" />
        )}
      </Stack>
    </AuthProvider>
  );
}
