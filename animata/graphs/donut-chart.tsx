import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DonutChartProps {
  size: number;
  progress: number;
  trackClassName?: string;
  progressClassName?: string;
  circleWidth?: number;
  progressWidth?: number;
  rounded?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function DonutChart({
  size,
  progress,
  progressClassName = "text-green-500",
  trackClassName = "text-black/10",
  circleWidth = 16,
  progressWidth = 16,
  rounded = true,
  className,
  children,
}: DonutChartProps) {
  const radius = size / 2 - Math.max(progressWidth, circleWidth);
  const circumference = Math.PI * radius * 2;
  const percentage = circumference * ((100 - progress) / 100);

  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          stroke="currentColor"
          stroke-width={`${circleWidth}px`}
          stroke-dasharray={`10px 0`}
          stroke-dashoffset="0px"
          className={cn("duration-500", trackClassName)}
        />
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke="currentColor"
          className={cn("duration-500", progressClassName)}
          stroke-width={`${progressWidth}px`}
          stroke-linecap={rounded ? "round" : "butt"}
          fill="transparent"
          stroke-dasharray={`${circumference}px`}
          stroke-dashoffset={`${percentage}px`}
        />
      </svg>
      {children}
    </div>
  );
}
