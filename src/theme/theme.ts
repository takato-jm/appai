import { MD3LightTheme } from "react-native-paper";

export const appTheme = {
  ...MD3LightTheme,
  fonts: {
    bodySmall: { fontFamily: "NotoSansJP_400Regular" },
    bodyMedium: { fontFamily: "NotoSansJP_400Regular" },
    bodyLarge: { fontFamily: "NotoSansJP_500Medium" },
    labelLarge: { fontFamily: "NotoSansJP_700Bold" },
    headlineMedium: { fontFamily: "NotoSansJP_700Bold" },
    headlineLarge: { fontFamily: "NotoSansJP_700Bold" },
  },
  colors: {
    ...MD3LightTheme.colors,
    primary: "#4CAF50",
    secondary: "#8BC34A",
  },
};
