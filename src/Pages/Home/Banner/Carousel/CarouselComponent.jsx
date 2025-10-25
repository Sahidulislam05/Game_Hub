import React, { useRef } from "react";
import "./Slider.css";
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
      className="carousel w-full max-h-[500px] overflow-x-auto flex rounded-xl border-3 animate-border-color"
    >
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full flex-none">
        <img
          src="https://i.ibb.co.com/PZkQ81PN/pubg-go20ghrcj4ybxhvq.jpg"
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
          src="https://i.ibb.co.com/cSr4KrLg/1868809-3840x2160-desktop-4k-valorant-wallpaper-image.jpg"
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
          src="https://i.ibb.co.com/1G2bNp69/call-of-duty-mobile-android-games-ios-games-3440x1440-778.jpg"
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
          src="https://i.ibb.co.com/WNJzxctQ/gta-5-qpjtjdxwbwrk4gyj.jpg"
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
