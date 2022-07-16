import Logo from "./logo";
import NavigationMenu from "./NavigationMenu";
import { useState, useEffect } from "react";

const Header = ({ bgColor, isTransparent }) => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [navBarBg, setNavBarBg] = useState(bgColor);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  // Effects
  useEffect(() => {
    if (!isTransparent) return;
    if (clientWindowHeight > 10) {
      setNavBarBg("bg-[#110b57]");
    } else {
      setNavBarBg("bg-transparent");
    }
    console.log(";-----");
  }, [clientWindowHeight, isTransparent]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`fixed top-0 left-0 z-30 w-full h-32 text-white ${navBarBg} ease-in-out duration-300 `}
    >
      <nav className="box-border relative flex items-center justify-between py-4 m-auto px-1/20">
        <Logo />
        <NavigationMenu />
      </nav>
    </header>
  );
};

export default Header;
