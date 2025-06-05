"use client";
import Link from "next/link";
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-background pt-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-2">What Our Clients Say</h2>
        <p className="mb-12">Hear from our satisfied customers</p>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              quote:
                "This service has been a game-changer for our business. Highly recommend!",
              name: "John Doe",
              role: "CEO, Company A",
            },
            {
              quote:
                "Amazing experience! The team was professional and the results were outstanding.",
              name: "Jane Smith",
              role: "Marketing Director, Company B",
            },
            {
              quote:
                "Exceptional service and support. We couldn’t be happier with the results.",
              name: "Michael Brown",
              role: "CTO, Company C",
            },
            {
              quote:
                "Exceptional service and support. We couldn’t be happier with the results.",
              name: "Michael Brown",
              role: "CTO, Company C",
            },
            {
              quote:
                "Amazing experience! The team was professional and the results were outstanding.",
              name: "Jane Smith",
              role: "Marketing Director, Company B",
            },
            {
              quote:
                "This service has been a game-changer for our business. Highly recommend!",
              name: "John Doe",
              role: "CEO, Company A",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-background p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <p className="italic mb-4">“{item.quote}”</p>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>
          ))}
        </div>
        <div className="bg-indigo-600 text-white mt-16 py-16 px-6 text-center">
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
      </div>
    </section>
  );
};

export default Testimonials;
