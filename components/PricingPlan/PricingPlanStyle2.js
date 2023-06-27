import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
const OwlCarousel = dynamic(import("react-owl-carousel3"))
import {
  BrowserView,
  MobileView,
  isMobile,
  isBrowser,
} from "react-device-detect"

const options = {
  nav: true,
  loop: true,
  margin: 25,
  dots: false,
  center: true,
  autoplay: true,
  autoplayHoverPause: true,
  stagePadding: 100,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
  responsive: {
    0: {
      stagePadding: 0,
      items: 1,
    },
    576: {
      stagePadding: 0,
      items: 1,
    },
    768: {
      stagePadding: 0,
      items: 2,
    },
    992: {
      stagePadding: 0,
      items: 3,
    },
    1200: {
      items: 2,
    },
  },
}

const PricingPlanStyle2 = () => {
  const [display, setDisplay] = React.useState(false)
  React.useEffect(() => {
    setDisplay(true)
  }, [])
  return (
    <>
      <div id="pricingPlanID" className="pricing-area pt-100 pb-75">
        <div className="container-fluid">
          <div className="section-title">
            <span className="sub-title">PRICING TABLE</span>
            <h2>No Hidden Charge Applied, Choose Your Plan</h2>
          </div>

          <BrowserView>
            {/* {display ? <OwlCarousel
                                className="new-feedback-wrap-slides owl-carousel owl-theme"
                                {...options}
                            > */}
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="single-pricing-box">
                  <div className="title">
                    <h3>BASIC</h3>
                    {/* <p>Powerful & awesome elements</p> */}
                  </div>
                  <div className="price">1300DA</div>

                  <Link href="/contact">
                    <a className="default-btn">Purchase Plan</a>
                  </Link>

                  <ul className="features-list">
                    <li>
                      <i className="ri-check-line"></i> Gestion de flotte
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Service Suivi
                    </li>
                    <li>
                      <i className="ri-close-line"></i> Controle de vehicule
                    </li>
                    <li>
                      <i className="ri-close-line"></i> Rapport & Planification
                    </li>
                    <li>
                      <i className="ri-close-line"></i> Missions & Taches
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Live Support
                    </li>
                    <li>
                      <i className="ri-close-line"></i> Develop new and
                      personalized solutions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="single-pricing-box active">
                  <div className="title">
                    <h3>STARTER</h3>
                    {/* <p>Powerful & awesome elements</p> */}
                  </div>
                  <span className="popular">Most Popular</span>
                  <div className="price">1500 DA</div>

                  <Link href="/contact">
                    <a className="default-btn">Purchase Plan</a>
                  </Link>

                  <ul className="features-list">
                    <li>
                      <i className="ri-close-line"></i> Gestion de flotte
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Service Suivi
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Controle de vehicule
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Rapport & Planification
                    </li>
                    <li>
                      <i className="ri-close-line"></i> Missions & Taches
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Live Support
                    </li>
                    <li>
                      <i className="ri-close-line"></i> Develop new and
                      personalized solutions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="single-pricing-box">
                  <div className="title">
                    <h3>ADVANCED</h3>
                    {/* <p>Powerful & awesome elements</p> */}
                  </div>
                  <div className="price">1800 DA</div>

                  <Link href="/contact">
                    <a className="default-btn">Purchase Plan</a>
                  </Link>

                  <ul className="features-list">
                    <li>
                      <i className="ri-check-line"></i> Gestion de flotte
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Service Suivi
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Controle de vehicule
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Rapport & Planification
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Missions & Taches
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Live Support
                    </li>
                    <li>
                      <i className="ri-close-line"></i> Develop new and
                      personalized solutions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="single-pricing-box">
                  <div className="title">
                    <h3>CUSTOMER PERSONALIZED</h3>
                    {/* <p>Powerful & awesome elements</p> */}
                  </div>
                  <div className="price-contact">CONTACT US</div>

                  <Link href="/contact">
                    <a className="default-btn">Contact</a>
                  </Link>

                  <ul className="features-list">
                    <li>
                      <i className="ri-check-line"></i> Gestion de flotte
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Service Suivi
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Controle de vehicule
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Rapport & Planification
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Missions & Taches
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Live Support
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Develop new and
                      personalized solutions
                    </li>
                  </ul>
                </div>
              </div>
              {/* </OwlCarousel> : ''} */}
            </div>
          </BrowserView>
          <MobileView>
            {display ? (
              <OwlCarousel
                className="new-feedback-wrap-slides owl-carousel owl-theme"
                {...options}
              >
                {/* <div className="row align-items-center justify-content-center"> */}

                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-pricing-box">
                    <div className="title">
                      <h3>BASIC</h3>
                      {/* <p>Powerful & awesome elements</p> */}
                    </div>
                    <div className="price">1500DA</div>

                    <Link href="/contact">
                      <a className="default-btn">Purchase Plan</a>
                    </Link>

                    <ul className="features-list">
                      <li>
                        <i className="ri-check-line"></i> Gestion de flotte
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Service Suivi
                      </li>
                      <li>
                        <i className="ri-close-line"></i> Controle de vehicule
                      </li>
                      <li>
                        <i className="ri-close-line"></i> Rapport &
                        Planification
                      </li>
                      <li>
                        <i className="ri-close-line"></i> Missions & Taches
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Live Support
                      </li>
                      <li>
                        <i className="ri-close-line"></i> Develop new and
                        personalized solutions
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-pricing-box active">
                    <div className="title">
                      <h3>STARTER</h3>
                      {/* <p>Powerful & awesome elements</p> */}
                    </div>
                    <span className="popular">Most Popular</span>
                    <div className="price">1800 DA</div>

                    <Link href="/contact">
                      <a className="default-btn">Purchase Plan</a>
                    </Link>

                    <ul className="features-list">
                      <li>
                        <i className="ri-close-line"></i> Gestion de flotte
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Service Suivi
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Controle de vehicule
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Rapport &
                        Planification
                      </li>
                      <li>
                        <i className="ri-close-line"></i> Missions & Taches
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Live Support
                      </li>
                      <li>
                        <i className="ri-close-line"></i> Develop new and
                        personalized solutions
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-pricing-box">
                    <div className="title">
                      <h3>ADVANCED</h3>
                      {/* <p>Powerful & awesome elements</p> */}
                    </div>
                    <div className="price">2000 DA</div>

                    <Link href="/contact">
                      <a className="default-btn">Purchase Plan</a>
                    </Link>

                    <ul className="features-list">
                      <li>
                        <i className="ri-check-line"></i> Gestion de flotte
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Service Suivi
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Controle de vehicule
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Rapport &
                        Planification
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Missions & Taches
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Live Support
                      </li>
                      <li>
                        <i className="ri-close-line"></i> Develop new and
                        personalized solutions
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="single-pricing-box">
                    <div className="title">
                      <h3>CUSTOMER PERSONALIZED</h3>
                      {/* <p>Powerful & awesome elements</p> */}
                    </div>
                    <div className="price-contact">CONTACT US</div>

                    <Link href="/contact">
                      <a className="default-btn">Contact</a>
                    </Link>

                    <ul className="features-list">
                      <li>
                        <i className="ri-check-line"></i> Gestion de flotte
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Service Suivi
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Controle de vehicule
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Rapport &
                        Planification
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Missions & Taches
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Live Support
                      </li>
                      <li>
                        <i className="ri-check-line"></i> Develop new and
                        personalized solutions
                      </li>
                    </ul>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </MobileView>
        </div>

        {/* Shape Images */}
        {/* <div className="shape12">
                            <img src="/images/shape/shape11.png" alt="shape" />
                        </div>
                        <div className="shape13">
                            <img src="/images/shape/shape15.png" alt="shape" />
                        </div> */}
      </div>
    </>
  )
}

export default PricingPlanStyle2
