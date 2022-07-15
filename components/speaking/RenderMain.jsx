import SpeakingEngagements from "./SpeakingEngagements";
import Entrepreneur from "./Entrepreneur";
import WatchJoeSpeak from "./WatchJoeSpeak";
import EventFormSection from "./EventFormSection";

const RenderMain = () => {
  return (
    <main className="overflow-hidden ">
      <SpeakingEngagements />
      <Entrepreneur />
      <WatchJoeSpeak />
      <EventFormSection />
    </main>
  );
};
export default RenderMain;
