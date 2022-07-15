import SocialIcons from "./header/SocialIcons";

const Footer = () => {
  return (
    <section className="bg-[#110b57] flex flex-col px-1/20 items-center justify-center py-4 sm:flex-row sm:justify-between border-t-0.5 border-purple">
      <div className="py-2">
        <p className="font-light text-white font-poppins">
          Copyright © 2022 Joe Mechlinski
        </p>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Footer;
