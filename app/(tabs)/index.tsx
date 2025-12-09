import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Screen } from "../../src/components/Screen";

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.center}>
        <Text variant="headlineMedium" style={styles.title}>
          肌診断アプリ
        </Text>

        <Button
          mode="contained"
          style={styles.button}
          onPress={() => router.push("/analysis/upload")}
        >
          診断を始める
        </Button>

        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => router.push("/history")}
        >
          診断履歴を見る
        </Button>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center", // ←縦中央
    alignItems: "center", // ←横中央
  },
  title: {
    marginBottom: 20,
  },
  button: {
    width: 250,
    borderRadius: 30,
    marginVertical: 10,
  },
});
