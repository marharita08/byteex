import { useState } from "react";

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

import { CartIcon } from "./icons/CartIcon";

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
      icon: <img src={sunAndMoon} alt="" className="w-6.5 h-6.5" />,
    },
    {
      title: "Made for living in.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
      icon: <img src={waves} alt="" className="w-[22px] h-[18px]" />,
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

  const handleNext = () => {
    setActiveImageIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setActiveImageIdx(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <div className="w-full pb-13.5 relative pt-21">
      <div className="absolute top-0 left-0 w-full bg-linear-to-b from-background via-background/18 to-background/0 h-[530px] z-0" />
      <div className="relative z-10">
        <section className="max-w-[1253px] mx-auto px-6 mb-29 flex flex-col items-center">
          <h3 className="text-[20px] leading-[23px] tracking-[0.03em] text-neutral-100 mb-10">
            as seen in
          </h3>
          <div className="flex justify-between items-center w-full">
            {partners.map((partner, idx) => (
              <img key={idx} src={partner.src} alt={partner.name} />
            ))}
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between">
          <div className=" w-[570px]">
            <h2 className="text-[32px] pl-8 leading-[40px] tracking-[0.04em] text-primary mb-20 font-sofia">
              Loungewear you can be proud of.
            </h2>
            <div className="flex pl-6 flex-col gap-8">
              {properties.map((prop, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="flex items-center rounded-full bg-background w-[42px] h-[42px] shrink-0 justify-center">
                    {prop.icon}
                  </div>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <h4 className="text-[22px] leading-[24px] tracking-[0.04em] text-primary">
                      {prop.title}
                    </h4>
                    <p className="text-[15px] font-suisse text-neutral-300 leading-[23px] tracking-[0.03em]">
                      {prop.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="absolute -left-10 top-1/2 -translate-y-1/2 cursor-pointer z-10"
              >
                <img src={navLeft} alt="nav left" />
              </button>

              <div className="w-[433px] h-[648px] relative shrink-0">
                <img
                  src={galleryImages[activeImageIdx].main}
                  alt={galleryImages[activeImageIdx].name}
                  className="transition-opacity duration-300 w-full h-full object-cover object-top"
                />
                <div className="flex flex-row gap-4 absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`transition-all duration-200 cursor-pointer ${activeImageIdx === idx ? "ring-2 ring-white" : "opacity-70 hover:opacity-100"}`}
                    >
                      <img src={img.thumb} alt={`Thumbnail ${idx}`} />
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="absolute -right-10 top-1/2 -translate-y-1/2 cursor-pointer z-10"
              >
                <img src={navRight} alt="nav right" />
              </button>
            </div>
            <p className="text-center mt-6 text-sm font-suisse text-neutral-400 transition-all duration-300">
              {galleryImages[activeImageIdx].name}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
