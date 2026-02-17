import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div id="hero" className="container">
      <div className="row parent-container">

        <div className="col-md-8">
          <h1>
            <span className="text1 text-warning mt-5">Hello,</span>
          </h1>

          <h1 className="text">
            I Am <span className="text-primary">Mayur Kankale</span>
          </h1>

          <h4 className="mt-5 para">Full Stack Software Developer</h4>

          <p className="mt-3 para1">
            To work in an environment which encourage me to succeed and
            grow professionally where I can utilize my skills and knowledge
            appropriately.
          </p>

          <div className="button">
            <Link to="/about">
              <button className="btn">About Me</button>
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="back">
            <img src="/images/profile.png" className="img-fluid" alt="Mayur" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
