"use client";

import { useState } from "react";

export function useReducedMotion() {
  const prefersReducedMotion = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  })[0];

  return prefersReducedMotion;
}
