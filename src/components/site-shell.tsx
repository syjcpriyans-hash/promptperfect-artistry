import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen min-w-0 flex-col bg-paper text-ink">
      <div
        role="status"
        className="bg-accent px-3 py-2 text-center text-xs font-semibold leading-5 tracking-wide text-accent-foreground sm:px-4 sm:text-sm"
      >
        New Prompts Updated Every Month
      </div>
      <SiteHeader />
      <main className="min-w-0 flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
