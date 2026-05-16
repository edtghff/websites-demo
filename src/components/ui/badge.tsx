import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-red-600/40 bg-red-950/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-red-400",
        className
      )}
    >
      {children}
    </span>
  );
}
