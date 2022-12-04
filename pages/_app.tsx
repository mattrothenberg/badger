import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import * as Fathom from "fathom-client";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;

    Fathom.load("XDKFLKSS", {
      includedDomains: ["badger-wtf.vercel.app", "vercel.app"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />;
}
