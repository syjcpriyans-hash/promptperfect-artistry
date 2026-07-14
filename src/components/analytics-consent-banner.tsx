import { useEffect, useState } from "react";
import {
  getAnalyticsConsent,
  setAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics";

export function AnalyticsConsentBanner() {
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(getAnalyticsConsent());
    setReady(true);
  }, []);

  if (!ready || consent !== null) return null;

  const chooseConsent = (nextConsent: AnalyticsConsent) => {
    setAnalyticsConsent(nextConsent);
    setConsent(nextConsent);
  };

  return (
    <aside
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-xl border border-border bg-paper p-4 shadow-xl sm:inset-x-6 sm:bottom-6 sm:p-5"
      aria-label="Analytics preferences"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="font-display text-base font-semibold text-ink">
            Help improve ListingsReady
          </p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            We use optional Google Analytics to understand which pages and
            workflows visitors find useful. We do not send your prompts or product
            images to Analytics. Read our{" "}
            <a
              href="/privacy"
              className="font-medium text-ink underline underline-offset-4"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => chooseConsent("denied")}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-ink transition hover:bg-paper-alt"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => chooseConsent("granted")}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-medium text-white transition hover:opacity-90"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </aside>
  );
}
