"use client";

import React, { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Integrations from '@/components/Integrations';
import FaqSection from '@/components/FaqSection';
import FooterSection   from '@/components/FooterSection';
import { hvacData } from '@/data/hvacData';
import { plumbingData } from '@/data/plumbingData';
import { electriciansData } from '@/data/electriciansData';
import { garageDoorData } from '@/data/garageDoorData';
import { junkRemovalData } from '@/data/junkRemovalData';

const validIndustries = [
  'towing-near-me', 'handyman', 'garage-door-repair', 'chimney-sweep', 'carpet-cleaning',
  'locksmith-near-me', 'locksmith', 'dryervent-cleaning', 'air-duct-cleaning', 'gate-repair', 'plumbers-near-me',
  'movers-nearme', 'appliance-repair', 'sliding-door-repair', 'pestcontrol', 'roofing',
  'fire-damage-restoration', 'water-damage-restoration', 'mold-removal-nearme', 'roadside-tows', 'allusa-towing', 'hvac', 'plumbing', 'electricians', 'junk-removal', 'all-industries',
];

export default function IndustryPage({ params }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const resolvedParams = use(params);
  const { industry } = resolvedParams;
  
  if (!validIndustries.includes(industry)) {
    notFound();
  }
  
  // Get industry-specific data
  const getIndustryData = (industry) => {
    switch (industry) {
      case 'hvac':
        return hvacData;
      case 'plumbing':
        return plumbingData;
      case 'electricians':
        return electriciansData;
      case 'garage-door-repair':
        return garageDoorData;
      case 'junk-removal':
        return junkRemovalData;
      default:
        return hvacData; // Default fallback
    }
  };

  const industryData = getIndustryData(industry);

  // Universal industry component with conditional sections
  return (
    <>
      <div className="flex flex-row min-h-[500px] w-full mt-20 bg-white">
        {/* Left Side */}
        <div className="bg-[#FFD400] flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="text-[#23282B] font-semibold mb-4 text-sm sm:text-base">{industryData.hero.subtitle}</div>
          <h1 className="font-extrabold leading-tight mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="bg-white px-2 rounded inline-block">{industryData.hero.title.highlight}</span><br />
            {industryData.hero.title.main}
          </h1>
          <p className="text-[#23282B] mb-8 max-w-[600px] text-base sm:text-lg md:text-xl">
            {industryData.hero.description}
          </p>
          <button className="bg-[#23282B] text-[#ffd400] font-semibold rounded-lg border-0 mb-8 cursor-pointer w-fit text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4">
            {industryData.hero.ctaButton}
          </button>
          <div className="flex items-center flex-col sm:flex-row gap-4 sm:gap-8">
            {industryData.hero.ratings.map((rating, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={rating.logo} alt={rating.alt} className="h-8 sm:h-10" />
                <span className="text-[#FFD400]">{rating.stars}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 bg-white flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
          <img src={industryData.hero.heroImage} alt={`${industryData.hero.subtitle} Hero`} className="w-full h-full object-cover" />
          <div className="absolute left-0 bg-black/30 rounded-2xl text-white max-w-[400px] bottom-4 sm:bottom-8 p-4 sm:p-6 md:p-8 mx-4">
            <div className="font-bold text-base sm:text-lg">{industryData.hero.testimonial.name}</div>
            <div className="text-sm sm:text-base">{industryData.hero.testimonial.title}</div>
            <div className="text-[#FFD400] font-semibold mt-2 cursor-pointer text-base sm:text-lg">
              {industryData.hero.testimonial.videoText}
            </div>
          </div>
        </div>
      </div>
      
      {/* Preferred Vendor Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 mt-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-gray-800 font-normal text-lg sm:text-xl md:text-2xl tracking-wider mb-6 sm:mb-8">
            {industryData.preferredVendors.title}
          </h2>
          <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-12 flex-wrap">
            {industryData.preferredVendors.logos.map((logo, index) => (
              <div key={index}>
                <img src={logo.src} alt={logo.alt} className="h-8 sm:h-10 md:h-11 mb-2" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Feature Cards Section */}
      <section className="bg-[#f7f9fa] py-12 mt-0">
        <div className="max-w-[1200px] mx-auto flex gap-8 flex-wrap justify-center">
          {industryData.featureCards.map((card, index) => (
            <div 
              key={index} 
              className="flex-1 min-w-[400px] max-w-[600px] rounded-3xl p-0 relative flex flex-row justify-center overflow-hidden shadow-md"
              style={{
                color: card.textColor,
                background: card.background
              }}
            >
              {/* Text Content (Left) */}
              <div className="flex-1 px-8 py-10 flex flex-col justify-center min-w-0">
                <div 
                  className="text-xs font-medium uppercase tracking-wide mb-2"
                  style={{ color: card.subtitleColor || card.textColor }}
                >
                  {card.subtitle}
                </div>
                <div 
                  className={`font-bold leading-tight mb-6 ${card.type === 'sales-proposals' ? 'text-[40px] tracking-wide flex flex-col' : 'text-[34px] -tracking-wide block'}`}
                  style={{ color: card.titleColor || card.textColor }}
                >
                  {Array.isArray(card.title) ? (
                    card.title.map((line, i) => <span key={i}>{line}</span>)
                  ) : (
                    card.title
                  )}
                </div>
                <div className="text-base font-normal mb-8" style={{ color: card.textColor }}>
                  {card.description}
                </div>
                <div className="justify-start mt-4 hidden md:flex">
                  <a 
                    href={card.ctaUrl} 
                    className="bg-transparent font-semibold text-base px-8 py-3 rounded-lg no-underline transition-all duration-200 hover:opacity-80"
                    style={{ 
                      border: `2px solid ${card.textColor}`, 
                      color: card.textColor
                    }}
                  >
                    {card.ctaText}
                  </a>
                </div>
                {/* Mobile Image (hidden on desktop) */}
                <div className="w-full mt-6 block md:hidden">
                  <img
                    src={card.mobileImage}
                    alt={`${card.subtitle} Mobile`}
                    className="w-full h-auto rounded-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              {/* Desktop Image (Right, hidden on mobile) */}
              <div 
                className={`${card.type === 'sales-proposals' ? 'flex-[0_0_50%]' : 'flex-[0_0_60%]'} hidden md:flex items-center justify-end pr-0`}
              >
                <img
                  src={card.desktopImage}
                  alt={card.subtitle}
                  className="w-[90%] max-w-[320px] h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Dynamic Sections */}
      {industryData.sections.map((section, index) => (
        <section 
          key={section.id} 
          className="w-full flex gap-12 items-center flex-wrap justify-center py-16"
          style={{ background: section.background }}
        >
          {section.layout === 'image-left' ? (
            <>
              {/* Left: Image */}
              <div className="flex-1 min-w-[340px] max-w-[600px] flex justify-center">
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className={`w-full max-w-[600px] rounded-[20px] ${section.id !== 'pricebook' ? 'shadow-[0_4px_32px_rgba(0,0,0,0.10)]' : ''}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Right: Text Content */}
              <div className="flex-1 min-w-[340px] max-w-[600px] flex flex-col justify-center gap-3">
                <div 
                  className="font-bold text-xs tracking-wide mb-1 uppercase font-['Plus_Jakarta_Sans']"
                  style={{ color: section.subtitleColor }}
                >
                  {section.subtitle}
                </div>
                <div className="text-[#23282B] font-bold text-[40px] mb-2 leading-tight font-['Plus_Jakarta_Sans']">
                  {section.title}
                </div>
                <div className="text-[#23282B] text-lg font-normal mb-3 leading-relaxed">
                  {section.description}
                </div>
                {section.ctaType === 'button' ? (
                  <button className="bg-[#FFD400] text-[#23282B] font-semibold text-lg px-7 py-3 rounded-lg border-0 cursor-pointer w-fit shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    {section.ctaText}
                  </button>
                ) : (
                  <a href={section.ctaUrl} className="text-[#23282B] font-medium text-lg no-underline mt-1 font-['Plus_Jakarta_Sans'] inline-block">
                    {section.ctaText}
                  </a>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Left: Text Content */}
              <div className="flex-1 min-w-[340px] max-w-[600px] flex flex-col justify-center gap-3 pl-8">
                <div 
                  className={`font-bold ${section.id === 'scheduling' ? 'text-xs' : 'text-sm'} tracking-wide mb-2 uppercase font-['Plus_Jakarta_Sans']`}
                  style={{ color: section.subtitleColor }}
                >
                  {section.subtitle}
                </div>
                <div 
                  className={`text-[#23282B] ${section.id === 'purchase-orders' ? 'font-medium' : 'font-bold'} text-[35px] mb-4 leading-tight font-['Plus_Jakarta_Sans']`}
                >
                  {section.title}
                </div>
                <div className={`text-[#23282B] text-lg font-normal ${section.ctaType === 'button' ? 'mb-6' : 'mb-3'} leading-relaxed`}>
                  {section.description}
                </div>
                {section.ctaType === 'button' ? (
                  <button 
                    className={`bg-[#FFD400] text-[#23282B] font-semibold ${section.id === 'purchase-orders' ? 'text-[22px] px-11 py-[18px]' : 'text-lg px-7 py-3'} rounded-lg border-0 cursor-pointer w-fit shadow-[0_2px_8px_rgba(0,0,0,0.06)]`}
                  >
                    {section.ctaText}
                  </button>
                ) : (
                  <a href={section.ctaUrl} className="text-[#23282B] font-medium text-lg no-underline mt-1 font-['Plus_Jakarta_Sans'] inline-block">
                    {section.ctaText}
                  </a>
                )}
              </div>
              {/* Right: Image */}
              <div className="flex-1 min-w-[340px] max-w-[700px] flex justify-center items-center pr-8">
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="w-full max-w-[600px] rounded-3xl shadow-[0_4px_32px_rgba(0,0,0,0.10)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </>
          )}
        </section>
      ))}
      
      {/* Industry CTA Section */}
      <section className="w-[calc(100%-48px)] max-w-[1200px] bg-[#FFD400] rounded-[32px] my-12 mx-auto py-[35px] flex items-center justify-center gap-8 flex-wrap">
        {/* Left: Text Content */}
        <div className="flex-[2] min-w-[320px] flex flex-col justify-center pl-12 relative">
          <div className="text-[#23282B] font-bold text-[32px] font-['Plus_Jakarta_Sans'] mb-3 leading-tight">
            {industryData.ctaSection.title}
          </div>
          <div className="text-[#23282B] text-base font-normal font-['Plus_Jakarta_Sans'] mb-0 leading-relaxed">
            {industryData.ctaSection.description}
          </div>
        </div>
        {/* Right: Buttons */}
        <div className="flex-1 min-w-[260px] flex flex-col gap-1.5 items-center pr-10 relative">
          <button className="bg-[#23282B] text-[#FFD400] font-semibold text-lg font-['Plus_Jakarta_Sans'] py-3.5 px-0 rounded-lg border-0 cursor-pointer w-full max-w-[200px] mb-2">
            {industryData.ctaSection.primaryButton}
          </button>
          <button className="bg-transparent text-[#23282B] text-lg font-['Plus_Jakarta_Sans'] py-3.5 px-0 rounded-lg border-2 border-[#23282B] cursor-pointer w-full max-w-[200px]">
            {industryData.ctaSection.secondaryButton}
          </button>
        </div>
      </section>

      {/* Multi-day Jobs Section - Conditional for Electricians */}
      {industry === 'electricians' && (
        <section className="w-full flex gap-12 items-center flex-wrap justify-center py-16 bg-[#f6f8fa]">
          <div className="flex-1 min-w-[340px] max-w-[600px] flex justify-center">
            <img
              src="/images/multiday-jobs.webp"
              alt="Multi-day Jobs"
              className="w-full max-w-[600px] rounded-3xl shadow-[0_4px_32px_rgba(0,0,0,0.10)]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex-1 min-w-[340px] max-w-[600px] flex flex-col justify-center gap-3">
            <div className="font-bold text-sm tracking-wide mb-2 uppercase font-['Plus_Jakarta_Sans']" style={{ color: '#f25c4d' }}>
              MULTI-DAY JOBS
            </div>
            <div className="text-[#23282B] font-bold text-[40px] mb-2 leading-tight font-['Plus_Jakarta_Sans']">
              Track progress across multiple days
            </div>
            <div className="text-[#23282B] text-lg font-normal mb-3 leading-relaxed">
              Manage complex electrical projects that span multiple days. Track progress, materials, and team assignments with our comprehensive multi-day job management system.
            </div>
            <a href="#" className="text-[#23282B] font-medium text-lg no-underline mt-1 font-['Plus_Jakarta_Sans'] inline-block">
              Learn more →
            </a>
          </div>
        </section>
      )}

      {/* Win 3X More Jobs Section - Conditional for Electricians */}
      {industry === 'electricians' && (
        <section className="bg-[#23282B] py-6 w-full">
          <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-[#FFD400] text-2xl font-bold font-['Plus_Jakarta_Sans'] mb-2">
                Win 3X More Jobs with Professional Estimates
              </h2>
              <p className="text-white text-base">
                Send professional estimates that convert more leads into paying customers
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-[#FFD400] text-[#23282B] font-semibold text-lg px-8 py-3 rounded-lg border-0 cursor-pointer">
                Start Free Trial
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section - Conditional for Plumbing */}
      {industry === 'plumbing' && (
        <div className="bg-white py-20 text-center max-w-[1200px] mx-auto">
          <h2 className="text-[#23282B] text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-[600px] mx-auto">
            Select the perfect plan for your plumbing business. All plans include our core features.
          </p>
          
          <div className="flex justify-center items-center mb-8">
            <span className="text-[#23282B] font-medium mr-4">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-14 h-8 bg-gray-300 rounded-full cursor-pointer transition-colors duration-200"></div>
              <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200"></div>
            </div>
            <span className="text-[#23282B] font-medium ml-4">Yearly (Save 20%)</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-[#23282B] mb-2">Starter</h3>
              <div className="text-3xl font-bold text-[#23282B] mb-4">$49<span className="text-base text-gray-500">/month</span></div>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Basic scheduling</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Invoice management</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Customer database</li>
              </ul>
              <button className="w-full bg-gray-100 text-[#23282B] py-2 rounded-lg font-semibold">Get Started</button>
            </div>

            <div className="bg-[#FFD400] border-2 border-[#FFD400] rounded-lg p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#23282B] text-[#FFD400] px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-[#23282B] mb-2">Professional</h3>
              <div className="text-3xl font-bold text-[#23282B] mb-4">$99<span className="text-base text-gray-500">/month</span></div>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Everything in Starter</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Advanced scheduling</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Price book</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Online booking</li>
              </ul>
              <button className="w-full bg-[#23282B] text-[#FFD400] py-2 rounded-lg font-semibold">Get Started</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-[#23282B] mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-[#23282B] mb-4">$199<span className="text-base text-gray-500">/month</span></div>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Everything in Professional</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Advanced reporting</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>API access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Priority support</li>
              </ul>
              <button className="w-full bg-gray-100 text-[#23282B] py-2 rounded-lg font-semibold">Contact Sales</button>
            </div>
          </div>
        </div>
      )}

      {/* Client Plans Section - Conditional for Plumbing */}
      {industry === 'plumbing' && (
        <section className="w-full flex gap-12 items-center flex-wrap justify-center py-16 bg-white">
          <div className="flex-1 min-w-[340px] max-w-[600px] flex flex-col justify-center gap-3 pl-8">
            <div className="font-bold text-sm tracking-wide mb-2 uppercase font-['Plus_Jakarta_Sans']" style={{ color: '#f25c4d' }}>
              CLIENT PLANS
            </div>
            <div className="text-[#23282B] font-bold text-[35px] mb-4 leading-tight font-['Plus_Jakarta_Sans']">
              Boost recurring revenue with maintenance plans
            </div>
            <div className="text-[#23282B] text-lg font-normal mb-3 leading-relaxed">
              Increase customer lifetime value by offering comprehensive maintenance plans. Keep your plumbing systems running smoothly year-round with scheduled check-ups and priority service.
            </div>
            <a href="#" className="text-[#23282B] font-medium text-lg no-underline mt-1 font-['Plus_Jakarta_Sans'] inline-block">
              Learn more →
            </a>
          </div>
          <div className="flex-1 min-w-[340px] max-w-[700px] flex justify-center items-center pr-8">
            <img
              src="/images/client-plans.png"
              alt="Client Plans Management"
              className="w-full max-w-[600px] rounded-3xl shadow-[0_4px_32px_rgba(0,0,0,0.10)]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      )}

      {/* Garage Door Specific Video Section - Conditional for Garage Door Repair */}
      {industry === 'garage-door-repair' && (
        <section className="bg-[#23282B] py-16">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <h2 className="text-[#FFD400] text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
              See How Garage Door Pros Use Workiz
            </h2>
            <p className="text-white text-lg mb-8 max-w-[600px] mx-auto">
              Watch real garage door repair professionals share their success stories with Workiz
            </p>
            <div className="bg-gray-800 rounded-lg p-8 max-w-[800px] mx-auto">
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <button 
                  className="bg-[#FFD400] text-[#23282B] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold hover:scale-105 transition-transform"
                  onClick={() => setIsVideoOpen(true)}
                >
                  ▶
                </button>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Success Story: Johnson Garage Doors</h3>
              <p className="text-gray-300">Learn how this family business increased efficiency by 40% using Workiz</p>
            </div>
          </div>
        </section>
      )}

      {/* Junk Removal Specific Features - Conditional for Junk Removal */}
      {industry === 'junk-removal' && (
        <section className="w-full flex gap-12 items-center flex-wrap justify-center py-16 bg-[#f6f8fa]">
          <div className="flex-1 min-w-[340px] max-w-[600px] flex justify-center">
            <img
              src="/images/junk-doctors.jpg"
              alt="Junk Removal Team"
              className="w-full max-w-[600px] rounded-3xl shadow-[0_4px_32px_rgba(0,0,0,0.10)]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex-1 min-w-[340px] max-w-[600px] flex flex-col justify-center gap-3">
            <div className="font-bold text-sm tracking-wide mb-2 uppercase font-['Plus_Jakarta_Sans']" style={{ color: '#22c55e' }}>
              VOLUME PRICING
            </div>
            <div className="text-[#23282B] font-bold text-[40px] mb-2 leading-tight font-['Plus_Jakarta_Sans']">
              Smart pricing for any job size
            </div>
            <div className="text-[#23282B] text-lg font-normal mb-3 leading-relaxed">
              Automatically calculate pricing based on volume, weight, and disposal requirements. Our smart pricing engine helps you quote accurately every time.
            </div>
            <button className="bg-[#FFD400] text-[#23282B] font-semibold text-lg px-7 py-3 rounded-lg border-0 cursor-pointer w-fit shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              Try Volume Pricing
            </button>
          </div>
        </section>
      )}
     <Integrations />
     <FaqSection />
     <FooterSection />
     
    </>
  );
}
