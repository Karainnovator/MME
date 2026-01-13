import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        centered ? "text-center mx-auto" : "text-left"
      )}
    >
      {label && (
        <p className="text-xs uppercase tracking-widest text-gold font-medium">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground text-base md:text-lg",
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
