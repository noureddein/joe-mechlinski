import RenderHead from "../components/Head";
import Header from "../components/header/header";
import Footer from "../components/Footer";
import Index from "../components/contact";

export default function Contact() {
  return (
    <>
      <RenderHead title="Contact" />
      <Header bgColor={"bg-[#110b57]"} isTransparent={false} />
      <Index />
      <Footer />
    </>
  );
}
