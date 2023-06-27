import React, { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '@/utils/baseUrl'
import GoogleMap from './GoogleMap';
// import ContactInfo from './ContactInfo';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    fullName: "",
    email: "",
    phoneNumber: "",
    pricingPlan: "",
    wilaya: "",
    vehicles: "",
    text: ""
};

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { fullName, email, phoneNumber, pricingPlan, wilaya, vehicles, text } = contact;
            const payload = { fullName, email, phoneNumber, pricingPlan, wilaya, vehicles, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div id="contactID" className="contact-area pt-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Get in Touch</h2>
                        <p>The IT industry offers a sea of options, from platforms, programming languages methodologies, technologies, tools, and more.</p>
                    </div>

                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Your name"
                                            className="form-control"
                                            value={contact.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Your email"
                                            className="form-control"
                                            value={contact.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Phone number"
                                            className="form-control"
                                            value={contact.phoneNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="pricingPlan"
                                            placeholder="Pricing Plan"
                                            className="form-control"
                                            value={contact.pricingPlan}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="wilaya"
                                            placeholder="Wilaya"
                                            className="form-control"
                                            value={contact.wilaya}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="vehicles"
                                            placeholder="Number of Vehicles"
                                            className="form-control"
                                            value={contact.vehicles}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <textarea
                                            name="text"
                                            cols="30"
                                            rows="6"
                                            placeholder="Write your message..."
                                            className="form-control"
                                            value={contact.text}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <button type="submit" className="default-btn">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <ContactInfo /> */}
                {/* Google Map */}
                <GoogleMap />
            </div>
        </>
    )
}

export default ContactForm;