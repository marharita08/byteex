import { useState } from "react";

import { resolveAssets, resolveEntries } from "@/lib/contentful.utils";
import type { SectionFaq } from "@/types/types";

import { CtaWithReviews } from "./common/CtaWithReviews";

interface Props {
  data: SectionFaq;
}

export const FAQ = ({ data }: Props) => {
  const { title, faqItemsList, galleryImages } = data.fields;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqItems =
    resolveEntries(faqItemsList).map((entry) => ({
      id: entry.sys.id,
      question: entry.fields.question,
      answer: entry.fields.answer,
    })) ?? [];

  const images = resolveAssets(galleryImages);

  return (
    <section className="w-full pb-10.5 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
      <div className="w-full lg:w-[631px] flex flex-col items-center lg:items-start">
        <h2 className="lowercase md:normal-case w-[318px] lg:w-full text-center md:text-left text-[26px] md:text-[32px] leading-[30px] md:leading-[40px] tracking-[0.04em] text-primary font-sofia font-normal mb-10">
          {title}
        </h2>

        <div className="flex flex-col">
          {faqItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="border-t border-border-muted"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === idx ? null : idx)
                }
                className="w-full py-5.5 flex items-center justify-between text-left cursor-pointer bg-transparent border-none"
              >
                <span className="text-[18px] leading-[24px] tracking-[0.04em] font-sofia font-normal text-primary">
                  {item.question}
                </span>
                <span className="text-[44px] leading-[24px] tracking-[0.04em] font-sofia font-extralight text-primary flex items-center justify-center">
                  {expandedIndex === idx ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === idx ? "max-h-[200px] pb-5" : "max-h-0"}`}
              >
                <p className="text-[14px] md:text-[15px] leading-[20px] md:leading-[22px] tracking-[0.03em] text-neutral-400 font-sofia font-normal max-w-[567px]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-border-muted" />
        </div>
      </div>

      {images.length > 0 && (
        <div className="hidden lg:block w-full lg:w-[430px] h-[645px] relative shrink-0">
          <div className="relative w-full h-full">
            <div className="absolute left-[30px] top-[67px] w-[149px] h-[187px] z-0 bg-linear-to-b from-background to-background/31" />
            <div className="absolute left-[238px] top-[330px] w-[134px] h-[189px] z-0 bg-linear-to-b from-background to-background/31" />

            {images[1] && (
              <img
                src={images[1]}
                alt=""
                className="absolute left-[80px] top-[129px] w-[227px] h-[355px] object-cover z-20"
              />
            )}
            {images[0] && (
              <img
                src={images[0]}
                alt=""
                className="absolute left-[221px] top-px w-[167px] h-[253px] object-cover z-10"
              />
            )}
            {images[2] && (
              <img
                src={images[2]}
                alt=""
                className="absolute left-0 top-[440px] w-[216px] h-[159px] object-cover z-10"
              />
            )}
          </div>
        </div>
      )}

      <CtaWithReviews
        className="mt-10 md:hidden"
        buttonClassName="max-w-[381px]"
      />
    </section>
  );
};
