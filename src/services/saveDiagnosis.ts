import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useDiagnosisStore } from "../store/diagnosisStore";

export const saveDiagnosis = async () => {
  const result = useDiagnosisStore.getState().result;
  const answers = useDiagnosisStore.getState().answers;

  if (!auth.currentUser) {
    console.warn("No auth user — cannot save");
    return;
  }

  try {
    await addDoc(collection(db, "diagnosis_history"), {
      userId: auth.currentUser.uid,
      ...result,
      answers,
      createdAt: new Date(),
    });

    console.log("🔥 Saved to Firestore");
  } catch (err) {
    console.error("Firestore Save Error", err);
  }
};
