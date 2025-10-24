import React, { useRef } from "react";

const CarouselComponent = () => {
  const carouselRef = useRef(null);

  const goToSlide = (slideId) => (e) => {
    e.preventDefault();
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    const targetEl = carouselEl.querySelector(`#${slideId}`);
    if (!targetEl) return;

    carouselEl.scrollTo({
      left: targetEl.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={carouselRef}
      className="carousel w-full max-h-[500px] overflow-x-auto flex rounded-xl"
    >
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full flex-none">
        <img
          src="https://i.ibb.co.com/fVgKbY3c/download.jpg"
          className="w-full"
          alt="Slide 1"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide4"
            onClick={goToSlide("slide4")}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide2"
            onClick={goToSlide("slide2")}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full flex-none">
        <img
          src="https://i.ibb.co.com/VY3nHW24/download.jpg"
          className="w-full"
          alt="Slide 2"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide1"
            onClick={goToSlide("slide1")}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide3"
            onClick={goToSlide("slide3")}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full flex-none">
        <img
          src="https://i.ibb.co.com/VWGyvz9x/download.jpg"
          className="w-full"
          alt="Slide 3"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide2"
            onClick={goToSlide("slide2")}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide4"
            onClick={goToSlide("slide4")}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full flex-none">
        <img
          src="https://i.ibb.co.com/ZwQ5JFT/download.jpg"
          className="w-full"
          alt="Slide 4"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide3"
            onClick={goToSlide("slide3")}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide1"
            onClick={goToSlide("slide1")}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
