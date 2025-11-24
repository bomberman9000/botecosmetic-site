import { create } from "zustand";
import { QuizAnswers } from "@/lib/quiz";

interface QuizStore {
  answers: QuizAnswers;
  setAnswer: (key: keyof QuizAnswers, value: any) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  answers: {},
  setAnswer: (key, value) =>
    set((state) => ({
      answers: { ...state.answers, [key]: value },
    })),
  reset: () => set({ answers: {} }),
}));

