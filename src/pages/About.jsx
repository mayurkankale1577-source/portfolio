import "./About.css";
import { Link } from "react-router-dom";

function About() {
    return (
      <div>

        {/* About Section */}
        <div id="aboutme" className="container">

<div className="row mt-1 mt-sm-5">
  <div className="col-md-4">
    <div className="back1 mt-1 mt-sm-5">
      <img src="images/profile.png" className="img-fluid" alt=""/>
    </div>
  </div>
  <div className="col-md-8">
    <h1 className="text-center mt-1 mt-sm-5 about">About <span className="text-dark">Me</span></h1>
    <p className="ms-4 mt-4">Hello! Im Mayur Kankale , G. S. Science, Arts & Commerce College, Khamgaon
      with major in Computer Science and Engineering. Having an in-depth knowledge in C programming , Python HTML ,
      CSS and MERN stack and Basic knowledge in Java , SQL. Strong background in management and leadership.</p>

    <h5 className="ms-4 mt-1 mt-sm-5"><span className="text-primary">Name </span>: Mayur Arun Kankale</h5>
    <h5 className="ms-4 mt-3"><span className="text-primary">Date of Birth </span>: 15-07-1997</h5>
    <h5 className="ms-4 mt-3"><span className="text-primary">Nationality </span>: Indian</h5>
    <h5 className="ms-4 mt-3"><span className="text-primary">Address </span>: Vighnaharta Nagar in Ambegaon Pathar, Pune,  411046</h5>
    <h5 className="ms-4 mt-3"><span className="text-primary">Phone </span>: +918421918299</h5>
    <h5 className="ms-4 mt-3"><span className="text-primary">Email </span>: mayurkankale15@gmail.com</h5>

    <div id="wrap2" className="mt-1 mt-sm-5">

      < Link to="/project" className="btn-slide">
        <span className="circle"><i className="fa-sharp fa-solid fa-laptop-code"></i></span>
        <span className="title">My Work</span>
        <span className="title-hover">Click here</span>
      </ Link>
      

    </div>
  </div>
</div>
<hr/>
</div>

  {/* Education Section */}
  <div id="education" className="container">

    <h1 className="text-center mt-1 mt-sm-5 about">Education</h1>
    <div className="educate mt-1 mt-sm-5">
      <button className="btn1"><i className="fa-solid fa-graduation-cap"></i></button>
    </div>
    <div className="row columnReverse">
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="box">
              <p className="text-center ">2022-Passout</p>
            </div>
            <div className="box1">
              <p className="text-center ">A Grade</p>
            </div>

          </div>
        </div>

      </div>
      <div className="col-md-4 ">
        <span className="vertical"></span>

      </div>
      <div className="col-md-4">
        <div className="row mt-4">
          <div className="education1">
            <h5 className=" text-primary headingfive">G. S. Science, Arts & Commerce College, Khamgaon</h5>
            <p>Master of Computer Science</p>
          </div>
        </div>
      </div>
    </div>

    <div className="dot mt-1 mt-sm-5 fahideOnMob" >
      <button className="btn1"><i className="fa-solid fa-circle-dot"></i></button>
    </div>
    <div className="educate mt-1 mt-sm-5 faShowOnMob">
      <button className="btn1"><i className="fa-solid fa-graduation-cap"></i></button>
    </div>

    <div className="row columnReverse">
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="box">
              <p className="text-center ">2020-Passout</p>
            </div>
            <div className="box1">
              <p className="text-center ">B Grade</p>
            </div>

          </div>
        </div>

      </div>
      <div className="col-md-4">
        <span className="vertical"></span>

      </div>
      <div className="col-md-4">
        <div className="row mt-4">
          <div className="education1">
            <h5 className=" text-primary headingfive">D. M. Burungale Science & Arts College, Shegaon.</h5>
            <p>Bsc (Computer, Electronics and Mathematics)</p>
          </div>
        </div>
      </div>
    </div>

    <div className="dot mt-1 mt-sm-5 mt-sm-1 fahideOnMob">
      <button className="btn1"><i className="fa-solid fa-circle-dot"></i></button>
    </div>

    <div className="end fahideOnMob">
      <i className="fa-sharp fa-solid fa-circle "></i>
    </div>
    <hr/>
  </div>

 {/* Experience Section  */}
 <div id="education" className="container">

<h1 className="text-center mt-1 mt-sm-5 about">Experience</h1>
<div className="educate mt-1 mt-sm-5">
  <button className="btn1"><i className="fa-solid fa-graduation-cap"></i></button>
</div>
<div className="row columnReverse">
  <div className="col-md-4">
    <div className="row">
      <div className="col-md-6"></div>
      <div className="col-md-6">
        <div className="box">
          <p className="text-center ">2024</p>
        </div>
        <div className="box1">
          <p className="text-center ">Present</p>
        </div>

      </div>
    </div>

  </div>
  <div className="col-md-4">
    <span className="vertical"></span>

  </div>
  <div className="col-md-4">
    <div className="row mt-4">
      <div className="education1">
        <h5 className=" text-primary headingfive"> Sycamore Software Solutions Pvt.Ltd</h5>
        <p>7 Business Square, near Datta Mandir,Pune</p>
      </div>
    </div>
  </div>
</div>

<div className="dot mt-1 mt-sm-5 fahideOnMob">
  <button className="btn1"><i className="fa-solid fa-circle-dot"></i></button>
</div>
<div className="educate mt-1 mt-sm-5 faShowOnMob">
      <button className="btn1"><i className="fa-solid fa-graduation-cap"></i></button>
    </div>

<div className="row columnReverse">
  <div className="col-md-4">
    <div className="row">
      <div className="col-md-6"></div>
      <div className="col-md-6">
        <div className="box">
          <p className="text-center ">2022</p>
        </div>
        <div className="box1">
          <p className="text-center ">2024</p>
        </div>

      </div>
    </div>

  </div>
  <div className="col-md-4">
    <span className="vertical"></span>

  </div>
  <div className="col-md-4">
    <div className="row mt-4">
      <div className="education1">
        <h5 className=" text-primary headingfive">Techhansa solution pvt. ltd</h5>
        <p>Dwarka Sector-14 New Delhi- 110075</p>
      </div>
    </div>
  </div>
</div>

<div className="dot mt-1 mt-sm-5 fahideOnMob">
  <button className="btn1"><i className="fa-solid fa-circle-dot"></i></button>
</div>

 
<div className="end fahideOnMob">
  <i className="fa-sharp fa-solid fa-circle"></i>
</div>
<hr/>
</div>

 {/* Skills Section  */}
 <div id="skill" className="container">
    <h1 className="text-center mt-1 mt-sm-5 about">Skills</h1>

    <div className="row d-flex justify-content-center mt-100">

      <div className="col-md-3 mt-1 mt-sm-5 direction">
        <h4 className="fields">HTML</h4>
        <div className="progress blue ">

          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>

          <div className="progress-value">85%</div>
        </div>

      </div>
      <div className="col-md-3 mt-1 mt-sm-5 direction">
        <h4 className="fields">CSS</h4>
        <div className="progress blue">

          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>

          <div className="progress-value">90%</div>
        </div>

      </div>

      <div className="col-md-3 mt-1 mt-sm-5 direction">
        <h4 className="fields">Bootstrap</h4>
        <div className="progress blue">

          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>

          <div className="progress-value">90%</div>
        </div>

      </div>

      <div className="col-md-3 mt-1 mt-sm-5 direction">
        <h4 className="fields">Javascript</h4>
        <div className="progress blue">

          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>

          <div className="progress-value">85%</div>
        </div>

      </div>
    </div>

    <div className="row d-flex justify-content-center mt-100">

      <div className="col-md-3 mt-1 mt-sm-5 direction">
        <h4 className="fields">Node JS</h4>
        <div className="progress blue">

          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>

          <div className="progress-value">85%</div>
        </div>

      </div>
      <div className="col-md-3 mt-1 mt-sm-5 direction">
        <h4 className="fields">Express</h4>
        <div className="progress blue">

          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>

          <div className="progress-value">90%</div>
        </div>

      </div>

      <div className="col-md-3 mt-1 mt-sm-5 direction">
        <h4 className="fields">MangoDB</h4>
        <div className="progress blue">

          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>

          <div className="progress-value">90%</div>
        </div>

      </div>

      <div className="col-md-3 mt-1 mt-sm-5 direction">
        <h4 className="fields">React</h4>
        <div className="progress blue">

          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>

          <div className="progress-value">85%</div>
        </div>

      </div>
    </div>
    <hr/>
  </div>

      </div>
    );
  }
  
  export default About;
  