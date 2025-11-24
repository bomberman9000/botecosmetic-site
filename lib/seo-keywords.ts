/**
 * Семантическое ядро для SEO (2025)
 * Разбито на кластеры для использования в каталоге и статьях
 */

export const seoKeywords = {
  // A) Сыворотки (Serum)
  serums: [
    "сыворотка от акне",
    "сыворотка от прыщей",
    "сыворотка с ниацинамидом",
    "сыворотка с салициловой кислотой",
    "сыворотка увлажняющая",
    "anti-age сыворотка",
    "сыворотка от черных точек",
    "сыворотка для подростков",
  ],

  // B) Кремы
  creams: [
    "крем для жирной кожи",
    "крем для проблемной кожи",
    "крем увлажняющий",
    "крем от воспалений",
    "крем с ниацинамидом",
    "ночной крем",
  ],

  // C) Очищение
  cleansing: [
    "очищающий гель",
    "гель для умывания",
    "гель против акне",
    "гель от черных точек",
    "мягкое очищение",
  ],

  // D) Проблемы кожи
  skinProblems: [
    "снижение жирности",
    "акне",
    "постакне",
    "расширенные поры",
    "сухость кожи",
    "чувствительная кожа",
    "морщины",
    "тусклая кожа",
  ],

  // E) LSI под подбор ухода
  personalCare: [
    "тест подбора ухода",
    "подобрать косметику",
    "диагностика кожи",
    "уход по типу кожи",
    "персональный уход",
    "индивидуальная формула",
    "активные вещества",
  ],
};

/**
 * Получить ключевые слова для категории продукта
 */
export function getKeywordsForCategory(category: string): string[] {
  const categoryMap: Record<string, keyof typeof seoKeywords> = {
    Сыворотки: "serums",
    Кремы: "creams",
    Очищение: "cleansing",
  };

  const keywordCategory = categoryMap[category];
  if (keywordCategory) {
    return seoKeywords[keywordCategory];
  }

  return [];
}

/**
 * Получить все ключевые слова для продукта на основе его проблем
 */
export function getKeywordsForProduct(problems: string[]): string[] {
  const keywords: string[] = [];
  
  problems.forEach((problem) => {
    const matchingKeywords = seoKeywords.skinProblems.filter((kw) =>
      kw.toLowerCase().includes(problem.toLowerCase())
    );
    keywords.push(...matchingKeywords);
  });

  return [...new Set(keywords)];
}

