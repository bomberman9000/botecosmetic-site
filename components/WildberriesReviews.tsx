"use client";

import { useEffect, useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Review } from "@/lib/wbReviews";
import { getFeedbackUrl, getFallbackReviews } from "@/lib/wbReviews";

interface WildberriesReviewsProps {
  productId?: string;
  limit?: number;
  showLink?: boolean;
}

export default function WildberriesReviews({
  productId,
  limit = 3,
  showLink = true,
}: WildberriesReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const loadReviews = async () => {
      setLoading(true);

      const params = new URLSearchParams();
      if (productId) {
        params.set("productId", productId);
      }
      params.set("limit", String(limit));
      params.set("rating", "5");

      try {
        const response = await fetch(`/api/wb-reviews?${params.toString()}`, {
          cache: "no-store",
        });
        const payload = response.ok ? await response.json() : null;
        const loaded = Array.isArray(payload?.reviews) ? payload.reviews : [];

        if (isActive) {
          setReviews(
            loaded.length
              ? loaded
              : getFallbackReviews({ productId, limit, rating: 5 })
          );
        }
      } catch {
        if (isActive) {
          setReviews(getFallbackReviews({ productId, limit, rating: 5 }));
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    loadReviews();

    return () => {
      isActive = false;
    };
  }, [productId, limit]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-soft rounded-card p-6 animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-card p-6 shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className="w-5 h-5 text-accent"
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed italic text-sm sm:text-base">
              &quot;{review.text}&quot;
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div>
                <p className="text-sm font-medium text-primary">{review.author}</p>
                <p className="text-xs text-gray-500">{review.productName}</p>
              </div>
              {showLink && (
                <a
                  href={getFeedbackUrl(review.productId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:text-gold-600 transition-colors flex items-center gap-1"
                >
                  Отзывы WB
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </>
  );
}
