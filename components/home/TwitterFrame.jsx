import { useEffect, useState } from "react";
import Script from "next/script";
const TwitterFrame = () => {
  const [iframeEle, setIframeEle] = useState(null);

  return (
    <>
      <section className="twitter-sec flex flex-col mt-20 items-center justify-center   bg-[#110b57]">
        <div className="pt-16 md:w-1/2 loadIframe">
          <a
            className="twitter-timeline"
            data-height="500"
            data-theme="light"
            href="https://twitter.com/joemechlinski?ref_src=twsrc%5Etfw"
          >
            Tweets by joemechlinski
          </a>
          <iframe
            id="twitter-widget-0"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            className="twitter-timeline twitter-timeline-rendered"
            data-widget-id="profile:joemechlinski"
            title="Twitter Timeline"
          ></iframe>
          <Script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
            strategy="lazyOnload"
          ></Script>
        </div>
        <a
          href="https://twitter.com/joemechlinski?ref_src=twsrc%5Etfw"
          className="text-white font-normal text-base bg-[#5541D9] py-4 px-8 -mt-12 mb-12"
        >
          Follow Along
        </a>
      </section>
    </>
  );
};

export default TwitterFrame;
