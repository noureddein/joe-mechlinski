import RenderVideo from "../RenderVideo";
const JoesVideosSpeaks = [
  [
    "https://player.vimeo.com/video/277350654?h=268489c838",
    "https://player.vimeo.com/video/277350654?h=268489c838",
  ],
  [
    "https://player.vimeo.com/video/277350654?h=268489c838",
    "https://player.vimeo.com/video/277350654?h=268489c838",
  ],
];

const WatchJoeSpeak = () => {
  return (
    <section className=" my-36">
      <div className=" px-1/20">
        <div className="flex flex-col items-center ">
          <h2 className=" relative text-5xl font-bold text-center text-black font-poppins before:content-[''] before:absolute before:-top-24 before:-left-8 md:before:-top-32 md:before:-left-36 before:bg-[url('/images/footer.svg')] before:w-40 before:h-40 md:before:bg-cover before:bg-contain before:bg-no-repeat">
            Watch Joe Speak
          </h2>
          <h4 className="py-8 text-base text-center text-black">
            Explore CadreCon, Sig, and TedX (coming soon!)
          </h4>
          <a
            href="https://vimeo.com/shiftthework"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 text-white rounded-sm bg-purple font-poppins "
          >
            View More
          </a>
        </div>
        <RenderVideo sources={JoesVideosSpeaks[0]} style={VideosStyle} />
        <RenderVideo sources={JoesVideosSpeaks[1]} style={VideosStyle} />
      </div>
    </section>
  );
};
const VideosStyle = {
  container:
    "flex  flex-col mt-20 md:h-80 md:flex-row justify-center items-center",
  subContainer: "md:w-1/2 h-80 mb-8",
};
export default WatchJoeSpeak;
