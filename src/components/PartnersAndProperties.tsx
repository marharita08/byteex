import { useEffect, useState } from "react";

import canadianLiving from "@/assets/canadian_living.png";
import ecoStylist from "@/assets/eco_stylist.png";
import galleryMin1 from "@/assets/gallery_miniature_1.png";
import galleryMin2 from "@/assets/gallery_miniature_2.png";
import grayPajama from "@/assets/gray_pajama.png";
import jillianHarris from "@/assets/jillian_harris.png";
import leaf from "@/assets/leaf.svg";
import navLeft from "@/assets/nav_left.svg";
import navRight from "@/assets/nav_right.svg";
import sunAndMoon from "@/assets/sun_and_moon.svg";
import theEcoHub from "@/assets/the_eco_hub.png";
import trendhunter from "@/assets/trendhunter.png";
import waves from "@/assets/waves.svg";
import whiteRobe from "@/assets/white_robe.jpg";
import { cn } from "@/utils/cn";

import { CtaWithReviews } from "./common/CtaWithReviews";
import { CartIcon } from "./icons/CartIcon";

interface GalleryImage {
  main: string;
  thumb: string;
  name: string;
}

export const PartnersAndProperties = () => {
  const partners = [
    { name: "Eco Stylist", src: ecoStylist },
    { name: "Canadian Living", src: canadianLiving },
    { name: "Jillian Harris", src: jillianHarris },
    { name: "The Eco Hub", src: theEcoHub },
    { name: "TrendHunter", src: trendhunter },
  ];

  const properties = [
    {
      title: "Ethically sourced.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
      icon: <CartIcon className="text-primary w-[25px] h-[19px]" />,
    },
    {
      title: "Responsibly made.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
      icon: <img src={leaf} alt="" className="w-[23px] h-[23px]" />,
    },
    {
      title: "Unimaginably comfortable.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
      icon: <img src={sunAndMoon} alt="sun and moon" className="w-6.5 h-6.5" />,
    },
    {
      title: "Made for living in.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
      icon: <img src={waves} alt="waves" className="w-[22px] h-[18px]" />,
    },
  ];

  const galleryImages = [
    { main: grayPajama, thumb: galleryMin1, name: "Gray Pajama" },
    { main: whiteRobe, thumb: galleryMin2, name: "White Robe" },
    { main: grayPajama, thumb: galleryMin1, name: "Gray Pajama" },
    { main: grayPajama, thumb: galleryMin1, name: "Gray Pajama" },
    { main: grayPajama, thumb: galleryMin1, name: "Gray Pajama" },
    { main: grayPajama, thumb: galleryMin1, name: "Gray Pajama" },
    { main: grayPajama, thumb: galleryMin1, name: "Gray Pajama" },
  ];

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [logoPageIdx, setLogoPageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogoPageIdx((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveImageIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setActiveImageIdx(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <div className="w-full pb-11 md:pb-13.5 relative pt-12 md:pt-21 overflow-hidden">
      <div className="absolute top-0 left-0 w-full bg-linear-to-b from-background via-background/18 to-background/0 h-[530px] z-0" />

      <div className="absolute -bottom-39 left-0 w-full h-[600px] bg-linear-to-t from-background via-background/18 to-background/0 z-0 md:hidden" />

      <div className="relative z-10">
        <section className="max-w-[1253px] mx-auto px-6 mb-16 md:mb-29 flex flex-col items-center">
          <h3 className="text-[18px] md:text-[20px] leading-[23px] tracking-[0.03em] text-neutral-100 mb-8 md:mb-10 lowercase">
            as seen in
          </h3>

          <div className="w-full md:hidden flex flex-col items-center gap-6">
            <div className="flex justify-center items-center w-full gap-4 h-10">
              {partners
                .slice(logoPageIdx, logoPageIdx + 3)
                .map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex-1 flex justify-center items-center h-full overflow-hidden"
                  >
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain scale-90 origin-center"
                    />
                  </div>
                ))}
            </div>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  onClick={() => setLogoPageIdx(i)}
                  className={cn(
                    "w-2 h-2 rounded-full cursor-pointer transition-colors duration-300",
                    logoPageIdx === i ? "bg-black" : "bg-divider",
                  )}
                />
              ))}
            </div>
          </div>

          {/* Logo Row for Desktop */}
          <div className="hidden md:flex justify-between items-center w-full gap-4">
            {partners.map((partner, idx) => (
              <img
                key={idx}
                src={partner.src}
                alt={partner.name}
                className="h-auto object-contain"
              />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-0">
          <div className="w-full xl:w-[570px] flex flex-col items-center xl:items-start order-1">
            <h2 className="text-[26px] md:text-[32px] md:pl-8 leading-[34px] md:leading-[40px] tracking-[0.04em] text-primary mb-10 md:mb-20 font-sofia text-center md:text-left">
              Loungewear you can be proud of.
            </h2>

            {/* Mobile Gallery */}
            <div className="flex xl:hidden flex-col items-center mb-10 w-full order-2">
              <GalleryContent
                galleryImages={galleryImages}
                activeImageIdx={activeImageIdx}
                setActiveImageIdx={setActiveImageIdx}
                handlePrev={handlePrev}
                handleNext={handleNext}
                isMobile={true}
              />
            </div>

            <div className="md:w-[570px] xl:w-full flex md:pl-6 flex-col order-3 w-full">
              {properties.map((prop, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center md:items-start w-full"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 text-center md:text-left py-8 md:py-0 md:mb-8 last:mb-0">
                    <div className="flex items-center rounded-full bg-background w-[42px] h-[42px] shrink-0 justify-center">
                      {prop.icon}
                    </div>
                    <div className="flex flex-col gap-1.5 pt-1">
                      <h4 className="text-[20px] md:text-[22px] leading-[24px] tracking-[0.04em] text-primary font-medium md:font-normal">
                        {prop.title}
                      </h4>
                      <p className="text-[14px] md:text-[15px] font-suisse text-neutral-300 leading-[22px] md:leading-[23px] tracking-[0.03em] max-w-[340px] md:max-w-none">
                        {prop.desc}
                      </p>
                    </div>
                  </div>
                  {/* Mobile Divider */}
                  {i < properties.length - 1 && (
                    <div className="w-[334px] h-px bg-divider/50 md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Gallery */}
          <div className="hidden xl:flex flex-col items-center order-2">
            <GalleryContent
              galleryImages={galleryImages}
              activeImageIdx={activeImageIdx}
              setActiveImageIdx={setActiveImageIdx}
              handlePrev={handlePrev}
              handleNext={handleNext}
              isMobile={false}
            />
          </div>
        </section>

        <CtaWithReviews
          className="mt-2 md:hidden px-6"
          buttonClassName="max-w-[381px] mx-auto"
        />
      </div>
    </div>
  );
};

const GalleryContent = ({
  galleryImages,
  activeImageIdx,
  setActiveImageIdx,
  handlePrev,
  handleNext,
  isMobile,
}: {
  galleryImages: GalleryImage[];
  activeImageIdx: number;
  setActiveImageIdx: (idx: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
  isMobile: boolean;
}) => {
  return (
    <>
      <div className="relative flex items-center justify-center w-full">
        <div
          className={cn(
            "relative shrink-0",
            isMobile
              ? "w-full aspect-2/3 max-w-[300px]"
              : "w-[433px] h-[648px]",
          )}
        >
          <button
            onClick={handlePrev}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 cursor-pointer z-10",
              isMobile ? "-left-6" : "-left-10",
            )}
          >
            <img
              src={navLeft}
              alt="nav left"
              className={cn(isMobile && "w-2")}
            />
          </button>

          <img
            src={galleryImages[activeImageIdx].main}
            alt={galleryImages[activeImageIdx].name}
            className="transition-opacity duration-300 w-full h-full object-cover object-top"
          />

          <button
            onClick={handleNext}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 cursor-pointer z-10",
              isMobile ? "-right-6" : "-right-10",
            )}
          >
            <img
              src={navRight}
              alt="nav right"
              className={cn(isMobile && "w-2")}
            />
          </button>

          <div className="flex flex-row gap-2 md:gap-4 absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[90%] justify-center">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={cn(
                  "transition-all duration-200 cursor-pointer",
                  activeImageIdx === idx
                    ? "ring-2 ring-white scale-110"
                    : "opacity-70 hover:opacity-100",
                )}
              >
                <img
                  src={img.thumb}
                  alt={`Thumbnail ${idx}`}
                  className={cn(
                    "object-cover transition-transform duration-200",
                    isMobile ? "w-8 h-8" : "w-16 h-16",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <p
        className={cn(
          "text-center mt-6 text-sm font-suisse text-neutral-400 transition-all duration-300",
          !isMobile && "hidden",
        )}
      >
        {galleryImages[activeImageIdx].name}
      </p>
    </>
  );
};
