import { StyleSheet, Text, View } from "react-native";

export default function DiagnosisScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>診断メニュー</Text>
      <Text>・写真肌診断</Text>
      <Text>・肌質チェックリスト</Text>
      <Text>・骨格診断（今後追加）</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});
