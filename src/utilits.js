// All utilities are now React 18 + Next.js 16 safe
// No findDOMNode, no deprecated APIs

// ------------------------------
// FETCH DATA
// ------------------------------
export const fatchData = async (url) => {
  const res = await fetch(url);
  return res.json();
};
/*
// ------------------------------
// PRELOADER
// ------------------------------
export const preloader = () => {
  if (typeof window === "undefined") return;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  );

  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  if (!isMobile) {
    setTimeout(() => preloader.classList.add("preloaded"), 800);
    setTimeout(() => preloader.remove(), 2000);
  } if (preloader && preloader.parentNode) {
  preloader.parentNode.removeChild(preloader);
}

  setTimeout(() => {
    document.body.classList.add("opened");
  }, 3000);
};

// ------------------------------
// WOW JS ANIMATION
// ------------------------------
export const wowJsAnimation = () => {
  if (typeof window === "undefined") return;

  // Prevent multiple initializations
  if (window.__wow_initialized__) return;
  window.__wow_initialized__ = true;

  // Disable WOW.js DOM mutation watching
  window.MutationObserver = null;

  setTimeout(() => {
    const WOW = require("wowjs");

    const wow = new WOW.WOW({
      live: false,      // do NOT watch DOM changes
      mobile: false,    // optional: prevents mobile crashes
      scrollContainer: null,
      resetAnimation: false, // <--- CRITICAL: prevents removeChild()
    });

    wow.init();
  }, 500);
};

// ------------------------------
// CUSTOM CURSOR (NO findDOMNode)
// ------------------------------
export const customCursor = () => {
  if (typeof window === "undefined") return;

  const inner = document.querySelector(".cursor-inner");
  const outer = document.querySelector(".cursor-outer");

  if (!inner || !outer) return;

  // Move cursor
  window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    inner.style.transform = `translate(${clientX}px, ${clientY}px)`;
    outer.style.transform = `translate(${clientX}px, ${clientY}px)`;
  });

  // Hover effects
  const addHover = (el) => {
    if(!el) return;
    el.addEventListener("mouseenter", () => {
      inner.classList.add("cursor-hover");
      outer.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      inner.classList.remove("cursor-hover");
      outer.classList.remove("cursor-hover");
    });
  };

  document.querySelectorAll("a, .cursor-pointer, .hamburger, .kura_tm_topbar")
    .forEach(addHover);

  inner.style.visibility = "visible";
  outer.style.visibility = "visible";
};

// ------------------------------
// DISABLE EMPTY LINKS
// ------------------------------
export const aTagClick = () => {
  if (typeof window === "undefined") return;

  document.querySelectorAll("[href='#']").forEach((a) => {
    a.addEventListener("click", (e) => e.preventDefault());
  });
};

// ------------------------------
// SKILL PROGRESS
// ------------------------------
export const activeSkillProgress = () => {
  if (typeof window === "undefined") return;

  const items = document.querySelectorAll(".skillsInner___");
  const triggerBottom = window.innerHeight * 0.8;

  items.forEach((box) => {
    const rect = box.getBoundingClientRect();
    const bar = box.querySelector(".bar");
    const label = box.querySelector(".label");
    const number = box.querySelector(".number");

    const width = box.getAttribute("data-value");
    const color = box.getAttribute("data-color");

    if (rect.top < triggerBottom) {
      bar.classList.add("open");
      label.classList.add("opened");
      number.style.right = `${100 - width}%`;

      const barIn = bar.querySelector(".bar_in");
      barIn.style.width = `${width}%`;
      barIn.style.backgroundColor = color;
    } else {
      bar.classList.remove("open");
      label.classList.remove("opened");
      number.style.right = "120%";
    }
  });
};

// ------------------------------
// DATA IMAGE
// ------------------------------
export const dataImage = () => {
  if (typeof window === "undefined") return;

  document.querySelectorAll("[data-img-url]").forEach((el) => {
    el.style.backgroundImage = `url(${el.getAttribute("data-img-url")})`;
  });
};

// ------------------------------
// SCROLL SPY
// ------------------------------
export const scroll_ = () => {
  if (typeof window === "undefined") return;

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

// ------------------------------
// STICKY NAV
// ------------------------------
export const stickyNav = () => {
  if (typeof window === "undefined") return;

  const headers = document.querySelectorAll(".dizme_tm_header");
  headers.forEach((header) => {
    if (scrollY > 100) header.classList.add("animate");
    else header.classList.remove("animate");
  });
};

// ------------------------------
// SCROLL TOP PROGRESS
// ------------------------------
export const scrollTop = () => {
  if (typeof window === "undefined") return;

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

// ------------------------------
// PORTFOLIO HOVER
// ------------------------------
export const portfolioHover = () => {
  if (typeof window === "undefined") return;

  const items = document.querySelectorAll(".dizme_tm_portfolio_animation_wrap");
  const titleBox = document.querySelector(".dizme_tm_portfolio_titles");

  if (!titleBox) return;

  items.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const title = item.getAttribute("data-title");
      const category = item.getAttribute("data-category");

      if (title) {
        titleBox.classList.add("visible");
        titleBox.innerHTML = `${title}<span class="work__cat">${category}</span>`;
      }

      titleBox.style.left = `${e.clientX - 10}px`;
      titleBox.style.top = `${e.clientY + 25}px`;
    });

    item.addEventListener("mouseleave", () => {
      titleBox.classList.remove("visible");
    });
  });
};
*/