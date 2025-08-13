"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    youtubeId: "P7y6LRaOVPM",
    quote: "How Logical CRM transformed COIT Cleaning & Restoration operations overnight",
    name: "COIT Cleaning & Restoration",
    title: "Operations Team",
    logo: "/images/logo-pro1.webp",
  },
  {
    id: 2,
    youtubeId: "KF0qXjedWo0",
    quote: "How Logical CRM expense tools gave Appliances USA Pro total financial control",
    name: "Appliances USA Pro",
    title: "Owner",
    logo: "/images/logo-pro2.webp",
  },
  {
    id: 3,
    youtubeId: "QPJI2R7rozQ",
    quote: "How Logical CRM transformed Brian Orchard’s HVAC business!",
    name: "Brian Orchard",
    title: "Owner, Everett Air",
    logo: "/images/logo-pro3.webp",
  },
  {
    id: 4,
    youtubeId: "_VApip3S7Fg",
    quote: "Logical CRM: the all-in-one solution for HVAC pros",
    name: "HVAC Pro",
    title: "Owner",
    logo: "/images/logo-pro4.webp",
  },
];

const workizVideoIds = [
  "OUoUvVLSjXo",
  "PPQ5lmZ-gkg",
  "03wUKqcuUDE",
  "bC4ayKxfCQA",
  "PWLpPUwKhnw",
];
const workizVideoTitles = [
  "Workiz Customer Testimonial",
  "Creating Workiz Automation rules",
  "Creating and managing items & services in Workiz",
  "Workiz for HVAC Pros: Real Results",
  "Workiz AI Review: Is It Worth It?",
];

const customerNames = [
  "Michael Carter",
  "Samantha Green",
  "David Kim",
  "Emily Johnson",
  "Robert Smith",
  "Olivia Brown",
  "Daniel Wilson",
  "Sophia Martinez",
  "William Lee",
  "Grace Thompson"
];

while (testimonials.length < 15) {
  const i = testimonials.length;
  testimonials.push({
    id: i + 1,
    youtubeId: workizVideoIds[i % workizVideoIds.length],
    quote: workizVideoTitles[i % workizVideoTitles.length],
    name: i >= 5 ? customerNames[i - 5] : `Customer ${i + 1}`,
    title: `Business Owner ${i + 1}`,
    logo: `/images/logo-pro${i + 1}.webp`,
  });
}

function getYoutubeThumbnail(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

const CARDS_VISIBLE = 4;
const SLIDE_INTERVAL = 3000;

export default function TestimonialVideos() {
  const [openId, setOpenId] = useState(null);
  const [startIdx, setStartIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef();

  // Carousel auto-slide logic
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setStartIdx((prev) => (prev + 1) % testimonials.length);
      }, 500); // match transition duration
    }, SLIDE_INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [startIdx]);

  // Get the visible cards (looping)
  const visibleCards = Array.from({ length: CARDS_VISIBLE }, (_, i) =>
    testimonials[(startIdx + i) % testimonials.length]
  );

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-[#f8fafc]">
      <div className="w-full max-w-7xl overflow-hidden">
        <div
          className="flex"
          style={{
            width: `${CARDS_VISIBLE * 340}px`,
            transition: isTransitioning ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none",
            transform: isTransitioning ? "translateX(-340px)" : "translateX(0)",
          }}
        >
          {visibleCards.map((t, idx) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow p-0 flex flex-col overflow-hidden relative mx-2"
              style={{ minWidth: 320, maxWidth: 340, width: 340, flex: "0 0 340px" }}
            >
              <div
                className="relative cursor-pointer group"
                onClick={() => setOpenId(t.id)}
              >
                <img
                  src={getYoutubeThumbnail(t.youtubeId)}
                  alt="Video thumbnail"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center justify-center bg-black bg-opacity-70 rounded-full w-16 h-16">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#fff" fillOpacity="0.2"/><polygon points="14,11 26,18 14,25" fill="#fff"/></svg>
                  </div>
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-base font-semibold">Watch video</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18C6 12 10 8 16 8V12C12 12 10 14 10 18H14V24H6V18Z" fill="#FFD600"/>
                    <path d="M18 18C18 12 22 8 28 8V12C24 12 22 14 22 18H26V24H18V18Z" fill="#FFD600"/>
                  </svg>
                </div>
                <p className="text-[#23282b] text-lg font-medium mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{t.quote}</p>
                <div className="flex items-center mt-auto">
                  <div>
                    <div className="font-bold text-[#23282b] text-base">{t.name}</div>
                    <div className="text-[#23282b] text-sm opacity-70">{t.title}</div>
                  </div>
                  <Image
                    src={t.logo}
                    alt={`Logo for ${t.name}`}
                    className="ml-auto h-8 w-auto max-w-[80px] object-contain border border-gray-200"
                    width={80}
                    height={32}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {openId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setOpenId(null)}
        >
          <div
            className="bg-black rounded-xl overflow-hidden shadow-lg relative"
            style={{ width: "90vw", maxWidth: 640 }}
            onClick={e => e.stopPropagation()}
          >
            <iframe
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${testimonials.find(t => t.id === openId).youtubeId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition"
              onClick={() => setOpenId(null)}
            >
              <svg width="24" height="24" fill="none" stroke="#23282b" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 