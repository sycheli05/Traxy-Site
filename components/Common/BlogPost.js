import React from "react"
import Link from "next/link"

const BlogPost = () => {
  const [days, setDays] = React.useState("")
  const [hours, setHours] = React.useState("")
  const [minutes, setMinutes] = React.useState("")
  const [seconds, setSeconds] = React.useState("")

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const commingSoonTime = () => {
    let endTime = new Date("July 10, 2023 00:00:00 PDT")
    let endTimeParse = Date.parse(endTime) / 1000
    let now = new Date()
    let nowParse = Date.parse(now) / 1000
    let timeLeft = endTimeParse - nowParse
    let days = Math.floor(timeLeft / 86400)
    let hours = Math.floor((timeLeft - days * 86400) / 3600)
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60)
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    )
    if (hours < "10") {
      hours = "0" + hours
    }
    if (minutes < "10") {
      minutes = "0" + minutes
    }
    if (seconds < "10") {
      seconds = "0" + seconds
    }
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }
  return (
    <>
      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">BLOG POST</span>
            <h2>Latest Article From Our Blog</h2>
            <div className="coming-soon-area">
              <div className="container-fluid p-0">
                <div className="row m-0">
                  <div className="col-lg-12 col-md-12 p-0">
                    <div className="coming-soon-content">
                      <div className="d-table">
                        <div className="d-table-cell">
                          {/* <Link href="/">
                                                        <a className="logo">
                                                            <img src="/images/black-logo.png" alt="image" />
                                                        </a>
                                                    </Link> */}

                          {/* <h2>We Are Launching Soon</h2> */}
                          <div
                            id="timer"
                            className="flex-wrap d-flex justify-content-center"
                          >
                            <div
                              id="days"
                              className="align-items-center flex-column d-flex justify-content-center"
                            >
                              {days} <span>Days</span>
                            </div>
                            <div
                              id="hours"
                              className="align-items-center flex-column d-flex justify-content-center"
                            >
                              {hours} <span>Hours</span>
                            </div>
                            <div
                              id="minutes"
                              className="align-items-center flex-column d-flex justify-content-center"
                            >
                              {minutes} <span>Minutes</span>
                            </div>
                            <div
                              id="seconds"
                              className="align-items-center flex-column d-flex justify-content-center"
                            >
                              {seconds} <span>Seconds</span>
                            </div>
                          </div>

                          {/* <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                                                        <input 
                                                            type="email" 
                                                            className="input-newsletter" 
                                                            placeholder="Enter your email" 
                                                            name="EMAIL" 
                                                            required 
                                                        />
                                                        <button type="submit" className="default-btn">Subscribe</button>
                                                    </form> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-6 col-md-12 p-0">
                                        <div className="coming-soon-image">
                                            <img src="/images/coming-soon.jpg" alt="coming-soon" />
                                        </div>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details-one">
                    <a className="d-block">
                      <img
                        src="/images/blog/route-optimization-blog-image.jpeg"
                        alt="blog"
                      />
                    </a>
                  </Link>

                  <Link href="/blog-grid">
                    <a className="tag">Services</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog-details-one">
                        <a>(0) Comment</a>
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details-one">
                      {/* <a>ROUTE OPTIMIZATION FOR FIELD SERVICE FLEETS: WHAT YOU NEED TO KNOW</a> */}
                      <a>
                        Route Optimization for field service fleets: What you
                        need to know
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details-two">
                    <a className="d-block">
                      <img
                        src="/images/blog/refueling-fleet-vehicles-image-blog.jpeg"
                        alt="blog"
                      />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Services</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 13, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog-details-two">
                        <a>(4) Comment</a>
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details-two">
                      <a>
                        How lowring engine idle time can reduce fleet fuel costs
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details-three">
                                        <a className="d-block">
                                            <img src="/images/blog/blog3.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Marketing</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 12, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i> 
                                            <Link href="/blog-details"><a>(2) Comment</a></Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Branding involves developing strategy to create a point</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
