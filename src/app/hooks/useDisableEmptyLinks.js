"use client";
import { useEffect } from "react";

export default function useDisableEmptyLinks() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const links = document.querySelectorAll("[href='#']");

    const handler = (e) => e.preventDefault();
    links.forEach((a) => a.addEventListener("click", handler));

    return () => {
      links.forEach((a) => a.removeEventListener("click", handler));
    };
  }, []);
}
