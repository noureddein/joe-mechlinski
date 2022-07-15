import Header from "../components/header/header";
import Hero from "../components/home/Hero";
import JoesBooks from "../components/home/joes-books/JoesBooks";
import EmblaCarousel from "../components/slider/EmblaCarousel";
import Podcasts from "../components//home/podcast/Podcasts";
import Brands from "../components/home/brands/Brands";
import RenderVideo from "../components/RenderVideo";
import { VIDEOS_SOURCES } from "../static-data";
import TwitterFrame from "../components/home/TwitterFrame";
import Footer from "../components/Footer";
import RenderHead from "../components/Head";
const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div>
      <RenderHead title={"Home"} />
      <Header bgColor={"bg-transparent"} isTransparent={true} />
      <main>
        <Hero />
        <JoesBooks />
        <EmblaCarousel slides={slides} />
        <Podcasts />
        <Brands />
        <RenderVideo
          sources={VIDEOS_SOURCES.index}
          style={styles.homeVideoStyles}
        />
        <TwitterFrame />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  homeVideoStyles: {
    container: "flex flex-row items-center justify-center w-2/3 m-auto ",
    subContainer:
      "flex flex-row items-center justify-center my-8 mx-1/20 relative md:after:content-[''] md:after:absolute md:after:bg-[url(/images/video-pattern.svg)] md:after:w-32 md:after:h-32 md:after:-bottom-16 md:after:-right-4 md:after:bg-no-repeat  md:after:bg-contain md:after:bg-zero md:after:z-0 w-full bg-gray-300",
  },
};
