"use client";
import { useEffect } from "react";

export default function usePreloader() {
  useEffect(() => {
    let tries = 0;

    const waitForPreloader = () => {
      const preloader = document.getElementById("preloader");

      if (!preloader) {
        if (tries < 20) {
          tries++;
          console.log(tries + 'tries results');
          return setTimeout(waitForPreloader, 100);
        }
        return;
      }

      // Step 1: play animation
      setTimeout(() => {
        preloader.classList.add("preloaded");
        console.log('play animation');
      }, 800);

      // Step 2: hide completely
      setTimeout(() => {
        preloader.classList.add("hidden");
        console.log('hidden');
      }, 2000);
    };

    waitForPreloader();
    console.log('waitforPreloader');
  }, []);
}
