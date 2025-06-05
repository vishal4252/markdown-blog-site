"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Cards = ({ blogs = [] }) => {
  return (
    <section className="bg-background py-10 px-6 sm:px-12">
      <h2 className="text-4xl font-bold text-center mb-16">Latest Blogs</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogs.map((post, i) => (
          <div
            key={i}
            className="group relative bg-background border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <div className="overflow-hidden">
              <Image
                width={300}
                height={200}
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-5 backdrop-blur-sm bg-background">
              <span className="text-xs px-3 py-1 bg-[#9962FF] font-semibold rounded-full inline-block mb-3">
                {post.tag}
              </span>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-3">
                By {post.author} | {post.date}
              </p>
              <Button>
                <Link href={`blogpost/${post.slug}`}>Read More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
