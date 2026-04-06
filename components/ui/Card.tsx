import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[--jl-surface] ring-1 ring-[--jl-border] shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

