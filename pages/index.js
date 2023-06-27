import React from 'react'
import NavbarStyleThree from '@/components/_App/NavbarStyleThree'
import MainBanner from '@/components/HomeDemo9/MainBanner';
// import PartnerStyle2 from '@/components/Common/PartnerStyle2';
import GPS from '@/components/HomeDemo9/GPS';
import Field from '@/components/HomeDemo9/Field';
import Fleet from '@/components/HomeDemo9/Fleet';
import ClientReviews from '@/components/HomeDemo9/ClientReviews';
import PricingPlanStyle2 from '@/components/PricingPlan/PricingPlanStyle2';
import BlogPost from '@/components/Common/BlogPost';
import FooterStyleOne from '@/components/_App/FooterStyleOne';
import ContactForm from '@/components/Contact/ContactForm';
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1';
import AppDownloadStyle1second from '@/components/Common/AppDownloadStyle1-2';

const IndexPage9 = () => {
    return (
        <>
            <NavbarStyleThree />

            <MainBanner />

            <GPS />

            <Field />

            <Fleet />

            <ClientReviews />

            {/* <PartnerStyle2 /> */}

            <AppDownloadStyle1 />

            <AppDownloadStyle1second />

            <BlogPost />

            <PricingPlanStyle2 />

            <ContactForm />
            
            <FooterStyleOne />
        </>
    )
}

export default IndexPage9;