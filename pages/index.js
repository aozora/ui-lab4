import Head from 'next/head'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(SplitText);

export default function Home() {
  return (
    <div className="stage">
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
  )
}
