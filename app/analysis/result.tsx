import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Button, Image, StyleSheet, Text, View } from "react-native";
import { fakeAiAnalysis } from "../../src/features/analysis/fakeAiAnalysis";
import { useDiagnosisStore } from "../../src/store/diagnosisStore";

export default function ResultScreen() {
  const { result, setAIResult } = useDiagnosisStore();
  const [loading, setLoading] = useState(false);

  const startDiagnosisFlow = async () => {
    if (!result.imageUri) return;

    setLoading(true);
    const analysis = await fakeAiAnalysis(result.imageUri);
    setAIResult(analysis);
    setLoading(false);

    // AIが終わったら質問画面へ
    router.push("/questionnaire/skin-check");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI準備完了</Text>

      {result.imageUri && (
        <Image source={{ uri: result.imageUri }} style={styles.image} />
      )}

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="診断を開始する" onPress={startDiagnosisFlow} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  image: { width: 200, height: 200, borderRadius: 12 },
});
