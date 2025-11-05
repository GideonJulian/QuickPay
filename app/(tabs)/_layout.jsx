import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs options={{headerShown: false}} >
      <Tabs.Screen name="index" options={{ title: 'Home', }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', }} />
      <Tabs.Screen name="payment" options={{ title: 'Payment', }} />
      <Tabs.Screen name="history" options={{ title: 'history', }} />
    </Tabs>
  );
}
