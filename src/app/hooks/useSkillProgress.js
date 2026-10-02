"use client";
import { useEffect } from "react";

export default function useSkillProgress() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const items = document.querySelectorAll(".skillsInner___");
      const triggerBottom = window.innerHeight * 0.8;

      items.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const bar = box.querySelector(".bar");
        const label = box.querySelector(".label");
        const number = box.querySelector(".number");

        if (!bar || !label || !number) return;

        const width = box.getAttribute("data-value");
        const color = box.getAttribute("data-color");

        if (rect.top < triggerBottom) {
          bar.classList.add("open");
          label.classList.add("opened");
          number.style.right = `${100 - width}%`;

          const barIn = bar.querySelector(".bar_in");
          if (barIn) {
            barIn.style.width = `${width}%`;
            barIn.style.backgroundColor = color;
          }
        } else {
          bar.classList.remove("open");
          label.classList.remove("opened");
          number.style.right = "120%";
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
