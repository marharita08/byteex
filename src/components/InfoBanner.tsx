import cloud from "@/assets/cloud.svg";
import drop from "@/assets/drop.svg";
import energy from "@/assets/energy.svg";

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
      <div className="max-w-7xl mx-auto px-6 pt-[39px] pb-8 flex flex-col items-center gap-4.5">
        <h2 className="text-[25px] leading-[35px] tracking-[0.04em] text-primary font-sofia font-normal text-center">
          Our total green impact
        </h2>

        <div className="flex items-center justify-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center">
              {idx > 0 && (
                <div className="w-px h-[122px] bg-[#C4C4C480] mx-11" />
              )}
              <div className="flex flex-col items-center gap-2">
                <div className="w-[42px] h-[42px] bg-[#E4E4E4] rounded-full flex items-center justify-center">
                  <img src={stat.icon} alt="" />
                </div>
                <span className="text-[22px] leading-[20px] tracking-[0.02em] font-sofia font-semibold text-primary">
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
