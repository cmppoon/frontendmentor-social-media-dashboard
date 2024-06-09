"use client";

import clsx from "clsx";
import IconUp from "./components/IconUp";
import IconDown from "./components/IconDown";
import IconFacebook from "./components/IconFacebook";
import IconTwitter from "./components/IconTwitter";
import IconInstragram from "./components/IconInstragram";
import IconYoutube from "./components/IconYoutube";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

const trends = [
  {
    account: "@nathanf",
    followers: "1987",
    description: "FOLLOWERS",
    type: "facebook",
    today: { total: "12", isUp: true },
  },
  {
    account: "@nathanf",
    followers: "1044",
    description: "FOLLOWERS",
    type: "twitter",
    today: { total: "99", isUp: true },
  },
  {
    account: "@realnathanf",
    followers: "11k",
    description: "FOLLOWERS",
    type: "instragram",
    today: { total: "1099", isUp: true },
  },
  {
    account: "Nathan F.",
    followers: "8239",
    description: "SUBSCRIBERS",
    type: "youtube",
    today: { total: "144", isUp: false },
  },
];

const overviews = [
  {
    title: "Page Views",
    amount: "87",
    change: { amount: "3%", isUp: true },
    type: "facebook",
  },
  {
    title: "Likes",
    amount: "52",
    change: { amount: "2%", isUp: false },
    type: "facebook",
  },
  {
    title: "Likes",
    amount: "5462",
    change: { amount: "2257%", isUp: true },
    type: "instragram",
  },
  {
    title: "Profile Views",
    amount: "52k",
    change: { amount: "1375%", isUp: true },
    type: "instragram",
  },
  {
    title: "Retweets",
    amount: "117",
    change: { amount: "303%", isUp: true },
    type: "twitter",
  },
  {
    title: "Likes",
    amount: "507",
    change: { amount: "553%", isUp: true },
    type: "twitter",
  },
  {
    title: "Likes",
    amount: "107",
    change: { amount: "19%", isUp: false },
    type: "youtube",
  },
  {
    title: "Total Views",
    amount: "1407",
    change: { amount: "12%", isUp: false },
    type: "youtube",
  },
];
export default function Home() {
  const [lightMode, setLightMode] = useState(() => {
    const savedMode = localStorage.getItem("lightMode");
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (lightMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
    localStorage.setItem("lightMode", JSON.stringify(lightMode));
  }, [lightMode]);

  return (
    <main className="bg-white px-6 py-12 text-sm dark:bg-dark-very-dark-blue-1">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold text-light-very-dark-blue dark:text-white">
          Social Media Dashboard
        </h1>
        <div className="sm:mb-8 sm:flex sm:items-center sm:justify-between">
          <h2 className="font-bold text-light-dark-grayish-blue dark:text-dark-desaturated-blue">
            Total Followers: 23,004
          </h2>
          <div className="hidden sm:flex sm:items-center sm:justify-end sm:gap-x-4">
            <p className="font-bold text-light-dark-grayish-blue dark:text-dark-desaturated-blue">
              Dark Mode
            </p>
            <Switch
              checked={lightMode}
              onChange={setLightMode}
              className={clsx(
                lightMode
                  ? "bg-light-toggle"
                  : "bg-gradient-to-r from-dark-toggle-from to-dark-toggle-to",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none",
              )}
            >
              <span className="sr-only">Switch Theme</span>
              <span
                aria-hidden="true"
                className={clsx(
                  lightMode ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-dark-very-dark-blue-1",
                )}
              />
            </Switch>
          </div>
        </div>
        <div className="mt-8 border-b-[0.5px] border-light-dark-grayish-blue sm:hidden dark:border-dark-desaturated-blue"></div>
        <div className="mb-8 mt-8 flex justify-between sm:hidden">
          <p className="font-bold text-light-dark-grayish-blue dark:text-dark-desaturated-blue">
            Dark Mode
          </p>
          <Switch
            checked={lightMode}
            onChange={setLightMode}
            className={clsx(
              lightMode
                ? "bg-light-toggle"
                : "bg-gradient-to-r from-dark-toggle-from to-dark-toggle-to",
              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none",
            )}
          >
            <span className="sr-only">Switch Theme</span>
            <span
              aria-hidden="true"
              className={clsx(
                lightMode ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-dark-very-dark-blue-1",
              )}
            />
          </Switch>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          {trends.map((trend, idx) => (
            <div
              key={idx}
              className="relative rounded-sm bg-light-light-grayish-blue text-sm dark:bg-dark-dark-desaturated-blue"
            >
              <div
                className={clsx(
                  "absolute h-1 w-full rounded-t-sm",
                  trend.type === "facebook" && "bg-facebook",
                  trend.type === "twitter" && "bg-twitter",
                  trend.type === "instragram" &&
                    "bg-gradient-to-r from-instragram-from to-instragram-to",
                  trend.type === "youtube" && "bg-youtube",
                )}
              ></div>
              <div className="flex flex-col items-center gap-y-6 p-6">
                <div className="flex gap-x-2 font-bold text-light-dark-grayish-blue dark:text-dark-desaturated-blue">
                  {trend.type === "facebook" && <IconFacebook />}
                  {trend.type === "twitter" && <IconTwitter />}
                  {trend.type === "instragram" && <IconInstragram />}
                  {trend.type === "youtube" && <IconYoutube />}
                  <span>{trend.account}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-light-very-dark-blue dark:text-white">
                    {trend.followers}
                  </div>
                  <div className="tracking-[0.2em] text-light-dark-grayish-blue dark:text-dark-desaturated-blue">
                    {trend.description}
                  </div>
                </div>
                <div
                  className={clsx(
                    "justtify-center flex items-center gap-x-1 font-bold",
                    trend.today.isUp ? "text-lime-green" : "text-bright-red",
                  )}
                >
                  {trend.today.isUp ? <IconUp /> : <IconDown />}
                  <span>{trend.today.total} Today</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="my-8 text-2xl font-bold text-light-dark-grayish-blue dark:text-white">
          Overview - Today
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          {overviews.map((overview, idx) => (
            <div
              key={idx}
              className="rounded-sm bg-light-light-grayish-blue p-6 dark:bg-dark-dark-desaturated-blue"
            >
              <div className="flex items-center justify-between font-bold text-light-dark-grayish-blue dark:text-dark-desaturated-blue">
                <div>{overview.title}</div>
                {overview.type == "facebook" && <IconFacebook />}
                {overview.type == "twitter" && <IconTwitter />}
                {overview.type == "instragram" && <IconInstragram />}
                {overview.type == "youtube" && <IconYoutube />}
              </div>
              <div className="mt-8 flex items-baseline justify-between">
                <div className="text-3xl font-bold text-light-very-dark-blue dark:text-white">
                  {overview.amount}
                </div>
                <div className="justtify-center flex items-center gap-x-1 font-bold">
                  {overview.change.isUp ? <IconUp /> : <IconDown />}
                  <span
                    className={clsx(
                      overview.change.isUp
                        ? "text-lime-green"
                        : "text-bright-red",
                    )}
                  >
                    {overview.change.amount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
