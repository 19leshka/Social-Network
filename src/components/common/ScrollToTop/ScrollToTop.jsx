import s from './ScrollToTop.module.css';
import { Link, animateScroll as scroll } from "react-scroll";
import arrow from './../../../assets/arrow-up-gray.svg';
import {useState, useEffect} from 'react';

const ScrollToTop = (props) => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const scrollEvent = (e) => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', (e) => scrollEvent(e));
    return () => {
      window.removeEventListener('scroll', (e) => scrollEvent(e));
    }
  }, [])

  const handleScroll = () => {
    scroll.scrollToTop({
      delay: 50,
      duration: 1000
    });
  }

  return (
    <>
      {
        (scrollY > 400) 
          ? (<div onClick={() => handleScroll()} className={s.scrollToTop}>
              <img src={arrow} alt="" />
            </div>) 
          : null
      }
    </>
  )

  // return (
  //   <div onClick={() => handleScroll()} className={s.scrollToTop}>
  //     <img src={arrow} alt="" />
  //   </div>
  // )
}

export default ScrollToTop;