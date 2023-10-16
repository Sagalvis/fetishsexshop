import {
  ContentMain,
  SlideImg,
  ContentImg,
  Controls,
  Button,
} from "./styles/styledSlider";
import { useRef, useEffect } from "react";
// services imports
import img1 from "../assets/pruebaslider/banner1.png";
import img2 from "../assets/pruebaslider/banner2.png";
import img3 from "../assets/pruebaslider/banner3.png";
import img4 from '../assets/pruebaslider/slider2.jpg';
import img5 from '../assets/pruebaslider/slider4.jpg';
// buttons imports
import ArrowLeft from "../assets/svg/ARROW-LEFT.svg";
import ArrowRight from "../assets/svg/ARROW-RIGHT.svg";
import "./styles/slider.css"

function Slider() {
  const slideshow = useRef(null);

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];

      slideshow.current.style.transition = `700ms ease-out all`;

      const slideSize = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${slideSize}px)`;
      
      const transition = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener('transitionend', transition);
      };
      slideshow.current.addEventListener('transitionend', transition);
    }
  };

  const back = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)

      slideshow.current.style.transition = 'none';

      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = '700ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`;
      }, 0);
    }
  };

  useEffect( () =>{
    setInterval(() => {
      
    }, 0);


  }, []);

  return (
    <>
      <ContentMain>

        <ContentImg ref={slideshow}>

          <ContentImg>
            <SlideImg src={img1} alt="imagen" className="imgpc " />
          </ContentImg>

          <ContentImg>
            <SlideImg src={img2} alt="imagen" className="imgpc imgpc2" />
          </ContentImg>

          <ContentImg>
            <SlideImg src={img3} alt="imagen" className="imgpc" />
          </ContentImg>

          <ContentImg>
            <SlideImg src={img4} alt="imagen" className="imgmb" />
          </ContentImg>

          <ContentImg>
            <SlideImg src={img5} alt="imagen" className="imgmb" />
          </ContentImg>

        </ContentImg>

        <Controls>
          <Button onClick={back}>
            <img src={ArrowLeft} alt="image" className="img1"/>
          </Button>

          <Button onClick={next}>
            <img src={ArrowRight} alt="image" />
          </Button>
        </Controls>
      </ContentMain>
    </>
  );
}

export default Slider;
