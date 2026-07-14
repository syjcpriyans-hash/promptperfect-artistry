export type AnalyticsConsent = "granted" | "denied";

type AnalyticsValue = string | number | boolean | undefined;
export type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const ANALYTICS_CONSENT_KEY = "listingsready_analytics_consent";
export const ANALYTICS_CONSENT_EVENT = "listingsready-analytics-consent-changed";

const rawMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
export const GA_MEASUREMENT_ID =
  typeof rawMeasurementId === "string" ? rawMeasurementId.trim() : "";

let analyticsLoadPromise: Promise<void> | null = null;

export function getAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    return null;
  }
}

export function setAnalyticsConsent(consent: AnalyticsConsent) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, consent);
  } catch {
    // The site still works when localStorage is unavailable.
  }

  window.dispatchEvent(
    new CustomEvent(ANALYTICS_CONSENT_EVENT, {
      detail: { consent },
    }),
  );
}

export function loadGoogleAnalytics(): Promise<void> {
  if (
    typeof window === "undefined" ||
    !GA_MEASUREMENT_ID ||
    getAnalyticsConsent() !== "granted"
  ) {
    return Promise.resolve();
  }

  if (window.gtag) return Promise.resolve();
  if (analyticsLoadPromise) return analyticsLoadPromise;

  analyticsLoadPromise = new Promise((resolve) => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false,
    });

    const existingScript = document.getElementById("listingsready-google-tag");
    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = "listingsready-google-tag";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      GA_MEASUREMENT_ID,
    )}`;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });

  return analyticsLoadPromise;
}

export function trackPageView() {
  if (
    typeof window === "undefined" ||
    getAnalyticsConsent() !== "granted" ||
    !GA_MEASUREMENT_ID
  ) {
    return;
  }

  void loadGoogleAnalytics().then(() => {
    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}`,
    });
  });
}

export function trackEvent(
  eventName: string,
  parameters: AnalyticsParams = {},
) {
  if (
    typeof window === "undefined" ||
    getAnalyticsConsent() !== "granted" ||
    !GA_MEASUREMENT_ID
  ) {
    return;
  }

  void loadGoogleAnalytics().then(() => {
    window.gtag?.("event", eventName, parameters);
  });
}
