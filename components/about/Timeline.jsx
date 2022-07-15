import Image from "next/image";

const TIME_LINE_CONTENT = [
  {
    year: 1995,
    imgSrc: "/images/timeline/1995.svg",
    story:
      "Grew up in East Baltimore, went to Patterson High School, won Scholar Athlete Grand Prize from the National Football Foundation and College Hall of Fame",
  },
  {
    year: 1999,
    imgSrc: "/images/timeline/1999.svg",
    story:
      "Launched first business at 19, growing it to 150 employees in 3 years while attending The Johns Hopkins Universit",
  },
  {
    year: 2001,
    imgSrc: "/images/timeline/2001.svg",
    story:
      "Co-founded enterQuest at 23 with the mission to help leaders grow regardless",
  },
  {
    year: 2002,
    imgSrc: "/images/timeline/2002.svg",
    story:
      "Co-founded the b4students Foundation to help improve the high school graduation rate in Baltimore City (100% of b4students high schoolers graduated vs 55% average graduation rate)",
  },
  {
    year: 2005,
    imgSrc: "/images/timeline/2005.svg",
    story:
      "Acquired a recruiting firm to bolt on to our management consulting services",
  },
  {
    year: 2008,
    imgSrc: "/images/timeline/2008.svg",
    story: "Hit the wall & lost $1MM during the Great Recession",
  },
  {
    year: 2012,
    imgSrc: "/images/timeline/2012.svg",
    story:
      "Released first book, Grow Regardless, and became a New York Times, USA Today, Amazon and Barnes and Noble bestseller",
  },
  {
    year: 2014,
    imgSrc: "/images/timeline/2014.svg",
    story:
      "Launched SHIFT Society as the world’s most innovative, mission-driven, invite-only membership community of entrepreneurs and executives",
  },
  {
    year: 2017,
    imgSrc: "/images/timeline/2017.svg",
    story: "Invested and became a General Partner in the Conscious Venture Lab",
  },
  {
    year: 2018,
    imgSrc: "/images/timeline/2018.svg",
    story:
      "Rebranded entreQuest to SHIFT with an evolved mission to bring more heart and humanity to the future of work; Released the next bestselling book, Shift the Work",
  },
  {
    year: 2019,
    imgSrc: "/images/timeline/2019.svg",
    story:
      "Curated the Complicated Conversations conference, with Richard Saul Wurman, founder of TED, Steven Kotler, New York Times bestselling author and Flow expert, and Chris Wilson, social justice advocate, artist and bestselling author",
  },
  {
    year: 2020,
    imgSrc: "/images/timeline/2020.svg",
    story:
      "Launched a FREE Remote Survey for 20K employees, capturing what was happening as the workforce braced itself during a global pandemic",
  },
  {
    year: 2021,
    imgSrc: "/images/timeline/2021.svg",
    story:
      "Acquired a tech platform to meet the needs of the new world of work",
  },
  {
    year: 2022,
    imgSrc: "/images/timeline/2022.svg",
    story: "The third book, Who Says, is set to release fall of 2022",
  },
];

export default function Timeline() {
  return (
    <section className="w-full px-8 mt-20 mb-20">
      {TIME_LINE_CONTENT.map((item, idx) => {
        return idx % 2 == 0 ? (
          <div key={idx} className="flex flex-wrap max-md:relative">
            {/* Left */}
            <div className="w-1/2 px-8 py-[5.5rem] max-md:py-[2.5rem] text-3xl font-semibold text-right text-black max-md:absolute max-md:-top-0 max-md:right-0 max-md:w-full ">
              {item.year}
            </div>
            {/* Right */}
            <div
              className={`relative w-1/2 px-12 pb-12 translate-y-5 max-md:w-full left-container `}
            >
              <Image src={item.imgSrc} alt="1995" width={55} height={55} />
              <p className="w-2/3 my-4 text-base font-normal leading-6 max-md:w-full">
                {item.story}
              </p>
            </div>
          </div>
        ) : (
          <div
            key={idx}
            className="flex flex-row-reverse flex-wrap max-md:relative"
          >
            {/* Left */}
            <div
              className={`w-1/2 px-8 py-[5.5rem] text-3xl font-semibold text-left text-black max-md:absolute max-md:-top-0 max-md:right-0 max-md:w-full max-md:text-right max-md:py-[2.5rem] `}
            >
              {item.year}
            </div>
            {/* Right */}
            <div
              className={`relative flex flex-col items-end w-1/2 px-12 pb-12 translate-y-5 max-md:items-start max-md:w-full right-container ${
                TIME_LINE_CONTENT.length - 1 == idx ? " last-item" : ""
              }`}
            >
              <Image src={item.imgSrc} alt="1995" width={55} height={55} />
              <p className="w-2/3 my-4 text-base font-normal leading-6 text-right max-md:w-full max-md:text-left">
                {item.story}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
