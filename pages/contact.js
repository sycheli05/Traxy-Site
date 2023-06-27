import React from 'react'
import NavbarStyleThree from '@/components/_App/NavbarStyleThree'
import PageBannerStyle3 from '@/components/Common/PageBannerStyle3'
import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
 
const Contact = () => {
    return (
        <>
            <NavbarStyleThree /> 

            <PageBannerStyle3 
                pageTitle="Contact Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact Us"
            />


            <ContactForm />
            <ContactInfo />
 
            <FooterStyleOne />
        </>
    )
}

export default Contact;