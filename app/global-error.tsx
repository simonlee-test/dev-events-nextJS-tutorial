"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    posthog.captureException(error);
  }, [error]);

  const handleRecovery = () => {
    posthog.capture("page_recovery_attempted");
    reset();
  };

  return (
    <html lang="en">
      <body>
        <main>
          <h1>Something went wrong</h1>
          <p>We couldn&apos;t load this page. Please try again.</p>
          <button onClick={handleRecovery}>Try again</button>
        </main>
      </body>
    </html>
  );
}
