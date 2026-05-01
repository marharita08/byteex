import { useState } from "react";

import faq1 from "@/assets/faq_1.png";
import faq2 from "@/assets/faq_2.png";
import faq3 from "@/assets/faq_3.png";

export const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
    },
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="w-full pb-10.5 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
      <div className="w-full lg:w-[631px]">
        <h2 className="text-[32px] leading-[40px] tracking-[0.04em] text-primary font-sofia font-normal mb-10">
          Frequently asked questions.
        </h2>

        <div className="flex flex-col">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border-t border-[#EAEAEA]">
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
                <p className="text-[15px] leading-[22px] tracking-[0.03em] text-neutral-400 font-sofia font-normal max-w-[567px]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-[#EAEAEA]" />
        </div>
      </div>

      <div className="w-full lg:w-[430px] h-[645px] relative shrink-0">
        <div className="relative w-full h-full">
          <div
            className="absolute left-[30px] top-[67px] w-[149px] h-[187px] z-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(249, 240, 229, 1) 0%, rgba(249, 240, 229, 0.31) 100%)",
            }}
          />

          <div
            className="absolute left-[238px] top-[330px] w-[134px] h-[189px] z-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(249, 240, 229, 1) 0%, rgba(249, 240, 229, 0.31) 100%)",
            }}
          />

          <img
            src={faq2}
            alt=""
            className="absolute left-[80px] top-[129px] w-[227px] h-[355px] object-cover z-20"
          />

          <img
            src={faq1}
            alt=""
            className="absolute left-[221px] top-px w-[167px] h-[253px] object-cover z-10"
          />

          <img
            src={faq3}
            alt=""
            className="absolute left-0 top-[440px] w-[216px] h-[159px] object-cover z-10"
          />
        </div>
      </div>
    </section>
  );
};
