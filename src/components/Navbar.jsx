import React from 'react';

export default function Navbar() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Robert Filep</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#projects" className="hover:text-teal-600">Projects</a></li>
                        <li><a href="#contact" className="hover:text-teal-600">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}