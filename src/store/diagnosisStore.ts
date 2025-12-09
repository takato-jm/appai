import { create } from "zustand";

export type DiagnosisResult = {
  imageUri: string | null;
  skinType: string | null;
  oiliness?: number;
  dryness?: number;
  redness?: number;
};

type DiagnosisStore = {
  result: DiagnosisResult;
  answers: Record<number, string>; 
  setImage: (uri: string) => void;
  setSkinType: (type: string) => void;
  setMetrics: (oil: number, dry: number, red: number) => void;
  setAnswer: (id: number, value: string) => void;
  setAIResult: (data: Partial<DiagnosisResult>) => void;
  reset: () => void;
};

export const useDiagnosisStore = create<DiagnosisStore>((set) => ({
  result: {
    imageUri: null,
    skinType: null,
  },

  answers: {}, 

  setImage: (uri) =>
    set((state) => ({
      result: { ...state.result, imageUri: uri },
    })),

  setSkinType: (type) =>
    set((state) => ({
      result: { ...state.result, skinType: type },
    })),

  setMetrics: (oil, dry, red) =>
    set((state) => ({
      result: {
        ...state.result,
        oiliness: oil,
        dryness: dry,
        redness: red,
      },
    })),

  setAnswer: (id, value) =>
    set((state) => ({
      answers: { ...state.answers, [id]: value },
    })),

    setAIResult: (data) =>
  set((state) => ({
    result: { ...state.result, ...data },
  })),

  reset: () =>
    set({
      result: { imageUri: null, skinType: null },
      answers: {}, 
    }),
}));
