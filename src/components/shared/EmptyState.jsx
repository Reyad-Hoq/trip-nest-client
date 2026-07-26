import { Magnifier } from "@gravity-ui/icons";

export default function EmptyState({
  title = "No Data Found",
  description = "There's nothing to display right now.",
}) {
  return (
    <div className="flex min-h-[350px] items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-10">
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-[#1A1D7E]">
          <Magnifier className="size-10" />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-[#1A1D7E]">
          {title}
        </h2>

        <p className="mt-2 max-w-sm text-sm text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}