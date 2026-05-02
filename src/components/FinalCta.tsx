import cards from "@/assets/cards.png";
import clock from "@/assets/clock.svg";
import type { SectionFinalCta } from "@/types/types";

import { Button } from "./common/Button";
import { CtaWithReviews } from "./common/CtaWithReviews";

interface Props {
  data: SectionFinalCta;
}

export const FinalCta = ({ data }: Props) => {
  const {
    title,
    descriptionMobile,
    descriptionDesktop,
    galleryImages,
    footerFeatures,
  } = data.fields;

  const images =
    galleryImages?.map((asset) => "https:" + asset.fields.file.url) ?? [];

  const features =
    footerFeatures?.map((entry) => ({
      id: entry.sys.id,
      text: entry.fields.text,
      icon: entry.fields.icon
        ? "https:" + entry.fields.icon.fields.file.url
        : null,
    })) ?? [];

  return (
    <section className="w-full flex flex-col items-center pb-0 pt-16 md:py-21 overflow-hidden relative">
      <div className="flex flex-col items-center text-center gap-4 max-w-[700px] px-6 mb-10 md:mb-14.5">
        <h2 className="text-[26px] md:text-[32px] leading-[34px] md:leading-[40px] tracking-[0.04em] text-primary font-sofia font-normal md:normal-case">
          {title}
        </h2>
        {descriptionMobile && (
          <p className="md:hidden text-[14px] leading-[22px] tracking-[0.03em] text-neutral-400 font-sofia font-normal max-w-[335px]">
            {descriptionMobile}
          </p>
        )}
        {descriptionDesktop && (
          <p className="hidden md:block text-[15px] leading-[22px] tracking-[0.03em] text-neutral-400 font-sofia font-normal max-w-[587px]">
            {descriptionDesktop}
          </p>
        )}
      </div>

      <div className="flex items-center justify-center gap-1 mb-12 md:mb-14.5">
        <div className="w-[67px] h-[95px] md:w-[139px] md:h-[196px] shrink-0 mr-[-50px] md:mr-[-74px] z-0 bg-linear-to-b from-background to-background/31" />

        {images[0] && (
          <div className="shrink-0 z-10 w-[97px] h-[148px] md:w-[209px] md:h-[317px] mr-[-33.5px] md:mr-0">
            <img
              src={images[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {images[1] && (
          <div className="shrink-0 z-20 w-[139px] h-[211px] md:w-[246px] md:h-[373px]">
            <img
              src={images[1]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {images[2] && (
          <div className="shrink-0 z-10 w-[97] h-[148px] md:w-[209px] md:h-[317px] ml-[-33.5px] md:ml-0">
            <img
              src={images[2]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

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

      {features.length > 0 && (
        <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 max-w-[858px] w-full px-6">
          {features.map((feature, idx) => (
            <>
              {idx > 0 && (
                <div className="w-full md:w-px h-px md:h-[51px] bg-divider md:mt-[5px] opacity-40" />
              )}
              <div
                key={feature.id}
                className="flex items-start gap-3 w-full max-w-[220px] md:w-auto"
              >
                <div className="w-[33px] h-[33px] rounded-full bg-neutral-400/10 flex items-center justify-center shrink-0">
                  {feature.icon && (
                    <img
                      src={feature.icon}
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                  )}
                </div>
                <span className="text-[14px] leading-[20px] tracking-[0.03em] font-sofia text-neutral-400">
                  {feature.text}
                </span>
              </div>
            </>
          ))}
        </div>
      )}
    </section>
  );
};
