import amyP from "@/assets/amy_p.png";
import arrowRight from "@/assets/arrow_right.svg";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import logo from "@/assets/logo.png";
import star from "@/assets/star.svg";
import sunAndMoon from "@/assets/sun_and_moon.svg";
import waves from "@/assets/waves.svg";

import { CartIcon } from "./icons/CartIcon";

const review = {
  id: 1,
  text: "Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them. ",
  author: "Amy P.",
  avatar: amyP,
};

export const HeroSection = () => {
  return (
    <section className="flex flex-col w-full mb-[62px]">
      <div className="bg-background text-neutral-500 font-suisse text-center px-5 py-2.5 text-[11px] font-medium tracking-wide">
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
        <span className="mx-3 opacity-50 hidden sm:inline">|</span>
        <br className="sm:hidden mt-1" />
        FREE SHIPPING on orders &gt; $200
        <span className="mx-3 opacity-50 hidden sm:inline">|</span>
        <br className="sm:hidden mt-1" />
        easy 45 day return window.
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8">
        <img src={logo} alt="byteex" />
        <div className="flex flex-col lg:flex-row items-start w-full gap-12 mt-[62px] pl-2">
          <div className="flex flex-col gap-6 text-center lg:text-left max-w-[480px] relative">
            <div className="flex flex-col gap-4">
              <h1 className="text-[38px] leading-[45px] tracking-[0.04em] text-primary">
                Don’t apologize for being comfortable.
              </h1>
            </div>

            <div className="flex flex-col gap-5 text-[15px] leading-[23px] tracking-[0.03em] text-neutral-400 max-w-lg mx-auto lg:mx-0 items-center lg:items-start">
              <div className="flex items-start gap-3">
                <div className="flex items-center rounded-full bg-background w-[31px] h-[31px] shrink-0 justify-center">
                  <img src={sunAndMoon} alt="" />
                </div>
                <p className="mt-1">
                  Beautiful, comfortable loungewear for day or night.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center rounded-full bg-background w-[31px] h-[31px] shrink-0 justify-center">
                  <CartIcon className="text-primary w-5 h-4" />
                </div>
                <p className="mt-1">
                  No wasteful extras, like tags or plastic packaging.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center rounded-full bg-background w-[31px] h-[31px] shrink-0 justify-center">
                  <img src={waves} alt="" />
                </div>
                <p className="mt-1">
                  Our signature fabric is incredibly comfortable — unlike
                  anything you’ve ever felt.
                </p>
              </div>
            </div>

            <div>
              <button className="bg-primary text-primary-foreground font-suisse border-none rounded text-lg font-medium cursor-pointer flex items-center justify-center gap-6 w-[356px] h-[56px]">
                <span>Customize Your Outfit</span>
                <img src={arrowRight} alt="" />
              </button>
            </div>
            <section className="absolute -bottom-53 z-10">
              <div className="bg-background-white py-3 px-5 rounded-xl border border-border-light shadow-sm flex flex-col items-center max-w-[416px] w-full gap-2">
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center gap-4 mt-2">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10"
                    />
                    <span className="text-neutral-40 text-[15px]">
                      {review.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-px">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </div>
                    <div className="font-suisse text-[11px] text-neutral-200">
                      One of 500+ 5 Star Reviews Online
                    </div>
                  </div>
                </div>
                <p className="text-neutral-400 text-xs font-suisse leading-[23px] tracking-[0.04em]">
                  {review.text}
                </p>
              </div>
            </section>
          </div>

          <div className="w-[725px] flex items-center">
            <div className="w-[134px] h-[189px] bg-linear-to-t shrink-0 from-background to-background/30 -mr-16" />
            <img src={hero1} alt="" className="-mr-15 z-10 w-[209px]" />
            <img src={hero2} alt="" className="z-20 w-[260px]" />
            <img src={hero3} alt="" className="-ml-15 z-10 w-[209px]" />
            <div className="w-[134px] h-[189px] bg-linear-to-t shrink-0 from-background to-background/30 -ml-16" />
          </div>
        </div>
      </div>
    </section>
  );
};
