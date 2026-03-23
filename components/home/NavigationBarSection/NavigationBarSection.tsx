"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/button";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const isActivePath = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

export const NavigationBarSection = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen || !menuRef.current) {
      return;
    }

    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href],button:not([disabled])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-app-primary shadow-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {navigationItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`font-body text-sm transition-colors lg:text-base ${
                  active
                    ? "font-semibold text-app-accent"
                    : "text-white hover:text-app-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label="Search"
            className="text-white hover:bg-white/10 hover:text-app-accent"
          >
            <Search className="h-4 w-4" />
          </Button>
          <Button asChild className="rounded-full bg-app-accent px-5 text-app-primary hover:bg-app-accent/90">
            <Link href="/appointment">Appointment</Link>
          </Button>
        </div>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="text-white hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          ref={menuRef}
          className="border-t border-white/15 bg-app-primary px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile primary">
            {navigationItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded px-2 py-2 font-body text-sm ${
                    active ? "bg-white/10 text-app-accent" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 flex items-center gap-2">
            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label="Search"
              className="text-white hover:bg-white/10"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button asChild className="flex-1 rounded-full bg-app-accent text-app-primary hover:bg-app-accent/90">
              <Link href="/appointment">Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
