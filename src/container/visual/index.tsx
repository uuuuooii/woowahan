import { useState, useRef, useEffect } from "react";
import { VisualImage } from "../../presenter/main/visualImg";
import * as V from "./styled";

const Visual = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = VisualImage.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  const autoScroll = true;
  let slideInterval: string | number | NodeJS.Timeout | undefined;
  let intervalTime = 5000;

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      <section>
        <V.Article>
          {VisualImage.map((item, index) => {
            return (
              <>
                {index === currentSlide && (
                  <V.Picture currentSlide={currentSlide} key={index}>
                    <img src={item.images} alt="image" />
                  </V.Picture>
                )}
              </>
            );
          })}
        </V.Article>
      </section>
      <button onClick={prevSlide}> {"<"} </button>
      <button onClick={nextSlide}> {">"} </button>
    </>
  );
};

export default Visual;
function handleSlider(count: number) {
  throw new Error("Function not imple <button>옆</button>mented.");
}
