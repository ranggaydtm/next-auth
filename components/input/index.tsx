import { cn } from "@/lib/utils";
import { Input } from "@material-tailwind/react";

interface InputProps {
  type?: string;
  placeholder: string;
  className?: string;
  variant?: "static" | "standard" | "outlined";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Inputs = ({
  type,
  placeholder,
  className,
  variant,
  value,
  onChange,
}: InputProps) => {
  return (
    <Input
      type={type}
      className={cn("border-2 border-gray-200 rounded-md px-2 py-2", className)}
      placeholder={placeholder}
      variant={variant}
      value={value}
      onChange={onChange}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      crossOrigin={undefined}
    />
  );
};
