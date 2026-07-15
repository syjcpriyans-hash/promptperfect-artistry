import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { trackPageView } from "@/lib/analytics";

export function AnalyticsRouteTracker() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    trackPageView();
  }, [pathname]);

  return null;
}
