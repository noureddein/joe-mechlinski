const BRANDS_NAMES = [
  "AMCP",
  "ExLabs",
  "john",
  "kaiser-permanente",
  "microsoft",
  "SBD",
  "taxslayer",
];
import Image from "next/image";

const Brands = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between my-8 mx-1/20">
        {BRANDS_NAMES.map((brand, idx) => {
          return (
            <span key={idx} className="md:w-[calc(90%/7)] w-1/2 px-4">
              <Image
                src={`/images/logos/${brand}.svg`}
                width="150"
                height="100"
                layout="responsive"
                alt="Brand"
                className="w-1/2 p-4 contrast-20"
              />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Brands;
