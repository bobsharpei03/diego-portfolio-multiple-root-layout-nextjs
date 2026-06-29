"use client";
import { useEffect } from "react";

export default function useScrollProgress() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const bar = document.querySelector(".progressbar");
      const line = document.querySelector(".progressbar .line");

      if (!bar || !line) return;

      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrolled = scrollY;

      const percent = (scrolled / (docHeight - winHeight)) * 100;

      if (scrolled > 100) {
        bar.classList.add("animate");
        line.style.height = `${percent}%`;
      } else {
        bar.classList.remove("animate");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
