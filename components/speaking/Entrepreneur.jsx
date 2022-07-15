import Image from "next/image";

const Entrepreneur = () => {
  return (
    <>
      <section className=" relative flex flex-col py-20 md:flex-row bg-dark-blue md:px-1/20 after:content-[''] after:absolute after:w-52 after:h-64 after:bg-[url(/images/joe-intro-pattern.svg)] after:bg-no-repeat after:bg-contain after:-right-12 after:-bottom-40">
        <div className="mx-auto">
          <span className="w-1/2">
            <Image
              src="/images/john-img.svg"
              alt="John with speaker image"
              width={300}
              height={300}
              className="w-1/2"
            />
          </span>
        </div>
        <div className="w-[80%] mx-auto md:w-2/3 md:m-auto">
          <h3 className="mb-8 text-[36px] md:text-[41px] font-bold text-white font-poppins">
            Entrepreneur, speaker, author, community advocate
          </h3>
          <p className="pb-6 text-base font-normal text-white font-poppins">
            To transform the purpose of business and revolutionize workforce
            engagement, Joe founded SHIFT, a collective of businesses spanning
            consulting, executive membership, and venture capitalism. SHIFT has
            offices in Washington, D.C., Boston, Seattle, and Philadelphia. All
            focus on one idea: Better you. Better us. Better all.
          </p>
          <p className="pb-6 text-base font-normal text-white font-poppins">
            Always embarking on new adventures, Joe Mechlinski launched his
            podcast, Shift Happens, which features inspiring icons and
            influencer such as New York Times bestselling author Dan Pink, and
            three-time New York Times bestselling author Tucker Max.
          </p>
          <div className="flex">
            <p className="pb-6 text-base font-normal text-white font-poppins">
              One of his biggest passions remains giving back, especially in
              Baltimore, where he got his start.
            </p>
            <Image
              src="/images/Joe-signature.svg"
              alt="John signature"
              width={150}
              height={150}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Entrepreneur;
