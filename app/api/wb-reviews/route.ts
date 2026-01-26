import { NextResponse } from "next/server";
import type { Review } from "@/lib/wbReviews";
import { clampReviewLimit, getFallbackReviews } from "@/lib/wbReviews";

const parseNumber = (value: string | null) => {
  if (!value) {
    return undefined;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};

const normalizeRemoteReviews = (payload: unknown): Review[] => {
  if (Array.isArray(payload)) {
    return payload as Review[];
  }

  if (payload && typeof payload === "object") {
    const withReviews = payload as { reviews?: Review[] };
    if (Array.isArray(withReviews.reviews)) {
      return withReviews.reviews;
    }
  }

  return [];
};

const sortByDateDesc = (reviews: Review[]) =>
  [...reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productId") || undefined;
  const limitParam = parseNumber(searchParams.get("limit"));
  const ratingParam = parseNumber(searchParams.get("rating"));

  const limit = clampReviewLimit(limitParam);
  const rating = Number.isFinite(ratingParam) ? ratingParam : 5;

  let remoteReviews: Review[] = [];

  if (process.env.WB_REVIEWS_JSON_URL) {
    try {
      const response = await fetch(process.env.WB_REVIEWS_JSON_URL, {
        next: { revalidate: 600 },
      });

      if (response.ok) {
        const payload = await response.json();
        remoteReviews = normalizeRemoteReviews(payload);
      }
    } catch {
      remoteReviews = [];
    }
  }

  let filtered = remoteReviews;

  if (productId) {
    filtered = filtered.filter((review) => review.productId === productId);
  }

  if (Number.isFinite(rating)) {
    filtered = filtered.filter((review) => review.rating === rating);
  }

  if (!filtered.length) {
    return NextResponse.json({
      reviews: getFallbackReviews({ productId, limit, rating }),
    });
  }

  return NextResponse.json({
    reviews: sortByDateDesc(filtered).slice(0, limit),
  });
}
