import Image from "next/image";

const Hero = () => {
  return (
    <section className=" mt-52">
      <div className="flex flex-col items-center justify-center px-1/20">
        <h2 className=" relative text-center text-8xl md:text-9xl font-northCoastItalic text-purple after:content-[''] after:absolute after:bg-[url('/images/header.svg')] after:top-1/3 after:left-0 after:w-full after:h-40 after:bg-contain after:bg-no-repeat">
          Make Your Mark
        </h2>
        <h4 className="mt-4 text-xl font-bold text-center font-poppins">
          Social entrepreneur, impact investor, and bestselling author.
        </h4>
        <span className="mt-8">
          <Image
            src="/images/Joe-signature-black.svg"
            alt="signature"
            width={150}
            height={150}
          />
        </span>
      </div>
    </section>
  );
};

export default Hero;
