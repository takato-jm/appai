import {
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans-jp";
import { Stack } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useAuth } from "../src/auth/useAuth";
import { appTheme } from "../src/theme/theme";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_700Bold,
  });

  const { user, loading } = useAuth();
  if (!fontsLoaded || loading || !user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const RNText: any = Text;
  RNText.defaultProps = RNText.defaultProps || {};
  RNText.defaultProps.style = [
    { fontFamily: "NotoSansJP_400Regular" },
    RNText.defaultProps.style,
  ];

  return (
    <PaperProvider theme={appTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
