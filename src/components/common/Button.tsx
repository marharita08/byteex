import arrowRight from "@/assets/arrow_right.svg";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  showArrow?: boolean;
}

export const Button = ({
  children = "Customize Your Outfit",
  showArrow = true,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-primary text-primary-foreground font-suisse border-none rounded text-lg font-medium cursor-pointer flex items-center justify-center gap-6 w-full h-[56px] transition-opacity hover:opacity-90",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <img src={arrowRight} alt="arrow right" className="w-6 h-6" />
      )}
    </button>
  );
};
