import { useState } from "react";

import navLeft from "@/assets/nav_left.svg";
import navRight from "@/assets/nav_right.svg";
import star from "@/assets/star.svg";
import { cn } from "@/utils/cn";

import { CtaWithReviews } from "./common/CtaWithReviews";

const modules = import.meta.glob<{ default: string }>(
  "@/assets/reviews_*.png",
  { eager: true },
);
const reviewImages = Object.keys(modules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/reviews_(\d+)/)?.[1] || "0", 10);
    const numB = parseInt(b.match(/reviews_(\d+)/)?.[1] || "0", 10);
    return numA - numB;
  })
  .map((key) => modules[key].default);

export const Reviews = () => {
  const initialReviews = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
      author: "Jane, S.",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
      author: "Jane, S.",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
      author: "Jane, S.",
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % initialReviews.length);
    setReviews((prev) => {
      const next = [...prev];
      const first = next.shift();
      if (first) next.push(first);
      return next;
    });
  };

  const handlePrev = () => {
    setActiveIdx(
      (prev) => (prev - 1 + initialReviews.length) % initialReviews.length,
    );
    setReviews((prev) => {
      const next = [...prev];
      const last = next.pop();
      if (last) next.unshift(last);
      return next;
    });
  };

  const row1 = reviewImages.slice(0, 11);
  const row2 = reviewImages.slice(11);

  return (
    <section className="w-full pb-16 md:pb-26 flex flex-col items-center overflow-hidden">
      <div className="max-w-[700px] mx-auto px-6 text-center mb-10 md:mb-14 flex flex-col gap-5 md:gap-6">
        <h2 className="text-[26px] md:text-[32px] leading-[34px] md:leading-[40px] tracking-[0.04em] text-primary font-sofia">
          What are our fans saying?
        </h2>
        <p className="text-[14px] md:text-[15px] leading-[22px] md:leading-[23px] tracking-[0.03em] text-neutral-400 max-w-[600px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>

      <div className="w-full mb-10 md:mb-19 flex flex-col gap-1.5 overflow-hidden relative">
        <div className="flex w-max animate-marquee">
          <div className="flex gap-1.5 px-2">
            {[...row1, ...row1].map((src, idx) => (
              <img
                key={`r1-${idx}`}
                src={src}
                alt=""
                className="w-[128px] h-[128px] object-cover shrink-0"
              />
            ))}
          </div>
        </div>
        <div
          className="flex w-max animate-marquee"
          style={{ animationDirection: "reverse", animationDuration: "50s" }}
        >
          <div className="flex gap-1.5 px-2">
            {[...row2, ...row2].map((src, idx) => (
              <img
                key={`r2-${idx}`}
                src={src}
                alt=""
                className="w-[128px] h-[128px] object-cover shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Reviews View */}
      <div className="hidden md:flex max-w-[1306px] mx-auto px-6 w-full justify-center gap-13 mb-16">
        <div className="relative top-[100px]">
          <button
            onClick={handlePrev}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            <img src={navLeft} alt="arrow left" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-start justify-center gap-10">
          {reviews.map((review, idx) => (
            <div
              key={`${review.author}-${idx}`}
              className="flex-1 bg-background-white border border-border-muted shadow-md rounded-lg py-8 px-10 flex flex-col gap-3 max-w-[338px] w-full transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-blue shrink-0" />
                <div className="flex flex-col gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={star} alt="star" className="w-3 h-3" />
                    ))}
                  </div>
                  <span className="text-[15px] leading-[23px] tracking-[0.03em] text-neutral-300">
                    {review.author}
                  </span>
                </div>
              </div>
              <p className="text-[12px] leading-[23px] tracking-[0.04em] text-neutral-400 font-suisse">
                {review.text}
              </p>
            </div>
          ))}
        </div>
        <div className="relative top-[100px]">
          <button
            onClick={handleNext}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            <img src={navRight} alt="arrow right" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Reviews View */}
      <div className="md:hidden flex flex-col items-center gap-6 mb-10 w-full px-6">
        <div className="flex items-center justify-center w-full gap-5">
          <button onClick={handlePrev} className="cursor-pointer shrink-0">
            <img src={navLeft} alt="prev" className="w-2" />
          </button>

          <div className="flex-1 bg-background-white border border-border-muted shadow-md rounded-lg py-8 px-6 flex flex-col gap-3 w-full transition-all duration-300 max-w-[299px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-blue shrink-0" />
              <div className="flex flex-col gap-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="star" className="w-3 h-3" />
                  ))}
                </div>
                <span className="text-[15px] leading-[23px] tracking-[0.03em] text-neutral-300">
                  {reviews[0].author}
                </span>
              </div>
            </div>
            <p className="text-[12px] leading-[23px] tracking-[0.04em] text-neutral-400 font-suisse">
              {reviews[0].text}
            </p>
          </div>

          <button onClick={handleNext} className="cursor-pointer shrink-0">
            <img src={navRight} alt="next" className="w-2" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          {initialReviews.map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIdx === i ? "bg-black" : "bg-divider",
              )}
            />
          ))}
        </div>
      </div>

      <CtaWithReviews
        className="mt-0"
        buttonClassName="max-w-[381px] md:w-[356px]"
      />
    </section>
  );
};
