import Link from "next/link";
const Hero = () => {
  const { section, _container, h1, p, button } = style;
  return (
    <>
      <section className={section + " justify-center"}>
        <div className={_container}>
          <h1 className={h1}>Joe Mechlinski</h1>
          <p className={p}>
            “20+ years of life and business experience taught Joe one lesson:
            it’s time to question everything and wake-up! No one knows you
            better than you. No one is here to save you. Your voice and vote
            matters. Use it. The time is now.”
          </p>
          <Link href="/">
            <a className={button}>Book Joe</a>
          </Link>
        </div>
      </section>
    </>
  );
};

const style = {
  section:
    "h-screen bg-[url('/images/home-header-bg.png')] bg-cover flex bg-right",
  _container:
    " flex flex-col items-center justify-center md:items-start md:ml-1/20",
  h1: "text-white text-7xl font-northCoastItalic w-2/3 md:text-9xl",
  p: "text-white text-1xl font-poppins my-8 w-2/3 ",
  button: "bg-[#5541D9] py-4 text-white rounded px-8",
};

export default Hero;
