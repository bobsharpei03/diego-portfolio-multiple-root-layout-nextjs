"use client";
import { useEffect } from "react";

export default function useStickyNav() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const headers = document.querySelectorAll(".dizme_tm_header");
      headers.forEach((header) => {
        if (scrollY > 100) header.classList.add("animate");
        else header.classList.remove("animate");
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
