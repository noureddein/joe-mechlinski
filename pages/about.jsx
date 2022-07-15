import RenderHead from "../components/Head";
import Header from "../components/header/header";
import Footer from "../components/Footer";
import RenderMain from "../components/about/RenderMain";

const About = () => {
  return (
    <>
      <RenderHead title="About" />
      <Header bgColor={"bg-[#110b57]"} isTransparent={false} />
      <RenderMain />
      <Footer />
    </>
  );
};
export default About;
