import React, { useState } from "react";
import AppWrap from "../utils/AppWrap";
import MotionWrap from "../utils/MotionWrap";

import '../styles/Contact.css'
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setIsLoading] = useState(false);

    const { email, message, subject, name } = formData;

    const handleChangeInput = (e) => {
        const { name: fieldName, value } = e.target;

        setFormData((prev) => {
            return { ...prev, [fieldName]: value };
        });
    };

    const url = 'https://mail-send-rho.vercel.app';

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${url}/mail`, formData)
            .then((res) => alert(res.data))
            .catch((err) => alert(err.data))



        setFormData(
            {
                name: "",
                email: "",
                subject: "",
                message: "",
            }
        )
    }

    return (
        <>
            <h2 className="head-text">
                Take a coffee & <span>chat</span> with <span>me</span>
            </h2>

            <div className="app__contact-cards">
                <div className="app__contact-card">
                    <img src="/assets/email.png" alt="email" />
                    <a href="mailto:coder.hassan.ahmed@gmail.com" className="p-text">
                        coder.hassan.ahmed@gmail.com
                    </a>
                </div>
                <div className="app__contact-card">
                    <img src="/assets/mobile.png" alt="mobile" />
                    <a href="tel: +880 1841162203" className="p-text">
                        +880 1841162203
                    </a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <div className="app__contact-form app__flex">
                    <div className="app__flex">
                        <input
                            type="text"
                            className="p-text"
                            placeholder="Your Name"
                            value={name}
                            onChange={handleChangeInput}
                            name="name"
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            type="email"
                            className="p-text"
                            placeholder="Your Email"
                            value={email}
                            onChange={handleChangeInput}
                            name="email"
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            type="text"
                            className="p-text"
                            placeholder="Subject"
                            value={subject}
                            onChange={handleChangeInput}
                            name="subject"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button
                        type="button"
                        className=" portfolio-button"
                        onClick={handleSubmit}
                    >
                        {loading ? "Sending Message" : "Send Message"}
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in <span>Touch!</span>
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Contact, "app__contact"),
    "contact",
    "app__whitebg"
);
