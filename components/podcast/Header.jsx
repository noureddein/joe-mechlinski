import AppStoresBtn from "./AppStoresBtn";

export default function Header() {
  return (
    <section className=" mt-36 px-1/20">
      <div className="flex flex-col items-center justify-center pb-12">
        <h2 className="py-8 text-center text-8xl md:text-9xl font-northCoastItalic text-purple">
          Shiff Happens Podcast
        </h2>
        <div className="flex flex-col items-center justify-center pb-8 text-center md:w-2/3">
          <p className="pb-8 text-xl font-bold font-poppins">
            Joe Mechlinski talks productivity, politics, climate change,
            work-life balance, being mortal and everything in between on the
            Shift Happens podcast.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center mt-11">
          <AppStoresBtn />
        </div>
      </div>
    </section>
  );
}
