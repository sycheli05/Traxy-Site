import React from 'react'
import NavbarStyleThree from '@/components/_App/NavbarStyleThree'
import BlogSidebar from '@/components/Blog/BlogSidebar'
import RelatedPost from '@/components/Blog/RelatedPost'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import Link from 'next/link'
import PageBannerStyle3 from '@/components/Common/PageBannerStyle3'

const BlogGrid = () => {
    return (
        <>
            <NavbarStyleThree /> 

            <PageBannerStyle3 
                pageTitle="Blog"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog"
            />

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <Link href="/blog-grid">
                                        <a className="tag">Coming Soon</a>
                                    </Link>
                                    <img src="/images/blog/refueling-fleet-vehicles-image-blog.jpeg" alt="blog-details" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className="ri-calendar-2-line"></i>
                                                March 14, 2021
                                            </li>
                                            <li>
                                                <i className="ri-message-2-line"></i>
                                                <Link href="/blog-details-two">
                                                    <a>(0) Comments</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3>How lowring engine idle time can reduce fleet fuel costs</h3>

                                    <h4>Fleet Vehicle Idle Time is Eating Your Profits: Three Things You Can Do</h4>
                                    <h5>1. Prevent your Fleet vehicles from excessive idling and protect your business.</h5>
                                    <p>Idling in the parking lot may seem like a harmless habit, but it can be costly and damaging to your motor vehicle. Idling for long periods of time creates excess heat that wears out engine parts quickly. This increases the need for frequent maintenance and increases unproductive downtime. So take care when you idle!</p>
                                    <h5>2. Help Drivers to Reduce Idle Time</h5>
                                    <p>Reducing idle time starts with your drivers. There are small behavioral adjustments that could add up to big savings for your business. These include turning off engines when vehicles are not in motion, following manufacturer recommendations for minimum warm-up time and obeying local anti-idling laws. These changes create significant reductions of fuel cost and lower emissions from idling trucks.</p>
                                </div>

                                <div className="article-footer">
                                    <div className="article-share">
                                        <ul className="social pb-100">
                                                <li><span>Share:</span></li>
                                                <li>
                                                    <a href="https://www.facebook.com/Eurl-TRAXY-106606882077354" className="facebook" target="_blank">
                                                        <i className="ri-facebook-fill"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/Eurl_Traxy" className="twitter" target="_blank">
                                                        <i className="ri-linkedin-fill"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://linkedin.com/" className="linkedin" target="_blank">
                                                        <i className="ri-twitter-fill"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/eurl_traxy/" className="instagram" target="_blank">
                                                        <i className="ri-instagram-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
                                
                                {/* Related Blog Post */}
                                <RelatedPost />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="right-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
            <FooterStyleOne />
        </>
    )
}

export default BlogGrid;