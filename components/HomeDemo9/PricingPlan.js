import React from 'react';
import Link from 'next/link'
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

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
            items: 1
        },
        576: {
            stagePadding: 0,
            items: 1
        },
        768: {
            stagePadding: 0,
            items: 2
        },
        992: {
            stagePadding: 0,
            items: 3
        },
        1200: {
            items: 2
        }
    }
};

const PricingPlan = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div id="pricingPlanID" className="app-pricing-gradient-area ptb-100">
                <div className="container-fluid">
                    <div className="section-title">
                        <span className="sub-title">PRICING TABLE</span>
                        <h2>No Hidden Charge Applied, Choose Your Plan</h2>
                    </div>
                    {display ? <OwlCarousel 
                        className="new-feedback-wrap-slides owl-carousel owl-theme"
                        {...options}
                    >
                    {/* <div className="row justify-content-center"> */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-app-pricing-box">
                                <div className="title">
                                    <h3>Basic</h3>
                                    <p>Powerful & awesome elements</p>
                                </div>
                                {/* <div className="price">
                                    $39 <span>/Month</span>
                                </div> */}
                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Up to 10 Website</li>
                                    <li><i className="ri-check-line"></i> Lifetime free Support</li>
                                    <li><i className="ri-check-line"></i> 10 GB Dedicated Hosting free</li>
                                    <li><i className="ri-check-line"></i> 24/7 Support</li>
                                    <li><i className="ri-close-line"></i> SEO Optimized</li>
                                    <li><i className="ri-close-line"></i> Live Support</li>
                                </ul>
                                <div className="pricing-btn">
                                    <Link href="/sign-in">
                                        <a className="default-btn">Purchase Plan</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-app-pricing-box active">
                                <div className="title">
                                    <h3>Team</h3>
                                    <p>Powerful & awesome elements</p>
                                </div>
                                <span className="popular">Most Popular</span>
                                {/* <div className="price">
                                    $49 <span>/Month</span>
                                </div> */}
                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Up to 200 Website</li>
                                    <li><i className="ri-check-line"></i> Lifetime free Support</li>
                                    <li><i className="ri-check-line"></i> 25 GB Dedicated Hosting free</li>
                                    <li><i className="ri-check-line"></i> 24/7 Support</li>
                                    <li><i className="ri-check-line"></i> Business Contact</li>
                                    <li><i className="ri-check-line"></i> SEO Optimized</li>
                                    <li><i className="ri-close-line"></i> Live Support</li>
                                </ul>
                                <div className="pricing-btn">
                                    <Link href="/sign-in">
                                        <a className="default-btn">Purchase Plan</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-app-pricing-box">
                                <div className="title">
                                    <h3>Business</h3>
                                    <p>Powerful & awesome elements</p>
                                </div>
                                {/* <div className="price">
                                    $59 <span>/Month</span>
                                </div> */}
                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> Up to 500 Website</li>
                                    <li><i className="ri-check-line"></i> Lifetime free Support</li>
                                    <li><i className="ri-check-line"></i> 50 GB Dedicated Hosting free</li>
                                    <li><i className="ri-check-line"></i> 24/7 Support</li>
                                    <li><i className="ri-check-line"></i> SEO Optimized</li>
                                    <li><i className="ri-check-line"></i> Live Support</li>
                                </ul>
                                <div className="pricing-btn">
                                    <Link href="/sign-in">
                                        <a className="default-btn">Purchase Plan</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}

                    {/* <div className="app-pricing-bottom-text">
                        <Link href="/pricing">
                            <a>See All Pricing Plan</a>
                        </Link>
                    </div> */}
                </div>

                {/* Shape Images */}
                {/* <div className="shape7">
                    <img src="/images/shape/shape6.png" alt="shape" />
                </div>
                <div className="shape8">
                    <img src="/images/shape/shape7.png" alt="shape" />
                </div> */}
            </div>
        </>
    )
}

export default PricingPlan;