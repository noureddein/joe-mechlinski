import { AUDIO_CARS } from "../../../static-data";
import { useState, useEffect } from "react";

const PodcastCards = () => {
  const [isClicked, setIsClicked] = useState([false, true, false]);
  const [scale, setScale] = useState("");
  const handleCardZoom = (idx) => {
    isClicked.map((item, index) => {
      if (index == idx) {
        isClicked[index] = true;
      } else {
        isClicked[index] = false;
      }
    });
    setIsClicked([...isClicked]);
  };
  useEffect(() => {
    setScale(" md:scale-125 md:z-10 md:ease-linear md:duration-300");
  }, [isClicked]);
  return (
    <>
      <div className="relative flex flex-col py-32 px-1/20 before:content-[''] before:top-6 before:left-[calc(50%-128px)] before:w-72 before:h-20 before:bg-[url(/images/podcasts-pattern.svg)] before:bg-no-repeat before:absolute before:z-0 md:flex-row gap-8 md:gap-0 md:gap-x-3 ">
        {AUDIO_CARS.map((card, idx) => {
          return (
            <div
              key={idx}
              className={` bg-white w-full px-8 py-12 border-0.5 rounded-md shadow-md cursor-pointer border-dark-blue ${
                isClicked[idx] && scale
              } ease-linear duration-300 `}
              onClick={() => handleCardZoom(idx)}
            >
              <h5 className="pb-4 font-medium">{card.date}</h5>
              <h3 className="pb-4 text-xl font-semibold">{card.title}</h3>
              <p className="pb-4 text-base font-normal">{card.discretion}</p>
              <audio controls>
                <source src={card.audioSrc} type="audio/mp3" />
              </audio>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PodcastCards;

const oldStyle =
  " absolute w-1/2 px-8 py-12 border first:right-1/10 first:z-0 last:left-1/10 last:z-0 bg-[#FFFFFF]  even:z-10 even:left-1/4 first:w-3/5 last:w-3/5 first:top-[calc(25%+3rem)] last:top-[calc(25%+4.5rem)] shadow-md";

const cardOldStyle =
  "absolute w-1/2 px-8 py-12 border first:right-1/10 first:z-0 last:left-1/10 last:z-0 bg-[#FFFFFF]  even:z-10 even:left-1/4 first:w-3/5 last:w-3/5 first:top-[calc(25%+3rem)] last:top-[calc(25%+4.5rem)] shadow-md ";
