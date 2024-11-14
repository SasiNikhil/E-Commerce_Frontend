import React from 'react'
import Layout from '../components/layout/Layout'

function Policy() {
    return (
        <Layout title={"Privacy Policy"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h5>Privacy Policy: E-commerce Website</h5>
                    <h3>Last updated: 2003</h3>
                    <p> This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.

                        We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.</p>
                </div>
            </div>
        </Layout>
    )
}

export default React.memo(Policy)