import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  ANALYTICS_CONSENT_EVENT,
  getAnalyticsConsent,
  trackPageView,
} from "@/lib/analytics";

export function AnalyticsRouteTracker() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  useEffect(() => {
    if (getAnalyticsConsent() === "granted") {
      trackPageView();
    }

    const handleConsentChange = () => {
      if (getAnalyticsConsent() === "granted") {
        trackPageView();
      }
    };

    window.addEventListener(ANALYTICS_CONSENT_EVENT, handleConsentChange);
    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_EVENT, handleConsentChange);
    };
  }, [pathname]);

  return null;
}
