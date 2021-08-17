import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
        <div className="mt-5">
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Untitled</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
            <link rel="stylesheet" href="assets/css/style.css" />
            <div className="footer-clean">
                <footer>
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                        <li><a href="/#">Web design</a></li>
                        <li><a href="/#">Development</a></li>
                        <li><a href="/#">Hosting</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                        <li><a href="/#">Company</a></li>
                        <li><a href="/#">Team</a></li>
                        <li><a href="/#">Legacy</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                        <li><a href="/#">Job openings</a></li>
                        <li><a href="/#">Employee success</a></li>
                        <li><a href="/#">Benefits</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social"><a href="/#"><i className="icon ion-social-facebook" /></a><a href="/#"><i className="icon ion-social-twitter" /></a><a href="/#"><i className="icon ion-social-snapchat" /></a><a href="/#"><i className="icon ion-social-instagram" /></a>
                        <p className="copyright">Dream Team WebNC © 2021</p>
                    </div>
                    </div>
                </div>
                </footer>
            </div>
        </div>

    </>
  );
};



export default Footer;