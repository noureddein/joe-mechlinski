import Image from "next/image";
import { ABOUT_JOE } from "../../static-data";

export default function AboutJoe() {
  return (
    <section className="mt-12 bg-dark-blue relative before:content-[''] before:absolute before:-top-16 before:right-0 before:w-40 before:h-44 before:bg-[url(/images/about-pattern.svg)] before:bg-cover before:bg-no-repeat before:z-10 after:content-[''] after:absolute after:top-[calc(50%-4rem)] after:left-[calc(50%-4rem)] after:w-36 after:h-64 lg:after:bg-[url(/images/all-episodes-pattern.svg)] after:bg-contain after:bg-no-repeat after:z-20">
      {ABOUT_JOE.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col lg:flex-row lg:even:flex-row-reverse"
          >
            <div className="lg:w-1/2 ">
              <Image
                src={item.img}
                alt="Joe Speaking"
                width={100}
                height={70}
                layout="responsive"
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
            <div className="px-8 py-12 text-white lg:p-16 lg:w-1/2 font-poppins">
              <h3 className="pb-6 text-4xl font-bold leading-10 text-center lg:text-left">
                {item?.title}
              </h3>
              {item.description.map((p, idx) => {
                return (
                  <p key={idx} className="z-10 pb-5 text-justify md:text-left">
                    {p}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
      {/* <span className="relative  before:absolute before:w-72 before:h-72 before:bg-[url(/images/latest-episodes-pattern.svg)] before:content-[''] before:top-0 before:left-0"></span> */}
    </section>
  );
}
