import Header from "../components/header/header";
import RenderHead from "../components/Head";
import Index from "../components/podcast";
import Footer from "../components/Footer";

const Podcast = () => {
  return (
    <>
      <RenderHead title="Podcast" />
      <Header bgColor={"bg-[#110b57]"} isTransparent={false} />
      <Index />
      <Footer />
    </>
  );
};

export default Podcast;
