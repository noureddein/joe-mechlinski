const SpeakingEngagements = () => {
  return (
    <section className=" mt-36 px-1/20">
      <div className="flex flex-col items-center justify-center pb-12">
        <h2 className="py-8 text-center text-8xl md:text-9xl font-northCoastItalic text-purple">
          Speaking Engagements
        </h2>
        <div className="flex flex-col items-center justify-center pb-8 text-center md:w-2/3">
          <p className="pb-8 text-xl font-bold font-poppins">
            Get ready to shift your perspective on purpose.
          </p>
          <p className="text-xl font-bold font-poppins">
            A master of a beginner{"'"}s mindset, Joe will empower your audience
            to wake-up to what’s possible and live a life of meaning and
            purpose.
          </p>
        </div>
        <a
          href="#"
          className="rounded-sm text-white font-normal text-base bg-[#5541D9] py-4 px-8 mb-12 mt-6"
        >
          Book Joe
        </a>
      </div>
    </section>
  );
};
export default SpeakingEngagements;
