// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss

import React from "react";
import Link from '@/utils/ActiveLink';

const NavbarStyleThree = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });  
    }) 

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
      <>
        <div id="navbar" className="navbar-area navbar-style-three">
          <div className="traxy-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light bg-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src="/images/traxylogo.png" alt="logo" width="200" />
                  </a>
                </Link>

                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    {/* Home Page */}
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Home
                        </a>
                      </Link>
                    </li>

                    {/* Pricing Section */}
                    <li className="nav-item">
                      <Link href="#pricingPlanID" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Pricing
                        </a>
                      </Link>
                    </li>

                    {/* Applications Section */}
                    <li className="nav-item">
                      <Link href="#applications" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Applications
                        </a>
                      </Link>
                    </li>

                    {/* MarketPlace Page */}
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          MarketPlace
                        </a>
                      </Link>
                    </li>

                    {/* Contact Section */}
                    <li className="nav-item">
                      <Link href="#contactID" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Contact Us
                        </a>
                      </Link>
                    </li>

                    {/* Services Page */}
                    {/* <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="dropdown-toggle nav-link">
                                                Services
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/features" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Surveillance</a>
                                                </Link>
                                            </li> 

                                            <li className="nav-item">
                                                <Link href="/features-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Tracking</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}

                    {/* AboutUs Page */}
                    {/* <li className="nav-item">
                                        <Link href="/about-modern" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">About Us</a>
                                        </Link>
                                    </li> */}

                    {/* Blog Page */}
                    {/* <li className="nav-item">
                                        <Link href="/blog-grid">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Blog
                                            </a>
                                        </Link>
                                    </li> */}

                    {/* Contact Page */}
                    {/* <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                        </Link>
                                    </li> */}
                  </ul>
                </div>

                <div className="others-options">
                  <Link href="https://www.s3.dz/#/">
                    <a className="default-btn">Login</a>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    )
}

export default NavbarStyleThree;