import { router } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { saveDiagnosis } from "../../src/services/saveDiagnosis";
import { useDiagnosisStore } from "../../src/store/diagnosisStore";

export default function FinalResult() {
  const { result, answers } = useDiagnosisStore();

  const handleSave = async () => {
    await saveDiagnosis();
    router.push("/history");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>最終診断結果</Text>

      {result.imageUri && <Image source={{ uri: result.imageUri }} style={styles.image} />}

      <Text>肌タイプ: {result.skinType}</Text>
      <Text>油分: {result.oiliness}%</Text>
      <Text>乾燥: {result.dryness}%</Text>
      <Text>赤み: {result.redness}%</Text>

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>回答内容:</Text>
      {Object.entries(answers).map(([id, value]) => (
        <Text key={id}>
          Q{id}: {value}
        </Text>
      ))}

      <Button title="結果を保存する" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 10 },
  title: { fontSize: 22, fontWeight: "bold" },
  image: { width: 150, height: 150, borderRadius: 12 },
});
