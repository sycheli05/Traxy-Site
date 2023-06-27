import React from 'react'
import NavbarStyleThree from '@/components/_App/NavbarStyleThree'
import PageBannerStyle3 from '@/components/Common/PageBannerStyle3'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyleOne from '@/components/_App/FooterStyleOne'

const AppDownload = () => {
    return (
        <>
            <NavbarStyleThree /> 

            <PageBannerStyle3 
                pageTitle="App Download"
                homePageUrl="/"
                homePageText="Home"
                activePageText="App Download"
            />

            <div className="pt-100">
                <AppDownloadStyle2 />
            </div>
            
            {/* <AppDownloadStyle1 /> */}

            <PartnerStyle3 />

            <FooterStyleOne />
        </>
    )
}

export default AppDownload;