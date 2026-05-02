import star from "@/assets/star.svg";
import { cn } from "@/utils/cn";

import { Button } from "./Button";

interface CtaWithReviewsProps {
  className?: string;
  buttonClassName?: string;
}

export const CtaWithReviews = ({
  className,
  buttonClassName,
}: CtaWithReviewsProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-4 w-full", className)}>
      <Button className={buttonClassName} />
      <div className="flex items-center gap-2 mt-2">
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
  );
};
