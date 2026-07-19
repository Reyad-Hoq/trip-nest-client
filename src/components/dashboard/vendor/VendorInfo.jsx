export default function Info({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">

      <div className="rounded-xl bg-blue-100 p-3 text-[#1A1D7E]">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="font-semibold text-slate-800">
          {value || "N/A"}
        </p>
      </div>

    </div>
  );
}