import React, { useEffect } from 'react'
import ReactContactForm from 'react-mail-form';

import "./Contact.css"

const Contact = () => {

    // WHEN COMPONENT LOADS THIS WILL ADD CLASSES IN FORM INPUT AND TEXT-AREA    
    useEffect(() => {
        const input = document.querySelector("input");
        const textarea = document.querySelector("textarea");
        const textarea2 = document.querySelector("textarea").nextSibling;
    
        input?.classList.add("form-control")
        textarea?.classList.add("form-control")
        textarea2?.classList.add("btn")

        console.log(textarea2)
    },[])

    // THIS IS REACT FORM FOR MAILING PURPOSE IF U WANT TO MAKE UR OWN USING BACKEND JUST REMOVE THIS ONE ADD YOUR OWN FORM 
    // CONNECT YOUR OWN BAC-END

    return (
        <div className="contact pt-5">
            <div className="container pb-5">
                {/* Page Heading */}
                <div className="contact__header d-flex pt-5 mb-5">
                    <h1 className="font-play font-50 text-white border-bottom-white">Contact Us</h1>
                </div>
                {/* CONTACT FORM */}
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <ReactContactForm to="burfatfahad.121@gmail.com" className="contact-form" buttonText="Send" />
                            </div>
                        </div>
                    </div>

                    {/* AREA MAP */}
                    <div className="col-md-7">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.4678152570664!2d114.10626731443038!3d22.373714945881012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8eff778c47f%3A0x4759847c9188a3ee!2sEaglefair%20Management%20LTD!5e0!3m2!1sen!2s!4v1631103311261!5m2!1sen!2s" width="600" height="450" style={{border:'0', width: '100%'}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
