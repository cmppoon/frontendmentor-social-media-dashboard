import { Switch } from "@headlessui/react";
import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";
import IconFacebook from "./IconFacebook";
import IconTwitter from "./IconTwitter";
import IconInstragram from "./IconInstragram";
import IconYoutube from "./IconYoutube";
import IconUp from "./IconUp";
import IconDown from "./IconDown";

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

export default function Trends({
  lightMode,
  setLightMode,
}: {
  lightMode: boolean;
  setLightMode: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
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
    </>
  );
}
