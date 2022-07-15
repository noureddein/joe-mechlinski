import Image from "next/image";
import GetUpdateForm from "./GetUpdateForm";
import { BOOKS } from "../../../static-data";

const JoesBooks = () => {
  const { section, title, booksContainer } = style;
  return (
    <>
      <section className={section}>
        <div className="my-12 md:mx-24">
          <div>
            <h3 className={title}>Joe{"'"}s Books</h3>
          </div>
          <div className={booksContainer}>
            {BOOKS.map((book, idx) => {
              return (
                <div key={idx} className="flex flex-col items-center p-4 ">
                  <div>
                    <Image
                      src={book.img}
                      width={128}
                      height={190}
                      alt={book.title}
                    />
                  </div>
                  <div className="flex flex-col items-center my-8">
                    <h3 className=" text-lg font-bold text-[#000000]">
                      {book.title}
                    </h3>
                    <h4 className=" text-lg font-bold text-[#5541D9]">
                      {book.subTitle}
                    </h4>
                  </div>
                  <div className="flex flex-row ">
                    {book.rating.map((rate, idx) => {
                      return (
                        <div
                          key={idx}
                          className=" text-sm relative flex flex-col items-center justify-center px-2 md:p-4 first:before:absolute first:before:content-[''] first:before:h-10  first:before:right-0 first:before:bg-slate-500 first:before:w-px even:before:absolute even:before:content-['']
                          even:before:h-10
                          even:before:right-0
                          even:before:bg-slate-500
                          even:before:w-px"
                        >
                          <p className="font-normal text-[#000000]">
                            {rate[1]}
                          </p>
                          <p className=" font-semibold text-[#5541d9]">
                            {rate[0]}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <p className="w-11/12 m-0 mx-auto my-8 text-sm font-normal text-center">
                      {book.desecration}
                      <a
                        href="#"
                        target="_blank"
                        className="text-sm font-semibold text-black font-poppins"
                      >
                        {" "}
                        read more
                      </a>
                    </p>
                  </div>
                  <button className=" bg-[#5541D9] h-10 w-2/6 my-auto text-white rounded-md mt-8">
                    Buy now
                  </button>
                </div>
              );
            })}
          </div>
          <GetUpdateForm />
        </div>
      </section>
    </>
  );
};

const style = {
  section:
    " relative before:bg-[url('../public/images/pattern.svg')] before:absolute before:w-32 before:h-64 before:-top-28 before:left-0 before:content-[''] before:bg-contain before:bg-no-repeat font-poppins after:content-[''] after:absolute after:-bottom-24 after:right-0 after:bg-[url(/images/slider-pattern.svg)] after:w-28 after:h-28 after:bg-no-repeat after:z-20 after:bg-contain md:after:w-40 md:after:h-40 ",
  title:
    "relative text-2xl text-center font-poppins before:absolute before:bg-[url('../public/images/header.svg')] before:-bottom-5 before:content-[''] before:w-64 before:h-10   before:bg-no-repeat before:bg-contain font-bold ",
  booksContainer:
    "relative flex flex-col md:flex-row mt-12 justify-evenly md:before:absolute md:before:content-[''] md:before:w-px md:before:h-80 md:before:bg-slate-500 md:before:top-10",
};

export default JoesBooks;
