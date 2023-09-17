'use client'

import React, { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-black">Home</a>
                <a href="#" className="text-gray-700 hover:text-black">About</a>
                <a href="#" className="text-gray-700 hover:text-black">Services</a>
                <a href="#" className="text-gray-700 hover:text-black">Contact</a>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <button
                    className="p-2"
                    onClick={() => setIsOpen(false)}
                >
                    Close
                </button>
                <div className="flex flex-col space-y-4 mt-8">
                    <a href="#" className="text-gray-700 hover:text-black">Home</a>
                    <a href="#" className="text-gray-700 hover:text-black">About</a>
                    <a href="#" className="text-gray-700 hover:text-black">Services</a>
                    <a href="#" className="text-gray-700 hover:text-black">Contact</a>
                </div>
            </div>
        </div>
    );
}
