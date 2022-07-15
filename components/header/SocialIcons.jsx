import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const icons = [
  ["fa-brands fa-twitter", "/"],
  ["fa-brands fa-instagram", "/"],
  ["fa-brands fa-linkedin-in", "/"],
  ["fa-brands fa-facebook-f", "/"],
];
const SocialIcons = () => {
  // handleIcon = () => {};
  return (
    <>
      <div className="text-white md:flex md:justify-around">
        {icons.map((item, idx) => {
          return (
            <FontAwesomeIcon
              key={idx}
              icon={item[0]}
              size="lg"
              href={item[1]}
              className="px-2 cursor-pointer hover:animate-bounce hover:text-purple hover:duration-1000"
            />
          );
        })}
      </div>
    </>
  );
};

export default SocialIcons;
