import { DiagnosisResult } from "../../store/diagnosisStore";

export const fakeAiAnalysis = async (imageUri: string): Promise<Partial<DiagnosisResult>> => {
  // AI処理っぽくディレイを入れる(1秒)
  await new Promise((res) => setTimeout(res, 1000));

  // 仮のランダム診断（後でAI置き換え）
  const randomSkinType = ["乾燥肌", "脂性肌", "混合肌", "普通肌"][Math.floor(Math.random() * 4)];

  return {
    skinType: randomSkinType,
    oiliness: Math.floor(Math.random() * 100),
    dryness: Math.floor(Math.random() * 100),
    redness: Math.floor(Math.random() * 100),
  };
};
