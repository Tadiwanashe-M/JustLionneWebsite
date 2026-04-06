import { BrandMark } from "@/components/site/BrandMark";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[--jl-bg]">
      <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 ring-1 ring-[--jl-border] shadow-sm">
        <BrandMark variant="section" />
        <div className="flex items-center gap-3">
          <div className="size-5 animate-spin rounded-full border-2 border-slate-200 border-t-[--jl-red]" />
          <p className="text-sm font-medium text-slate-600">Loading JUSTLIONNE…</p>
        </div>
      </div>
    </div>
  );
}

