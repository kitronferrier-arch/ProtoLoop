"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteContent } from "@/src/content/siteContent";
import { Button } from "@/src/components/ui/button";

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm transition ${
        active
          ? "text-white underline decoration-[var(--accent)] underline-offset-8"
          : "text-slate-300 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
          <Image src="/brand/logo-transparent-2026.png" alt="ProtoLoop logo" width={28} height={28} />
          <span>ProtoLoop</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {siteContent.navigation.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/work-with-us">Work with us</Button>
        </div>

        <button
          type="button"
          className="rounded-md border border-white/20 px-3 py-2 text-sm text-slate-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-[color:var(--bg)] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {siteContent.navigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                onClick={() => setOpen(false)}
              />
            ))}
            <Button href="/work-with-us" className="mt-2 w-full" variant="primary">
              Work with us
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
