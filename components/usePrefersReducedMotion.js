"use client";

import { useEffect, useState } from 'react';

// SSR-safe reduced-motion detection: server and first client render both use
// `false` to avoid hydration mismatches, then the real preference is applied.
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
