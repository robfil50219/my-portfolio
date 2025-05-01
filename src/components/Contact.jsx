import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="bg-gray-100 py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="mb-8">Feel free to reach out for collaborations or a chat.</p>
                <a
                    href="mailto:robertfilep@gmail.com"
                    className="inline-block px-6 py-3 bg-teal-600 text-white rounded hover:bg-teal-700"
                >
                    robertfilep@gmail.com
                </a>
            </div>
        </section>
    );
}