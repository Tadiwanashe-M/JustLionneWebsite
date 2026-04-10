import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/site/BrandMark";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[--jl-border] bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <BrandMark variant="footer" />
              <div>
                <p className="text-base font-semibold tracking-[0.12em] text-slate-900">
                  JUSTLIONNE
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                  PTY LTD
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Mining and logistics partner delivering dependable supply, handling,
              and transport solutions across South Africa.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Quick links
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Contact
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>3 Kingsmead St, Reyno Ridge, Emalahleni, 1040</p>
              <p>
                <a className="hover:text-slate-900" href="mailto:info@justlionne.co.za">
                  info@justlionne.co.za
                </a>
                <span className="text-slate-400"> · </span>
                <a
                  className="hover:text-slate-900"
                  href="mailto:justice@justlionne.co.za"
                >
                  justice@justlionne.co.za
                </a>
              </p>
              <p>
                <a className="hover:text-slate-900" href="tel:+27650743911">
                  +27 65 074 3911
                </a>
                <span className="text-slate-400"> · </span>
                <a className="hover:text-slate-900" href="tel:+27670594722">
                  +27 67 059 4722
                </a>
              </p>
              <p className="pt-2 text-xs text-slate-400">
                Social links: (Coming soon)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[--jl-border] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} JUSTLIONNE PTY LTD. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Built for performance, accessibility, and enterprise credibility.
          </p>
        </div>
      </Container>
    </footer>
  );
}

