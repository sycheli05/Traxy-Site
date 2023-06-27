import React from 'react';
import Link from 'next/link';

const BestAppEver = () => {
    return (
		<>
			<div className="app-ever-area">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12 pr-100">
                            <div className="overview-content">
                                <h2>Field service.</h2>
                                <p>Tear down the wall between office and field employees. Provide urgent task dispatch, full-featured communication and all-digital reporting.</p>

                                <ul className="features-list">
                                    <li>
                                        <div className="icon">
                                            <i className="ri-download-cloud-2-line"></i>
                                        </div>
                                        <h3>Complete solution for mobile workforce management</h3>
                                        <p>Turn customer orders into clear tasks and routes. Track locations, manage workflow, collect data with mobile forms and put it to use right away. Benchmark results, forecast trends.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-award-line"></i>
                                        </div>
                                        <h3>Solution for every field team</h3>
                                        <p>Improve productivity no matter what vertical you are in. Discover the most cutting-edge solutions for retail and distribution, utilities, medicine, machinery, etc.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Device agnostic field service management</h3>
                                        <p>Bring your own hardware or use a mobile device. Provide a complete suite of tools for smart mobile resource management on any smartphone or tablet.</p>
                                    </li>
                                </ul>
                                {/* <div className="btn-box">
                                    <Link href="/features">
                                        <a className="link-btn">See All Features</a>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="new-app-main-banner-gradient-image">
                                <img 
                                    src="/images/fieldmanagement.gif" 
                                    alt="image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default BestAppEver;