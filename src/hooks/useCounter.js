import { useEffect, useRef, useState } from "react";

/**
 * useCounter
 * Animates a number from 0 to `target` when the element enters the viewport.
 * Fires only once. Uses requestAnimationFrame for smooth counting.
 *
 * @param {number}  target    — final value to count to
 * @param {number}  duration  — animation duration in ms (default: 1800)
 * @param {boolean} isText    — if true, skip counting and just return the target directly
 * @returns {{ ref, displayValue }}
 */
export function useCounter(target, duration = 1800, isText = false) {
  const [displayValue, setDisplayValue] = useState(isText ? target : 0);
  const ref = useRef(null);
  const animatedRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    if (isText) {
      setDisplayValue(target);
      return;
    }

    const numericTarget = typeof target === "number" ? target : parseInt(target, 10);
    if (isNaN(numericTarget)) {
      setDisplayValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numericTarget);
            setDisplayValue(current);

            if (progress < 1) {
              rafRef.current = requestAnimationFrame(tick);
            }
          };

          rafRef.current = requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, isText]);

  return { ref, displayValue };
}
