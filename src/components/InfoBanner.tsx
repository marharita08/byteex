import cloud from "@/assets/cloud.svg";
import drop from "@/assets/drop.svg";
import energy from "@/assets/energy.svg";

import { cn } from "@/utils/cn";

interface StatItem {
  value: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  { value: "3,927 kg", label: "of CO2 saved", icon: cloud },
  { value: "2,546,167 days", label: "of drinking water saved", icon: drop },
  { value: "7,321 kWh", label: "of energy saved", icon: energy },
];

export const InfoBanner = () => {
  return (
    <section className="w-full bg-background-gray">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-14 md:pt-[39px] md:pb-8 flex flex-col items-center gap-6 md:gap-4.5">
        <h2 className="text-[20px] md:text-[25px] leading-[30px] md:leading-[35px] tracking-[0.04em] text-primary font-sofia font-normal text-center capitalize md:normal-case">
          Our total green impact
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {stats.map((stat, idx) => (
            <div
              key={idx}
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
                  <img src={stat.icon} alt="" />
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
