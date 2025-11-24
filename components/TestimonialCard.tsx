"use client";

import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="bg-bg border border-line rounded-card p-6 shadow-soft">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
      <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
    </div>
  );
}

