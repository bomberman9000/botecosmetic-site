export interface QuizQuestion {
  id: number;
  question: string;
  type: "single" | "multiple";
  options: {
    value: string;
    label: string;
  }[];
}

export interface QuizAnswers {
  skinType?: string;
  goal?: string;
  problems?: string[];
  sensitivity?: string;
  routine?: string;
  allergies?: string;
  age?: string;
  setSize?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Какой у вас тип кожи?",
    type: "single",
    options: [
      { value: "жирная", label: "Жирная" },
      { value: "сухая", label: "Сухая" },
      { value: "комбинированная", label: "Комбинированная" },
      { value: "нормальная", label: "Нормальная" },
      { value: "чувствительная", label: "Чувствительная" },
    ],
  },
  {
    id: 2,
    question: "Какая ваша главная цель ухода?",
    type: "single",
    options: [
      { value: "antiacne", label: "Избавиться от акне и прыщей" },
      { value: "antiage", label: "Омоложение и борьба с морщинами" },
      { value: "hydrate", label: "Интенсивное увлажнение" },
      { value: "balance", label: "Нормализация и баланс" },
      { value: "maintenance", label: "Поддержание состояния" },
    ],
  },
  {
    id: 3,
    question: "Какие проблемы вас беспокоят? (можно выбрать несколько)",
    type: "multiple",
    options: [
      { value: "акне", label: "Акне и прыщи" },
      { value: "черные точки", label: "Черные точки" },
      { value: "жирность", label: "Жирность и блеск" },
      { value: "сухость", label: "Сухость и шелушения" },
      { value: "морщины", label: "Морщины" },
      { value: "тусклость", label: "Тусклость" },
      { value: "воспаления", label: "Воспаления" },
      { value: "расширенные поры", label: "Расширенные поры" },
    ],
  },
  {
    id: 4,
    question: "Насколько чувствительна ваша кожа?",
    type: "single",
    options: [
      { value: "очень чувствительная", label: "Очень чувствительная" },
      { value: "чувствительная", label: "Чувствительная" },
      { value: "нормальная", label: "Нормальная" },
      { value: "устойчивая", label: "Устойчивая" },
    ],
  },
  {
    id: 5,
    question: "Какой у вас текущий уход?",
    type: "single",
    options: [
      { value: "full", label: "Полный уход (сыворотка + крем + очищение)" },
      { value: "basic", label: "Базовый уход (крем)" },
      { value: "minimal", label: "Минимальный (1-2 средства)" },
      { value: "no", label: "Не использую уход" },
    ],
  },
  {
    id: 6,
    question: "Есть ли у вас аллергии на косметические компоненты?",
    type: "single",
    options: [
      { value: "no", label: "Нет аллергий" },
      { value: "yes", label: "Да, есть аллергии" },
      { value: "unknown", label: "Не знаю" },
    ],
  },
  {
    id: 7,
    question: "Ваш возраст?",
    type: "single",
    options: [
      { value: "12-17", label: "12-17 лет" },
      { value: "18-25", label: "18-25 лет" },
      { value: "26-35", label: "26-35 лет" },
      { value: "36-50", label: "36-50 лет" },
      { value: "50+", label: "50+ лет" },
    ],
  },
  {
    id: 8,
    question: "Какой размер набора вас интересует?",
    type: "single",
    options: [
      { value: "minimal", label: "Минимальный (1-2 средства)" },
      { value: "standard", label: "Стандартный (2-3 средства)" },
      { value: "full", label: "Полный набор (3-4 средства)" },
    ],
  },
];

export function getRecommendations(answers: QuizAnswers): string[] {
  const { skinType, goal, problems = [], sensitivity, age, routine } = answers;

  let list: string[] = [];

  // Акне и прыщи
  if (problems.includes("акне") || problems.includes("прыщи") || goal === "antiacne") {
    list.push("multi3", "balancecream", "deepclean");
  }

  // Сухая кожа
  if (skinType === "сухая" || problems.includes("сухость")) {
    list.push("hydrate");
  }

  // Anti-age
  if (goal === "antiage" || problems.includes("морщины")) {
    list.push("antiage");
  }

  // Чувствительная кожа
  if (sensitivity === "чувствительная" || sensitivity === "очень чувствительная") {
    list.push("hydrate");
  }

  // Подростковая кожа
  if (age === "12-17") {
    list.push("multi3", "deepclean");
  }

  // Минимальный набор
  if (routine === "minimal" || answers.setSize === "minimal") {
    list = list.slice(0, 2);
  } else if (answers.setSize === "standard") {
    list = list.slice(0, 3);
  }

  // Удаляем дубли
  return [...new Set(list)];
}
