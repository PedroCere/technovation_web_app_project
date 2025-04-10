"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Carlos M.",
    company: "Fintrack",
    content:
      "MarketVision.AI completely changed the way I invest. Real-time predictions give me the confidence to act fast and smart in volatile markets.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg02,
    name: "Samantha J.",
    company: "Equinox Group",
    content:
      "As a financial analyst, having access to reliable data is crucial. MarketVision.AI gives me everything I need to deliver results to clients.",
    categories: [1, 2, 4],
  },
  {
    img: TestimonialImg03,
    name: "Derek H.",
    company: "StockBot",
    content:
      "I used to rely on instinct. Now I rely on AI. MarketVision has helped me identify trends before they happen. That's a game changer.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg04,
    name: "Anya R.",
    company: "InvestEase",
    content:
      "Since using MarketVision.AI, I've seen a noticeable increase in ROI. It's like having a market strategist working 24/7 by your side.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg05,
    name: "Victor K.",
    company: "TrendScope",
    content:
      "We integrated MarketVision.AI into our daily workflow and it has streamlined our analysis and boosted our performance metrics significantly.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg06,
    name: "Linda S.",
    company: "Momentum Funds",
    content:
      "I appreciate the clean interface and actionable insights. MarketVision makes complex data approachable and understandable.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg07,
    name: "Greg T.",
    company: "PortfolioPro",
    content:
      "This tool is intuitive, powerful, and reliable. I recommend MarketVision to any serious investor who wants an edge.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg08,
    name: "Emily W.",
    company: "SmartVest",
    content:
      "I love how MarketVision breaks down market signals into clear guidance. It helps me make timely decisions every single day.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg09,
    name: "Daniel F.",
    company: "VisionTrades",
    content:
      "This platform gives me peace of mind. It's like a second opinion I can always trust, backed by real-time analytics.",
    categories: [1, 2],
  },
];

export default function Testimonials() {
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t pb-8 pt-12 md:pb-10 md:pt-16 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Don't take our word for it
          </h2>
          <p className="text-lg text-indigo-200/65">
            We provide tech-first solutions that empower decision-makers to
            build healthier and happier workspaces from anywhere in the world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <Testimonial testimonial={testimonial} category={category}>
                {testimonial.content}
              </Testimonial>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative h-full flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-3">
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <span className="text-indigo-200/65">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
