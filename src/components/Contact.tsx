"use client";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setIsLoading] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message ) {
            return toast.error('please complete all fields')
        };

        setIsLoading(true);
        emailjs
            .send(
                'service_q7z75gh',
                'template_ixgul6v',
                {
                    from_name: formData.name,
                    to_name: "Hassan Ahmed",
                    from_email: formData.email,
                    to_email: "coder.hassan.ahmed@gmail.com",
                    message: formData.message,
                },
                'IW6_6siGryFqzCDac'
            )
            .then((result) => {
                toast.success('mail send successfully');
                setIsFormSubmitted(true)
            }, (error) => {
                toast.error('server busy');
            });

        setFormData(
            {
                name: "",
                email: "",
                message: "",
            }
        )

        setIsLoading(false)
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row justify-between gap-5">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
                    value={formData.name}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            name: e.target.value
                        });
                    }}
                />
                <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
                    value={formData.email}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            email: e.target.value
                        });
                    }}
                />
            </div>
            <div>
                <textarea
                    placeholder="Your Message"
                    rows={10}
                    className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
                    value={formData.message}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            message: e.target.value
                        });
                    }}
                />
            </div>
            {
                isFormSubmitted ? (
                    <div className="text-center">
                        <p className="text-lg text-neutral-700">Thank you for your message. I will get back to you soon.</p>
                    </div>
                ) : (
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-600 mt-4 px-4 py-2 rounded-md text-sm text-gray-800"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                )
            }
        </form>
    );
};
