import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";

function Navbar() {


  const closeMenuManually = () => {
    const navMenu = document.getElementById("navMenu");
    const hamburger = document.getElementById("hamburger");
    const overlay = document.querySelector(".nav-overlay");
    const body = document.body;
  
    if (!navMenu) return;
  
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("modal-open");
  };
  
  useEffect(() => {
    const body = document.body;
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const overlay = document.querySelector(".nav-overlay");
  
    if (!hamburger || !navMenu || !overlay) return;
  
    const lockScroll = () => body.classList.add("modal-open");
    const unlockScroll = () => body.classList.remove("modal-open");
  
    const closeNav = () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      overlay.classList.remove("active");
      unlockScroll();
    };
  
    const toggleNav = (e) => {
      e.stopPropagation(); // important
      const isActive = navMenu.classList.toggle("active");
      hamburger.classList.toggle("active", isActive);
      overlay.classList.toggle("active", isActive);
      isActive ? lockScroll() : unlockScroll();
    };
  
    // hamburger click
    hamburger.addEventListener("click", toggleNav);
  
    // overlay click
    overlay.addEventListener("click", closeNav);
  
    // OUTSIDE CLICK
    const handleOutsideClick = (e) => {
      if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        closeNav();
      }
    };
  
    document.addEventListener("click", handleOutsideClick);
  
    return () => {
      hamburger.removeEventListener("click", toggleNav);
      overlay.removeEventListener("click", closeNav);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  

  return (
    <div className="header-parent-container">
      <header className="header">

        {/* LOGO */}
        <div className="logo">
          <p className="name mb-0">Mayur Kankale</p>
        </div>

        {/* NAV */}
        <nav className="nav" id="navMenu">
        <NavLink to="/" className="nav-link" onClick={closeMenuManually}>
  Home
</NavLink>

<NavLink to="/about" className="nav-link" onClick={closeMenuManually}>
  About
</NavLink>

<NavLink to="/project" className="nav-link" onClick={closeMenuManually}>
  Project
</NavLink>

<NavLink to="/contact" className="nav-link" onClick={closeMenuManually}>
  Contact
</NavLink>


          <button className="resume-btn  hide-for-desk">
          <a
            href="https://rxresu.me/Mayur_Kankale"
            className="btn-slide2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="circle2">
              <i className="fa fa-download"></i>
            </span>
            <span className="title2">Resume</span>
            <span className="title-hover2">Click here</span>
          </a>
        </button>
        </nav>

        {/* RESUME BUTTON (unchanged) */}
        <button className="resume-btn hide-for-mob">
          <a
            href="https://rxresu.me/Mayur_Kankale"
            className="btn-slide2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="circle2">
              <i className="fa fa-download"></i>
            </span>
            <span className="title2">Resume</span>
            <span className="title-hover2">Click here</span>
          </a>
        </button>

        {/* HAMBURGER */}
        <div className="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </header>

      <div className="nav-overlay"></div>
    </div>
  );
}

export default Navbar;
