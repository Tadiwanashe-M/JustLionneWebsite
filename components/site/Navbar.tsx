"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/site/BrandMark";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type NavItem = { label: string; href: string };

export function Navbar() {
  const nav = useMemo<NavItem[]>(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Industries", href: "#industries" },
      { label: "Why Choose Us", href: "#why" },
      { label: "Contact", href: "#contact" },
    ],
    [],
  );

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b border-transparent transition-all",
          scrolled
            ? "bg-white/85 backdrop-blur-md border-[--jl-border] shadow-sm"
            : "bg-transparent",
        )}
      >
        <Container className="flex min-h-[4.25rem] items-center justify-between py-2">
          <Link
            href="#home"
            className="group inline-flex items-center gap-3 sm:gap-4"
            onClick={() => setOpen(false)}
          >
            <BrandMark variant="nav" priority />
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-[15px] font-semibold tracking-wide text-slate-900 sm:text-base">
                JUSTLIONNE
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
                PTY LTD
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="#contact" variant="quote">
              Get a Quote
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              Our Services
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex size-10 items-center justify-center rounded-xl bg-white ring-1 ring-[--jl-border] text-slate-900 transition hover:bg-slate-50 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="block h-0.5 w-5 rounded-full bg-current shadow-[0_6px_0_currentColor,0_-6px_0_currentColor]" />
          </button>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden"
          >
            <div className="border-b border-[--jl-border] bg-white/95 backdrop-blur-md">
              <Container className="py-4">
                <div className="mb-4 flex items-center gap-3 border-b border-[--jl-border] pb-4">
                  <BrandMark variant="drawer" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">JUSTLIONNE</p>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                      PTY LTD
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <ButtonLink
                      href="#contact"
                      variant="quote"
                      className="w-full"
                      onClick={() => setOpen(false)}
                    >
                      Get a Quote
                    </ButtonLink>
                    <ButtonLink
                      href="#services"
                      variant="secondary"
                      className="w-full"
                      onClick={() => setOpen(false)}
                    >
                      Our Services
                    </ButtonLink>
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

