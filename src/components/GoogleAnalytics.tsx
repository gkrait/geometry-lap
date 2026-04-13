import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function ensureGtag(): void {
  if (!MEASUREMENT_ID) return;

  window.dataLayer = window.dataLayer ?? [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }

  const existing = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}"]`);
  if (existing) return;

  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

/**
 * GA4 for SPA: loads gtag when VITE_GA_MEASUREMENT_ID is set and sends page_view on navigation.
 */
export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    ensureGtag();
  }, []);

  useEffect(() => {
    if (!MEASUREMENT_ID || !window.gtag) return;
    const path =
      window.location.pathname + window.location.search + window.location.hash;
    window.gtag("config", MEASUREMENT_ID, {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
}
