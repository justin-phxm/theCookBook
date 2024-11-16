import { twMerge } from "tailwind-merge";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={twMerge(
        "flex flex-col gap-2 rounded-lg border-8 border-primaryLight bg-slate-200 p-2",
        className,
      )}
    >
      {children}
    </section>
  );
}
