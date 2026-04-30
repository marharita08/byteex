import arrowRight from "@/assets/arrow_right.svg";
import cart from "@/assets/cart.svg";
import star from "@/assets/star.svg";
import sunAndMoon from "@/assets/sun_and_moon.svg";
import truck from "@/assets/truck.svg";

export const HowToOrder = () => {
  const steps = [
    {
      title: "You save.",
      desc: "Browse our comfort sets and save 15% when you bundle.",
      icon: cart,
      iconClassName: "w-[51px]",
    },
    {
      title: "We ship.",
      desc: "We ship your items within 1-2 days of receiving your order.",
      icon: truck,
      iconClassName: "w-[68px]",
    },
    {
      title: "You enjoy!",
      desc: "Wear hernest around the house, out on the town, or in bed.",
      icon: sunAndMoon,
      iconClassName: "w-[60px]",
    },
  ];

  return (
    <section className="w-full py-24 px-6 max-w-6xl mx-auto flex flex-col items-center">
      <h2 className="text-[32px] leading-[40px] tracking-[0.04em] text-primary mb-16 font-sofia text-center">
        Comfort made easy
      </h2>

      <div className="w-full flex flex-col md:flex-row gap-8 justify-center mb-16">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex-1 flex flex-col items-center border p-4 border-[#EDEDED] rounded-lg text-center w-[346px] h-[320px] justify-center ${idx % 2 === 0 ? "bg-background-gray" : "bg-background"}`}
          >
            <div className="flex items-center shrink-0 justify-center mb-5">
              <img
                src={step.icon}
                alt={step.title}
                className={step.iconClassName}
              />
            </div>
            <h3 className="text-[22px] leading-[40px] tracking-[0.04em] text-primary font-sofia mb-4">
              {step.title}
            </h3>
            <p className="text-[15px] leading-[23px] tracking-[0.03em] text-neutral-300">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <button className="bg-primary text-primary-foreground font-suisse border-none rounded text-lg font-medium cursor-pointer flex items-center justify-center gap-6 w-[356px] h-[56px] transition-opacity hover:opacity-90">
          <span>Customize Your Outfit</span>
          <img src={arrowRight} alt="arrow right" className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex gap-px">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={star} alt="star" className="w-3 h-3" />
            ))}
          </div>
          <span className="text-[12px] leading-[20px] tracking-[0.02em] font-suisse text-neutral-200">
            Over 500+ 5 Star Reviews Online
          </span>
        </div>
      </div>
    </section>
  );
};
