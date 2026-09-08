import { useEffect, useState, useRef } from "react";

/**
 * useActiveSection
 * Uses IntersectionObserver to detect which section is currently in view.
 * Returns the id of the active section.
 *
 * @param {string[]} sectionIds — array of section element IDs to watch
 * @param {number}   threshold  — visibility threshold (0–1)
 */
export function useActiveSection(sectionIds, threshold = 0.35) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");
  const observerRef = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const visibilityMap = new Map();

    const getMostVisible = () => {
      let maxRatio = 0;
      let activeId = sectionIds[0] ?? "";
      visibilityMap.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          activeId = id;
        }
      });
      return activeId;
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });
        setActiveSection(getMostVisible());
      },
      {
        threshold: [0, 0.1, 0.25, 0.35, 0.5, 0.75, 1.0],
        rootMargin: "-80px 0px -20% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [sectionIds.join(",")]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeSection;
}
