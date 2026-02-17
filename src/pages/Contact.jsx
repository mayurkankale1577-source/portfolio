import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm(
      "service_02iv1zo",
      "template_atd676s",
      form.current,
      "XONF-Dc8-w2oQAh72"
    )
    .then(()=>{
      alert("Mail sent 🚀");
      form.current.reset();
    })
    .catch((err)=>{
      console.log(err);
      alert("Error sending mail");
    });
  };

  return (
    <div>
      <div id="contact" className="container pb-5">
        <h1 className="text-center about mt-5">
          <span className="text-dark">Let's</span> talk
        </h1>

        <div className="back2 mt-5">
          <div className="row pb-5">

            <div className="col-md-3"></div>

            {/* LEFT INFO */}
            <div className="col-md-3">
              <div className="ms-4 z d-flex flex-column justify-content-center align-items-center mt-5">
                <h3 className="text-light mt-5 ms-5">Phone</h3>
                <p className="text-light mt-2 ms-5">
                  <i className="fa-solid fa-phone fs-4"></i>
                  <span className="ms-3">+918421918299</span>
                </p>

                <h3 className="text-light ms-5 mt-4">E-mail</h3>
                <p className="text-light ms-5 mt-2">
                  <i className="fa-solid fa-envelope fs-4"></i>
                  <span className="ms-3">mayurkankale15@gmail.com</span>
                </p>

                <h3 className="text-light ms-5 mt-4">Address</h3>
                <p className="text-light ms-5 mt-2">
                  <i className="fa-solid fa-location-dot fs-4"></i>
                  <span className="ms-2">
                    Vighnaharta Nagar,<br/>
                    <span className="ms-4">
                      Ambegaon Pathar, Pune, 411046
                    </span>
                  </span>
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="col-md-3 mt-5">
              <div className="card-width">
                <div className="box2 ps-5 pe-5 d-flex flex-column justify-content-center align-items-center">
                  <h3>GET IN TOUCH</h3>

                  <form ref={form} onSubmit={sendEmail} className="mt-3">

                    <input 
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />

                    <input 
                      type="email"
                      name="email"
                      className="form-control mt-3"
                      placeholder="Email"
                      required
                    />

                    <textarea 
                      name="message"
                      className="form-control mt-3"
                      placeholder="Message"
                      required
                    ></textarea>

                    <button type="submit" className="btn2 mt-3">
                      Send
                    </button>

                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-3"></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
