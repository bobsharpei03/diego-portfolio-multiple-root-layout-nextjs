"use client";
import { useEffect } from "react";

export default function useWow() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.__wow_initialized__) return;
    window.__wow_initialized__ = true;

    // Disable WOW.js DOM mutation watching
    window.MutationObserver = null;

    const timer = setTimeout(() => {
      const WOW = require("wowjs");
      const wow = new WOW.WOW({
        live: false,
        mobile: false,
        resetAnimation: false,
      });
      wow.init();
    }, 500);

    return () => clearTimeout(timer);
  }, []);
}
