import React from 'react'

const PrivacyPolicy = () => {
    return (
        // <!--_______________ Profile _______________-->
        <section class="privacy mt-5">
            <div class="container-fluid pt-5 ">
                <h2 class="font-weight-bold mb-2 pl-4 text-lightgreen">Privacy Policy</h2>
                <p class="pl-4">Last update: 09/09/2021</p>
                
                <div class="row">
                    <div class="col-md-3">
                        <div class="info_sidebar">
                            <div class="list-group list-group-flus shadow-card">
                                <a href="#purpose" class="list-group-item border-0">PURPOSE </a>
                                <a href="#WPD" class="list-group-item border-0">WHAT IS PERSONAL DATA?</a>
                                <a href="#PDC" class="list-group-item border-0">PERSONAL DATA COLLECTED</a>
                                <a href="#AYPD" class="list-group-item border-0">ACCESSING YOUR PERSONAL DATA</a>
                                <a href="#complaints" class="list-group-item border-0">COMPLAINTS</a>
                                <a href="#OADC" class="list-group-item border-0">OWNER AND DATA CONTROLLER</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-9">
                        {/* <!-- Purpose --> */}
                        <div class="info_widget mb-5  p-5 rounded bg-white shadow-card" id="purpose">
                            <h3 class="font-weight-bold">Purpose</h3>
                            <p class="lead"> 
                                Little & Big is committed to protecting your privacy because we are committed to valuing people. Our Privacy Policy below sets out how your personal information is collected, used and protected. The Demo Country Privacy Principles also apply to us.
                                This Privacy Policy describes our policies and procedures on the collection, holding, use and disclosure of your personal information and should be read together with our Terms and Conditions. By providing your personal information you consent to our collection, use and disclosure of that information in accordance with this Privacy Policy.
                            </p>
                        </div>

                        {/* <!-- What is Personal Data? --> */}
                        <div class="info_widget mb-5  p-5 rounded bg-white shadow-card" id="WPD">
                            <h3 class="font-weight-bold">What is Personal Data?</h3>
                            <p class="lead">
                                When used in this Policy, "personal information" has the meaning given in the Privacy Act. Generally, it means any information or an opinion that could be used to identify you.
                            </p>
                        </div>

                        {/* <!-- Personal Data Collected --> */}
                        <div class="info_widget mb-5  p-5 rounded bg-white shadow-card" id="PDC">
                            <h3 class="font-weight-bold">Personal Data Collected</h3>
                            <p class="lead"> 
                                Personal Data collected for the following purposes and using the following services:
                                <ul class="pl-5">
                                    <li>Google Analytics: Cookies; Usage Data</li>
                                    <li>Contact form: email address; first name; phone number</li>
                                    <li>Mailing list or newsletter: email address; first name</li>
                                </ul>
                            </p>
                        </div>

                        {/* <!-- Accessing your Personal Data --> */}
                        <div class="info_widget mb-5  p-5 rounded bg-white shadow-card" id="AYPD">
                            <h3 class="font-weight-bold">Accessing your Personal Data</h3>
                            <p class="lead"> 
                                You may request access to your personal information collected by us, and ask that we correct that personal information. You can ask for access or correction by contacting us and we will usually respond within 30 days. If we refuse to give you access to, or correct, your personal information, we will notify you in writing setting out the reasons.
                            </p>
                        </div>

                        {/* <!-- Complaints --> */}
                        <div class="info_widget mb-5  p-5 rounded bg-white shadow-card" id="complaints">
                            <h3 class="font-weight-bold">Complaints</h3>
                            <p class="lead">
                                If you believe your privacy has been breached or you have a complaint about how we have handled your personal information, please contact us in writing. We will respond within a reasonable period (usually within 30 days).
                            </p>
                        </div>

                        {/* <!-- Owner and Data Controller --> */}
                        <div class="info_widget mb-5  p-5 rounded bg-white shadow-card" id="OADC">
                            <h3 class="font-weight-bold">Owner and Data Controller</h3>
                            <p class="lead">
                                <ul class="mb-4">
                                    <li>The Commons</li>
                                    <li>20-40 demo St,</li>
                                    <li>Jon doe NSW 2008</li>
                                    <li>Country</li>
                                </ul>
                                Email: demo@demo.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy
