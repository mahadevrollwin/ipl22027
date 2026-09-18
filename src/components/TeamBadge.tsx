export function TeamBadge({ short, color }: { short: string; color: string }) {
  return (
    <span
      className="grid size-8 place-items-center rounded-[10px] text-[11px] font-extrabold text-white"
      style={{ background: color }}
    >
      {short}
    </span>
  );
}

export function FormPips({ form }: { form: string }) {
  return (
    <span className="flex gap-1">
      {form.split(" ").map((x, i) => (
        <i
          key={`${x}-${i}`}
          className={`grid size-[18px] place-items-center rounded-full text-[10px] not-italic font-extrabold ${
            x === "W"
              ? "bg-emerald-100 text-emerald-700"
              : x === "L"
                ? "bg-red-100 text-red-600"
                : "bg-bg-4 text-muted"
          }`}
        >
          {x[0]}
        </i>
      ))}
    </span>
  );
}
