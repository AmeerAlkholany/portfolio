"use client";

import { useState } from "react";

export function useReducedMotion() {
  const [prefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  return prefersReducedMotion;
}
