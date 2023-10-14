import { Button, ContentImg, ContentSlider, Controls, SlideImg } from "./styles/styledSlider";
import { useRef, useEffect } from "react";
// buttons imports
import ArrowLeft from "../assets/svg/ARROW-LEFT.svg";
import ArrowRight from "../assets/svg/ARROW-RIGHT.svg";

import hola1 from '../assets/pruebaslider/slider1-01.png'
import hola2 from '../assets/pruebaslider/slider2-01.png'

const Slider = () => {
  const slideshow = useRef(null);

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];

      slideshow.current.style.transition = `700ms ease-out all`;

      const slideSize = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      const transition = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener("transitionend", transition);
      };
      slideshow.current.addEventListener("transitionend", transition);
    }
  };

  const back = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = "none";

      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = "700ms ease-out all";
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    const intervalT = setInterval(() => {
      next();
    }, 50000000);

    slideshow.current.addEventListener("mouseenter", () => {
      clearInterval(intervalT);
    });
  }, []);
  return (
    <>
      <ContentSlider>
        <ContentImg ref={slideshow}>

          <ContentImg>
            <SlideImg src={hola1} alt="img" />
          </ContentImg>

          <ContentImg>
            <SlideImg src={hola2} alt="img" />
          </ContentImg>

          <ContentImg>
            {/* <SlideImg src={} alt="img" /> */}
          </ContentImg>

          <ContentImg>
            {/* <SlideImg src={} alt="img" /> */}
          </ContentImg>

        </ContentImg>

        <Controls>
          <Button onClick={back}>
            <img src={ArrowLeft} alt="image" />
          </Button>

          <Button onClick={next}>
            <img src={ArrowRight} alt="image" />
          </Button>
        </Controls>
      </ContentSlider>
    </>
  );
};

export default Slider;
