import { useState } from "react";

import navLeft from "@/assets/nav_left.svg";
import navRight from "@/assets/nav_right.svg";
import sunAndMoon from "@/assets/sun_and_moon.svg";
import { cn } from "@/utils/cn";

import { CtaWithReviews } from "./common/CtaWithReviews";
import { CartIcon } from "./icons/CartIcon";
import { TruckIcon } from "./icons/TruckIcon";

export const HowToOrder = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "You save.",
      desc: "Browse our comfort sets and save 15% when you bundle.",
      icon: <CartIcon className="text-primary w-[51px] h-[41px]" />,
    },
    {
      title: "We ship.",
      desc: "We ship your items within 1-2 days of receiving your order.",
      icon: <TruckIcon className="text-primary w-[68px] h-[48px]" />,
    },
    {
      title: "You enjoy!",
      desc: "Wear hernest around the house, out on the town, or in bed.",
      icon: <img src={sunAndMoon} alt="" className="w-[60px]" />,
    },
  ];

  const nextStep = () => setActiveStep((prev) => (prev + 1) % steps.length);
  const prevStep = () =>
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section className="w-full py-16 md:py-18.5 px-6 max-w-6xl mx-auto flex flex-col items-center">
      <h2 className="text-[26px] md:text-[32px] leading-[34px] md:leading-[40px] tracking-[0.04em] text-primary mb-10 md:mb-16 font-sofia text-center">
        Comfort made easy
      </h2>

      {/* Desktop View - All cards visible */}
      <div className="hidden md:flex w-full flex-row gap-8 justify-center mb-16">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={cn(
              "flex-1 flex flex-col items-center border p-4 border-border-light rounded-lg text-center w-[346px] h-[320px] justify-center",
              idx % 2 === 0 ? "bg-background-gray" : "bg-background",
            )}
          >
            <div className="flex items-center shrink-0 justify-center mb-5">
              {step.icon}
            </div>
            <h3 className="text-[22px] leading-[40px] tracking-[0.04em] text-primary font-sofia mb-4">
              {step.title}
            </h3>
            <p className="text-[15px] leading-[23px] tracking-[0.03em] text-neutral-300">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile View - Slider with 1 card */}
      <div className="md:hidden flex items-center justify-center gap-6 mb-10 w-full relative">
        <button onClick={prevStep} className="cursor-pointer z-10">
          <img src={navLeft} alt="prev" className="w-2" />
        </button>

        <div
          className={cn(
            "flex flex-col items-center border p-4 border-border-light rounded-lg text-center w-[288px] h-[288px] justify-center",
            activeStep % 2 === 0 ? "bg-background-gray" : "bg-background",
          )}
        >
          <div className="flex items-center shrink-0 justify-center mb-5">
            {steps[activeStep].icon}
          </div>
          <h3 className="text-[22px] leading-[40px] tracking-[0.04em] text-primary font-sofia mb-4">
            {steps[activeStep].title}
          </h3>
          <p className="text-[15px] leading-[23px] tracking-[0.03em] text-neutral-300 max-w-[240px]">
            {steps[activeStep].desc}
          </p>
        </div>

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
