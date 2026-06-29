"use client";
import { useEffect } from "react";

export default function useCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const inner = document.querySelector(".cursor-inner");
    const outer = document.querySelector(".cursor-outer");

    if (!inner || !outer) return;

    const move = (e) => {
      const { clientX, clientY } = e;
      inner.style.transform = `translate(${clientX}px, ${clientY}px)`;
      outer.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    window.addEventListener("mousemove", move);

    const addHover = (el) => {
      if (!el) return;
      el.addEventListener("mouseenter", () => {
        inner.classList.add("cursor-hover");
        outer.classList.add("cursor-hover");
      });
      el.addEventListener("mouseleave", () => {
        inner.classList.remove("cursor-hover");
        outer.classList.remove("cursor-hover");
      });
    };

    const hoverTargets = document.querySelectorAll(
      "a, .cursor-pointer, .hamburger, .kura_tm_topbar"
    );

    hoverTargets.forEach(addHover);

    inner.style.visibility = "visible";
    outer.style.visibility = "visible";

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);
}
