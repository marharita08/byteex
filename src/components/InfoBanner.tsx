import type { SectionInfoBanner } from "@/types/types";
import { cn } from "@/utils/cn";

interface Props {
  data: SectionInfoBanner;
}

export const InfoBanner = ({ data }: Props) => {
  const { title, stats } = data.fields;

  const statsList =
    stats?.map((entry) => ({
      id: entry.sys.id,
      value: entry.fields.value,
      label: entry.fields.label,
      icon: entry.fields.icon
        ? "https:" + entry.fields.icon.fields.file.url
        : null,
    })) ?? [];

  return (
    <section className="w-full bg-background-gray">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-14 md:pt-[39px] md:pb-8 flex flex-col items-center gap-6 md:gap-4.5">
        <h2 className="text-[20px] md:text-[25px] leading-[30px] md:leading-[35px] tracking-[0.04em] text-primary font-sofia font-normal text-center capitalize md:normal-case">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {statsList.map((stat, idx) => (
            <div
              key={stat.id}
              className={cn(
                "flex flex-col md:flex-row items-center w-full md:w-auto",
                idx === 2 && "hidden md:flex",
              )}
            >
              {idx > 0 && (
                <div className="w-[221px] h-px md:w-px md:h-[122px] bg-divider/50 my-8 md:my-0 md:mx-11" />
              )}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-[42px] h-[42px] bg-surface-gray rounded-full flex items-center justify-center">
                  {stat.icon && <img src={stat.icon} alt="" />}
                </div>
                <span className="text-[20px] md:text-[22px] leading-[24px] md:leading-[20px] tracking-[0.02em] font-sofia font-semibold text-primary">
                  {stat.value}
                </span>
                <span className="text-[14px] leading-[20px] tracking-[0.03em] font-sofia font-normal text-primary">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
