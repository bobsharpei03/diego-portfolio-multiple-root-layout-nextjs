"use client";
import { useEffect } from "react";

export default function usePortfolioHover() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const items = document.querySelectorAll(".dizme_tm_portfolio_animation_wrap");
    const titleBox = document.querySelector(".dizme_tm_portfolio_titles");

    if (!titleBox) return;

    const moveHandler = (e) => {
      titleBox.style.left = `${e.clientX - 10}px`;
      titleBox.style.top = `${e.clientY + 25}px`;
    };

    items.forEach((item) => {
      const enter = (e) => {
        const title = item.getAttribute("data-title");
        const category = item.getAttribute("data-category");

        if (title) {
          titleBox.classList.add("visible");
          titleBox.innerHTML = `${title}<span class="work__cat">${category}</span>`;
        }

        document.addEventListener("mousemove", moveHandler);
      };

      const leave = () => {
        titleBox.classList.remove("visible");
        document.removeEventListener("mousemove", moveHandler);
      };

      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
    });

    return () => {
      document.removeEventListener("mousemove", moveHandler);
    };
  }, []);
}
