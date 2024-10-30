import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <Stack >
      
      <Stack.Screen name="login" options={{headerShown:false}}  />
      <Stack.Screen name="sigup" options={{headerShown:false}}  />
    </Stack>
  );
}
