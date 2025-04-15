import { cn } from "@/lib/utils";
import { Button } from "@material-tailwind/react";

interface ButtonProps {
  onClick: () => void;
  variant?: "filled" | "gradient" | "outlined";
  children?: string;
  className?: string;
  disabled?: boolean;
  onPointerEnterCapture?: React.PointerEventHandler<HTMLButtonElement>;
  onPointerLeaveCapture?: React.PointerEventHandler<HTMLButtonElement>;
}

export const Buttons = ({
  onClick,
  variant,
  children,
  className,
  disabled,
  onPointerEnterCapture,
  onPointerLeaveCapture,
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={cn(
        `cursor-pointer text-sm rounded-full ${
          variant === "outlined" ? "border-2 border-gray-300" : null
        } `,
        className
      )}
      disabled={disabled}
      placeholder={undefined}
      onPointerEnterCapture={onPointerEnterCapture}
      onPointerLeaveCapture={onPointerLeaveCapture}
    >
      {children}
    </Button>
  );
};
