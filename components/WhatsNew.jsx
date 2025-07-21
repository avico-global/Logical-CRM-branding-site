"use client";
import { useState } from "react";

const baseArticles = [
  {
    image: "/images/whatsnew-1.webp",
    category: "FEATURED",
    title: "Arkansas Electrical License Requirements, Renewal, and Reciprocity Explained",
    link: "https://www.workiz.com/blog/tips-tricks/google-my-business-ai-qa-feature/",
    linkText: "Read article →",
  },
  {
    image: "/images/whatsnew-2.webp",
    category: "FIELD SERVICE",
    title: "How Do I Get My Plumbing License in New York?",
    link: "#",
    linkText: "Listen to podcast →",
  },
  {
    image: "https://img.youtube.com/vi/KlcW3YwIaYw/hqdefault.jpg",
    category: "FIELD SERVICE",
    title: "Mastering the locksmith business: Guide to growth",
    videoId: "KlcW3YwIaYw",
    linkText: "Listen to podcast →",
    isVideo: true,
  },
  {
    image: "/images/whatsnew-3.webp",
    category: "NEWS",
    title: "Top 11 Jobber alternatives: find the perfect match",
    link: "#",
    linkText: "Read article →",
  },
  {
    image: "/images/whatsnew-5.webp",
    category: "FIELD SERVICE",
    title: "Google My Business: Google is replacing the legacy Q&A feature in Google Maps",
    link: "#",
    linkText: "Read article →",
  },
  {
    image: "https://img.youtube.com/vi/cScJ8v_Evkc/hqdefault.jpg",
    category: "HVAC",
    title: "How to increase lead generation for your service business",
    videoId: "cScJ8v_Evkc",
    linkText: "Listen to podcast →",
    isVideo: true,
  },
  {
    image: "/images/whatsnew-7.webp",
    category: "HVAC",
    title: "Massachusetts electrician licensing: Requirements, exam and reciprocity",
    link: "#",
    linkText: "Read article →",
  },
  {
    image: "/images/whatsnew-8.webp",
    category: "FIELD SERVICE",
    title: "How tariffs on China and Mexico could shake up the field service industry",
    link: "#",
    linkText: "Read article →",
  },
  {
    image: "https://img.youtube.com/vi/HIWWnhPWL1E/hqdefault.jpg",
    category: "ELECTRICIAN",
    title: "The importance of a business mindset for growth",
    videoId: "HIWWnhPWL1E",
    linkText: "Listen to podcast →",
    isVideo: true,
  },
  {
    image: "/images/whatsnew-10.webp",
    category: "NEWS",
    title: "Getting Your HVAC License in Arizona",
    link: "#",
    linkText: "Read article →",
  },
  {
    image: "/images/whatsnew-11.webp",
    category: "FIELD SERVICE",
    title: "Should HVAC technicians be given equity in the business?",
    link: "#",
    linkText: "Read article →",
  },
  {
    image: "https://img.youtube.com/vi/iYOhFAuG5Ao/hqdefault.jpg",
    category: "PLUMBING",
    title: "How to start a franchise as a couple: Real lessons in growth and partnership",
    videoId: "iYOhFAuG5Ao",
    linkText: "Listen to podcast →",
    isVideo: true,
  },
  {
    image: "/images/whatsnew-13.webp",
    category: "HVAC",
    title: "AI and field service: Transforming HVAC, plumbing, and electrical work – what you need to know",
    link: "#",
    linkText: "Read article →",
  },
  {
    image: "/images/whatsnew-14.webp",
    category: "FIELD SERVICE",
    title: "Beyond burnout: Why mental health matters in field service (and how to protect it)",
    link: "#",
    linkText: "Read article →",
  },
  {
    image: "https://img.youtube.com/vi/6RBj42BUoHg/hqdefault.jpg",
    category: "ELECTRICIAN",
    title: "How to start a successful garage door business with proven marketing tips",
    videoId: "6RBj42BUoHg",
    linkText: "Listen to podcast →",
    isVideo: true,
  },
  {
    image: "/images/whatsnew-16.webp",
    category: "NEWS",
    title: "The power of performance pay: boost team motivation and drive business growth",
    link: "#",
    linkText: "Read article →",
  },
  {
    image: "/images/whatsnew-17.webp",
    category: "FIELD SERVICE",
    title: "How Junk Doctors skyrocketed their online reviews and reputation with NiceJob and Workiz",
    link: "#",
    linkText: "Read article →",
  },
  {
    image: "https://img.youtube.com/vi/tDgtpXAf45Y/hqdefault.jpg",
    category: "PLUMBING",
    title: "How to scale a service business with automation",
    videoId: "tDgtpXAf45Y",
    linkText: "Listen to podcast →",
    isVideo: true,
  },
  {
    image: "/images/whatsnew-19.webp",
    category: "HVAC",
    title: "Maximize your lead generation: The ultimate playbook",
    link: "#",
    linkText: "Read article →",
  },
  {
    image: "/images/whatsnew-20.webp",
    category: "FIELD SERVICE",
    title: "From miscommunication to mission accomplished: effective communication for field service teams",
    link: "#",
    linkText: "Read article →",
  },
];

export default function WhatsNew() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");

  const handleVideoClick = (videoId) => {
    setCurrentVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoId("");
  };

  const CARDS_VISIBLE = 4;
  const [startIdx, setStartIdx] = useState(0);
  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx < baseArticles.length - CARDS_VISIBLE;
  const handleLeft = () => { if (canGoLeft) setStartIdx(startIdx - 1); };
  const handleRight = () => { if (canGoRight) setStartIdx(startIdx + 1); };

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-[#23282b] font-bold text-3xl mt-8 mb-10 pl-20" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          What's new?
        </h2>
        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#f6f8fa] border border-[#f3f4f6] hover:bg-[#f3f4f6] transition disabled:opacity-40"
            onClick={handleLeft}
            disabled={!canGoLeft}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M18.5 7l-5 5 5 5" stroke="#23282b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Cards Row */}
          <div className="flex flex-row justify-center overflow-x-hidden w-full px-4">
            {baseArticles.slice(startIdx, startIdx + CARDS_VISIBLE).map((a, i) => (
              <div
                key={i}
                className="flex flex-col justify-between bg-white rounded-lg shadow-sm min-h-[400px] p-4 w-[260px] mx-2"
                onClick={a.isVideo ? () => handleVideoClick(a.videoId) : undefined}
              >
                <div>
                  <div className="w-full h-[180px] mb-6 rounded-md overflow-hidden bg-[#e5e7eb] relative">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm" style={{ display: "none" }}>
                      Image not available
                    </div>
                  </div>
                  <div className="uppercase text-xs font-semibold text-[#2563eb] mb-2 tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {a.category}
                  </div>
                  <div
                    className="text-[#23282b] font-bold mb-4 leading-tight text-2xl line-clamp-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: '52px' }}
                  >
                    {a.title}
                  </div>
                </div>
                <div>
                  {a.isVideo ? (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVideoClick(a.videoId);
                      }}
                      className="text-[#23282b] text-lg font-medium flex items-center gap-2 hover:underline cursor-pointer"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {a.linkText}
                    </div>
                  ) : (
                    <a
                      href={a.link}
                      className="text-[#23282b] text-lg font-medium flex items-center gap-2 hover:underline"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {a.linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#f6f8fa] border border-[#f3f4f6] hover:bg-[#f3f4f6] transition disabled:opacity-40"
            onClick={handleRight}
            disabled={!canGoRight}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M8.5 7l5 5-5 5" stroke="#23282b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeVideoModal}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideoModal}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 z-10"
            >
              ✕
            </button>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
