import React, { useState } from 'react';
import profilePic from '../assets/profile.jpg'; // or '/images/profile.jpg' if using public/

export default function Hero() {
    const [zoomed, setZoomed] = useState(false);

    return (
        <>
            <section className="bg-teal-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    {/* Profile picture with border, zoom, and shadow-on-hover */}
                    <img
                        src={profilePic}
                        alt="Robert Filep"
                        className="
              w-32 h-32 rounded-full mx-auto mb-4 object-cover
              border-4 border-white
              cursor-pointer
              transition-transform transition-shadow duration-300
              hover:scale-105 hover:shadow-xl
            "
                        onClick={() => setZoomed(true)}
                    />
                    <h2 className="text-4xl font-bold mb-4">Hi, I’m Robert</h2>
                    <p className="text-xl mb-8">Front-End Developer</p>
                </div>
            </section>

            {/* Lightbox overlay */}
            {zoomed && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setZoomed(false)}
                >
                    <img
                        src={profilePic}
                        alt="Robert Filep"
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                    />
                </div>
            )}
        </>
    );
}