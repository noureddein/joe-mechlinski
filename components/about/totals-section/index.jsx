import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const Element = dynamic(() => import("./Element"), { ssr: false });

const DATA = [
  {
    title: "Worked with",
    total: 600,
    sign: " +",
    description: "organizations",
  },
  {
    title: "Trained",
    total: 10,
    sign: " K+",
    description: "leaders on management techniques",
  },

  {
    title: "Won",
    total: 9,
    sign: " x",
    description:
      "Best Places to Work: 5X Baltimore Business Journal & 4X Inc. Magazine",
  },
  {
    title: "Invested in",
    total: 20,
    sign: " +",
    description:
      "socially conscious startups, donating and investing more than $1M back to Baltimore City",
  },
];

export default function Index() {
  return (
    <section>
      <div>
        <div className="flex flex-col justify-around pb-8 mx-8 my-8 md:flex-row gap-x-3 ">
          {DATA.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center flex-wrap px-4   py-4 border-b-3 md:border-b-0  md:border-r-3 md:w-[25%] md:last:border-r-0 last:border-b-0 my-3"
              >
                <Element
                  title={item.title}
                  description={item.description}
                  total={item.total}
                  sign={item.sign}
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-row items-center justify-center mb-12">
          <Link href="/contact">
            <a className=" rounded px-10 py-4 bg-[#5541d9] text-white font-poppins cursor-pointer font-semibold text-lg">
              Contact Joe
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
