export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  productId: string;
  productName: string;
}

export const SELLER_URL = "https://www.wildberries.ru/seller/1266087";

export const PRODUCT_FEEDBACK_URLS: Record<string, string> = {
  "400519707":
    "https://www.wildberries.ru/catalog/400519707/feedbacks?imtId=190628464&size=578112192",
  "210884573": "https://www.wildberries.ru/catalog/210884573/detail.aspx",
};

export const DEFAULT_REVIEW_LIMIT = 6;
export const MAX_REVIEW_LIMIT = 12;

export const FALLBACK_REVIEWS: Record<string, Review[]> = {
  "271394590": [
    {
      id: "1",
      author: "Анна, 28 лет",
      text: "Отличная сыворотка! Кожа стала заметно чище и ровнее уже через неделю использования.",
      rating: 5,
      date: "2025-01-14",
      productId: "271394590",
      productName: "Сыворотка VIA LABOTE",
    },
    {
      id: "2",
      author: "Мария, 35 лет",
      text: "Результат превзошел все ожидания. Пигментация значительно уменьшилась!",
      rating: 5,
      date: "2025-01-12",
      productId: "271394590",
      productName: "Сыворотка VIA LABOTE",
    },
    {
      id: "3",
      author: "Елена, 42 года",
      text: "Прекрасный состав, видимый эффект, кожа сияет. Буду заказывать еще!",
      rating: 5,
      date: "2025-01-10",
      productId: "271394590",
      productName: "Сыворотка VIA LABOTE",
    },
  ],
  "284305206": [
    {
      id: "4",
      author: "Ольга, 31 год",
      text: "После подбора VIA LABOTE моя проблемная кожа стала чистой и сияющей. Рекомендую!",
      rating: 5,
      date: "2025-01-13",
      productId: "284305206",
      productName: "Персональный уход VIA LABOTE",
    },
    {
      id: "5",
      author: "Светлана, 29 лет",
      text: "Индивидуальный подход действительно работает! Кожа преобразилась за 2 недели.",
      rating: 5,
      date: "2025-01-11",
      productId: "284305206",
      productName: "Персональный уход VIA LABOTE",
    },
    {
      id: "6",
      author: "Екатерина, 38 лет",
      text: "Лучшая косметика, которую я пробовала. Результат виден с первой недели!",
      rating: 5,
      date: "2025-01-09",
      productId: "284305206",
      productName: "Персональный уход VIA LABOTE",
    },
  ],
  "166813981": [
    {
      id: "7",
      author: "Виктория, 26 лет",
      text: "MULTI 3 помог избавиться от акне за месяц. Кожа чистая и ровная!",
      rating: 5,
      date: "2025-01-12",
      productId: "166813981",
      productName: "Сыворотка BOTE MULTI 3",
    },
    {
      id: "8",
      author: "Дарья, 24 года",
      text: "Сыворотка против прыщей работает! Черные точки исчезли, поры стали меньше.",
      rating: 5,
      date: "2025-01-10",
      productId: "166813981",
      productName: "Сыворотка BOTE MULTI 3",
    },
    {
      id: "9",
      author: "Ирина, 30 лет",
      text: "Наконец нашла средство, которое реально помогает от высыпаний. Супер!",
      rating: 5,
      date: "2025-01-08",
      productId: "166813981",
      productName: "Сыворотка BOTE MULTI 3",
    },
  ],
  "210884573": [
    {
      id: "10",
      author: "Дмитрий, 30 лет",
      text: "Масло для бороды просто супер! Борода стала мягкой и ухоженной.",
      rating: 5,
      date: "2025-01-11",
      productId: "210884573",
      productName: "Масло для бороды VIA LABOTE",
    },
    {
      id: "11",
      author: "Александр, 27 лет",
      text: "Отличное масло, приятный аромат. Рекомендую всем бородачам!",
      rating: 5,
      date: "2025-01-09",
      productId: "210884573",
      productName: "Масло для бороды VIA LABOTE",
    },
    {
      id: "12",
      author: "Максим, 32 года",
      text: "Пользуюсь уже месяц, борода выглядит ухоженной и здоровой. Очень доволен!",
      rating: 5,
      date: "2025-01-07",
      productId: "210884573",
      productName: "Масло для бороды VIA LABOTE",
    },
  ],
  "400519707": [
    {
      id: "13",
      author: "Татьяна, 33 года",
      text: "Retinal 8 в 1 - лучшее, что случилось с моей кожей! Морщинки разглаживаются.",
      rating: 5,
      date: "2025-01-10",
      productId: "400519707",
      productName: "Сыворотка BOTE Retinal 8 в 1",
    },
    {
      id: "14",
      author: "Юлия, 40 лет",
      text: "Anti-Age Pro творит чудеса. Кожа подтянулась, сияет. Рекомендую!",
      rating: 5,
      date: "2025-01-08",
      productId: "400519707",
      productName: "Сыворотка BOTE Retinal 8 в 1",
    },
    {
      id: "15",
      author: "Наталья, 45 лет",
      text: "Использую 3 месяца - эффект потрясающий! Выгляжу моложе своих лет.",
      rating: 5,
      date: "2025-01-05",
      productId: "400519707",
      productName: "Сыворотка BOTE Retinal 8 в 1",
    },
  ],
};

export const getFeedbackUrl = (productId: string) =>
  PRODUCT_FEEDBACK_URLS[productId] ||
  `https://www.wildberries.ru/catalog/${productId}/feedbacks`;

export const clampReviewLimit = (limit?: number) => {
  if (!Number.isFinite(limit)) {
    return DEFAULT_REVIEW_LIMIT;
  }

  const normalized = Number(limit);
  return Math.min(Math.max(normalized, 1), MAX_REVIEW_LIMIT);
};

const collectReviews = (productId?: string) => {
  if (productId && FALLBACK_REVIEWS[productId]) {
    return [...FALLBACK_REVIEWS[productId]];
  }

  return Object.values(FALLBACK_REVIEWS).flatMap((reviews) => reviews);
};

export const getFallbackReviews = ({
  productId,
  limit = DEFAULT_REVIEW_LIMIT,
  rating = 5,
}: {
  productId?: string;
  limit?: number;
  rating?: number;
} = {}) => {
  const normalizedLimit = clampReviewLimit(limit);
  const normalizedRating =
    typeof rating === "number" && Number.isFinite(rating) ? rating : undefined;

  const reviews = collectReviews(productId);
  const filtered = normalizedRating
    ? reviews.filter((review) => review.rating === normalizedRating)
    : reviews;

  return filtered
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, normalizedLimit);
};
