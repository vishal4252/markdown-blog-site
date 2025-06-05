"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 bg-background z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8 shadow-[0_4px_3px_-3px_rgba(200,200,200,0.9)]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="font-semibold hover:text-indigo-600 hover:font-semibold hover:scale-105 hover:border-b border-indigo-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <ModeToggle />
            <Button>
              <Link href="#">Log in →</Link>
            </Button>
          </div>
        </div>

        {/* Right Side (Mobile) */}
        <div className="flex lg:hidden items-center gap-4">
          <ModeToggle />
          <button
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inse z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Side Panel (Mobile Menu) */}
      <div
        className={`fixed top-0 right-0 z-50 bg-background h-full w-4/5 shadow-lg border-l transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          {/* Get Started inside panel (top left) */}
          <Link href="/" className="block">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
          </Link>

          {/* Close Icon */}
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 p-6">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-base font-semibold p-2 rounded border-b hover:text-white hover:bg-indigo-600"
            >
              {link.label}
            </Link>
          ))}

          {/* Login Link (bottom) */}
          <Link
            href="#"
            className="text-base font-semibold p-2 rounded hover:text-white hover:bg-indigo-600"
          >
            Log in →
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
