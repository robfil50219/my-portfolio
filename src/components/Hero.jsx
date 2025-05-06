import React, { useState } from 'react';
import profilePic from '../assets/profile.jpg';

export default function Hero({ aboutOpen, toggleAbout }) {
    const [zoomed, setZoomed] = useState(false);

    return (
        <>
            <section className="relative bg-gradient-to-r from-teal-500 to-teal-700 text-white py-20 overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <img
                        src={profilePic}
                        alt="Robert Filep"
                        className="
              w-32 h-32 rounded-full mx-auto mb-4 object-cover
              border-4 border-white cursor-pointer
              transition-transform transition-shadow duration-300
              hover:scale-105 hover:shadow-xl
            "
                        onClick={() => setZoomed(true)}
                    />
                    <h2 className="text-4xl font-bold mb-4">Hi, I’m Robert</h2>
                    <p className="text-xl mb-4">Front-End Developer & Designer</p>

                    <button
                        onClick={toggleAbout}
                        className="
              mt-2 px-4 py-2
              bg-white/20 hover:bg-white/30
              text-white text-sm
              rounded-md
              shadow-md hover:shadow-lg
              transition
            "
                    >
                        About Me {aboutOpen ? '▲' : '▼'}
                    </button>
                </div>
            </section>

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
