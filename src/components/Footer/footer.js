import React from "react";

export default function Footer(){
    return(
        <div className="footer">
            <footer className="text-center text-lg-start bg-dark text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href className="me-4 text-reset">
              <i className="fa fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fa fa-twitter" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fa fa-google" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fa fa-instagram" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fa fa-linkedin" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fa fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h2 className="text-uppercase fw-bold mb-4">
                  <i className="fa fa-gem" />W.
                </h2>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Men</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Women</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Kids</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Home &amp; Living</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Contact Us</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Cancellation</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Track Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Terms Of Use</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><i className="fa fa-home me-3" /> New York, NY 10012, US</p>
                <p>
                  <i className="fa fa-envelope me-3" />
                  info@example.com
                </p>
                <p><i className="fa fa-phone me-3" /> + 01 234 567 88</p>
                <p><i className="fa fa-print me-3" /> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2022 Copyright: &nbsp;
          <a className="text-reset fw-bold" href="https://github.com/kosmos-graphique/">  WforWoman.com</a>
        </div>
        {/* Copyright */}
      </footer>
        </div>
    )
}