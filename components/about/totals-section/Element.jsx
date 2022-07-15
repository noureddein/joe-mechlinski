import { useEffect, useRef, useMemo, useState, useCallback } from "react";

const PARAGRAPH_STYLES = "text-lg font-semibold font-poppins";

export default function Element({ title, total, sign, description }) {
  const countRef = useRef();
  let isInView = useIsInViewport(countRef);

  const updateCounter = () => {
    let c = +countRef.current?.innerText;
    const increment = Math.ceil(total / 50);
    if (c < total) {
      countRef.current.innerText = `${increment + c}`;
      setTimeout(updateCounter, 100);
    } else {
      countRef.current.innerText = total;
    }
  };

  if (isInView) {
    updateCounter();
  }

  return (
    <>
      <h3 className={PARAGRAPH_STYLES}>{title}</h3>
      <p className="font-normal  font-northCoastItalic text-8xl text-[#5541D9]">
        <span ref={countRef}>0</span>
        {sign}
      </p>
      <p className={PARAGRAPH_STYLES + " text-center"}>{description}</p>
    </>
  );
}

// Check if the Counter element is in the viewport
function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
