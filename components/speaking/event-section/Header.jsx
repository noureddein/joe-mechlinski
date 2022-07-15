import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-white font-poppins md:w-1/3">
        <h2 className="pb-12 text-4xl font-semibold text-left">
          Want Joe to Speak at Your Next Event?
        </h2>
        <p className="text-base font-normal font-poppins">
          Fill out our form to get in touch and get more information on
          scheduling.
        </p>
        <span className="w-2/3 mx-auto my-4 md:mt-0 md:w-full">
          <Image
            src="/images/form-pattern.svg"
            alt="form-pattern"
            width={200}
            height={70}
            layout="responsive"
            priority={true}
          />
        </span>
      </div>
    </>
  );
};

export default Header;
