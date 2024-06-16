import React from 'react'
import IconFacebook from './IconFacebook';
import IconTwitter from './IconTwitter';
import IconInstragram from './IconInstragram';
import IconYoutube from './IconYoutube';
import IconUp from './IconUp';
import IconDown from './IconDown';
import clsx from 'clsx';

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

export default function Overview() {
  return (
    <>
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
    </>
  );
}
