import './App.css';
import { ReactComponent as Linkedin } from './linkedin.svg';
import React, { useEffect } from 'react';


function App() {

  useEffect(() => {
    // const script = document.createElement('script');

    // script.src = "/stack.js";
    // script.async = true;

    // document.body.appendChild(script);

    // return () => {
    //   document.body.removeChild(script);
    // }

    var e = document.querySelectorAll(".card-stack"),
      o = ["load", "resize", "scroll"];
    [].forEach.call(e, function (e) {
      var t = e.querySelectorAll(".card-stack-item");
      o.forEach(function (e) {
        window.addEventListener(e, function () {
          var d = [].slice.call(t).reverse();
          console.log(d);
          d.reduce(function (e, t, o) {
            var n = t.clientHeight + parseInt(window.getComputedStyle(t).getPropertyValue("margin-bottom")),
              a = e + (n - (d[o - 1] ? d[o - 1].offsetTop - t.offsetTop : n)) / n,
              r = t.firstElementChild,
              l = r.firstElementChild,
              c = "calc(-1rem * " + a + ")",
              i = "calc(1 - .2 * " + a + ")",
              s = "calc(1 - .03 * " + a + ")";
            return r.style.transform = "translateY(" + c + ") scale(" + s + ")", l.style.opacity = i, a
          }, 0)
        })
      })
    });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-lg">
          <img src="/avatar.jpg" alt="avatar"
            className="avatar"
          />
        </div>
        <div className="col-lg">
          <div className="content">
            <a href="https://www.linkedin.com/in/loc-dinh-the-117031184/" className="noneBorder" target="_blank" rel="noreferrer">
              <Linkedin></Linkedin>
            </a>

            <h1 className="title">
              My name's <a href="https://www.instagram.com/locdt94/" target="_blank" rel="noreferrer">Dinh The Loc</a>.
              I always strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
            </h1>
            <div className="body">
              <p>I have had 4 years of experience as a Front-end developer. I have worked for <a href="https://www.vng.com.vn/" target="_blank" rel="noreferrer">
                VNG Corporation</a> from 2017 to the present.</p>
              <p>My strong points are <a href="https://angular.io/" target="_blank" rel="noreferrer">Angular</a> and <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a> frameworks.
              If you want to read my resume details. <a href="/resume.pdf" target="_blank" rel="noreferrer">Click here</a></p>

              <p>Three words to describe myself are "Active", "Friendly" and "Comic". My hobby is playing games. However, I’m not addicted to the game at all. I only play games when I’ve done my work. Besides, I also like football and music.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="position-relative">
        <div class="shape shape-fluid-x shape-bottom" style={{color: '#fff'}}>
          <div class="shape-img pb-8 pb-md-11">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 0h100v25H75L25 50H0z" fill="currentColor"></path></svg>
          </div>
        </div>
      </div> */}
      {/*  TASKS */}
      <section className="pt-11 pt-md-13 pb-11 pb-md-16 bg-gray-900"
        style="background-image: ;"
        style={{
          backgroundImage: 'url(https://goodkit.goodthemes.co/assets/img/patterns/pattern-1.svg)'
        }}
      >
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 text-center">

              {/*  Preheading */}
              <h6 className="text-uppercase text-warning mb-5">
                Showcase
              </h6>

              {/*  Heading */}
              <h2 className="display-4 text-white mb-9">
                Some of my <span className="text-underline-primary-light">cool stuff</span>.
              </h2>

            </div>
          </div>
        </div>

        <div className="container-lg">
          <div className="row">
            <div className="col-12">

              {/*  Decoration */}
              <div className="position-absolute top-center top-md-left text-warning mt-n8 ml-md-n8">
                <svg width="185" height="186" viewBox="0 0 185 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="currentColor" /><circle cx="22" cy="2" r="2" fill="currentColor" /><circle cx="42" cy="2" r="2" fill="currentColor" />
                  <circle cx="62" cy="2" r="2" fill="currentColor" /><circle cx="82" cy="2" r="2" fill="currentColor" /><circle cx="102" cy="2" r="2" fill="currentColor" /><circle cx="122" cy="2" r="2" fill="currentColor" /><circle cx="142" cy="2" r="2" fill="currentColor" /><circle cx="162" cy="2" r="2" fill="currentColor" /><circle cx="182" cy="2" r="2" fill="currentColor" /><circle cx="2" cy="22" r="2" fill="currentColor" /><circle cx="22" cy="22" r="2" fill="currentColor" /><circle cx="42" cy="22" r="2" fill="currentColor" /><circle cx="62" cy="22" r="2" fill="currentColor" /><circle cx="82" cy="22" r="2" fill="currentColor" /><circle cx="102" cy="22" r="2" fill="currentColor" /><circle cx="122" cy="22" r="2" fill="currentColor" /><circle cx="142" cy="22" r="2" fill="currentColor" /><circle cx="162" cy="22" r="2" fill="currentColor" /><circle cx="182" cy="22" r="2" fill="currentColor" /><circle cx="2" cy="42" r="2" fill="currentColor" /><circle cx="22" cy="42" r="2" fill="currentColor" /><circle cx="42" cy="42" r="2" fill="currentColor" /><circle cx="62" cy="42" r="2" fill="currentColor" /><circle cx="82" cy="42" r="2" fill="currentColor" /><circle cx="102" cy="42" r="2" fill="currentColor" /><circle cx="122" cy="42" r="2" fill="currentColor" /><circle cx="142" cy="42" r="2" fill="currentColor" /><circle cx="162" cy="42" r="2" fill="currentColor" /><circle cx="182" cy="42" r="2" fill="currentColor" /><circle cx="2" cy="62" r="2" fill="currentColor" /><circle cx="22" cy="62" r="2" fill="currentColor" /><circle cx="42" cy="62" r="2" fill="currentColor" /><circle cx="62" cy="62" r="2" fill="currentColor" /><circle cx="82" cy="62" r="2" fill="currentColor" /><circle cx="102" cy="62" r="2" fill="currentColor" /><circle cx="122" cy="62" r="2" fill="currentColor" /><circle cx="142" cy="62" r="2" fill="currentColor" /><circle cx="162" cy="62" r="2" fill="currentColor" /><circle cx="182" cy="62" r="2" fill="currentColor" /><circle cx="2" cy="82" r="2" fill="currentColor" /><circle cx="22" cy="82" r="2" fill="currentColor" /><circle cx="42" cy="82" r="2" fill="currentColor" /><circle cx="62" cy="82" r="2" fill="currentColor" /><circle cx="82" cy="82" r="2" fill="currentColor" /><circle cx="102" cy="82" r="2" fill="currentColor" /><circle cx="122" cy="82" r="2" fill="currentColor" /><circle cx="142" cy="82" r="2" fill="currentColor" /><circle cx="162" cy="82" r="2" fill="currentColor" /><circle cx="182" cy="82" r="2" fill="currentColor" /><circle cx="2" cy="102" r="2" fill="currentColor" /><circle cx="22" cy="102" r="2" fill="currentColor" /><circle cx="42" cy="102" r="2" fill="currentColor" /><circle cx="62" cy="102" r="2" fill="currentColor" /><circle cx="82" cy="102" r="2" fill="currentColor" /><circle cx="102" cy="102" r="2" fill="currentColor" /><circle cx="122" cy="102" r="2" fill="currentColor" /><circle cx="142" cy="102" r="2" fill="currentColor" /><circle cx="162" cy="102" r="2" fill="currentColor" /><circle cx="182" cy="102" r="2" fill="currentColor" /><circle cx="2" cy="122" r="2" fill="currentColor" /><circle cx="22" cy="122" r="2" fill="currentColor" /><circle cx="42" cy="122" r="2" fill="currentColor" /><circle cx="62" cy="122" r="2" fill="currentColor" /><circle cx="82" cy="122" r="2" fill="currentColor" /><circle cx="102" cy="122" r="2" fill="currentColor" /><circle cx="122" cy="122" r="2" fill="currentColor" /><circle cx="142" cy="122" r="2" fill="currentColor" /><circle cx="162" cy="122" r="2" fill="currentColor" /><circle cx="182" cy="122" r="2" fill="currentColor" /><circle cx="2" cy="142" r="2" fill="currentColor" /><circle cx="22" cy="142" r="2" fill="currentColor" /><circle cx="42" cy="142" r="2" fill="currentColor" /><circle cx="62" cy="142" r="2" fill="currentColor" /><circle cx="82" cy="142" r="2" fill="currentColor" /><circle cx="102" cy="142" r="2" fill="currentColor" /><circle cx="122" cy="142" r="2" fill="currentColor" /><circle cx="142" cy="142" r="2" fill="currentColor" /><circle cx="162" cy="142" r="2" fill="currentColor" /><circle cx="182" cy="142" r="2" fill="currentColor" /><circle cx="2" cy="162" r="2" fill="currentColor" /><circle cx="22" cy="162" r="2" fill="currentColor" /><circle cx="42" cy="162" r="2" fill="currentColor" /><circle cx="62" cy="162" r="2" fill="currentColor" /><circle cx="82" cy="162" r="2" fill="currentColor" /><circle cx="102" cy="162" r="2" fill="currentColor" /><circle cx="122" cy="162" r="2" fill="currentColor" /><circle cx="142" cy="162" r="2" fill="currentColor" /><circle cx="162" cy="162" r="2" fill="currentColor" /><circle cx="182" cy="162" r="2" fill="currentColor" /><circle cx="2" cy="182" r="2" fill="currentColor" /><circle cx="22" cy="182" r="2" fill="currentColor" /><circle cx="42" cy="182" r="2" fill="currentColor" /><circle cx="62" cy="182" r="2" fill="currentColor" /><circle cx="82" cy="182" r="2" fill="currentColor" /><circle cx="102" cy="182" r="2" fill="currentColor" /><circle cx="122" cy="182" r="2" fill="currentColor" /><circle cx="142" cy="182" r="2" fill="currentColor" /><circle cx="162" cy="182" r="2" fill="currentColor" /><circle cx="182" cy="182" r="2" fill="currentColor" /></svg>
                </div>

              {/*  Stack */}
              <div className="card-stack">
                {/*  Card */}
                <div className="card-stack-item mb-9">
                  <div className="card card-lg rounded overflow-hidden">
                    <div className="row no-gutters">
                      <div className="col-md order-md-1 d-flex align-items-end bg-primary">

                        {/*  Image */}
                        <a target="_blank"
                          href="/website/scroll-animation/index.html">
                          <img className="card-img-top" src="/p-scroll.png" alt="p-scroll" />
                        </a>

                      </div>
                      <div className="col-md-5 order-md-0 d-flex align-items-center bg-white">
                        <div className="card-body text-center">

                          {/*  Heading */}
                          <h1 className="font-family-sans-serif mb-4 mt-auto">
                            Scroll frame by frame
                          </h1>

                          {/*  Text */}
                          <p>
                            When I was flying from Saigon to Hue, at that time the sky was very cloudy. That's why we have the video in this project
                          </p>

                          {/*  Link */}
                          <a className="h6 text-uppercase text-decoration-none mt-auto"
                            target="_blank"
                            href="/website/scroll-animation/index.html">
                            View <i className="fe fe-arrow-right"></i>
                          </a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  Card */}
                <div className="card-stack-item mb-9">
                  <div className="card card-lg rounded overflow-hidden">
                    <div className="row no-gutters">
                      <div className="col-md order-md-1 d-flex align-items-end bg-primary">

                        {/*  Image */}
                        <a target="_blank"
                          href="/website/background-animation/index.html">
                          <img className="card-img-top" src="/p-background-animation.png" alt="p-background-animation.png" />
                        </a>

                      </div>
                      <div className="col-md-5 order-md-0 d-flex align-items-center bg-white">
                        <div className="card-body text-center">

                          {/*  Heading */}
                          <h1 className="font-family-sans-serif mb-4 mt-auto">
                            Background animation
                          </h1>

                          {/*  Text */}
                          <p>This project uses only css, no javascript.</p>

                          {/*  Link */}
                          <a className="h6 text-uppercase text-decoration-none mt-auto"
                            target="_blank"
                            href="/website/background-animation/index.html">
                            View <i className="fe fe-arrow-right"></i>
                          </a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Card */}
                <div className="card-stack-item mb-9">
                  <div className="card card-lg rounded overflow-hidden">
                    <div className="row no-gutters">
                      <div className="col-md order-md-1 d-flex align-items-end bg-primary">

                        {/*  Image */}
                        <a target="_blank"
                          href="/website/parallax-text-scrolling/index.html">
                          <img className="card-img-top" src="/p-parallax-text-scrolling.png" alt="p-parallax-text-scrolling" />
                        </a>

                      </div>
                      <div className="col-md-5 order-md-0 d-flex align-items-center bg-white">
                        <div className="card-body text-center">

                          {/*  Heading */}
                          <h1 className="font-family-sans-serif mb-4 mt-auto">
                            Text scrolling
                          </h1>

                          {/*  Text */}
                          <p>This project using css and a little javascript.</p>

                          {/*  Link */}
                          <a className="h6 text-uppercase text-decoration-none mt-auto"
                            target="_blank"
                            href="/website/parallax-text-scrolling/index.html">
                            View <i className="fe fe-arrow-right"></i>
                          </a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* </div> */}
    </>
  );
}

export default App;