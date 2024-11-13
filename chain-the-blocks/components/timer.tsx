import { cn } from "@/lib/utils";

export const Timer = ({
  timeLeft,
  className,
}: {
  timeLeft: number;
  className?: string;
}) => {
  return (
    <div className={cn(`relative w-20 h-20 bg-white rounded-full`, className)}>
      <svg className="w-full h-full -rotate-90">
        <circle
          className="stroke-gray-300"
          strokeWidth="7"
          fill="transparent"
          r="35"
          cx="40"
          cy="40"
        />
        <circle
          className="stroke-orange-500"
          strokeWidth="7"
          fill="transparent"
          r="35"
          cx="40"
          cy="40"
          strokeDasharray={219.9}
          strokeDashoffset={219.9 * (1 - timeLeft / 60)}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">
        {timeLeft}
      </div>
    </div>
  );
};
