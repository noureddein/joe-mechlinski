import Header from "../components/header/header";
import Footer from "../components/Footer";
import RenderHead from "../components/Head";
import RenderMain from "../components/speaking/RenderMain";

const Speaking = () => {
  return (
    <>
      <RenderHead title="Speaking" />
      <Header bgColor={"bg-[#110b57]"} isTransparent={false} />
      <RenderMain />
      <Footer />
    </>
  );
};

export default Speaking;
