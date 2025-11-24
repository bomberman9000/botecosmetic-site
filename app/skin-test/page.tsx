"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { quizQuestions, QuizAnswers, getRecommendations } from "@/lib/quiz";
import { useQuizStore } from "@/store/quizStore";

export default function SkinTestPage() {
  const router = useRouter();
  const { answers, setAnswer, reset } = useQuizStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const question = quizQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;
  const isFirstQuestion = currentQuestion === 0;

  // Загружаем сохраненный ответ для текущего вопроса
  const currentAnswer = answers[question.id as keyof QuizAnswers];
  if (currentAnswer && selectedOptions.length === 0) {
    if (Array.isArray(currentAnswer)) {
      setSelectedOptions(currentAnswer);
    } else {
      setSelectedOptions([currentAnswer as string]);
    }
  }

  const handleNext = () => {
    if (selectedOptions.length === 0) return;

    const newAnswers = { ...answers };
    if (question.type === "single") {
      const key = question.id === 1 ? "skinType" :
                  question.id === 2 ? "goal" :
                  question.id === 3 ? "problems" :
                  question.id === 4 ? "sensitivity" :
                  question.id === 5 ? "routine" :
                  question.id === 6 ? "allergies" :
                  question.id === 7 ? "age" :
                  question.id === 8 ? "setSize" : "unknown";
      if (key !== "unknown" && key !== "problems") {
        setAnswer(key as keyof QuizAnswers, selectedOptions[0]);
      } else if (key === "problems") {
        setAnswer("problems", selectedOptions);
      }
    } else {
      setAnswer(question.id === 3 ? "problems" : "unknown", selectedOptions);
    }

    if (isLastQuestion) {
      const finalAnswers = { ...answers };
      if (question.type === "single") {
        const key = question.id === 1 ? "skinType" :
                    question.id === 2 ? "goal" :
                    question.id === 4 ? "sensitivity" :
                    question.id === 5 ? "routine" :
                    question.id === 6 ? "allergies" :
                    question.id === 7 ? "age" :
                    question.id === 8 ? "setSize" : "unknown";
        if (key !== "unknown") {
          finalAnswers[key as keyof QuizAnswers] = selectedOptions[0];
        }
      } else {
        finalAnswers.problems = selectedOptions;
      }

      const recommendations = getRecommendations(finalAnswers);
      router.push(`/result?products=${recommendations.join(",")}`);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOptions([]);
    }
  };

  const handleBack = () => {
    if (!isFirstQuestion) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOptions([]);
    }
  };

  const handleOptionSelect = (value: string) => {
    if (question.type === "single") {
      setSelectedOptions([value]);
    } else {
      setSelectedOptions((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
      );
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-bg py-6 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2 px-2">
            <span>Вопрос {currentQuestion + 1} из {quizQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-line h-1.5 sm:h-2 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-accent"
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 sm:mb-8 px-2">
              {question.question}
            </h2>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {question.options.map((option) => {
                const isSelected = selectedOptions.includes(option.value);
                return (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleOptionSelect(option.value)}
                    className={`w-full text-left p-4 sm:p-6 rounded-card border-2 transition-all min-h-[56px] sm:min-h-[64px] ${
                      isSelected
                        ? "border-accent bg-accent/5 shadow-soft"
                        : "border-line hover:border-accent/50 bg-bg"
                    }`}
                  >
                    <span className="font-medium text-primary text-sm sm:text-base">
                      {option.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 px-2">
          <button
            onClick={handleBack}
            disabled={isFirstQuestion}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-button font-medium transition-colors min-h-[48px] ${
              isFirstQuestion
                ? "text-gray-400 cursor-not-allowed"
                : "text-primary hover:text-accent"
            }`}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Назад</span>
          </button>
          <button
            onClick={handleNext}
            disabled={selectedOptions.length === 0}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-button font-medium transition-colors border-2 min-h-[48px] w-full sm:w-auto ${
              selectedOptions.length === 0
                ? "bg-gray-300 border-gray-300 cursor-not-allowed text-white"
                : "bg-primary text-white border-primary hover:bg-accent hover:border-accent"
            }`}
          >
            <span className="text-sm sm:text-base">{isLastQuestion ? "Получить подбор" : "Далее"}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

