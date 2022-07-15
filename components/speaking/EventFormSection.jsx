import EventForm from "./event-section/EventForm";
import Header from "./event-section/Header";

const EventSection = () => {
  return (
    <section className="p-1/20 bg-dark-blue">
      <div className="flex flex-col items-center justify-around md:flex-row">
        <Header />
        <EventForm />
      </div>
    </section>
  );
};

export default EventSection;
