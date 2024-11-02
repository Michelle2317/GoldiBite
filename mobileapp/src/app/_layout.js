import { Stack, useRouter } from "expo-router";
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
  ThemeProvider,
} from "@react-navigation/native";
import merge from "deepmerge";

import { Colors } from "../constants/Colors";

const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
const customLightTheme = { ...MD3LightTheme, colors: Colors.light };

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

import { useTheme } from "../hooks/useTheme";

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
	const router = useRouter();

	useEffect(() => {

		if (initializing) {
      //router.replace('/(setup)/welcome');
			//router.replace('/(setup)/setupAccount');
			//router.replace('/(nonauth)/login');
      router.replace('(onBoarding)/onBoarding')
			
		} else {
			//router.replace('/(setup)/setupAccount');
      router.replace('(tabs)')
		}
	}, [initializing]);

  // const colorScheme = useColorScheme();
  const { colorScheme } = useTheme();

  const paperTheme =
    colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={paperTheme}>
        <Stack>
          <Stack.Screen name="(tabs)"  options={{headerShown: false, }} />
          <Stack.Screen name="(onBoarding)" options={{headerShown: false }} />
          <Stack.Screen name="(nonauth)"  options={{headerShown: false, }} />
          <Stack.Screen name="(setup)" options={{headerShown:false}} />
        </Stack>
      </ThemeProvider>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </PaperProvider>
  );
}
