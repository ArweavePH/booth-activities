import { FC } from "react";

interface IGradientLine {
  className?: string;
}

export const GradientLine: FC<IGradientLine> = ({ className = "" }) => {
  return (
    <div
      className={`h-2 w-full bg-gradient-to-r from-yellow-500  via-red-500 to-blue-800 ${className}`}
    />
  );
};
