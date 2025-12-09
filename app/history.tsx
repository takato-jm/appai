import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../src/config/firebase";
import { useDiagnosisStore } from "../src/store/diagnosisStore";

export const saveDiagnosis = async (userId: string) => {
  const { result, answers } = useDiagnosisStore.getState();

  try {
    await addDoc(collection(db, "users", userId, "diagnosisHistory"), {
      ...result,
      answers,
      createdAt: serverTimestamp(),
    });

    console.log("診断データを保存しました！🔥");
  } catch (error) {
    console.error("Firestore保存エラー:", error);
  }
};
