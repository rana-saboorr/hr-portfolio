import { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import OfflinePage from "./components/OfflinePage";

export default function App() {
  const dark = true;
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" && typeof navigator.onLine === "boolean"
      ? navigator.onLine
      : true
  );
  const [viewCached, setViewCached] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = "#000000";

    const handleOnline = () => {
      setIsOnline(true);
      setViewCached(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Show dedicated offline screen ONLY when user is offline (unless they choose to view cached content)
  if (!isOnline && !viewCached) {
    return <OfflinePage onContinueToCached={() => setViewCached(true)} />;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.06,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.6,
        syncTouch: true,
      }}
    >
      <div className="dark bg-[#000000] text-white min-h-screen selection:bg-red-900/60 selection:text-red-200">
        {/* Subtle scroll progress indicator */}
        <ScrollProgress />

        {/* Seamless full page scroll content without header */}
        <main id="main-content">
          <Hero dark={dark} />
          <About dark={dark} />
          <Experience dark={dark} />
          <Education dark={dark} />
          <Skills dark={dark} />
          <Services dark={dark} />
          <Contact dark={dark} />
        </main>

        {/* Footer */}
        <Footer dark={dark} />
      </div>
    </ReactLenis>
  );
}
