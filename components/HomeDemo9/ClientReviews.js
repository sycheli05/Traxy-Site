import React from "react"
import dynamic from "next/dynamic"
const OwlCarousel = dynamic(import("react-owl-carousel3"))

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

const ClientReviews = () => {
  const [display, setDisplay] = React.useState(false)
  React.useEffect(() => {
    setDisplay(true)
  }, [])
  return (
    <>
      <div className="new-feedback-wrap-area pb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span className="sub-title">CLIENT REVIEWS</span>
            <h2>Some of Our Happy Customer Reviews About Our Products</h2>
          </div>

          {display ? (
            <OwlCarousel
              className="new-feedback-wrap-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="single-feedback-wrap-card">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  "At Traxy, we have been absolutely blown away by how
                  user-friendly, intuitive, cost-effective, and easily
                  implemented Traxy is. We believe Traxy is peerless in the
                  industry when you combine each of these factor."
                </p>
                <div className="client-info">
                  <img src="/images/user/persona01.jpeg" alt="user" />
                  <div className="title">
                    <h3>SARL AURES SOLAIRE</h3>
                  </div>
                </div>
              </div>

              <div className="single-feedback-wrap-card">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  "Traxy has solved our problems very efficiently and put us
                  ahead of our competition in terms of customer service…. At
                  such an affordable price, it is a must-have for all businesses
                  that deal with deliveries."
                </p>
                <div className="client-info">
                  <img src="/images/user/persona02.jpeg" alt="user" />
                  <div className="title">
                    <h3>SARL FRERE BENFIALA</h3>
                  </div>
                </div>
              </div>

              <div className="single-feedback-wrap-card">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  "The Traxy team are professional, courteous and always willing
                  to listen. Great company and great people. This is the most
                  comprehensive platform i have ever used. Its never been easier
                  to integrate new devices."
                </p>
                <div className="client-info">
                  <img src="/images/user/persona05.jpeg" alt="user" />
                  <div className="title">
                    <h3>EURL SELSERNA</h3>
                  </div>
                </div>
              </div>

              <div className="single-feedback-wrap-card">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                {/* <p>"It is for sure the platform with the most modern interface - intuitive and easy to use - Easy to implement and add trackers - A lot of features, advanced telematics reports and alerts - Fast response time from support team."</p> */}
                <p>
                  Compliance with delivery times, availability and listening to
                  customers, quality of the delivered product and all
                  contractual requirements
                </p>
                <div className="client-info">
                  <img src="/images/user/persona03.jpeg" alt="user" />
                  <div className="title">
                    <h3>SARL HODNA LAIT</h3>
                  </div>
                </div>
              </div>

              <div className="single-feedback-wrap-card">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  "It is for sure the platform with the most modern interface -
                  intuitive and easy to use - Easy to implement and add trackers
                  - A lot of features, advanced telematics reports and alerts -
                  Fast response time from support team."
                </p>
                <div className="client-info">
                  <img src="/images/user/persona04.webp" alt="user" />
                  <div className="title">
                    <h3>EURL TRM AURES</h3>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

export default ClientReviews
