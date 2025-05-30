import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="bg-gray-100 py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="mb-8">Feel free to reach out. I’m always open to new projects, collaborations, or just a friendly chat about the latest in front-end development.</p>

                <div className="flex justify-center space-x-4">
                    <a
                        href="mailto:robertfilep@gmail.com"
                        className="inline-block px-6 py-3 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                    >
                        Email Me
                    </a>

                    <a
                        href="https://www.linkedin.com/in/robert-filep-417146264/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/robfil50219"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}