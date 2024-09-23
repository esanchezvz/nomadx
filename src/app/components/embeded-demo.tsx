"use client";

import { useEffect, useRef } from "react";

export const EmbeddedDemo = (
  props: Omit<React.ComponentPropsWithoutRef<"iframe">, "src" | "title">
) => {
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    const injectStyles = () => {
      try {
        const iframeDocument =
          iframe.contentDocument || iframe.contentWindow?.document;

        if (!iframeDocument) throw Error("No content found on iframe");

        iframeDocument.body.style.background = "transparent";

        const mainEl = iframeDocument.querySelector("main");

        if (mainEl) {
          mainEl.style.background = "transparent";
        }

        const divEl = iframeDocument.querySelector(
          "body > main > div:first-child"
        ) as HTMLDivElement | null;

        if (divEl) {
          divEl.style.background = "transparent";
          divEl.style.height = "100%";
          divEl.style.width = "100%";
        }
      } catch (error) {
        console.error("Failed to inject styles:", error);
      }
    };

    iframe.addEventListener("load", injectStyles);

    return () => {
      iframe.removeEventListener("load", injectStyles);
    };
  }, []);

  return (
    <iframe
      ref={ref}
      src="/demo"
      style={{
        width: "100%",
        minHeight: 600,
        border: "none",
      }}
      title="Embedded Website"
      {...props}
    />
  );
};
