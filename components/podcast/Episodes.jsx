import React from "react";
import AppStoresBtn from "./AppStoresBtn";

const EPISODES = [
  {
    date: "Jan 28, 2019",
    title: "Unlocking Workplace Potential with David Hassell",
    desc: "David Hassel, Founder and CEO of 15Five, is an expert in employee engagement, culture management, and driving high performance in organizations. His company is creating a new wave of leadership and management that focuses on putting people first. ",
    audio: "/audios/audio.mp3",
  },
  {
    date: "Jan 28, 2019",
    title: "Unlocking Workplace Potential with David Hassell",
    desc: "David Hassel, Founder and CEO of 15Five, is an expert in employee engagement, culture management, and driving high performance in organizations. His company is creating a new wave of leadership and management that focuses on putting people first. ",
    audio: "/audios/audio.mp3",
  },
  {
    date: "Jan 28, 2019",
    title: "Unlocking Workplace Potential with David Hassell",
    desc: "David Hassel, Founder and CEO of 15Five, is an expert in employee engagement, culture management, and driving high performance in organizations. His company is creating a new wave of leadership and management that focuses on putting people first. ",
    audio: "/audios/audio.mp3",
  },
  {
    date: "Jan 28, 2019",
    title: "Unlocking Workplace Potential with David Hassell",
    desc: "David Hassel, Founder and CEO of 15Five, is an expert in employee engagement, culture management, and driving high performance in organizations. His company is creating a new wave of leadership and management that focuses on putting people first. ",
    audio: "/audios/audio.mp3",
  },
];

export default function Episodes() {
  return (
    <section className=" relative bg-dark-blue before:content-[''] before:absolute before:-top-9 before:left-0 before:bg-[url(/images/latest-episodes-pattern.svg)] before:h-44 before:w-44 before:bg-contain before:bg-no-repeat after:content-[''] after:absolute after:bottom-1/10 after:right-1/20 after:bg-[url(/images/all-episodes-pattern.svg)] after:w-20 after:h-32 after:bg-no-repeat after:bg-contain">
      <div className="px-4 py-12">
        <h1 className="my-8 text-4xl font-bold text-center text-white font-poppins">
          All Episodes
        </h1>
        <div className="flex flex-col flex-wrap justify-center gap-4 mt-32 font-poppins md:flex-row ">
          {EPISODES.map((episode, idx) => {
            return (
              <div key={idx} className="p-8 bg-white rounded md:w-9/20">
                <h5 className="mb-3 text-xs font-medium">{episode.date}</h5>
                <h3 className="mb-3 text-lg font-semibold leading-7 ">
                  {episode.title}
                </h3>
                <p className="mb-6 text-xs">{episode.desc}</p>
                <audio controls>
                  <source src={episode.audio} type="audio/mp3" />
                </audio>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row flex-wrap justify-center mt-11">
          <AppStoresBtn />
        </div>
      </div>
    </section>
  );
}
