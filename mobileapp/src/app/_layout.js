import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from 'react';

import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider, NavigationContainer
} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import merge from "deepmerge";

import { Colors } from "../constants/Colors";
import { AuthProvider, useAuth } from '../context/AuthContext';

const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
const customLightTheme = { ...MD3LightTheme, colors: Colors.light };

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

import { useTheme } from "../hooks/useTheme";

//const Stack = createNativeStackNavigator();

export function RootLayout() {

  const { authState } = useAuth();

  const segments = useSegments();

  const [initializing, setInitializing] = useState(true);
  const router = useRouter();

  useEffect(() => {

    console.log("authState")
    console.log(authState?.authenticated)
    //if (initializing) return;

    const inAuthGroup = (segments[0] === '(tabs)' || segments[0] === '(setup)');
    console.log("line 52")
    console.log(segments[0])
    console.log(inAuthGroup)
    if (!authState?.authenticated) {
      console.log("onBoarding")
      router.replace('(onBoarding)/onBoarding')
      //router.replace('/(setup)/welcome');
      //router.replace('/(setup)/setupAccount');
      //router.replace('/(nonauth)/login');
      //router.replace('/(tabs)/setting/profileView') 

    } else {
      router.replace('/(setup)/setupAccount')
      console.log("login")
      //router.replace('/(setup)/setupAccount');
      //router.replace('(tabs)')
    }
  }, [authState, initializing]);

  // const colorScheme = useColorScheme();
  const { colorScheme } = useTheme();

  const paperTheme =
    colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={paperTheme}>
        <Stack>
          <Stack.Screen name="(nonauth)" options={{ headerShown: false, }} />
          <Stack.Screen name="(onBoarding)" options={{ headerShown: false }} />
          <Stack.Screen name="(setup)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false, }} />

        </Stack>
      </ThemeProvider>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </PaperProvider>
  );
}


export default function Layout() {
  return (

    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  )

}