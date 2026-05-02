import { useState } from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import navLeft from "@/assets/nav_left.svg";
import navRight from "@/assets/nav_right.svg";
import { assetUrl, resolveEntries } from "@/lib/contentful.utils";
import type { SectionHowToOrder } from "@/types/types";
import { cn } from "@/utils/cn";

import { CtaWithReviews } from "./common/CtaWithReviews";

interface Props {
  data: SectionHowToOrder;
}

export const HowToOrder = ({ data }: Props) => {
  const { title, steps } = data.fields;

  const [activeStep, setActiveStep] = useState(0);

  const stepsList = resolveEntries(steps).map((entry) => ({
    id: entry.sys.id,
    title: entry.fields.text,
    desc: entry.fields.description,
    icon: assetUrl(entry.fields.icon),
  }));

  const nextStep = () => setActiveStep((prev) => (prev + 1) % stepsList.length);
  const prevStep = () =>
    setActiveStep((prev) => (prev - 1 + stepsList.length) % stepsList.length);

  return (
    <section className="w-full py-16 md:py-18.5 px-6 max-w-6xl mx-auto flex flex-col items-center">
      <h2 className="text-[26px] md:text-[32px] leading-[34px] md:leading-[40px] tracking-[0.04em] text-primary mb-10 md:mb-16 font-sofia text-center">
        {title}
      </h2>

      {/* Desktop View */}
      <div className="hidden md:flex w-full flex-row gap-8 justify-center flex-wrap mb-16">
        {stepsList.map((step, idx) => (
          <div
            key={step.id}
            className={cn(
              "shrink-0 flex flex-col items-center border p-4 border-border-light rounded-lg text-center w-[346px] h-[320px] justify-center",
              idx % 2 === 0 ? "bg-background-gray" : "bg-background",
            )}
          >
            <div className="flex items-center shrink-0 justify-center mb-5">
              {step.icon && (
                <img
                  src={step.icon}
                  alt=""
                  className="w-[60px] h-[60px] object-contain"
                />
              )}
            </div>
            <h3 className="text-[22px] leading-[40px] tracking-[0.04em] text-primary font-sofia mb-4">
              {step.title}
            </h3>
            {step.desc && (
              <p className="text-[15px] leading-[23px] tracking-[0.03em] text-neutral-300">
                {documentToReactComponents(step.desc)}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-center gap-6 mb-10 w-full relative">
        <button onClick={prevStep} className="cursor-pointer z-10">
          <img src={navLeft} alt="prev" className="w-2" />
        </button>

        {stepsList[activeStep] && (
          <div
            className={cn(
              "flex flex-col items-center border p-4 border-border-light rounded-lg text-center w-[288px] h-[288px] justify-center",
              activeStep % 2 === 0 ? "bg-background-gray" : "bg-background",
            )}
          >
            <div className="flex items-center shrink-0 justify-center mb-5">
              {stepsList[activeStep].icon && (
                <img
                  src={stepsList[activeStep].icon!}
                  alt=""
                  className="w-[60px] h-[60px] object-contain"
                />
              )}
            </div>
            <h3 className="text-[22px] leading-[40px] tracking-[0.04em] text-primary font-sofia mb-4">
              {stepsList[activeStep].title}
            </h3>
            {stepsList[activeStep].desc && (
              <p className="text-[15px] leading-[23px] tracking-[0.03em] text-neutral-300 max-w-[240px]">
                {documentToReactComponents(stepsList[activeStep].desc!)}
              </p>
            )}
          </div>
        )}

        <button onClick={nextStep} className="cursor-pointer z-10">
          <img src={navRight} alt="next" className="w-2" />
        </button>
      </div>

      <CtaWithReviews
        className="mt-0"
        buttonClassName="max-w-[381px] md:w-[356px]"
      />
    </section>
  );
};
