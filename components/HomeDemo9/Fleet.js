import React from 'react';
import Link from 'next/link';

const BestAppEver = () => {
    return (
		<>
			<div className="app-ever-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="overview-content">
                                <h2>Fleet management.</h2>
                                <p>Help fleets take most of their vehicles: zero human error with MDVR and ADAS, smart maintenance and not a drop to steal with fuel sensors.</p>

                                <ul className="features-list">
                                    <li>
                                        <div className="icon">
                                            <i className="ri-download-cloud-2-line"></i>
                                        </div>
                                        <h3>Efficient fleet management</h3>
                                        <p>Fuel fleets with powerful and simple tools to cut management expenses, increase productivity and prevent fuel thefts and accidents.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-award-line"></i>
                                        </div>
                                        <h3>Industry agnostic
                                        solution</h3>
                                        <p>Increase efficiency for every fleet from cars
                                        and vans to trucks, buses and heavy
                                        equipment. Discover the most cutting-edge
                                        solutions for long haul, oil and gas,
                                        construction, etc.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Flexible pricing
                                        options</h3>
                                        <p>Secure high ROI with minimum investments. Select from a variety of deployment options: SaaS, Cloud and On-premise. Respond to market demands through custom developments.</p>
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
                                    src="/images/fleetmanagement.gif" 
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