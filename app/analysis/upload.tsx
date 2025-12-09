import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { useDiagnosisStore } from "../../src/store/diagnosisStore";

export default function UploadScreen() {
  const { setImage, result } = useDiagnosisStore();

  const pickImage = async () => {
    // カメラロールの許可取得
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("アクセス拒否", "写真へのアクセス権限が必要です。");
      return;
    }

    // ギャラリーから選択
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!response.canceled) {
      const selectedUri = response.assets[0].uri;
      setImage(selectedUri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>写真診断を開始</Text>

      {result.imageUri && (
        <Image source={{ uri: result.imageUri }} style={styles.preview} />
      )}

      <View style={{ gap: 10, marginTop: 20 }}>
        <Button title="写真を選ぶ" onPress={pickImage} />

        {result.imageUri && (
          <Button
            title="この画像で診断へ進む"
            onPress={() => router.push("/analysis/result")}
            color="green"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  preview: { width: 220, height: 220, borderRadius: 12, marginTop: 10 },
});
