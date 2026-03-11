"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js-ready");

  const body = document.body;
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
  const yearNodes = Array.from(document.querySelectorAll("[data-current-year]"));
  const navPageLinks = navLinks.filter((link) => !link.classList.contains("nav-cta"));

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      body.classList.toggle("mobile-nav-open");
    });
  }

  const normalizePath = (path) => {
    let normalized = (path || "/").replace(/\/index\.html$/i, "/");
    normalized = normalized.replace(/\/{2,}/g, "/");
    if (!normalized.startsWith("/")) {
      normalized = `/${normalized}`;
    }
    if (normalized.length > 1 && normalized.endsWith("/")) {
      normalized = normalized.slice(0, -1);
    }
    return normalized || "/";
  };

  const currentPath = normalizePath(window.location.pathname);
  navPageLinks.forEach((link) => {
    const linkUrl = new URL(link.href, window.location.href);
    if (linkUrl.origin !== window.location.origin) {
      return;
    }

    const linkPath = normalizePath(linkUrl.pathname);
    const isActive =
      currentPath === linkPath ||
      (linkPath !== "/" && currentPath.startsWith(`${linkPath}/`));

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("mobile-nav-open");
    });
  });

  const currentYear = String(new Date().getFullYear());
  yearNodes.forEach((node) => {
    node.textContent = currentYear;
  });
});
