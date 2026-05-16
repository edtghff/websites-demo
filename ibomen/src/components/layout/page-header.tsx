export function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10 md:mb-14">
      <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-red-500 sm:tracking-[0.4em]">
        {label}
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-wide text-white md:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/45">
          {description}
        </p>
      )}
    </header>
  );
}
