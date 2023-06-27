import React from 'react';
import Link from 'next/link';

const BestAppEver = () => {
    return (
		<>
			<div className="app-ever-area-gps pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="overview-content">
                                <h2>GPS asset tracking.</h2>
                                <p>Give customers peace of mind with utmost security of cargo, vehicles and equipment. Provide telemetry data real time, control remotely.</p>

                                <ul className="features-list">
                                    <li>
                                        <div className="icon">
                                            <i className="ri-download-cloud-2-line"></i>
                                        </div>
                                        <h3>Asset tracking: more than GPS location</h3>
                                        <p>Enjoy profound visibility with HD-tracking, rich set of GIS tools and maps, and real-time telemetry data. Protect fleet, cargo and equipment from theft or unauthorized use.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-award-line"></i>
                                        </div>
                                        <h3>Solution for every industry</h3>
                                        <p>Protect assets and increase their productivity no matter what vertical you are in. Discover the most cutting-edge solutions for logistics, construction, agriculture, oil and gas, etc.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Flexible pricing options</h3>
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
                                    src="/images/gpsassetstracking.gif" 
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