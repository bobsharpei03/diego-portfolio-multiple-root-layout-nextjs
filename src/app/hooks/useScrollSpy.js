"use client";
import { useEffect } from "react";

export default function useScrollSpy() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const sections = document.querySelectorAll(".dizme_tm_section");
      const navItems = document.querySelectorAll(".anchor_nav li");

      let current = "";

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;

        if (scrollY >= top - height / 3) {
          current = section.id;
        }
      });

      navItems.forEach((li) => {
        li.classList.remove("current");
        const href = li.querySelector("a")?.getAttribute("href");
        if (href === `#${current}`) li.classList.add("current");
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
