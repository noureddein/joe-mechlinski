import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons.js";
import useEmblaCarousel from "embla-carousel-react";
import { REVIEWS } from "../../static-data";
import Image from "next/image";

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla ">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {REVIEWS.map((comment, idx) => (
              <div className="embla__slide" key={idx}>
                <div className="embla__slide__inner">
                  <div>
                    <h3 className="pt-16 pb-8 text-3xl font-bold text-center text-white font-poppins">
                      {comment.title}
                    </h3>
                    <p className="text-xs font-normal text-center text-white font-poppins">
                      {comment.comment}
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-center my-8">
                    <div className="mr-4 ">
                      <Image
                        alt="Author comment"
                        src={comment.author.img}
                        width={78}
                        height={78}
                        className="w-12 h-12 rounded-full "
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white font-poppins">
                        {comment.author.name}
                      </h3>
                      <h4 className="text-[#5541D9]">
                        {comment.author.position}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      {/* <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div> */}
    </>
  );
};

export default EmblaCarousel;
