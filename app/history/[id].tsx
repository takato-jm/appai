import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "../../src/config/firebase";

export default function HistoryDetailScreen() {
  const { id } = useLocalSearchParams();
  const [item, setItem] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const ref = doc(db, "diagnosis_history", id as string);
      const snap = await getDoc(ref);
      setItem(snap.data());
    };

    fetchData();
  }, []);

  if (!item) return <Text>読み込み中...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>診断詳細</Text>
      <Text>肌タイプ: {item.skinType}</Text>
      <Text>油分: {item.oiliness}</Text>
      <Text>乾燥: {item.dryness}</Text>
      <Text>赤み: {item.redness}</Text>
      <Text>回答データ: {JSON.stringify(item.answers, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});
