import './App.css';
import { ReactComponent as Linkedin } from './linkedin.svg';

function App() {
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
            <a href="https://www.linkedin.com/in/loc-dinh-the-117031184/" className="noneBorder" target="_blank"  rel="noreferrer">
              <Linkedin></Linkedin>
            </a>

            <h1 className="title">
              My name's <a href="https://www.instagram.com/locdt94/" target="_blank" rel="noreferrer">Dinh The Loc</a>. My friends call me cayghe.
              I allways strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
            </h1>
            <div className="body">
              <p>I have had for 4 years experiences in Frontend developer. I have worked for <a href="https://www.vng.com.vn/" target="_blank"  rel="noreferrer">
                VNG Corporation</a> since 2017 to present.</p>
              <p>My strong points are <a href="https://angular.io/" target="_blank"  rel="noreferrer">Angular</a> and <a href="https://reactjs.org/" target="_blank"  rel="noreferrer">React</a> framework.
              If you want to read my resume details. <a href="/resume.pdf" target="_blank"  rel="noreferrer">Click here</a></p>

              <p>Three words to describe myself are "Avtive", "Friendly" and "Comic".
              My hobby is playing games. However, I’m not addicted to the game at all.
              I only play games when I’ve done my work. Besides, I also like football and music.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
