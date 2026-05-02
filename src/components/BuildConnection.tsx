import type { SectionBuildConnection } from "@/types/types";

interface Props {
  data: SectionBuildConnection;
}

export const BuildConnection = ({ data }: Props) => {
  const { title, mainImage, topLeftImage, bottomRightImage, description } =
    data.fields;

  return (
    <div className="bg-background-gray">
      <section className="w-full py-20 md:py-28 px-6 max-w-[1300px] mx-auto flex flex-col xl:flex-row items-center justify-around gap-12 md:gap-0">
        <h2 className="xl:hidden order-1 md:text-[32px] md:leading-[40px] text-[26px] leading-[34px] tracking-[0.04em] text-primary font-sofia text-center">
          {title}
        </h2>

        <div className="w-full md:py-25 xl:py-0 max-w-[320px] md:w-[523px] relative flex items-center justify-center min-h-[450px] md:min-h-[600px] order-2">
          <div className="relative w-[265px] h-[395px] md:w-[382px] md:h-[570px]">
            <img
              src={"https:" + mainImage.fields.file.url}
              alt={mainImage.fields.title}
              className="w-full h-full object-cover"
            />
            {topLeftImage && (
              <img
                src={"https:" + topLeftImage.fields.file.url}
                alt={topLeftImage.fields.title}
                className="absolute left-[-40px] top-[-25px] md:left-[-80px] md:top-[-50px] w-[115px] h-[121px] md:w-[166px] md:h-[175px] object-cover"
              />
            )}
            {bottomRightImage && (
              <img
                src={"https:" + bottomRightImage.fields.file.url}
                alt={bottomRightImage.fields.title}
                className="absolute right-[-30px] bottom-[-40px] md:right-[-65px] md:bottom-[-50px] w-[90px] h-[121px] md:w-[129px] md:h-[175px] object-cover"
              />
            )}
          </div>
        </div>

        <div className="w-full max-w-full md:w-[619px] flex flex-col gap-8 items-center md:items-start order-3">
          <h2 className="hidden xl:block text-[32px] leading-[40px] tracking-[0.04em] text-primary font-sofia">
            {title}
          </h2>

          {description && (
            <div className="text-neutral-300 text-[14px] md:text-[15px] leading-[22px] md:leading-[23px] tracking-[0.03em] flex flex-col gap-5 text-left max-w-[335px] md:max-w-full">
              {description
                .split("\n")
                .filter(Boolean)
                .map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
            </div>
          )}

          <button className="hidden md:flex bg-primary text-primary-foreground font-suisse border-none rounded text-lg font-medium cursor-pointer items-center justify-center gap-6 w-[356px] h-[56px] order-4">
            <span>Customize Your Outfit</span>
          </button>
        </div>
      </section>
    </div>
  );
};
