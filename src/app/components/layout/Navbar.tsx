'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/tutors', label: 'Tutors' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-primary hover:text-indigo-600 transition-colors duration-300">
              Excellence Tuition
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-50 hover:scale-105 transform"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" className="hover:scale-105 transform transition-all duration-300">
              Book Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-600 hover:text-primary focus:outline-none focus:text-primary p-2 rounded-md transition-all duration-300 hover:bg-purple-50"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-neutral-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-primary block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-purple-50 hover:translate-x-1 transform"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button 
                href="/contact" 
                variant="primary" 
                fullWidth 
                className="hover:scale-105 transform transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 