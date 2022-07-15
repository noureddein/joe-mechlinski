import React from "react";

const CARDS = [
  {
    title: "Press",
    desc: "For media inquiries or interviews, please email joe@shiftthework.com. We promise to respond within a few hours.",
  },
  {
    title: "Speaking",
    desc: "For inquiries about Joe’s speaking engagements, please fill out the form below to contact Joe directly.",
  },
  {
    title: "Readers",
    desc: "Joe is always interested in hearing from readers. To reach him directly, please use the form below instead of email. ",
  },
];

export default function Cards() {
  return (
    <div className="flex flex-col justify-center gap-8 px-[10%] md:flex-row pb-32">
      {CARDS.map((card, idx) => {
        return (
          <div
            key={idx}
            className="font-poppins md:w-[28%] -mt-16 bg-[#fff] px-6 py-12 shadow-2xl border-0.5 border-[#110B57]  rounded-sm mb-12"
          >
            <h4 className="pb-3 text-xl font-bold text-center">{card.title}</h4>
            <p className="text-base font-normal text-center">{card.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
