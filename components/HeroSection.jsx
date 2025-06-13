"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Typed from "typed.js";

const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developement",
        "Coding",
        "Frontend Developer",
        "Python Learning",
      ],
      typeSpeed: 70,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left: Text content */}
        <div className="text-center lg:text-left lg:w-1/2 order-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Build Better Products with Confidence
          </h1>
          <p className="mt-4 text-lg">
            A modern platform to empower your business through collaboration,
            design, and efficient code.{" "}
            <span className="text-2xl font-semibold text-indigo-600" ref={el} />
          </p>
          <div className="mt-6">
            <Button size="lg">
              <Link
                href="/blog"
                className="inline-block text-white font-semibold rounded-lg shadow transition duration-300"
              >
                Get Started
              </Link>
            </Button>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="lg:w-1/2 order-2">
          <Image
            width={500}
            height={300}
            src="/banner.png"
            alt="Hero"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
