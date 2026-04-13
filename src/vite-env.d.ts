/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** GA4 Measurement ID (e.g. G-XXXXXXXXXX). Set in `.env.local` for local dev and in your host’s env for production. */
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
