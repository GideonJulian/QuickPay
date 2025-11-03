import { Stack, Tabs } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: 'login ' }} />
    </Stack>
  );
}
