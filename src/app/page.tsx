"use client";

import { useEffect, useState } from "react";
import Overview from "./components/Overview";
import Trends from "./components/Trends";

export default function Home() {
  const [lightMode, setLightMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("lightMode");
      if (savedMode) {
        setLightMode(JSON.parse(savedMode));
      }
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (lightMode) {
        document.body.classList.remove("dark");
      } else {
        document.body.classList.add("dark");
      }
      localStorage.setItem("lightMode", JSON.stringify(lightMode));
    }
  }, [lightMode, isMounted]);

  return (
    <main className="relative z-0 bg-white text-sm dark:bg-dark-very-dark-blue-1">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Trends lightMode={lightMode} setLightMode={setLightMode}/>
        <Overview />
      </div>
      <div className="absolute inset-0 -z-10 h-[14.5rem] w-full rounded-3xl bg-light-very-pale-blue dark:bg-dark-very-dark-blue-2"></div>
    </main>
  );
}
