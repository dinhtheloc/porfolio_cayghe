import './App.css';
import { ReactComponent as Linkedin } from './linkedin.svg';
import React, { useEffect } from 'react';


function App() {

  useEffect(() => {
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
      <div className="row min-vh-100">
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
              I always strive to build impressive and beautiful web applications through carefully crafted code and user-centric design.
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

    </>
  );
}

export default App;