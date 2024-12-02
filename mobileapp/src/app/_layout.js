import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

import {
  useFonts as useAnekTamilFonts,
  AnekTamil_100Thin,
  AnekTamil_200ExtraLight,
  AnekTamil_300Light,
  AnekTamil_400Regular,
  AnekTamil_500Medium,
  AnekTamil_600SemiBold,
  AnekTamil_700Bold,
  AnekTamil_800ExtraBold,
} from '@expo-google-fonts/anek-tamil';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
  configureFonts,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider, NavigationContainer
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import merge from "deepmerge";

import { Colors } from "../constants/Colors";
import { AuthProvider, useAuth } from "../context/AuthContext";

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
  
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  let [fontsLoaded2] = useAnekTamilFonts({
    AnekTamil_100Thin,
    AnekTamil_200ExtraLight,
    AnekTamil_300Light,
    AnekTamil_400Regular,
    AnekTamil_500Medium,
    AnekTamil_600SemiBold,
    AnekTamil_700Bold,
    AnekTamil_800ExtraBold,
  });

  useEffect(() => {

    console.log("authState")
    console.log(authState?.authenticated)
    //if (initializing) return;

    const inAuthGroup = (segments[0] === "(tabs)" || segments[0] === "(setup)");
    console.log("line 52")
    console.log(segments[0])
    console.log(inAuthGroup)
    if (!authState?.authenticated) {
      console.log("onBoarding")
      router.replace("(onBoarding)/")
      //router.replace("/(setup)/welcome");
      //router.replace("/(setup)/setupAccount");
      //router.replace("/(nonauth)/login");
      //router.replace("/(tabs)/setting/profileView") 

    } else {
      router.replace("/(setup)/setupAccount")
      console.log("login")
      //router.replace("/(setup)/setupAccount");
      //router.replace("(tabs)")
    }
  }, [authState, initializing]);

  // const colorScheme = useColorScheme();
  const { colorScheme } = useTheme();

  const paperTheme =
    colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;

  //Customer fontsheadlineMedium
  const fontConfig = {
    default: {
      fontFamily: "Montserrat_400Regular",
    },
    "displayMedium": {
      fontFamily: "Montserrat_600SemiBold",
    },
    "headlineMedium": {
      fontFamily: "Montserrat_600SemiBold",
    },
    "titleMedium":{
      fontFamily: "AnekTamil_400Regular",
    },
    "labelMedium":{
      fontFamily: "AnekTamil_600SemiBold",
    },
    "bodyMedium":{
      fontFamily: "AnekTamil_400Regular",
    }
  }

  const theme = {
    ...paperTheme,
    fonts: configureFonts({ config: fontConfig }),
  }

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider value={theme}>
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