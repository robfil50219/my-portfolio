import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white border-t py-6">
            <div className="container mx-auto px-6 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} Robert Filep. All rights reserved.
            </div>
        </footer>
    );
}