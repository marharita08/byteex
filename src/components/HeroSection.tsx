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

const HeroGallery = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="w-[70px] h-[99px] md:w-[134px] md:h-[189px] bg-linear-to-t shrink-0 from-background to-background/30 -mr-10 md:-mr-16" />
    <img
      src={hero1}
      alt=""
      className="-mr-8 xl:-mr-15 z-10 w-[120px] md:w-[209px]"
    />
    <img src={hero2} alt="" className="z-20 w-[150px] md:w-[260px]" />
    <img
      src={hero3}
      alt=""
      className="-ml-8 xl:-ml-15 z-10 w-[120px] md:w-[209px]"
    />
    <div className="w-[70px] h-[99px] md:w-[134px] md:h-[189px] bg-linear-to-t shrink-0 from-background to-background/30 -ml-10 md:-ml-16" />
  </div>
);

export const HeroSection = () => {
  return (
    <section className="flex flex-col w-full mb-[62px]">
      <div className="bg-background text-neutral-500 font-suisse text-center px-5 py-2.5 text-[11px] font-medium tracking-wide">
        <span className="hidden md:inline">
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) |{" "}
        </span>
        FREE SHIPPING on orders &gt; $200
        <span className="hidden md:inline"> | easy 45 day return window.</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-[13px] md:pt-8 flex flex-col items-center xl:items-start">
        <img src={logo} alt="byteex" className="w-[114px] xl:w-auto" />

        <div className="flex flex-col xl:flex-row items-center xl:items-start w-full gap-10 xl:gap-12 mt-3.5 md:mt-[62px] md:pl-2">
          <div className="flex flex-col text-center xl:text-left max-w-[480px] relative">
            <h1 className="order-1 text-[26px] md:text-[38px] leading-[34px] md:leading-[45px] tracking-[0.04em] text-primary font-medium md:mb-8 mb-[17px]">
              Don't apologize for being comfortable.
            </h1>

            <HeroGallery className="order-2 xl:hidden mb-[25px]" />

            <div className="self-center xl:self-start order-3 flex flex-col gap-5 text-[13px] md:text-[15px] leading-[18px] md:leading-[23px] tracking-[0.03em] text-neutral-400 items-start mb-[29px] md:mb-[25px] max-w-[330px] md:max-w-[380px] xl:max-w-none">
              <div className="flex items-start gap-3 text-left ">
                <div className="flex items-center rounded-full bg-background w-[31px] h-[31px] shrink-0 justify-center">
                  <img src={sunAndMoon} alt="" className="w-4 h-4" />
                </div>
                <p className="mt-1 font-suisse">
                  Beautiful, comfortable loungewear for day or night.
                </p>
              </div>
              <div className="flex items-start gap-3 text-left ">
                <div className="flex items-center rounded-full bg-background w-[31px] h-[31px] shrink-0 justify-center">
                  <CartIcon className="text-primary w-[19px] h-[15px]" />
                </div>
                <p className="mt-1 font-suisse">
                  No wasteful extras, like tags or plastic packaging.
                </p>
              </div>
              <div className="flex items-start gap-3 text-left ">
                <div className="flex items-center rounded-full bg-background w-[31px] h-[31px] shrink-0 justify-center">
                  <img src={waves} alt="" className="w-4 h-4" />
                </div>
                <p className="mt-1 font-suisse">
                  Our signature fabric is incredibly comfortable — unlike
                  anything you've ever felt.
                </p>
              </div>
            </div>

            <div className="order-4 w-full flex justify-center xl:justify-start mb-6">
              <button className="bg-primary text-primary-foreground font-suisse border-none rounded text-lg font-medium cursor-pointer flex items-center justify-center gap-6 w-full max-w-[381px] xl:w-[356px] h-[56px]">
                <span>Customize Your Outfit</span>
                <img src={arrowRight} alt="" />
              </button>
            </div>

            <div className="order-5 xl:absolute xl:-bottom-44 xl:left-0 z-10 w-full max-w-[388px] xl:w-[416px] xl:max-w-none mt-6 xl:mt-0 mx-auto xl:mx-0">
              <div className="bg-background-white py-4 xl:py-3 px-5 rounded-xl border border-border-light shadow-sm flex flex-col items-center gap-3 xl:gap-2">
                <div className="flex items-center w-full justify-between">
                  <div className="flex w-full items-center gap-4">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10"
                    />
                    <div className="flex  flex-1 flex-col-reverse md:flex-row items-start md:items-center md:gap-2 gap-0 justify-between">
                      <span className="text-neutral-40 text-[15px] font-suisse">
                        {review.author}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-px">
                          <img src={star} alt="star" className="w-2.5 h-2.5" />
                          <img src={star} alt="star" className="w-2.5 h-2.5" />
                          <img src={star} alt="star" className="w-2.5 h-2.5" />
                          <img src={star} alt="star" className="w-2.5 h-2.5" />
                          <img src={star} alt="star" className="w-2.5 h-2.5" />
                        </div>
                        <div className="font-suisse text-[11px] text-neutral-200">
                          One of 500+ 5 Star Reviews Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-400 text-xs font-suisse leading-[20px] xl:leading-[23px] tracking-[0.04em] text-left">
                  {review.text}
                </p>
              </div>
            </div>
          </div>

          <HeroGallery className="hidden xl:flex w-[725px]" />
        </div>
      </div>
    </section>
  );
};
