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

  // Функция для преобразования question.id в ключ QuizAnswers
  const getIdToKey = (id: number): keyof QuizAnswers | null => {
    const mapping: Record<number, keyof QuizAnswers> = {
      1: "skinType",
      2: "goal",
      3: "problems",
      4: "sensitivity",
      5: "routine",
      6: "allergies",
      7: "age",
      8: "setSize",
    };
    return mapping[id] || null;
  };

  // Загружаем сохраненный ответ для текущего вопроса
  const questionKey = getIdToKey(question.id);
  const currentAnswer = questionKey ? answers[questionKey] : undefined;
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
      const key = getIdToKey(question.id);
      if (key && key !== "problems") {
        setAnswer(key, selectedOptions[0] as string);
      } else if (key === "problems") {
        setAnswer("problems", selectedOptions);
      }
    } else {
      if (question.id === 3) {
        setAnswer("problems", selectedOptions);
      }
    }

    if (isLastQuestion) {
      const finalAnswers = { ...answers };
      if (question.type === "single") {
        const key = getIdToKey(question.id);
        if (key && key !== "problems") {
          finalAnswers[key] = selectedOptions[0] as string;
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
    <div className="min-h-screen bg-bg">
      {/* Personal Care Hero Banner - сразу под хедером, без отступов */}
      <section className="personal-hero" aria-label="Персональный уход">
          <picture className="personal-hero-media">
            <source media="(max-width: 768px)" srcSet="/images/personal-mobile-23.png" />
            <img 
              src="/images/banner-personal-care.png" 
              alt="Персональный уход VIA LABOTE" 
              className="personal-hero-img"
            />
          </picture>

          {/* Subtle light sweep - раз в 10-12 секунд */}
          <div className="personal-light-sweep" aria-hidden="true"></div>
          
          <div className="personal-hero-overlay">
            <div className="personal-hero-copy">
              <h1 className="personal-hero-title">Персональная формула вашей кожи</h1>
              <p className="personal-hero-text">
                Лаборатория персональной косметики,
                <br />
                где каждая формула — точный ответ коже
              </p>
            </div>
          </div>
          
          {/* Логотип отдельно - в правом нижнем углу */}
          <img 
            src="/images/logo-hero.png" 
            alt="VIA LABOTE" 
            className="personal-hero-logo"
          />
        </section>

      <div className="page-container pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
        {/* Почему персональный уход лучше? */}
        <section className="pc-benefits" aria-label="Почему персональный уход лучше">
          <h2 className="pc-benefits-title">Почему персональный уход лучше?</h2>

          <div className="pc-benefits-grid">
            <div className="pc-benefit">
              <span className="pc-check">✓</span>
              Учитывает тип кожи
            </div>

            <div className="pc-benefit">
              <span className="pc-check">✓</span>
              Решает конкретную проблему
            </div>

            <div className="pc-benefit">
              <span className="pc-check">✓</span>
              Активы и концентрации под вас
            </div>

            <div className="pc-benefit">
              <span className="pc-check">✓</span>
              Быстрый результат
            </div>

            <div className="pc-benefit">
              <span className="pc-check">✓</span>
              Безопасно для чувствительной кожи
            </div>
          </div>
        </section>

        {/* Как проходит подбор? */}
        <section className="pc-steps" aria-label="Как проходит подбор">
          <div className="pc-steps-head">
            <h2 className="pc-steps-title">Как проходит подбор?</h2>
          </div>

          <div className="pc-steps-grid">
            <article className="pc-step">
              <div className="pc-step-badge">1</div>
              <h3 className="pc-step-title">Вы проходите короткий тест</h3>
              <p className="pc-step-text">8 простых вопросов о вашей коже</p>
            </article>

            <article className="pc-step">
              <div className="pc-step-badge">2</div>
              <h3 className="pc-step-title">Мы анализируем ваш тип кожи</h3>
              <p className="pc-step-text">Алгоритм подбирает оптимальную формулу</p>
            </article>

            <article className="pc-step">
              <div className="pc-step-badge">3</div>
              <h3 className="pc-step-title">Подбираем персональный уход</h3>
              <p className="pc-step-text">2–4 средства специально для вас</p>
            </article>

            <article className="pc-step">
              <div className="pc-step-badge">4</div>
              <h3 className="pc-step-title">Вы получаете набор, который работает</h3>
              <p className="pc-step-text">Персональная формула с инструкцией</p>
            </article>
          </div>
        </section>

        <div className="skin-test-container">
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
                        ? "border-accent bg-white shadow-[0_0_0_3px_rgba(196,162,84,0.18)]"
                        : "border-line hover:border-accent/50 bg-white"
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
    </div>
  );
}
