import Hero from "./Hero";
import AboutJoe from "./AboutJoe";
import Timeline from "./Timeline";
import RenderCounters from "./totals-section";

const RenderMain = () => {
  return (
    <main>
      <Hero />
      <AboutJoe />
      <Timeline />
      <RenderCounters />
    </main>
  );
};

export default RenderMain;
