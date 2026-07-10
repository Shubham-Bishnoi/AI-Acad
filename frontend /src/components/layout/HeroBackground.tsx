import { ReactNode } from "react";
import clsx from "clsx";

type HeroBackgroundProps = {
  children: ReactNode;
  className?: string;
};

export default function HeroBackground({
  children,
  className,
}: HeroBackgroundProps) {
  return (
    <section
      className={clsx(
        "gradient-hero relative overflow-hidden pt-22 sm:pt-24 lg:pt-28",
        className,
      )}
    >
      {children}
    </section>
  );
}
