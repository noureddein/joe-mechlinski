import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
const options = { loop: false };
const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            src="/images/home-header-bg.png"
            alt="test"
            width={1000}
            height={700}
          />
        </div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
