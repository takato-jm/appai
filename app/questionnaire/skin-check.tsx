import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDiagnosisStore } from "../../src/store/diagnosisStore";

const QUESTIONS = [
  "肌は全体的に乾燥しやすいですか？",
  "Tゾーンが脂っぽくテカリやすいですか？",
  "赤みやニキビ跡が目立ちますか？",
];

export default function SkinCheck() {
  const { setAnswer } = useDiagnosisStore();
  const [index, setIndex] = useState(0);
  const handleAnswer = (value: string) => {
    setAnswer(index + 1, value);
    if (index + 1 < QUESTIONS.length) {
      setIndex(index + 1);
    } else {
      router.replace("../analysis/final-result");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{QUESTIONS[index]}</Text>
      <Button title="はい" onPress={() => handleAnswer("yes")} />
      <Button title="いいえ" onPress={() => handleAnswer("no")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 20 },
  question: { fontSize: 20, fontWeight: "bold", textAlign: "center" },
});
