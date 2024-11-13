/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    navBar: {
      backgroundColor: '#FFC858',
      activeTintColor: '#000',
      inactiveTintColor: '#000',
    },
    "primary": "rgb(129, 85, 0)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(255, 221, 178)",
    "onPrimaryContainer": "rgb(41, 24, 0)",
    "secondary": "rgb(0, 107, 85)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(95, 251, 209)",
    "onSecondaryContainer": "rgb(0, 32, 24)",
    "tertiary": "rgb(46, 107, 39)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(175, 244, 158)",
    "onTertiaryContainer": "rgb(0, 34, 1)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "#F4EADA",
    "onBackground": "rgb(31, 27, 22)",
    "surface": "rgb(255, 251, 255)",
    //"surface": "#FCE4B6",
    "onSurface": "rgb(31, 27, 22)",
    //"surfaceVariant": "rgb(240, 224, 207)",
    "surfaceVariant":"#FCE4B6",
    "onSurfaceVariant": "rgb(79, 69, 57)",
    "outline": "rgb(129, 117, 103)",
    "outlineVariant": "rgb(211, 196, 180)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(52, 48, 42)",
    "inverseOnSurface": "rgb(249, 239, 231)",
    "inversePrimary": "rgb(255, 185, 78)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(249, 243, 242)",
      "level2": "rgb(245, 238, 235)",
      "level3": "rgb(241, 233, 227)",
      "level4": "rgb(240, 231, 224)",
      "level5": "rgb(237, 228, 219)"
    },
    "surfaceDisabled": "rgba(31, 27, 22, 0.12)",
    "onSurfaceDisabled": "rgba(31, 27, 22, 0.38)",
    "backdrop": "rgba(56, 47, 36, 0.4)",
    "orange": "rgb(163, 62, 0)",
    "onOrange": "rgb(255, 255, 255)",
    "orangeContainer": "rgb(255, 219, 205)",
    "onOrangeContainer": "rgb(54, 15, 0)",
    "yellow": "rgb(102, 96, 0)",
    "onYellow": "rgb(255, 255, 255)",
    "yellowContainer": "rgb(241, 230, 93)",
    "onYellowContainer": "rgb(31, 28, 0)",
    "beige": "rgb(122, 89, 0)",
    "onBeige": "rgb(255, 255, 255)",
    "beigeContainer": "rgb(255, 222, 161)",
    "onBeigeContainer": "rgb(38, 25, 0)",
    "gold": "rgb(123, 88, 0)",
    "onGold": "rgb(255, 255, 255)",
    "goldContainer": "rgb(255, 222, 164)",
    "onGoldContainer": "rgb(38, 25, 0)"
  },
  
  dark: {
    navBar: {
      backgroundColor: '#000',
      activeTintColor: '#FFC858',
      inactiveTintColor: '#FFC858',
    },
    "primary": "rgb(255, 185, 78)",
    "onPrimary": "rgb(69, 43, 0)",
    "primaryContainer": "rgb(98, 64, 0)",
    "onPrimaryContainer": "rgb(255, 221, 178)",
    "secondary": "rgb(57, 222, 182)",
    "onSecondary": "rgb(0, 56, 43)",
    "secondaryContainer": "rgb(0, 81, 64)",
    "onSecondaryContainer": "rgb(95, 251, 209)",
    "tertiary": "rgb(148, 215, 133)",
    "onTertiary": "rgb(0, 58, 2)",
    "tertiaryContainer": "rgb(19, 82, 16)",
    "onTertiaryContainer": "rgb(175, 244, 158)",
    "error": "rgb(255, 180, 171)",
    "onError": "rgb(105, 0, 5)",
    "errorContainer": "rgb(147, 0, 10)",
    "onErrorContainer": "rgb(255, 180, 171)",
    "background": "#343434",
    "onBackground": "rgb(234, 225, 217)",
    "surface": "rgb(31, 27, 22)",
    "onSurface": "rgb(234, 225, 217)",
    "surfaceVariant": "rgb(79, 69, 57)",
    "onSurfaceVariant": "rgb(211, 196, 180)",
    "outline": "rgb(155, 143, 128)",
    "outlineVariant": "rgb(79, 69, 57)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(234, 225, 217)",
    "inverseOnSurface": "rgb(52, 48, 42)",
    "inversePrimary": "rgb(129, 85, 0)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(42, 35, 25)",
      "level2": "rgb(49, 40, 27)",
      "level3": "rgb(56, 44, 28)",
      "level4": "rgb(58, 46, 29)",
      "level5": "rgb(62, 49, 30)"
    },
    "surfaceDisabled": "rgba(234, 225, 217, 0.12)",
    "onSurfaceDisabled": "rgba(234, 225, 217, 0.38)",
    "backdrop": "rgba(56, 47, 36, 0.4)",
    "orange": "rgb(255, 181, 150)",
    "onOrange": "rgb(88, 30, 0)",
    "orangeContainer": "rgb(125, 45, 0)",
    "onOrangeContainer": "rgb(255, 219, 205)",
    "yellow": "rgb(212, 202, 67)",
    "onYellow": "rgb(53, 49, 0)",
    "yellowContainer": "rgb(77, 72, 0)",
    "onYellowContainer": "rgb(241, 230, 93)",
    "beige": "rgb(244, 191, 72)",
    "onBeige": "rgb(64, 45, 0)",
    "beigeContainer": "rgb(92, 67, 0)",
    "onBeigeContainer": "rgb(255, 222, 161)",
    "gold": "rgb(245, 190, 72)",
    "onGold": "rgb(65, 45, 0)",
    "goldContainer": "rgb(93, 66, 0)",
    "onGoldContainer": "rgb(255, 222, 164)"
  }
};
