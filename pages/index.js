import gsap from 'gsap';
import { useEffect, useMemo, useRef } from 'react';
import { ScrollTrigger, } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { SplitText } from 'gsap/dist/SplitText';
import { Head } from 'next/document';

export default function Home() {

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(SplitText);

  const stage = useRef();
  const isClient = typeof window !== 'undefined';

  const headerTimeline = useMemo(() => {
    return gsap.timeline({ paused: true, delay: 0.5 });
  }, []);

  const introTimeline = useMemo(() => {
    return gsap.timeline({ paused: true, delay: 0.5 });
  }, []);

  // const scrollTriggerTimeline = useMemo(() => {
  //   return gsap.timeline({
  //     paused: true
  //   });
  // }, []);

  useEffect(() => {
    if (!stage.current) {
      return
    }

    const slides = document.querySelectorAll(".slide");
    const links = document.querySelectorAll(".slide__scroll-link");
    const titles = document.querySelectorAll('.col__content-title');
    const introTitle = new SplitText('.intro__title', { type: "lines", linesClass: "intro-line" });
    const splitTitles = new SplitText(titles, { type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });

    let slideID = 0;

    // animate the logo and fake burger button into place
    headerTimeline.from('.logo', {
      y: -40,
      opacity: 0,
      duration: 2,
      ease: 'power4'
    })
      .from('.nav-btn__svg rect', {
        scale: 0,
        transformOrigin: "center right",
        duration: 0.6,
        ease: 'power4',
        stagger: 0.1
      }, 0.6)
      .to('.nav-rect', {
        scale: 0.8,
        transformOrigin: "center left",
        duration: 0.4,
        ease: 'power2',
        stagger: 0.1
      }, "-=0.6")

    // create mouse animations for the faux burger button

    let navBtn = document.querySelector('.nav-btn');

    navBtn.addEventListener("mouseover", (e) => {
      gsap.to('.nav-rect', {
        scaleX: 1,
        transformOrigin: "top left",
        duration: 0.4,
        ease: "power4"
      });
    });

    navBtn.addEventListener("mouseout", (e) => {
      gsap.to('.nav-rect', {
        scaleX: 0.8,
        transformOrigin: "top left",
        duration: 0.6,
        ease: "power4"
      });
    });


    // animate the intro elements into place
    headerTimeline.from('.intro-line', {
      // x: 100,
      y: 400,
      ease: 'power4',
      duration: 3
    })
      .from('.intro__txt', {
        x: -100,
        opacity: 0,
        ease: 'power4',
        duration: 3
      }, 0.7)
      .from('.intro__img--1', {
        // x: -50,
        y: 50,
        opacity: 0,
        ease: 'power2',
        duration: 10
      }, 1)
      .from('.intro__img--2', {
        // x: 50,
        y: -50,
        opacity: 0,
        ease: 'power2',
        duration: 10
      }, 1);


    // set up scrollTrigger animation for the when the intro scrolls out
    const scrollTriggerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.intro',
        scrub: 1,
        start: "top bottom", // position of trigger meets the scroller position
        end: "bottom top"
      }
    })
      .to('.intro__title', {
        x: 400,
        ease: 'power4.in',
        duration: 3,

      })
      .to('.intro__txt', {
        y: 100,
        ease: 'power4.in',
        duration: 3,
      }, 0);

    // gsap.set(stage, { autoAlpha: 1 });
    // headerTimeline.set(stage, { autoAlpha: 1 }).play()
    headerTimeline.play()
    introTimeline.play()
    scrollTriggerTimeline.play()


    /**
     * initParallax
     */
    slides.forEach((slide, i) => {
      let imageWrappers = slide.querySelectorAll('.col__image-wrap');

      gsap.fromTo(imageWrappers, {
        y: "-30vh"
      }, {
        y: "30vh",
        scrollTrigger: {
          trigger: slide,
          scrub: true,
          start: "top bottom", // position of trigger meets the scroller position
          snap: {
            snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
            duration: 1,
            ease: 'power4.inOut'
          }
        },
        ease: 'none'
      })
    });

  }, [])


  return (
    <>
      <div className="stage" ref={stage}>
        <header className="header">
          <div className="logo">Duda</div>
          <a href="#" className="nav-btn">
            <svg className="nav-btn__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 30">
              <rect className="nav-rect" width="40" height="2" x="8" y="8" fill="#242423"/>
              <rect className="nav-rect" width="40" height="2" x="8" y="14" fill="#242423"/>
              <rect width="40" height="2" x="8" y="20" fill="#242423"/>
            </svg>
          </a>
        </header>

        <section className="intro slide--0" id="slide-0">
          <div className="intro__content">
            <h1 className="intro__title">Duda</h1>
            <p className="intro__txt">Duda is going from strength to strength. Whether it’s in the prestigious gallery in the new World Trade Centre in New York or at an international art fair in Chicago or Hong Kong, people recognize the original response to life in Duda’s work, and go away feeling animated and energized by his vibrant creations.</p>
          </div>
          <img className="intro__img intro__img--1" src="https://assets.codepen.io/61488/duda-intro-1.jpg"/>
          <img className="intro__img intro__img--2" src="https://assets.codepen.io/61488/duda-intro-2.jpg"/>
        </section>


        <section className="slide slide--1" id="slide-1">
          <div className="col col--1">
            <div className="col__content col__content--1">
              <h2 className="col__content-title"><span className="line__inner">Mono</span><br/><span className="line__inner">No. 1</span></h2>
              <div className="col__content-wrap">
                <p className="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
                <a href="#" className="slide-link">
                  <div className="slide-link__circ"></div>
                  <div className="slide-link__line"></div>
                </a>
              </div>
            </div>
            <a href="#slide-2" className="slide__scroll-link">
              <div className="slide__scroll-line"></div>
            </a>
          </div>
          <div className="col col--2">
            <div className="col__image-wrap">
              <img className="img img--1" src="https://assets.codepen.io/61488/duda-1.jpg"/>
            </div>
          </div>
        </section>

        <section className="slide slide--2" id="slide-2">
          <div className="col col--1">
            <div className="col__content col__content--2">
              <h2 className="col__content-title"><span className="line__inner">Look</span><br/><span className="line__inner">No. 2</span></h2>
              <div className="col__content-wrap">
                <p className="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
                <a href="#" className="slide-link">
                  <div className="slide-link__circ"></div>
                  <div className="slide-link__line"></div>
                </a>
              </div>
            </div>
            <a href="#slide-3" className="slide__scroll-link">
              <div className="slide__scroll-line"></div>
            </a>
          </div>
          <div className="col col--2">
            <div className="col__image-wrap">
              <img className="img img--1" src="https://assets.codepen.io/61488/duda-2.jpg"/>
            </div>
          </div>
        </section>

        <section className="slide slide--3" id="slide-3">
          <div className="col col--1">
            <div className="col__content col__content--3">
              <h2 className="col__content-title"><span className="line__inner">Zombie</span><br/><span className="line__inner">No. 3</span></h2>
              <div className="col__content-wrap">
                <p className="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
                <a href="#" className="slide-link">
                  <div className="slide-link__circ"></div>
                  <div className="slide-link__line"></div>
                </a>
              </div>
            </div>
            <a href="#slide-4" className="slide__scroll-link">
              <div className="slide__scroll-line"></div>
            </a>
          </div>
          <div className="col col--2">
            <div className="col__image-wrap">
              <img className="img img--1" src="https://assets.codepen.io/61488/duda-3.jpg"/>
            </div>
          </div>
        </section>

        <section className="slide slide--4" id="slide-4">
          <div className="col col--1">
            <div className="col__content col__content--4">
              <h2 className="col__content-title"><span className="line__inner">Jimi</span><br/><span className="line__inner">No. 4</span></h2>
              <div className="col__content-wrap">
                <p className="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
                <a href="#" className="slide-link">
                  <div className="slide-link__circ"></div>
                  <div className="slide-link__line"></div>
                </a>
              </div>
            </div>
            <a href="#slide-5" className="slide__scroll-link">
              <div className="slide__scroll-line"></div>
            </a>
          </div>
          <div className="col col--2">
            <div className="col__image-wrap">
              <img className="img img--1" src="https://assets.codepen.io/61488/duda-4.jpg"/>
            </div>
          </div>
        </section>

        <section className="slide slide--5" id="slide-5">
          <div className="col col--1">
            <div className="col__content col__content--5">
              <h2 className="col__content-title"><span className="line__inner">Exit</span><br/><span className="line__inner">No. 5</span></h2>
              <div className="col__content-wrap">
                <p className="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
                <a href="#" className="slide-link">
                  <div className="slide-link__circ"></div>
                  <div className="slide-link__line"></div>
                </a>
              </div>
            </div>
            <a href="#slide-6" className="slide__scroll-link">
              <div className="slide__scroll-line"></div>
            </a>
          </div>
          <div className="col col--2">
            <div className="col__image-wrap">
              <img className="img img--1" src="https://assets.codepen.io/61488/duda-5.jpg"/>
            </div>
          </div>
        </section>

        <section className="slide slide--6" id="slide-6">
          <div className="col col--1">
            <div className="col__content col__content--6">
              <h2 className="col__content-title"><span className="line__inner">Smart</span><br/><span className="line__inner">No. 6</span></h2>
              <div className="col__content-wrap">
                <p className="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
                <a href="#" className="slide-link">
                  <div className="slide-link__circ"></div>
                  <div className="slide-link__line"></div>
                </a>
              </div>
            </div>
            <a href="#slide-7" className="slide__scroll-link">
              <div className="slide__scroll-line"></div>
            </a>
          </div>
          <div className="col col--2">
            <div className="col__image-wrap">
              <img className="img img--1" src="https://assets.codepen.io/61488/duda-6.jpg"/>
            </div>
          </div>
        </section>

        <footer className="footer" id="slide-7">
          <a className="footer__link" href="http://www.duda.ie/" target="_blank">duda.ie</a>
          <a className="footer__link-top" href="#slide-0">Top<span className="footer__link-top-line"></span></a>
          <p className="footer__copyright">All images © 2020 Dave Uda</p>
        </footer>
      </div>
    </>
  )
}
