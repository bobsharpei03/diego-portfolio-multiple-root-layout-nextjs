"use client";
import { useEffect } from "react";

export default function useDataImage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const items = document.querySelectorAll("[data-img-url]");
    items.forEach((el) => {
      const url = el.getAttribute("data-img-url");
      if (url) el.style.backgroundImage = `url(${url})`;
    });
  }, []);
}
