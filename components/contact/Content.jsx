import Cards from "./Cards";
import SendMessageForm from "./SendMessageForm";

export default function Content() {
  return (
    <section className="">
      <div className=" bg-dark-blue md:h-[20rem]">
        <Cards />
      </div>
      <SendMessageForm />
    </section>
  );
}
