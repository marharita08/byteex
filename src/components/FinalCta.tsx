import cards from "@/assets/cards.png";
import clock from "@/assets/clock.svg";
import finalCta1 from "@/assets/final_cta_1.png";
import finalCta2 from "@/assets/final_cta_2.png";
import finalCta3 from "@/assets/final_cta_3.png";
import shild from "@/assets/shild.svg";

import { Button } from "./common/Button";
import { CtaWithReviews } from "./common/CtaWithReviews";
import { CartIcon } from "./icons/CartIcon";
import { TruckIcon } from "./icons/TruckIcon";

export const FinalCta = () => {
  return (
    <section className="w-full flex flex-col items-center pb-0 pt-16 md:py-21 overflow-hidden relative">
      <div className="flex flex-col items-center text-center gap-4 max-w-[700px] px-6 mb-10 md:mb-14.5">
        <h2 className="text-[26px] md:text-[32px] leading-[34px] md:leading-[40px] tracking-[0.04em] text-primary font-sofia font-normal md:normal-case">
          Find something you love.
        </h2>
        <p className="md:hidden text-[14px] leading-[22px] tracking-[0.03em] text-neutral-400 font-sofia font-normal max-w-[335px]">
          Click below to browse our collection!
        </p>
        <p className="hidden md:block text-[15px] leading-[22px] tracking-[0.03em] text-neutral-400 font-sofia font-normal max-w-[587px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat.
        </p>
      </div>

      <div className="flex items-center justify-center gap-1 mb-12 md:mb-14.5">
        <div className="w-[67px] h-[95px] md:w-[139px] md:h-[196px] shrink-0 mr-[-50px] md:mr-[-74px] z-0 bg-linear-to-b from-background to-background/31" />

        <div className="shrink-0 z-10 w-[97px] h-[148px] md:w-[209px] md:h-[317px] mr-[-33.5px] md:mr-0">
          <img src={finalCta1} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="shrink-0 z-20 w-[139px] h-[211px] md:w-[246px] md:h-[373px]">
          <img src={finalCta2} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="shrink-0 z-10 w-[97] h-[148px] md:w-[209px] md:h-[317px] ml-[-33.5px] md:ml-0">
          <img src={finalCta3} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-[67px] h-[95px] md:w-[139px] md:h-[196px] shrink-0 ml-[-50px] md:ml-[-74px] z-0 bg-linear-to-b from-background to-background/31" />
      </div>

      <div className="flex flex-col items-center px-6 w-full mb-10 md:mb-2">
        <CtaWithReviews className="md:hidden" buttonClassName="max-w-[335px]" />
        <Button className="hidden md:flex w-[374px]" />
      </div>

      <div className="hidden md:flex items-center gap-2.5 mb-4.5 px-6">
        <div className="flex items-center gap-1.5">
          <img src={clock} alt="" className="w-[11px] h-[11px]" />
          <span className="text-success font-suisse text-[10px] leading-[16px] tracking-[0.04em]">
            Ships in 1-2 Days
          </span>
        </div>
        <div className="w-0.5 h-[17px] bg-divider mt-[5px] opacity-40" />
        <img
          src={cards}
          alt="Payment cards"
          className="w-[243px] h-auto object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[508px] -z-10 bg-linear-to-t from-background via-background/18 to-background/0" />

      <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 max-w-[858px] w-full px-6">
        <div className="flex items-start gap-3 w-full max-w-[220px] md:w-auto">
          <div className="w-[33px] h-[33px] rounded-full bg-neutral-400/10 flex items-center justify-center shrink-0">
            <TruckIcon className="text-neutral-400 w-5 h-3.5" />
          </div>
          <span className="text-[14px] leading-[20px] tracking-[0.03em] font-sofia text-neutral-400">
            FREE Shipping on
            <br /> Orders over $200
          </span>
        </div>

        <div className="w-full md:w-px h-px md:h-[51px] bg-divider md:mt-[5px] opacity-40" />

        <div className="flex items-start gap-3 w-full max-w-[220px] md:w-auto">
          <div className="w-[33px] h-[33px] rounded-full bg-neutral-400/10 flex items-center justify-center shrink-0">
            <img src={shild} alt="" className="w-[18px] h-[19px]" />
          </div>
          <span className="text-[14px] leading-[20px] tracking-[0.03em] font-sofia text-neutral-400">
            Over 500+ 5 Star
            <br /> Reviews Online
          </span>
        </div>

        <div className="w-full md:w-px h-px md:h-[51px] bg-divider md:mt-[5px] opacity-40" />

        <div className="flex items-start gap-3 w-full max-w-[220px] md:w-auto">
          <div className="w-[33px] h-[33px] rounded-full bg-neutral-400/10 flex items-center justify-center shrink-0">
            <CartIcon className="text-neutral-400 w-5 h-4" />
          </div>
          <span className="text-[14px] leading-[20px] tracking-[0.03em] font-sofia text-neutral-400">
            Made ethically
            <br /> and responsibly.
          </span>
        </div>
      </div>
    </section>
  );
};
