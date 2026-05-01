import { useState } from "react";

import arrowRight from "@/assets/arrow_right.svg";
import navLeft from "@/assets/nav_left.svg";
import navRight from "@/assets/nav_right.svg";
import star from "@/assets/star.svg";

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

  const handleNext = () => {
    setReviews((prev) => {
      const next = [...prev];
      const first = next.shift();
      if (first) next.push(first);
      return next;
    });
  };

  const handlePrev = () => {
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
    <section className="w-full pb-26 flex flex-col items-center overflow-hidden">
      <div className="max-w-[700px] mx-auto px-6 text-center mb-14 flex flex-col gap-6">
        <h2 className="text-[32px] leading-[40px] tracking-[0.04em] text-primary font-sofia">
          What are our fans saying?
        </h2>
        <p className="text-[15px] leading-[23px] tracking-[0.03em] text-neutral-400 max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>

      <div className="w-full mb-19 flex flex-col gap-1.5 overflow-hidden relative">
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

      <div className="max-w-[1306px] mx-auto px-6 w-full flex justify-center gap-13 mb-16">
        <div className="relative top-[100px]">
          <button
            onClick={handlePrev}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            <img src={navLeft} alt="arrow left" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center gap-10">
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

      <div className="flex flex-col items-center gap-4 px-6">
        <button className="bg-primary text-primary-foreground font-suisse border-none rounded text-lg font-medium cursor-pointer flex items-center justify-center gap-6 w-[356px] h-[56px] transition-opacity hover:opacity-90">
          <span>Customize Your Outfit</span>
          <img src={arrowRight} alt="arrow right" className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex gap-px">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={star} alt="star" className="w-3 h-3" />
            ))}
          </div>
          <span className="text-[12px] leading-[20px] font-suisse text-neutral-200">
            Over 500+ 5 Star Reviews Online
          </span>
        </div>
      </div>
    </section>
  );
};
