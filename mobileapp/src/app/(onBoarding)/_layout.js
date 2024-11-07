import { Stack } from "expo-router";

export default function OnBoardingLayout() {
  return (
    <Stack >
       
      <Stack.Screen name="language" options={{headerShown:false}}  />
      <Stack.Screen name="onBoarding" options={{headerShown:false}}  />
      
    </Stack>
  );
}
