import { Stack } from "expo-router";

export default function OnBoardingLayout() {
  return (
    <Stack>

      <Stack.Screen name="setupAccount" options={{ headerShown: false }} />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />

    </Stack>
  );
}