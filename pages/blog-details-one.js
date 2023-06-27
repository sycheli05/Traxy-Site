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
                                    <img src="/images/blog/route-optimization-blog-image.jpeg" alt="blog-details" />
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
                                                <Link href="/blog-details">
                                                    <a>(4) Comments</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h4>Route Optimization for field service fleets: What you need to know</h4>
                                    <p>Running a tight ship in field services demands that you’ve got your logistics optimized. Failure to do so can add up to wasted fuel, dissatisfied customers and a big drop in performance. That said, what can field services managers do to optimize their driver routes and take their approach to the next level?</p>
                                    <p>It all starts with clear communication and timely notifications for your drivers. Without a clean line of communication back and forth, there’s a lot of room for error. In small fleets, it may be easy to handle a lot of this manually, but it’s ultimately a poor use of resources. As your business grows, the amount of time it takes to manage and optimize a growing number of fleet vehicles and drivers becomes cost prohibitive—fast.</p>
                                    <p>Let’s have a look at some of the key drivers of route optimization for field services fleets.</p>
                                    
                                    <h5>What Are the Logistics Behind On-Time Deliveries?</h5>
                                    <p>Everybody wants to give their customers an exact ETA and stick to it. Unfortunately, this is the real world and, well, there’s a reason we need software to weave together driver communication, customer agendas and the GPS tracking that works like glue to hold it all together.</p>

                                    <p>Having a clear picture of where drivers are on the daily agenda alongside real-time traffic data is crucial when it comes to on-time delivery. And when roadblocks arise, you’re able to update your customers easily.</p>

                                    <h5>How Can I Optimize Operations with Route Planning Software?</h5>
                                    <p>There are a few key ways you can optimize your routes with route planning software. Here are just a few things you could easily achieve:</p>
                                    <ul>
                                        <li>Optimize to serve more customers per day and generate more revenue</li>
                                        <li>Cut distances and idle time wherever possible to save on fuel costs</li>
                                        <li>Avoid traffic and trouble spots on the grid to keep your fleet running smoothly and efficiently</li>
                                    </ul>

                                    <p>There are other opportunities to optimize operations with this kind of software as well through direct communication with your drivers. The hardware that drives the software’s capability can also help you monitor vehicle health and performance so that you can pull your fleet vehicles for maintenance without costly unplanned downtime.</p>

                                    <h5>How Can I Reduce Fleet Fuel Costs?</h5>
                                    <p>Having more effective routes is a simple fuel savings outcome. But, as we mentioned there are other ways that route optimization solutions can help you save on fuel costs:</p>
                                    <ul>
                                        <li>Monitoring error codes that affect performance like a fouled spark plug or plugged/restricted fuel injector which can reduce fuel efficiency as much as 30 percent.</li>
                                        <li>Shortening or eliminating idle times by avoiding traffic and other barriers.</li>
                                        <li>Increasing the number of stops within a given radius so that you’re serving more customers in less time.</li>
                                    </ul>
                                    <p>Running a tight ship in field services demands that you’ve got your logistics optimized. Failure to do so can add up to wasted fuel, dissatisfied customers and a big drop in performance. That said, what can field services managers do to optimize their driver routes and take their approach to the next level?</p>
                                    <p>It all starts with clear communication and timely notifications for your drivers. Without a clean line of communication back and forth, there’s a lot of room for error. In small fleets, it may be easy to handle a lot of this manually, but it’s ultimately a poor use of resources. As your business grows, the amount of time it takes to manage and optimize a growing number of fleet vehicles and drivers becomes cost prohibitive—fast.</p>
                                    <p>Let’s have a look at some of the key drivers of route optimization for field services fleets.</p>
                                    <h5>What Are the Logistics Behind On-Time Deliveries?</h5>
                                    <p>Everybody wants to give their customers an exact ETA and stick to it. Unfortunately, this is the real world and, well, there’s a reason we need software to weave together driver communication, customer agendas and the GPS tracking that works like glue to hold it all together.</p>
                                    <p>Having a clear picture of where drivers are on the daily agenda alongside real-time traffic data is crucial when it comes to on-time delivery. And when roadblocks arise, you’re able to update your customers easily.</p>
                                    <h5>How Can I Optimize Operations with Route Planning Software?</h5>
                                    <p>There are a few key ways you can optimize your routes with route planning software. Here are just a few things you could easily achieve:</p>
                                    <ul>
                                        <li>Optimize to serve more customers per day and generate more revenue</li>
                                        <li>Cut distances and idle time wherever possible to save on fuel costs</li>
                                        <li>Avoid traffic and trouble spots on the grid to keep your fleet running smoothly and efficiently</li>
                                    </ul>
                                    <p>There are other opportunities to optimize operations with this kind of software as well through direct communication with your drivers. The hardware that drives the software’s capability can also help you monitor vehicle health and performance so that you can pull your fleet vehicles for maintenance without costly unplanned downtime.</p>
                                    <h5>How Can I Reduce Fleet Fuel Costs?</h5>
                                    <p>Having more effective routes is a simple fuel savings outcome. But, as we mentioned there are other ways that route optimization solutions can help you save on fuel costs:</p>
                                    <ul>
                                        <li>Monitoring error codes that affect performance like a fouled spark plug or plugged/restricted fuel injector which can reduce fuel efficiency as much as 30 percent.</li>
                                        <li>Shortening or eliminating idle times by avoiding traffic and other barriers</li>
                                        <li>Increasing the number of stops within a given radius so that you’re serving more customers in less time</li>
                                    </ul>
                                    {/* <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog5.jpg" alt="image" />
                                            </figure>
                                        </li>
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog6.jpg" alt="image" />
                                            </figure>
                                        </li>
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog7.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul> */}

                                    {/* <h4>Four major elements that we offer:</h4>
                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>

                                    <ul>
                                        <li>Scientific skills for getting a better result</li>
                                        <li>Communication skills to getting in touch</li>
                                        <li>A career overview opportunity available</li>
                                        <li>A good work environment for work</li>
                                    </ul>

                                    <h4>Setting the mood with incense</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                    <blockquote className="wp-block-quote">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <cite>Tom Cruise</cite>
                                    </blockquote>

                                    <h4>The rise of marketing and why you need it</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur <strong>adipisicing</strong> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <a href="/blog-details">commodo</a> consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> */}
                                </div>

                                <div className="article-footer">
                                    {/* <div className="post-author-meta">
                                        <div className="d-flex align-items-center">
                                            <img src="/images/user/user6.jpg" alt="user" />
                                            <div className="title">
                                                <span className="name">
                                                    By <Link href="/blog-grid"><a>Traxy</a></Link>
                                                </span>
                                                <span className="date">March 17, 2021</span>
                                            </div>
                                        </div>
                                    </div> */}
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

                                <div className="comments-area">
                                    {/* <h3 className="comments-title">2 Comments:</h3> */}

                                    {/* <ol className="comment-list">
                                        <li className="comment">
                                            <div className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/user/user1.jpg" className="avatar" alt="user" />
                                                        <b className="fn">John Jones</b>
                                                    </div>
                                                    <div className="comment-metadata">
                                                        <span>January 01, 2021 at 10:59 am</span>
                                                    </div>
                                                </footer>
                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>
                                                <div className="reply">
                                                    <Link href="/blog-details">
                                                        <a className="comment-reply-link">Reply</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <ol className="children">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/images/user/user2.jpg" className="avatar" alt="user" />
                                                                <b className="fn">Steven Smith</b>
                                                            </div>
                                                            <div className="comment-metadata">
                                                                <span>January 02, 2021 at 21:59 am</span>
                                                            </div>
                                                        </footer>
                                                        <div className="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                        </div>
                                                        <div className="reply">
                                                            <Link href="/blog-details">
                                                                <a className="comment-reply-link">Reply</a>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <ol className="children">
                                                        <li className="comment">
                                                            <div className="comment-body">
                                                                <footer className="comment-meta">
                                                                    <div className="comment-author vcard">
                                                                        <img src="/images/user/user3.jpg" className="avatar" alt="user" />
                                                                        <b className="fn">Sarah Taylor</b>
                                                                    </div>
                                                                    <div className="comment-metadata">
                                                                        <span>January 03, 2021 at 05:59 am</span>
                                                                    </div>
                                                                </footer>
                                                                <div className="comment-content">
                                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                                </div>
                                                                <div className="reply">
                                                                    <Link href="/blog-details">
                                                                        <a className="comment-reply-link">Reply</a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>

                                        <li className="comment">
                                            <div className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/user/user4.jpg" className="avatar" alt="user" />
                                                        <b className="fn">John Doe</b>
                                                    </div>
                                                    <div className="comment-metadata">
                                                        <span>January 04, 2021 at 05:59 am</span>
                                                    </div>
                                                </footer>
                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>
                                                <div className="reply">
                                                    <Link href="/blog-details">
                                                        <a className="comment-reply-link">Reply</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <ol className="children">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/images/user/user1.jpg" className="avatar" alt="user" />
                                                                <b className="fn">James Anderson</b>
                                                            </div>
                                                            <div className="comment-metadata">
                                                                <span>January 05, 2021 at 04:59 am</span>
                                                            </div>
                                                        </footer>
                                                        <div className="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                        </div>
                                                        <div className="reply">
                                                            <Link href="/blog-details">
                                                                <a className="comment-reply-link">Reply</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol> */}

                                    {/* <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave A Reply</h3>
                                        <form className="comment-form">
                                            <p className="comment-notes">
                                                <span id="email-notes">Your email address will not be published.</span>
                                                Required fields are marked <span className="required">*</span>
                                            </p>
                                            <p className="comment-form-author">
                                                <label>Name <span className="required">*</span></label>
                                                <input type="text" id="author" placeholder="Your Name*" name="author" required="required" />
                                            </p>
                                            <p className="comment-form-email">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email" id="email" placeholder="Your Email*" name="email" required="required" />
                                            </p>
                                            <p className="comment-form-url">
                                                <label>Website</label>
                                                <input type="url" id="url" placeholder="Website" name="url" />
                                            </p>
                                            <p className="comment-form-comment">
                                                <label>Comment</label>
                                                <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..." rows="5" maxLength="65525" required="required"></textarea>
                                            </p>
                                            <p className="comment-form-cookies-consent">
                                                <input type="checkbox" value="yes" name="comment-cookies-consent" id="comment-cookies-consent" />
                                                <label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </p>
                                            <p className="form-submit">
                                                <input type="submit" name="submit" id="submit" className="submit" value="Post A Comment" />
                                            </p>
                                        </form>
                                    </div> */}
                                </div>
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