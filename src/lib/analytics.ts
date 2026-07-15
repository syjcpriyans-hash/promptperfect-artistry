type AnalyticsValue = string | number | boolean | undefined;
export type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-FQYCQ4ELH1";

function ensureGtag() {
  if (typeof window === "undefined") return false;

  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }

  return true;
}

export function trackPageView() {
  if (!ensureGtag()) return;

  window.gtag?.("event", "page_view", {
    send_to: GA_MEASUREMENT_ID,
    page_title: document.title,
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}`,
  });
}

export function trackEvent(
  eventName: string,
  parameters: AnalyticsParams = {},
) {
  if (!ensureGtag()) return;

  window.gtag?.("event", eventName, {
    send_to: GA_MEASUREMENT_ID,
    ...parameters,
  });
}
