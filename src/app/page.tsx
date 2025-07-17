"use client";

import CookieCard from "./components/cookie";
import Landing from "./components/landing";
import React, { useRef, useEffect, useState } from "react";

function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
  const threshold = isMobile ? 0.01 : 0.10; // Lower threshold for mobile

  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    },
    { threshold }
  );
  observer.observe(node);
  return () => observer.disconnect();
}, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Landing />
      <RevealOnScroll>
        <div id="cookies" className="mx-[1rem] md:mx-[3rem] mt-20 scroll-mt-8">
          <h2 className="my-8 text-6xl text-center font-medium" style={{ fontFamily: "var(--font-oswald)" }}>Cookies</h2>
          <p className="my-8 text-xl text-center font-medium" style={{ fontFamily: "var(--font-assistant)" }}>Because you deserve a little treat. Or two.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-3">
            <CookieCard imageUrl="/images/cookies/sample-cookie-stack-lav.png" name="Midnight S'more" price="Rs. 180" />
            <CookieCard imageUrl="/images/cookies/sample-cookie-stack-lav.png" name="Midnight S'more" price="Rs. 180" />
            <CookieCard imageUrl="/images/cookies/sample-cookie-stack-lav.png" name="Midnight S'more" price="Rs. 180" />
            <CookieCard imageUrl="/images/cookies/sample-cookie-stack-lav.png" name="Midnight S'more" price="Rs. 180" />
            <CookieCard imageUrl="/images/cookies/sample-cookie-stack-lav.png" name="Midnight S'more" price="Rs. 180" />
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}