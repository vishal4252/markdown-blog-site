"use client";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiRedux,
  SiJavascript,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import Link from "next/link";

const tools = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiGreensock />, name: "GSAP" },
  { icon: <TbBrandFramerMotion />, name: "Framer Motion" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <MdWeb />, name: "Odoo Frontend" },
  { icon: <SiJavascript />, name: "JavaScript ES6+" },
  { icon: <FaPython />, name: "Python" },
];

const AboutUs = () => {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Who We Are
          </h1>
          <p className="text-lg text-gray-600">
            We’re a passionate team of developers, designers, and dreamers
            building high-performance, responsive web solutions using modern
            tools like React, Tailwind CSS, GSAP, Locomotive.js, and Framer
            Motion.
          </p>
        </div>

        <div className="lg:w-1/2">
          <Image
            src="/about-banner.png"
            alt="Team working illustration"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="bg-background py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            To empower startups, creators, and enterprises by crafting visually
            stunning, performance-optimized, and user-friendly web experiences
            that delight users and drive growth.
          </p>
        </div>
      </div>

      <div className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">What We Work With</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center font-bold border border-indigo-600 p-4 rounded-xl hover:scale-110 transition-transform duration-300"
              >
                <div className="text-3xl md:text-5xl text-indigo-400">
                  {tool.icon}
                </div>
                <span className="mt-2 text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Meet the Creator</h2>
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/vishal-avatar.png"
              alt="Vishal"
              width={200}
              height={200}
              className="rounded-full shadow-md"
            />
            <h3 className="text-2xl font-semibold">Vishal</h3>
            <p className="text-gray-600 max-w-xl">
              I am a frontend developer with a passion for animation, user
              experience, and responsive design. Whether it’s a product showcase
              or a scroll-based portfolio, I love creating magic with clean code
              and creative energy.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Work Together?</h2>
        <p className="text-lg mb-6">
          Lets bring your vision to life with a website that stands out.
        </p>
        <Link
          href="/contact"
          className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
