const PODCASTS_STYLES =
  "rounded-sm text-white font-semibold text-xs bg-[#5541D9] py-2 px-3 mb-12 hover:bg-dark-blue mx-4";
const PODCASTS_LINKS = [
  {
    link: "https://podcasts.apple.com/us/podcast/shift-happens/id1352405457?mt=2",
    content: "Apple Podcasts",
  },
  {
    link: "https://music.youtube.com/googleplaymusic#/ps/Iabk24zt2l4tqbmiaakcmkbfj5m",
    content: "Google Play",
  },
  {
    link: "https://open.spotify.com/show/3iYKfjYOKM4Gaf9BvS60ng",
    content: "Spotify",
  },
];

import React from "react";

export default function AppStoresBtn() {
  return (
    <>
      {PODCASTS_LINKS.map((item, idx) => {
        return (
          <a
            href={item.link}
            target="_blank"
            className={PODCASTS_STYLES}
            rel="noreferrer"
            key={idx}
          >
            {item.content}
          </a>
        );
      })}
    </>
  );
}
