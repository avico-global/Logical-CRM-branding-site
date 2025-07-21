"use client";

import React, { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Integrations from '@/components/Integrations';
import FaqSection from '@/components/FaqSection';
import FooterSection   from '@/components/FooterSection';

const validIndustries = [
  'towing-near-me', 'handyman', 'garage-door-repair', 'chimney-sweep', 'carpet-cleaning',
  'locksmith-near-me', 'locksmith', 'dryervent-cleaning', 'air-duct-cleaning', 'gate-repair', 'plumbers-near-me',
  'movers-nearme', 'appliance-repair', 'sliding-door-repair', 'pestcontrol', 'roofing',
  'fire-damage-restoration', 'water-damage-restoration', 'mold-removal-nearme', 'roadside-tows', 'allusa-towing', 'hvac', 'plumbing', 'electricians', 'junk-removal', 'all-industries',
  // Add other slugs as needed
];

export default function IndustryPage({ params }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isJunkRemovalVideoOpen, setIsJunkRemovalVideoOpen] = useState(false);
  const resolvedParams = use(params);
  const { industry } = resolvedParams;
  if (!validIndustries.includes(industry)) {
    notFound();
  }

   
  // eslint-disable-next-line spellcheck/spell-checker
  if (industry === 'hvac') {
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'row', minHeight: '500px', width: '100%', marginTop: '80px', border: 'none', boxShadow: 'none', background: '#fff' }} className="flex flex-row">
          {/* Left Side */}
          <div style={{ background: '#FFD400', flex: 1, padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="p-6 sm:p-8 md:p-12 lg:p-16">
            <div style={{ color: '#23282B', fontWeight: 600, marginBottom: 16 }} className="text-sm sm:text-base">HVAC SOFTWARE</div>
            <h1 style={{ fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <span style={{ background: '#fff', padding: '0 8px', borderRadius: '4px', display: 'inline-block' }}>Grow your business</span><br />
              with the best HVAC software
            </h1>
            <p style={{ color: '#23282B', marginBottom: 32, maxWidth: 600 }} className="text-base sm:text-lg md:text-xl">
              Grow and scale your HVAC business all year long with the home service industry's top business management platform. Schedule, dispatch, send invoices and estimates all in one place.
            </p>
            <button style={{ background: '#23282B', color: '#ffd400', fontWeight: 600, borderRadius: 8, border: 'none', marginBottom: 32, cursor: 'pointer', width: 'fit-content' }} className="text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4">Book a demo</button>
            <div style={{ display: 'flex', alignItems: 'center' }} className="flex-col sm:flex-row gap-4 sm:gap-8">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/captera.webp" alt="Capterra" className="h-8 sm:h-10" />
                <span style={{ color: '#FFD400' }}>★★★★★</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/software1.webp" alt="Software Advice" className="h-8 sm:h-10" />
                <span style={{ color: '#FFD400' }}>★★★★★</span>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div style={{ flex: 1, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: 'none', boxShadow: 'none' }} className="min-h-[300px] md:min-h-[500px]">
            <img src="/images/hvac1.webp" alt="HVAC Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
            <div style={{ position: 'absolute', left: 0, background: 'rgba(0,0,0,0.3)', borderRadius: 16, color: '#fff', maxWidth: 400 }} className="bottom-4 sm:bottom-8 p-4 sm:p-6 md:p-8 mx-4">
              <div className="font-bold text-base sm:text-lg">Dan Johnson</div>
              <div className="text-sm sm:text-base">CEO & Founder of Einstein Pros</div>
              <div style={{ color: '#FFD400', fontWeight: 600, marginTop: 8, cursor: 'pointer' }} className="text-base sm:text-lg">▶ Watch testimonial</div>
            </div>
          </div>
        </div>
        {/* Preferred Vendor Section */}
        <section className="bg-white py-8 sm:py-12 md:py-16 mt-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-gray-800 font-normal text-lg sm:text-xl md:text-2xl tracking-wider mb-6 sm:mb-8">
              WORKIZ IS THE PREFERRED VENDOR OF:
            </h2>
            <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-12 flex-wrap">
              <div>
                <img src="/images/american-logo.svg" alt="American Standard" className="h-8 sm:h-10 md:h-11 mb-2" />
              </div>
              <div>
                <img src="/images/trane-logo.svg" alt="Trane" className="h-8 sm:h-10 md:h-11 mb-2" />
              </div>
              <div>
                <img src="/images/searchking-logo.svg" alt="SearchKings" className="h-8 sm:h-10 md:h-11" />
              </div>
              <div>
                <img src="/images/jb-logo.svg" alt="JB Warranties" className="h-8 sm:h-10 md:h-11" />
              </div>
            </div>
          </div>
        </section>
        {/* Feature Cards Section */}
        <section style={{ background: '#f7f9fa', padding: '48px 0', marginTop: 0 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Left Card: Sales Proposals */}
            <div style={{ flex: 1, minWidth: 400, maxWidth: 600, borderRadius: 24, padding: 0, color: '#fff', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(169.48deg, #096187 5.7%, #23282B 98.96%)' }}>
              {/* Text Content (Left) */}
              <div style={{ flex: 1, padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8, color: '#fff' }}>sales proposals</div>
                <div
  style={{
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 24,
    color: '#ffd400',
    letterSpacing: 1,
    display: 'flex',
    flexDirection: 'column',
  }}
>
  <span>Win 25%</span>
  <span>more jobs</span>
</div>

                <div style={{ fontSize: 16, fontWeight: 400, marginBottom: 32, color: '#fff' }}>
                  Close larger deals by<br className="hidden-md" />providing sales proposals<br className="hidden-md" />to fit your customers<br className="hidden-md" />budget requirements.
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 16 }} className="hidden-mobile">
                  <a href="https://www.workiz.com/features/sales-proposals/" style={{ border: '2px solid #fff', color: '#fff', background: 'transparent', fontWeight: 600, fontSize: 16, padding: '12px 32px', borderRadius: 8, textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}>Learn more</a>
                </div>
                {/* Mobile Image (hidden on desktop) */}
                <div style={{ width: '100%', marginTop: 24, display: 'none' }} className="show-mobile">
                  <img
                    src="https://www.workiz.com/wp-content/uploads/2023/07/hl-sales-proposals-mob.webp"
                    alt="Hl Sales Proposals Mob"
                    style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              {/* Desktop Image (Right, hidden on mobile) */}
              <div style={{ flex: '0 0 50%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 0 }} className="hidden-mobile">
                <img
                  src="https://www.workiz.com/wp-content/uploads/2023/07/hl-sales-proposals.webp"
                  alt="Sales Proposals"
                  style={{ width: '90%', maxWidth: 320, height: 'auto', borderRadius: 0 }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Right Card: Service Plans */}
            <div style={{ flex: 1, minWidth: 400, maxWidth: 600, borderRadius: 24, padding: 0, color: '#23282B', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #F6F8FA 0%, #E4E9EC 100%)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              {/* Text Content (Left) */}
              <div style={{ flex: 1, padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8, color: '#2563eb' }}>Service plans</div>
                <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.1, marginBottom: 24, color: '#3b4b52', letterSpacing: -1 }}>Recurring revenue all year round</div>
                <div style={{ fontSize: 16, fontWeight: 400, marginBottom: 32, color: '#23282B' }}>
                  Boost company profits and ensure consistent repair and tune-up work by offering service plans.
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 16 }} className="hidden-mobile">
                  <a href="https://www.workiz.com/features/service-plans/" style={{ border: '2px solid #23282B', color: '#23282B', background: 'transparent', fontWeight: 600, fontSize: 16, padding: '12px 32px', borderRadius: 8, textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}>Learn more</a>
                </div>
                {/* Mobile Image (hidden on desktop) */}
                <div style={{ width: '100%', marginTop: 24, display: 'none' }} className="show-mobile">
                  <img
                    src="https://www.workiz.com/wp-content/uploads/2023/05/hl-service-plans-mob.webp"
                    alt="Hl Service Plans Mob"
                    style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              {/* Desktop Image (Right, hidden on mobile) */}
              <div style={{ flex: '0 0 60%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 0 }} className="hidden-mobile">
                <img
                  src="https://www.workiz.com/wp-content/uploads/2023/05/hl-service-plan.webp"
                  alt="Hl Service Plan"
                  style={{ width: '90%', maxWidth: 320, height: 'auto', borderRadius: 0 }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Price Book Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/pricebook.webp"
              alt="Price Book Tablet"
              style={{ width: '100%', maxWidth: 600, borderRadius: 20,  }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 4, textTransform: 'uppercase' }}>INCREASE YOUR REVENUE</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, lineHeight: 1.1 }}>Price Book</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Discover the game-changing Price Book feature for HVAC pros! Enhance your field sales and workflow with custom categories, seamless catalog navigation, and quick access to your items. Save time with bulk updates to costs, tax prices, inventory statuses, and categories.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 18, padding: '12px 28px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start for free</button>
          </div>
        </section>
        {/* Purchase Orders Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>PURCHASE ORDERS</div>
            <div style={{ color: '#23282B', fontWeight: 560, fontSize: 35, marginBottom: 16, lineHeight: 1.1 }}>Your one–stop shop for order management</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Quickly create and send purchase orders to vendors, linking items to your price book and relevant jobs. Track orders and monitor statuses, ensuring full visibility and reducing errors.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 22, padding: '18px 44px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start free trial</button>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/orders.webp"
              alt="Orders Table"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* Scheduling Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 12, letterSpacing: 1,fontFamily:"Plus Jakarta Sans",  marginBottom: 8 }}>HVAC SCHEDULING SOFTWARE</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 35,fontFamily:"Plus Jakarta Sans", marginBottom: 16, lineHeight: 1.1 }}>Schedule and dispatch efficiently</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Boost your business productivity and visibility with our advanced scheduling software from Workiz. Offer your customers 24/7 online booking to access your services at their convenience. Managing your HVAC tasks becomes a breeze as it enables you to organize and monitor all tasks from one versatile platform, improving your workflow efficiency.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500,fontFamily:"Plus Jakarta Sans", fontSize: 18, textDecoration: 'none', marginTop: 4, display: 'inline-block' }}>Learn More &rarr;</a>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/scheduling.png"
              alt="Scheduling Calendar"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* HVAC Pros CTA Section */}
        <section style={{ width: 'calc(100% - 48px)', maxWidth: 1200, background: '#FFD400', borderRadius: 32, margin: '48px auto', padding: '35px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap', border: 'none', boxShadow: 'none' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 2, minWidth: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 48, position: 'relative' }}>
           
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 32, fontFamily: 'Plus Jakarta Sans, sans-serif', marginBottom: 12, lineHeight: 1.1 }}>The best software for HVAC pros</div>
            <div style={{ color: '#23282B', fontSize: 16, fontWeight: 400, fontFamily: 'Plus Jakarta Sans, sans-serif', marginBottom: 0, lineHeight: 1.4 }}>
              HVAC technicians need a central platform to manage job scheduling, dispatching, invoicing and track their performance.
            </div>
          </div>
          {/* Right: Buttons */}
          <div style={{ flex: 1, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', paddingRight: 40, position: 'relative' }}>
            <button style={{ background: '#23282B', color: '#FFD400', fontWeight: 600, fontSize: 18, fontFamily: 'Plus Jakarta Sans, sans-serif', padding: '14px 0', borderRadius: 8, border: 'none', cursor: 'pointer', width: '100%', maxWidth: 200, marginBottom: 8 }}>Start free trial</button>
            <button style={{ background: 'transparent', color: '#23282B', fontSize: 18, fontFamily: 'Plus Jakarta Sans, sans-serif', padding: '14px 0', borderRadius: 8, border: '2px solid #23282B', cursor: 'pointer', width: '100%', maxWidth: 200 }}>Book a demo</button>
          </div>
        </section>
        {/* Online Booking Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/illustration.webp"
              alt="Online Booking Illustration"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ color: '#2563eb', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 4,fontFamily:"Plus Jakarta Sans", textTransform: 'uppercase' }}>ONLINE BOOKING</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8,fontFamily:"Plus Jakarta Sans", lineHeight: 1.1 }}>Make every deal count</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Increase your sales by offering your customers the opportunity to purchase related products as well as booking more services online. With the most professional online booking system, you can easily upsell premium products and services while attracting potential customers.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily:"Plus Jakarta Sans",display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
        </section>
        {/* Workiz Pay Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>WORKIZ PAY</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>All-in-one financial solution</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Get paid in the field faster with Workiz Pay, an all-in-one financial solution for your HVAC business. No more dealing with cash and checks, our card readers give you and your customers an easy and accessible solution.  With flexible payment plans now you can close bigger deals while providing the best customer service.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/workiz-pa.webp"
              alt="Workiz Pay"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* Automations Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/automations-illustration.webp"
              alt="Automations Illustration"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>AUTOMATIONS</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>Save yourself time and effort</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Get more reviews, communicate more efficiently with your techs and customers, send those estimates faster and so much more with custom automation. Save yourself 20 hours a week when you take all your tedious tasks and make them a well-oiled machine.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
        </section>
        {/* Inventory Management Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>INVENTORY MANAGEMENT</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>Keep the warehouse organized</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Stay on top of your operations and always come to the job site prepared with inventory management. Prevent overstocking, shortages, and miscalculations with real-time status updates on all your supplies, plus save 20% of your inventory costs.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/inventory.webp"
              alt="Inventory Management"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* Communications Suite Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/communications.webp"
              alt="Communications Suite"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>COMMUNICATIONS SUITE</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>No more miscommunication</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Keep your entire team and customers in the loop with our built-in communication suite. Send on my-way text messages, record calls, track numbers and so much more. Communicate more effectively and provide the best customer service with call masking and our built-in phone.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
        </section>
       <Integrations />
       <FaqSection />
       <FooterSection />
       
      </>
    );
  }
  if (industry === 'plumbing') {
    return (
      <>
        <div style={{ display: 'flex', minHeight: '500px', width: '100%', marginTop: '80px' }}>
          {/* Left Side */}
          <div style={{ background: 'yellow', flex: 1, padding: '48px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#23282B', fontWeight: 600, marginBottom: 16, letterSpacing: 2 }}>PLUMBING SOFTWARE</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              <span style={{ background: '#ffd400', padding: '0 8px', borderRadius: '4px', display: 'inline-block' }}>Grow your plumbing business</span><br />
              with the best plumbing software
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#23282B', marginBottom: 32, maxWidth: 600 }}>
              Streamline scheduling, dispatch, invoicing, and more with the all-in-one platform built for plumbing pros. Book more jobs, get paid faster, and manage your team with ease.
            </p>
            <button style={{ background: '#23282B', color: '#ffd400', fontWeight: 600, fontSize: '1.25rem', padding: '16px 40px', borderRadius: 8, border: 'none', marginBottom: 32, cursor: 'pointer', width: 'fit-content' }}>Book a demo</button>
            
            {/* Logo Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/captera.webp" alt="Capttera" style={{ height: 32, width: 'auto' }} />
                <span style={{ color: '#23282B', fontSize: '0.875rem', fontWeight: 500 }}>Capttera</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/software1.webp" alt="Software Advice" style={{ height: 32, width: 'auto' }} />
                <span style={{ color: '#23282B', fontSize: '0.875rem', fontWeight: 500 }}>Software Advice</span>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div style={{ flex: 1, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <img src="/images/mike.webp" alt="Plumbing Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
            
            {/* Testimonial Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '80px',
              left: '2px',
              width: '340px',
              background: 'transparent',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '8px',
              padding: '16px',
              color: 'white'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: 'bold', 
                marginBottom: '6px', 
                color: 'white',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                whiteSpace: 'nowrap'
              }}>
                Mike Bryant, CEO of Plumbing 365
              </h3>
              <button 
                className="testimonial-button"
                onClick={() => setIsVideoOpen(true)}
                style={{
                  background: '#FFD400',
                  color: '#23282B',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 12px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '1rem' }}>▶</span>
                Watch testimonial
              </button>
            </div>
          </div>
        </div>
          {/* Preferred Vendor Section */}
          <section style={{ background: '#fff', padding: '56px 0 32px 0', marginTop: 32 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#23282B', fontWeight: 400, fontSize: '1.5rem', letterSpacing: 2, marginBottom: 32 }}>
              WORKIZ IS THE PREFERRED VENDOR OF:
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
              <div>
                <img src="/images/american-logo.svg" alt="American Standard" style={{ height: 44, marginBottom: 8 }} />
                
              </div>
              <div>
                <img src="/images/trane-logo.svg" alt="Trane" style={{ height: 44, marginBottom: 8 }} />
                
              </div>
              <div>
                <img src="/images/searchking-logo.svg" alt="SearchKings" style={{ height: 44 }} />
              </div>
              <div>
                <img src="/images/jb-logo.svg" alt="JB Warranties" style={{ height: 44 }} />
                
              </div>
            </div>
          </div>
        </section>
        
        {/* Price Book and Sales Proposals Section */}
        <section style={{ padding: '80px 0', background: '#f8fafc' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 40, padding: '0 20px' }}>
            
            {/* Price Book Card */}
            <div style={{ 
              flex: 1, 
              background: 'radial-gradient(111.61% 111.61% at 97.69% 0%, #FFF3B7 0%, #FFD400 100%)', 
              borderRadius: '20px', 
              position: 'relative',
              overflow: 'hidden',
              height: '500px',
              display: 'flex'
            }}>
              {/* Background Image Layer */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                zIndex: 1
              }}>
                <div style={{ width: '40%' }}></div>
                <div style={{ 
                  width: '60%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'flex-end',
                  paddingRight: '0px'
                }}>
                  <img 
                    src="https://www.workiz.com/wp-content/uploads/2023/09/hl-sales-proposals.webp" 
                    alt="Price Book Desktop Interface" 
                    style={{ 
                      width: 'auto',
                      height: '90%',
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              </div>

              {/* Text Content Layer */}
              <div style={{ 
                width: '50%',
                padding: '60px',
                paddingTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                zIndex: 3,
                position: 'relative'
              }}>
                <div>
                  <div style={{ 
                    color: '#23282B', 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    letterSpacing: '2px',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    PRICE BOOK
                  </div>
                  <h2 style={{ 
                    color: '#23282B', 
                    fontSize: '2.5rem', 
                    fontWeight: 900, 
                    lineHeight: 1.1,
                    marginBottom: '20px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Visually display your items
                  </h2>
                  <p style={{ 
                    color: '#23282B', 
                    fontSize: '1rem', 
                    fontWeight: 400,
                    lineHeight: 1.4,
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Give your customers options in professionally designed price book.
                  </p>
                </div>
                <button style={{
                  background: '#23282B',
                  color: '#FFD400',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  alignSelf: 'flex-start',
                  marginTop: '40px'
                }}>
                  Learn more
                </button>
              </div>

              {/* Mobile Image for smaller screens */}
              <div style={{
                position: 'absolute',
                right: '-50px',
                top: '30px',
                bottom: '30px',
                width: '60%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}>
                <img 
                  src="https://www.workiz.com/wp-content/uploads/2023/09/hl-online-booking-mob.webp" 
                  alt="Price Book Interface on Tablet" 
                  style={{ 
                    width: '100%',
                    height: '90%',
                    objectFit: 'contain',
                    display: 'none'
                  }} 
                />
              </div>
            </div>

            {/* Sales Proposals Card */}
            <div style={{ 
              flex: 1, 
              background: 'linear-gradient(169.48deg, #096187 5.7%, #23282B 98.96%)', 
              borderRadius: '20px', 
              position: 'relative',
              overflow: 'hidden',
              height: '500px',
              display: 'flex'
            }}>
              {/* Background Image Layer */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                zIndex: 1
              }}>
                <div style={{ width: '40%' }}></div>
                <div style={{ 
                  width: '60%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'flex-end',
                  paddingRight: '0px'
                }}>
                  <img 
                    src="https://www.workiz.com/wp-content/uploads/2023/07/hl-sales-proposals.webp" 
                    alt="Sales Proposals Desktop" 
                    style={{ 
                      width: 'auto',
                      height: '90%',
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              </div>

              {/* Text Content Layer */}
              <div style={{ 
                width: '50%',
                padding: '60px',
                paddingTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                zIndex: 3,
                position: 'relative'
              }}>
                <div>
                  <div style={{ 
                    color: 'white', 
                    fontSize: '0.7rem', 
                    fontWeight: 700, 
                    letterSpacing: '2px',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    SALES PROPOSALS
                  </div>
                  <h2 style={{ 
                    color: '#FFD400', 
                    fontSize: '2.2rem', 
                    fontWeight: 900, 
                    lineHeight: 1.1,
                    marginBottom: '16px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Win 25% more jobs
                  </h2>
                  <p style={{ 
                    color: 'white', 
                    fontSize: '0.9rem', 
                    fontWeight: 400,
                    lineHeight: 1.4,
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Close larger deals by<br/>providing sales proposals<br/>to fit your customers<br/>budget requirements.
                  </p>
                </div>
                <button style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  alignSelf: 'flex-start',
                  marginTop: '120px'
                }}>
                  Learn more
                </button>
              </div>

              {/* Mobile Image for smaller screens */}
              <div style={{
                position: 'absolute',
                right: '20px',
                top: '40px',
                bottom: '40px',
                width: '45%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}>
                <img 
                  src="https://www.workiz.com/wp-content/uploads/2023/07/hl-sales-proposals-mob.webp" 
                  alt="Sales Proposals Mobile Interface" 
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    display: 'none'
                  }} 
                />
              </div>
            </div>
          </div>
        </section>
         {/* Purchase Orders Section */}
         <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 32 }}>
            <img
              src="/images/orders.webp"
              alt="Orders Table"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingRight: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>PURCHASE ORDERS</div>
            <div style={{ color: '#23282B', fontWeight: 560, fontSize: 35, marginBottom: 16, lineHeight: 1.1 }}>Your one–stop shop for order management</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Quickly create and send purchase orders to vendors, linking items to your price book and relevant jobs. Track orders and monitor statuses, ensuring full visibility and reducing errors.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 22, padding: '18px 44px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start free trial</button>
          </div>
        </section>

        {/* Plumbing Scheduling Software Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 32 }}>
            <img
              src="/images/plumbing-jobs.png"
              alt="Plumbing Scheduling Software Interface"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingRight: 32 }}>
            <div style={{ color: '#10b981', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>PLUMBING SCHEDULING SOFTWARE</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>Organize all your plumbing jobs</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Boost the productivity of your business with our drag-and-drop plumbing scheduling software. Your customers can easily schedule appointments online and reach your plumbing services round-the-clock. With Workiz, you can organize all your plumbing tasks in a single dashboard, giving you a quick and easy viewing platform.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn More &rarr;</a>
          </div>
        </section>
        
        {/* Yellow CTA Banner Section */}
        <section style={{ 
          background: '#FFD400', 
          borderRadius: '32px', 
          margin: '64px auto', 
          maxWidth: '1200px',
          width: 'calc(100% - 48px)',
          padding: '40px 60px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap',
          position: 'relative'
        }}>
       

          {/* Left: Text Content */}
          <div style={{ 
            flex: '2', 
            minWidth: '400px',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px'
          }}>
            <h2 style={{ 
              color: '#23282B', 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              lineHeight: 1.1,
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Grow your business with Workiz
            </h2>
            <p style={{ 
              color: '#23282B', 
              fontSize: '1.1rem', 
              fontWeight: 400,
              lineHeight: 1.5,
              margin: 0,
              maxWidth: '500px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              The leading field service platform for teams. Schedule jobs, dispatch, invoice, track performance, and get paid — all in one platform.
            </p>
          </div>

          {/* Right: Buttons */}
          <div style={{ 
            flex: '1', 
            minWidth: '280px',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px',
            alignItems: 'flex-end'
          }}>
            <button style={{
              background: '#23282B',
              color: '#FFD400',
              border: 'none',
              borderRadius: '8px',
              padding: '14px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              width: '200px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: 'all 0.2s ease'
            }}>
              Get started free
            </button>
            <button style={{
              background: 'transparent',
              color: '#23282B',
              border: '2px solid #23282B',
              borderRadius: '8px',
              padding: '14px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              width: '200px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: 'all 0.2s ease'
            }}>
              Book a demo
            </button>
          </div>
        </section>

        {/* Pricing Section */}
        <div style={{ 
          background: '#fff', 
          padding: '80px 0',
          textAlign: 'center',
          maxWidth: '1200px', 
          margin: '0 auto'
        }}>
          {/* Heading */}
          <h2 style={{ 
            color: '#23282B', 
            fontSize: '2.3rem', 
            fontWeight: 700, 
            lineHeight: 1.2,
            marginBottom: '60px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            maxWidth: '900px',
            margin: '0 auto 60px auto'
          }}>
            Finally, a field service software that's easy,<br />powerful & fairly priced
          </h2>

          {/* Toggle Section */}
          <div style={{
            display: 'inline-flex',
            background: '#f1f5f9',
            borderRadius: '50px',
            padding: '12px 16px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px'
          }}>
            {/* Pay Monthly */}
            <span style={{
              color: '#64748b',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              cursor: 'pointer'
            }}>
              Pay monthly
            </span>

            {/* Pay Annually */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: '#e2e8f0',
              borderRadius: '25px',
              padding: '8px 16px'
            }}>
              <span style={{
                color: '#23282B',
                fontSize: '1rem',
                fontWeight: 500,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                cursor: 'pointer'
              }}>
                Pay annually
              </span>
              <span style={{
                background: '#3b82f6',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                Save 17%
              </span>
            </div>
          </div>

          {/* Pricing Table */}
          <div style={{
            display: 'flex',
            gap: '4px',
            marginTop: '60px',
            justifyContent: 'center',
            padding: '0 10px'
          }}>
            {/* Lite Plan */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '220px',
              maxWidth: '250px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px',
              background: 'white',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px', color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Lite</h3>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.75rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The lite kit.</p>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Free</div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Up to 2 members</p>
              </div>

              <button style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                background: 'white',
                color: '#23282B',
                fontWeight: 600,
                marginBottom: '16px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>Free for ever</button>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#23282B', fontSize: '0.8rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Key features:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Scheduling
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> 20 Invoices, jobs & estimates
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Mobile app
                  </li>
                </ul>
              </div>
            </div>

            {/* Kickstart Plan */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '220px',
              maxWidth: '250px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px',
              background: 'white',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px', color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Kickstart</h3>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.75rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The perfect starter kit</p>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '0.8rem', textDecoration: 'line-through', color: '#ef4444', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$225</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$187</span>
                  <span style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>/month</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Annual billing, incl. first 3 users.</p>
              </div>

              <button style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                background: 'white',
                color: '#23282B',
                fontWeight: 600,
                marginBottom: '16px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>Start for free</button>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#23282B', fontSize: '0.8rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Key features:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Scheduling
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> 2 Automations
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Invoices, jobs & estimates
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Online payments
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Online booking with checkout
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Built-in reports
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Local number
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Client management
                  </li>
                </ul>
              </div>
            </div>

            {/* Standard Plan */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '220px',
              maxWidth: '250px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px',
              background: 'white',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px', color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Standard</h3>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.75rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The essential tools to grow and boost efficiency.</p>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '0.8rem', textDecoration: 'line-through', color: '#ef4444', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$275</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$229</span>
                  <span style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>/month</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Annual billing, incl. first 5 users.</p>
              </div>

              <button style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                background: 'white',
                color: '#23282B',
                fontWeight: 600,
                marginBottom: '16px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>Start for free</button>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#23282B', fontSize: '0.8rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Everything in Kickstart, plus:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Quickbooks Online
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Total of 5 Automations
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Custom fields
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Location tracking
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Service areas
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Subcontractors management
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Leads tracking
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Reserve with Google
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan - Best Value */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '220px',
              maxWidth: '250px',
              border: '2px solid #FFD400',
              borderRadius: '8px',
              padding: '16px',
              background: '#FFFBEB',
              position: 'relative'
            }}>
              {/* Best Value Badge */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#FFD400',
                color: '#23282B',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '0.7rem',
                fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                BEST VALUE
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px', color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif", marginTop: '8px' }}>Pro</h3>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.75rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The perfect plan with AI tools and enhanced automations.</p>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '0.8rem', textDecoration: 'line-through', color: '#ef4444', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$325</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$270</span>
                  <span style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>/month</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Annual billing, incl. first 5 users.</p>
              </div>

              <button style={{
                width: '100%',
                padding: '8px',
                border: 'none',
                borderRadius: '6px',
                background: '#FFD400',
                color: '#23282B',
                fontWeight: 600,
                marginBottom: '16px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>Start for free</button>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#23282B', fontSize: '0.8rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Everything in Standard, plus:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Performance pay
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> A total of 10 Automations
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#3b82f6', marginRight: '6px', fontSize: '0.8rem' }}>✦</span> Genius leads
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#3b82f6', marginRight: '6px', fontSize: '0.8rem' }}>✦</span> Genius scheduling <span style={{ background: '#3b82f6', color: 'white', padding: '1px 4px', borderRadius: '8px', fontSize: '0.6rem', marginLeft: '4px' }}>New</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Custom reports
                  </li>
                </ul>
              </div>
            </div>

            {/* Ultimate Plan */}
            <div style={{
              flex: '1 1 220px',
              minWidth: '220px',
              maxWidth: '250px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px',
              background: 'white',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px', color: '#23282B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ultimate</h3>
              <p style={{ color: '#64748b', marginBottom: '16px', fontSize: '0.75rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Tailored for big companies and growing teams.</p>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#23282B', marginBottom: '2px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Let's talk</div>
                <p style={{ color: '#64748b', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The complete plan</p>
              </div>

              <button style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                background: 'white',
                color: '#23282B',
                fontWeight: 600,
                marginBottom: '16px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>Contact us</button>

              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '8px', color: '#23282B', fontSize: '0.8rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Everything in Pro, plus:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Service plans
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> A total of 30 Automations
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Sales proposals
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Inventory management
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Flat rate <span style={{ background: '#3b82f6', color: 'white', padding: '1px 4px', borderRadius: '8px', fontSize: '0.6rem', marginLeft: '4px' }}>New</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Multi-day jobs
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Equipment tracking
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Purchase orders <span style={{ background: '#3b82f6', color: 'white', padding: '1px 4px', borderRadius: '8px', fontSize: '0.6rem', marginLeft: '4px' }}>New</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', fontSize: '0.7rem', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span style={{ color: '#22c55e', marginRight: '6px', fontSize: '0.8rem' }}>✓</span> Zapier integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Workiz Pay Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#f25c4d', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
              PLUMBING BUSINESS SOFTWARE
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Get total financial control with Workiz pay
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '18px', 
              fontWeight: 400, 
              marginBottom: '24px', 
              lineHeight: 1.4 
            }}>
              Our all-in-one plumbing business software suite allows you to manage all your financial operations and continue to grow. We offer a complete payment solution for your business with our WorkizPay. The card readers let you get paid on the spot, collect tips, and give better customer service. Get the green light from your customers for high-priced plumbing jobs with flexible payment options.
            </div>
            <a href="#" style={{ 
              color: '#23282B', 
              fontWeight: 500, 
              fontSize: '18px', 
              textDecoration: 'none', 
              marginTop: '4px', 
              fontFamily: 'Plus Jakarta Sans', 
              display: 'inline-block' 
            }}>
              Learn More →
            </a>
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/plumbing-bussiness.webp"
              alt="Workiz Pay Financial Control Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Automations Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#fff', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            justifyContent: 'center',
            paddingLeft: '32px'
          }}>
            <img
              src="/images/automations-illustration-2.webp"
              alt="Automations Interface - When this happens, do this action"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* Right: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px',
            paddingRight: '32px'
          }}>
            <div style={{ 
              color: '#22c55e', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
              AUTOMATIONS
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Revolutionize your customer service
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '18px', 
              fontWeight: 400, 
              marginBottom: '32px', 
              lineHeight: 1.4 
            }}>
              Deliver the best customer service, get paid on time and get more reviews when you automate tasks in the automation center. Send "on my way" text messages, estimates and invoices and after a job is complete automatically send a review request and keep your plumbing business running like a well oiled machine.
            </div>
            <button style={{ 
              background: '#FFD400', 
              color: '#23282B', 
              fontWeight: 600, 
              fontSize: '18px', 
              padding: '16px 32px', 
              borderRadius: '8px', 
              border: 'none', 
              cursor: 'pointer', 
              width: 'fit-content', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              fontFamily: 'Plus Jakarta Sans'
            }}>
              Start free trial
            </button>
          </div>
        </section>

        {/* Multi-day Jobs Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#f25c4d', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
              MULTI-DAY JOBS
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Complex plumbing jobs managed efficiently
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '18px', 
              fontWeight: 400, 
              marginBottom: '24px', 
              lineHeight: 1.4 
            }}>
              Track progress of multi-day plumbing jobs with tasks. You can assign more than one technician to a task and ensure efficient collaboration and job management. With the progress bar you will never miss a step and get more jobs done on time.
            </div>
            <a href="#" style={{ 
              color: '#23282B', 
              fontWeight: 500, 
              fontSize: '18px', 
              textDecoration: 'none', 
              marginTop: '4px', 
              fontFamily: 'Plus Jakarta Sans', 
              display: 'inline-block' 
            }}>
              Learn More →
            </a>
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/multiday-jobs.webp"
              alt="Multi-day Jobs Calendar Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Client Plans Section */}
        <section style={{ 
          background: '#F5F5F5', 
          paddingTop: '64px', 
          paddingBottom: '64px', 
          width: '100%' 
        }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '32px', 
            flexWrap: 'wrap', 
            minHeight: '600px' 
          }}>
            
            {/* Left: Image */}
            <div style={{ 
              flex: 1, 
              minWidth: '340px', 
              maxWidth: '700px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              paddingLeft: '32px' 
            }}>
              <img
                src="/images/client-plans.png"
                alt="Client Plans Management Interface"
                style={{ 
                  width: '100%', 
                  maxWidth: '600px', 
                  borderRadius: '24px', 
                  boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
                }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right: Content */}
            <div style={{ 
              flex: 1, 
              minWidth: '340px', 
              maxWidth: '700px', 
              paddingLeft: '32px' 
            }}>
              <div style={{ 
                color: '#00C896', 
                fontSize: '14px', 
                fontWeight: 600, 
                letterSpacing: '2px', 
                marginBottom: '12px', 
                fontFamily: 'Plus Jakarta Sans', 
                textTransform: 'uppercase' 
              }}>
                PLUMBING FIELD SERVICE SOFTWARE
              </div>
              <div style={{ 
                color: '#23282B', 
                fontWeight: 700, 
                fontSize: '40px', 
                marginBottom: '8px', 
                fontFamily: 'Plus Jakarta Sans', 
                lineHeight: 1.1 
              }}>
                Build recurring customers with Workiz service plans
              </div>
              <div style={{ 
                color: '#23282B', 
                fontSize: '18px', 
                fontWeight: 400, 
                marginBottom: '24px', 
                lineHeight: 1.4 
              }}>
                Maintain a consistent cash flow all year round by tracking and arranging maintenance visits using automatic scheduling designed for your plumbing business. Streamline your servicing process and save valuable time with automatic alerts, enabling you to manage repeat maintenance tasks efficiently.
              </div>
              <a href="#" style={{ 
                color: '#23282B', 
                fontWeight: 500, 
                fontSize: '18px', 
                textDecoration: 'none', 
                marginTop: '4px', 
                fontFamily: 'Plus Jakarta Sans', 
                display: 'inline-block' 
              }}>
                Learn More →
              </a>
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="bg-black rounded-xl overflow-hidden shadow-lg relative"
              style={{ width: "90vw", maxWidth: 640 }}
              onClick={e => e.stopPropagation()}
            >
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/-a-9FMOJkYI?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <button
                className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition"
                onClick={() => setIsVideoOpen(false)}
              >
                <svg width="24" height="24" fill="none" stroke="#23282b" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M6 18L18 6"/>
                </svg>
              </button>
            </div>
          </div>
        )}
        
        <Integrations />
        <FaqSection />
        <FooterSection />
      </>
    );
  }
  
 
  
  if (industry === 'electricians') {
    return (
      <>
        <div style={{ display: 'flex', minHeight: '500px', width: '100%', marginTop: '80px', border: 'none', boxShadow: 'none', background: '#fff' }}>
          {/* Left Side */}
          <div style={{ background: '#FFD400', flex: 1, padding: '48px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#23282B', fontWeight: 600, marginBottom: 16, letterSpacing: 2 }}>ELECTRICAL CONTRACTOR SOFTWARE</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              <span style={{ background: '#fff', padding: '0 8px', borderRadius: '4px', display: 'inline-block' }}>Boost revenue</span><br />
              by 30% with<br />
              electrician software
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#23282B', marginBottom: 32, maxWidth: 600 }}>
              Electrical contractors that use Workiz increase their revenue by 22%! Manage your jobs, get paid in the field, and join over 120,000 pros who trust Workiz to grow their business.
            </p>
            <button style={{ background: '#23282B', color: '#ffd400', fontWeight: 600, fontSize: '1.25rem', padding: '16px 40px', borderRadius: 8, border: 'none', marginBottom: 32, cursor: 'pointer', width: 'fit-content' }}>Book a demo</button>
            <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/captera.webp" alt="Capterra" style={{ height: 38 }} />
                <span style={{ color: '#FFD400' }}>★★★★★</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/software1.webp" alt="Software Advice" style={{ height: 38 }} />
                <span style={{ color: '#FFD400' }}>★★★★★</span>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div style={{ flex: 1, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: 'none', boxShadow: 'none' }}>
            <img src="/images/repair-person.webp" alt="Electrician Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
            

          </div>
        </div>

        {/* Win 3X More Jobs Section */}
        <section style={{ 
          background: '#23282B', 
          padding: '24px 0',
          width: '100%' 
        }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            
            {/* Left: Win 3X more jobs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #E91E63, #9C27B0)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h7v8l10-12h-7z"/>
                </svg>
              </div>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: 'white',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Win 3X more jobs
              </div>
            </div>

            {/* Right: Award badges */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <img 
                src="/images/badge-1.png" 
                alt="Momentum Leader 2025" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/bdge-2.png" 
                alt="High Performer Winter 2024" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/badge-3.png" 
                alt="Leader 2025" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/badge-4.png" 
                alt="Best Business Leader" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/badge-5.png" 
                alt="Leader Winter 2024" 
                style={{ height: '55px', width: 'auto' }}
              />
            </div>
          </div>
        </section>

        {/* Features Section - Inventory & Online Booking */}
        <section style={{ 
          background: '#fff', 
          padding: '80px 0',
          width: '100%' 
        }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            gap: '32px',
            flexWrap: 'wrap',
            alignItems: 'stretch'
          }}>
            
            {/* Left Card - Inventory Tracking */}
            <div style={{ 
              background: 'linear-gradient(169.48deg, #096187 5.7%, #23282B 98.96%)',
              borderRadius: '16px', 
              flex: '1',
              minWidth: '500px',
              position: 'relative',
              overflow: 'hidden',
              height: '100%'
            }}>
              {/* Background Image */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}>
                <img 
                  src="https://www.workiz.com/wp-content/uploads/2024/08/feature-block-inventory-electrician-desktop.webp"
                  alt="Feature Block Inventory Electrician Desktop"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div style={{
                position: 'relative',
                zIndex: 3,
                padding: '40px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '50%'
              }}>
                <div>
                  <div style={{ 
                    fontSize: '12px', 
                    fontWeight: 500, 
                    letterSpacing: '2px',
                    marginBottom: '16px',
                    color: 'white',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    INVENTORY
                  </div>
                  <h3 style={{ 
                    fontSize: '40px', 
                    fontWeight: 700, 
                    lineHeight: 1.1,
                    letterSpacing: '1px',
                    marginBottom: '24px',
                    color: '#FFD400',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Track your inventory in real-time
                  </h3>
                  <div style={{ 
                    fontSize: '16px', 
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: 'white',
                    marginBottom: '32px'
                  }}>
                    <p>Cut costs by tracking your inventory with real-time usage data and activity reports.</p>
                  </div>
                </div>
                <div>
                  <a 
                    href="https://www.workiz.com/features/inventory-management/" 
                    style={{
                      background: 'transparent',
                      border: '2px solid white',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'inline-block',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card - Online Booking */}
            <div style={{ 
              flex: '1',
              minWidth: '500px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '100%',
                background: 'linear-gradient(180deg, #F6F8FA 0%, #E4E9EC 100%)'
              }}>
                <div style={{
                  position: 'relative',
                  width: '100%'
                }}>
                  {/* Background Layer - Desktop Image */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row'
                  }}>
                    <div style={{ width: '40%' }}></div>
                    <div style={{ 
                      width: '60%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-end'
                    }}>
                      <img 
                        width="640" 
                        height="898"
                        src="https://www.workiz.com/wp-content/uploads/2024/08/Locksmith-online-booking-ElectroTech-desktop.webp"
                        alt="Locksmith Online Booking Electrotech Desktop"
                        style={{
                          width: '100%',
                          height: 'auto'
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* Content Layer */}
                  <div style={{
                    position: 'relative',
                    zIndex: 3,
                    padding: '32px 40px',
                    height: '100%'
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      height: '100%'
                    }}>
                      {/* Text Column */}
                      <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        paddingRight: '16px',
                        paddingTop: '16px',
                        paddingBottom: '24px',
                        maxWidth: '100%',
                        flexGrow: 1
                      }}>
                        <div>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: '#1d4ed8',
                            fontFamily: "'Inter', sans-serif",
                            marginBottom: '16px'
                          }}>
                            ONLINE BOOKING
                          </div>
                          <div style={{
                            fontSize: '40px',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: '1px',
                            marginBottom: '24px',
                            color: '#23282B',
                            fontFamily: "'Plus Jakarta Sans', sans-serif"
                          }}>
                            Be available 24/7
                          </div>
                          <div style={{
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#666',
                            marginBottom: '32px'
                          }}>
                            <p>Turn leads into jobs, get paid in advance, and increase bookings by 30% with the Workiz Online Booking widget.</p>
                          </div>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'flex-end'
                        }}>
                          <a 
                            href="https://www.workiz.com/features/online-booking/"
                            style={{
                              background: 'transparent',
                              border: '2px solid #23282B',
                              color: '#23282B',
                              padding: '12px 24px',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              textDecoration: 'none',
                              display: 'inline-block',
                              fontFamily: "'Plus Jakarta Sans', sans-serif"
                            }}
                          >
                            Online Booking
                          </a>
                        </div>
                      </div>

                      {/* Mobile Image Column */}
                      <div style={{
                        width: '45%',
                        maxWidth: '100%'
                      }}>
                        <img 
                          width="686" 
                          height="384"
                          src="https://www.workiz.com/wp-content/uploads/2024/08/Locksmith-online-booking-ElectroTech-mobile.webp"
                          alt="Locksmith Online Booking Electrotech Mobile"
                          style={{
                            width: '100%',
                            height: 'auto'
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         
         {/* Purchase Orders Section */}
         <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 32 }}>
            <img
              src="/images/orders.webp"
              alt="Orders Table"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingRight: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>PURCHASE ORDERS</div>
            <div style={{ color: '#23282B', fontWeight: 560, fontSize: 35, marginBottom: 16, lineHeight: 1.1 }}>Your one–stop shop for order management</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Quickly create and send purchase orders to vendors, linking items to your price book and relevant jobs. Track orders and monitor statuses, ensuring full visibility and reducing errors.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 22, padding: '18px 44px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start free trial</button>
          </div>
        </section>

        {/* Workiz Pay Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingLeft: '32px' 
          }}>
            <img
              src="/images/electric-field.webp"
              alt="Workiz Pay Electrical Field Service Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* Right: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingRight: '32px' 
          }}>
            <div style={{ 
              color: '#f25c4d', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
              ELECTRICAL FIELD SERVICE SOFTWARE
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Electrical contractors, get paid faster
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '18px', 
              fontWeight: 400, 
              marginBottom: '32px', 
              lineHeight: 1.4 
            }}>
              Never leave money on the table or chase down payments again with Workiz electrical contracting software. Automatically send payment requests, estimates, and invoices from the office or the field.
            </div>
            <button style={{ 
              background: '#FFD400', 
              color: '#23282B', 
              fontWeight: 600, 
              fontSize: '18px', 
              padding: '16px 32px', 
              borderRadius: '8px', 
              border: 'none', 
              cursor: 'pointer', 
              width: 'fit-content', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              fontFamily: 'Plus Jakarta Sans'
            }}>
              Book a demo
            </button>
          </div>
        </section>

        {/* Electrical Scheduling Software Section */}
        <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 32 }}>
            <img
              src="/images/scheduling.png"
              alt="Electrical Scheduling Software Interface"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingRight: 32 }}>
            <div style={{ color: '#10b981', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>ELECTRICAL SCHEDULING SOFTWARE</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>Schedule and dispatch your electricians efficiently</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Optimize your electrical team's productivity with our drag-and-drop scheduling software. Customers can book electrical services online 24/7, and you can manage all your electrical jobs from a single dashboard. Track job progress, assign the right electrician for each task, and never miss an appointment.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn More &rarr;</a>
          </div>
        </section>

        {/* Electrical Job Management Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#fff', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#f25c4d', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
              ELECTRICAL JOB MANAGEMENT SOFTWARE
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '24px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Maximize every electrical installation lead
            </div>
            
            {/* Bullet Points */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Ramp up your bookings with Workiz's advanced communication suite</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Create a stellar customer service experience with efficient call and message management</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Boost your revenue by sending automatic review reminders to satisfied customers</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Elevate your business above the rest with top-notch service that keeps customers coming back</span>
              </div>
            </div>
            
            <button style={{ 
              background: '#FFD400', 
              color: '#23282B', 
              fontWeight: 600, 
              fontSize: '18px', 
              padding: '16px 32px', 
              borderRadius: '8px', 
              border: 'none', 
              cursor: 'pointer', 
              width: 'fit-content', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              fontFamily: 'Plus Jakarta Sans'
            }}>
              Book a demo
            </button>
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/electric-job.webp"
              alt="Electrical Job Management Communications Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Route Optimization Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '24px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Reduce transit time and cut costs
            </div>
            
            {/* Bullet Points */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Maximize your workday with Workiz's efficient route planning and GPS tracking</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Reduce gas costs by up to 30% by optimizing your routes and reducing mileage</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Reach your customers faster and increase productivity with Workiz's routing tools</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Plan your routes in seconds for better time management and more efficient operations</span>
              </div>
            </div>
            
            <a href="#" style={{ 
              color: '#23282B', 
              fontWeight: 500, 
              fontSize: '18px', 
              textDecoration: 'none', 
              marginTop: '4px', 
              fontFamily: 'Plus Jakarta Sans', 
              display: 'inline-block' 
            }}>
              Book a demo →
            </a>
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/ill.webp"
              alt="Route Optimization Map Interface showing scheduled jobs and GPS tracking"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
          {/* Multi-day Jobs Section */}
          <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#f25c4d', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
              MULTI-DAY JOBS
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Complex plumbing jobs managed efficiently
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '18px', 
              fontWeight: 400, 
              marginBottom: '24px', 
              lineHeight: 1.4 
            }}>
              Track progress of multi-day plumbing jobs with tasks. You can assign more than one technician to a task and ensure efficient collaboration and job management. With the progress bar you will never miss a step and get more jobs done on time.
            </div>
            <a href="#" style={{ 
              color: '#23282B', 
              fontWeight: 500, 
              fontSize: '18px', 
              textDecoration: 'none', 
              marginTop: '4px', 
              fontFamily: 'Plus Jakarta Sans', 
              display: 'inline-block' 
            }}>
              Learn More →
            </a>
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/multiday-jobs.webp"
              alt="Multi-day Jobs Calendar Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
         
        
        <Integrations />
        <FaqSection />
        <FooterSection />
      </>
    );
  }
  if (industry === 'garage-door-repair') {
    const [isGarageVideoOpen, setIsGarageVideoOpen] = useState(false);
    
    return (
      <>
        <div style={{ display: 'flex', minHeight: '500px', width: '100%', marginTop: '80px', border: 'none', boxShadow: 'none', background: '#fff' }}>
          {/* Left Side */}
          <div style={{ background: '#FFD400', flex: 1, padding: '48px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#23282B', fontWeight: 600, marginBottom: 16, letterSpacing: 2 }}>GARAGE DOOR BUSINESS SOFTWARE</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              <span style={{ background: '#fff', padding: '0 8px', borderRadius: '4px', display: 'inline-block' }}>The #1 software</span><br />
              for garage door business
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#23282B', marginBottom: 32, maxWidth: 600 }}>
              Grow your garage door service company with the easy-to-use garage door software. Schedule jobs, send estimates, and automate tedious tasks with an all-in-one solution.
            </p>
            <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
              <button style={{ background: 'transparent', color: '#23282B', fontWeight: 600, fontSize: '1.125rem', padding: '16px 32px', borderRadius: 8, border: '2px solid #23282B', cursor: 'pointer' }}>Call us today</button>
              <button style={{ background: '#23282B', color: '#ffd400', fontWeight: 600, fontSize: '1.125rem', padding: '16px 32px', borderRadius: 8, border: 'none', cursor: 'pointer' }}>Start free trial</button>
            </div>
            <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/captera.webp" alt="Capterra" style={{ height: 32 }} />
                <span style={{ color: '#23282B' }}>★★★★★</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/software1.webp" alt="Software Advice" style={{ height: 32 }} />
                <span style={{ color: '#23282B' }}>★★★★★</span>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div style={{ flex: 1, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: 'none', boxShadow: 'none' }}>
            <img src="/images/person.webp" alt="Garage Door Technician" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
            
            {/* Testimonial Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '80px',
              left: '2px',
              width: '340px',
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '8px',
              padding: '16px',
              color: 'white'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: 'bold', 
                marginBottom: '6px', 
                color: 'white',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Yuriy Dvomkin
              </h3>
              <p style={{ 
                fontSize: '0.875rem', 
                marginBottom: '8px', 
                color: '#ccc',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Owner of Garage Door Ninja
              </p>
              <button 
                onClick={() => setIsGarageVideoOpen(true)}
                style={{
                  background: '#FFD400',
                  color: '#23282B',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 12px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}
              >
                <span style={{ fontSize: '1rem' }}>▶</span>
                Watch testimonial
              </button>
            </div>
          </div>
        </div>

        {/* Growth Stats Section */}
        <section style={{ 
          background: '#23282B', 
          padding: '24px 0',
          width: '100%' 
        }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            
            {/* Left: Growth Stat */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#22c55e',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 17L9 11L13 15L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 7H21V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: 'white',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                23% avg. growth in 3 months
              </div>
            </div>

            {/* Right: Award badges */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <img 
                src="/images/badge-1.png" 
                alt="Momentum Leader 2025" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/bdge-2.png" 
                alt="High Performer Winter 2024" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/badge-3.png" 
                alt="Leader 2025" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/badge-4.png" 
                alt="Best Business Leader" 
                style={{ height: '55px', width: 'auto' }}
              />
              <img 
                src="/images/badge-5.png" 
                alt="Leader Winter 2024" 
                style={{ height: '55px', width: 'auto' }}
              />
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {isGarageVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setIsGarageVideoOpen(false)}
          >
            <div
              className="bg-black rounded-xl overflow-hidden shadow-lg relative"
              style={{ width: "90vw", maxWidth: 640 }}
              onClick={e => e.stopPropagation()}
            >
              <iframe
                width="640"
                height="360"
                src="https://player.vimeo.com/video/794497293?autoplay=1&color=ffd400&title=0&byline=0&portrait=0"
                title="Garage Door Testimonial Video"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition"
                onClick={() => setIsGarageVideoOpen(false)}
              >
                <svg width="24" height="24" fill="none" stroke="#23282b" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M6 18L18 6"/>
                </svg>
              </button>
            </div>
          </div>
        )}
         {/* Features Section - Inventory & Online Booking */}
         <section style={{ 
          background: '#fff', 
          padding: '80px 0',
          width: '100%' 
        }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            gap: '32px',
            flexWrap: 'wrap',
            alignItems: 'stretch'
          }}>
            
            {/* Left Card - Inventory Tracking */}
            <div style={{ 
              background: 'linear-gradient(169.48deg, #096187 5.7%, #23282B 98.96%)',
              borderRadius: '16px', 
              flex: '1',
              minWidth: '500px',
              position: 'relative',
              overflow: 'hidden',
              height: '500px'
            }}>
              {/* Background Image */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}>
                <img 
                  src="https://www.workiz.com/wp-content/uploads/2024/08/feature-block-inventory-electrician-desktop.webp"
                  alt="Feature Block Inventory Electrician Desktop"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div style={{
                position: 'relative',
                zIndex: 3,
                padding: '40px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '50%'
              }}>
                <div>
                  <div style={{ 
                    fontSize: '12px', 
                    fontWeight: 500, 
                    letterSpacing: '2px',
                    marginBottom: '16px',
                    color: 'white',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    INVENTORY
                  </div>
                  <h3 style={{ 
                    fontSize: '40px', 
                    fontWeight: 700, 
                    lineHeight: 1.1,
                    letterSpacing: '1px',
                    marginBottom: '24px',
                    color: '#FFD400',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Track your inventory in real-time
                  </h3>
                  <div style={{ 
                    fontSize: '16px', 
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: 'white',
                    marginBottom: '32px'
                  }}>
                    <p>Cut costs by tracking your inventory with real-time usage data and activity reports.</p>
                  </div>
                </div>
                <div>
                  <a 
                    href="https://www.workiz.com/features/inventory-management/" 
                    style={{
                      background: 'transparent',
                      border: '2px solid white',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'inline-block',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            {/* Sales Proposals Card */}
            <div style={{ 
              flex: 1, 
              background: 'linear-gradient(169.48deg, #096187 5.7%, #23282B 98.96%)', 
              borderRadius: '20px', 
              position: 'relative',
              overflow: 'hidden',
              height: '500px',
              display: 'flex'
            }}>
              {/* Background Image Layer */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                zIndex: 1
              }}>
                <div style={{ width: '40%' }}></div>
                <div style={{ 
                  width: '60%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'flex-end',
                  paddingRight: '0px'
                }}>
                  <img 
                    src="https://www.workiz.com/wp-content/uploads/2023/07/hl-sales-proposals.webp" 
                    alt="Sales Proposals Desktop" 
                    style={{ 
                      width: 'auto',
                      height: '90%',
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              </div>

              {/* Text Content Layer */}
              <div style={{ 
                width: '50%',
                padding: '60px',
                paddingTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                zIndex: 3,
                position: 'relative'
              }}>
                <div>
                  <div style={{ 
                    color: 'white', 
                    fontSize: '0.7rem', 
                    fontWeight: 700, 
                    letterSpacing: '2px',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    SALES PROPOSALS
                  </div>
                  <h2 style={{ 
                    color: '#FFD400', 
                    fontSize: '2.2rem', 
                    fontWeight: 900, 
                    lineHeight: 1.1,
                    marginBottom: '16px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Win 25% more jobs
                  </h2>
                  <p style={{ 
                    color: 'white', 
                    fontSize: '0.9rem', 
                    fontWeight: 400,
                    lineHeight: 1.4,
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    Close larger deals by<br/>providing sales proposals<br/>to fit your customers<br/>budget requirements.
                  </p>
                </div>
                <button style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  alignSelf: 'flex-start',
                  marginTop: '120px'
                }}>
                  Learn more
                </button>
              </div>

              {/* Mobile Image for smaller screens */}
              <div style={{
                position: 'absolute',
                right: '20px',
                top: '40px',
                bottom: '40px',
                width: '45%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}>
                <img 
                  src="https://www.workiz.com/wp-content/uploads/2023/07/hl-sales-proposals-mob.webp" 
                  alt="Sales Proposals Mobile Interface" 
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    display: 'none'
                  }} 
                />
              </div>
            </div>
          </div>
        </section>
          
         {/* Purchase Orders Section */}
         <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 32 }}>
            <img
              src="/images/orders.webp"
              alt="Orders Table"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingRight: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>PURCHASE ORDERS</div>
            <div style={{ color: '#23282B', fontWeight: 560, fontSize: 35, marginBottom: 16, lineHeight: 1.1 }}>Your one–stop shop for order management</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Quickly create and send purchase orders to vendors, linking items to your price book and relevant jobs. Track orders and monitor statuses, ensuring full visibility and reducing errors.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 22, padding: '18px 44px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start free trial</button>
          </div>
        </section>

        {/* Garage Door Scheduling Software Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#22c55e', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
              GARAGE DOOR SCHEDULING SOFTWARE
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Manage and dispatch your garage door jobs
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '18px', 
              fontWeight: 400, 
              marginBottom: '32px', 
              lineHeight: 1.4 
            }}>
              Transform your technician's scheduling and dispatching into a seamless, efficient process with our drag-and-drop scheduling tool. Manage your day, locations, and other garage door details on the go with the Workiz app. Offer your customers the flexibility to book online anytime, day or night.
            </div>
            <button style={{ 
              background: '#FFD400', 
              color: '#23282B', 
              fontWeight: 600, 
              fontSize: '18px', 
              padding: '16px 32px', 
              borderRadius: '8px', 
              border: 'none', 
              cursor: 'pointer', 
              width: 'fit-content', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              fontFamily: 'Plus Jakarta Sans'
            }}>
              Start free trial
            </button>
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/garage-door.jpg"
              alt="Garage Door Scheduling Software Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
         {/* Communications Suite Section */}
         <section style={{ width: '100%', display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f8fafc', border: 'none', boxShadow: 'none', padding: '80px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: '340px', maxWidth: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', paddingLeft: '32px' }}>
            <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '14px', letterSpacing: '1px', marginBottom: '8px', fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>
              COMMUNICATIONS SUITE
            </div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: '48px', marginBottom: '16px', fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>
              A new level of customer experience
            </div>
            <div style={{ color: '#23282B', fontSize: '18px', fontWeight: 400, marginBottom: '32px', lineHeight: 1.6 }}>
              Experience enhanced communication, better response times, and superior customer service with our integrated phone system. Improve your bottom line by sending automatic reminders, special deals on garage door services to clients, follow-ups for garage door estimates and invoices, and get notified of missed calls or voicemails.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: '18px', padding: '16px 32px', borderRadius: '8px', border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', fontFamily: 'Plus Jakarta Sans' }}>
              Start free trial
            </button>
          </div>
          
          {/* Right: Interface Image */}
          <div style={{ flex: 1, minWidth: '340px', maxWidth: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '32px' }}>
            <img src="/images/communications.webp" alt="Communications Suite Interface" style={{ width: '100%', maxWidth: '600px', borderRadius: '24px', boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }} loading="lazy" decoding="async" />
          </div>
        
        </section>
        {/* Online Booking Section */}
<section style={{ width: '100%', display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '80px 0' }}>
  {/* Left: Text Content */}
  <div style={{ flex: 1, minWidth: '340px', maxWidth: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', paddingLeft: '32px' }}>
    <div style={{ color: '#3b82f6', fontWeight: 700, fontSize: '14px', letterSpacing: '1px', marginBottom: '8px', fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>
      ONLINE BOOKING
    </div>
    <div style={{ color: '#23282B', fontWeight: 700, fontSize: '48px', marginBottom: '16px', fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>
      Win more garage door jobs
    </div>
    <div style={{ color: '#23282B', fontSize: '18px', fontWeight: 400, marginBottom: '32px', lineHeight: 1.6 }}>
      Turn leads into garage door jobs, get paid in advance, and increase bookings by 30% with the Workiz Online Booking widget. Make it easier for customers to book your garage door services from Google, your website, social media, or anywhere with your link.
    </div>
    <a href="#" style={{ color: '#23282B', fontWeight: 600, fontSize: '18px', textDecoration: 'none', fontFamily: 'Plus Jakarta Sans', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      Learn More →
    </a>
  </div>
  
  {/* Right: Image */}
  <div style={{ flex: 1, minWidth: '340px', maxWidth: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '32px' }}>
    <img 
      src="/images/online.webp" 
      alt="Online Booking Interface for Garage Door Services" 
      style={{ width: '100%', maxWidth: '600px', borderRadius: '24px', boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }} 
      loading="lazy" 
      decoding="async" 
    />
  </div>
</section>
{/* Price Book & Sales Proposals Section */}
<section style={{ width: '100%', display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f8fafc', border: 'none', boxShadow: 'none', padding: '80px 0' }}>
  {/* Left: Text Content */}
  <div style={{ flex: 1, minWidth: '340px', maxWidth: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', paddingLeft: '32px' }}>
    <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '14px', letterSpacing: '1px', marginBottom: '8px', fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>
      PRICE BOOK & SALES PROPOSALS
    </div>
    <div style={{ color: '#23282B', fontWeight: 700, fontSize: '48px', marginBottom: '16px', fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>
      Sales tools
    </div>
    <div style={{ color: '#23282B', fontSize: '18px', fontWeight: 400, marginBottom: '32px', lineHeight: 1.6 }}>
      Set your garage door team up for success with all the tools you need to upsell and increase your revenue. Offer the best customer service with a beautifully designed price book and give your clients an accurate estimate with our sales proposals.
    </div>
    <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: '18px', padding: '16px 32px', borderRadius: '8px', border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', fontFamily: 'Plus Jakarta Sans' }}>
      Start free trial
    </button>
  </div>
  
  {/* Right: Image */}
  <div style={{ flex: 1, minWidth: '340px', maxWidth: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '32px' }}>
    <img 
      src="/images/pricebook1.webp" 
      alt="Price Book and Sales Proposals Interface showing garage door components and pricing options" 
      style={{ width: '100%', maxWidth: '600px', borderRadius: '24px', boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }} 
      loading="lazy" 
      decoding="async" 
    />
  </div>
</section>
{/* WorkizPay Section */}
<section style={{ width: '100%', display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '80px 0' }}>
  {/* Left: Image */}
  <div style={{ flex: 1, minWidth: '340px', maxWidth: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '32px' }}>
    <img 
      src="/images/electric-field.webp" 
      alt="WorkizPay payment interface showing invoice and card reader with multiple payment options" 
      style={{ width: '100%', maxWidth: '600px', borderRadius: '24px', boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }} 
      loading="lazy" 
      decoding="async" 
    />
  </div>
  
  {/* Right: Text Content */}
  <div style={{ flex: 1, minWidth: '340px', maxWidth: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', paddingRight: '32px' }}>
    <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '14px', letterSpacing: '1px', marginBottom: '8px', fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>
      WORKIZ PAY
    </div>
    <div style={{ color: '#23282B', fontWeight: 700, fontSize: '48px', marginBottom: '16px', fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>
      Payments made easy
    </div>
    <div style={{ color: '#23282B', fontSize: '18px', fontWeight: 400, marginBottom: '32px', lineHeight: 1.6 }}>
      Get all your financial needs under one umbrella with WorkizPay. Benefit from quicker in-field payments through our handy card readers, so you'll never miss a payment again. Secure more high ticket garage door jobs with Sunbit's consumer financing integrated in the Workiz platform.
    </div>
    <a href="#" style={{ color: '#23282B', fontWeight: 600, fontSize: '18px', textDecoration: 'none', fontFamily: 'Plus Jakarta Sans', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      Learn more →
    </a>
  </div>
</section>
{/* Ad Tracking Section */}
<section style={{ width: '100%', display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '80px 0' }}>
  {/* Left: Text Content */}
  <div style={{ flex: 1, minWidth: '340px', maxWidth: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', paddingLeft: '32px' }}>
    <div style={{ color: '#3b82f6', fontWeight: 700, fontSize: '14px', letterSpacing: '1px', marginBottom: '8px', fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>
      AD TRACKING
    </div>
    <div style={{ color: '#23282B', fontWeight: 700, fontSize: '48px', marginBottom: '16px', fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>
      Increase your marketing efforts
    </div>
    <div style={{ color: '#23282B', fontSize: '18px', fontWeight: 400, marginBottom: '32px', lineHeight: 1.6 }}>
      Boost your ROI and optimize your marketing strategy with ad optimization. Save up to 16% on your marketing budget and reallocate funds to enhance your garage door business. Our ad source analysis pinpoints which sources drive maximum conversions allowing data-informed decision-making.
    </div>
    <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: '18px', padding: '16px 32px', borderRadius: '8px', border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', fontFamily: 'Plus Jakarta Sans' }}>
      Start free trial
    </button>
  </div>
  
  {/* Right: Image */}
  <div style={{ flex: 1, minWidth: '340px', maxWidth: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '32px' }}>
    <img 
      src="/images/ad-tracking.webp" 
      alt="Marketing analytics dashboard showing ad tracking performance with ROI metrics for garage door business" 
      style={{ width: '100%', maxWidth: '600px', borderRadius: '24px', boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }} 
      loading="lazy" 
      decoding="async" 
    />
  </div>
</section>
 {/* Multi-day Jobs Section */}
 <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#f25c4d', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
              MULTI-DAY JOBS
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Complex plumbing jobs managed efficiently
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '18px', 
              fontWeight: 400, 
              marginBottom: '24px', 
              lineHeight: 1.4 
            }}>
              Track progress of multi-day plumbing jobs with tasks. You can assign more than one technician to a task and ensure efficient collaboration and job management. With the progress bar you will never miss a step and get more jobs done on time.
            </div>
            <a href="#" style={{ 
              color: '#23282B', 
              fontWeight: 500, 
              fontSize: '18px', 
              textDecoration: 'none', 
              marginTop: '4px', 
              fontFamily: 'Plus Jakarta Sans', 
              display: 'inline-block' 
            }}>
              Learn More →
            </a>
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/multiday-jobs.webp"
              alt="Multi-day Jobs Calendar Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        
        
        
        
        <Integrations />
        <FaqSection />
        <FooterSection />
      </>
    );
  }

  if (industry === 'locksmith') {
    const [isLocksmithVideoOpen, setIsLocksmithVideoOpen] = useState(false);
    
    return (
      <>
        {/* Breadcrumb Navigation */}
        <div style={{ background: '#f8fafc', padding: '16px 0', marginTop: '80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '32px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#6b7280' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Home</a>
            <span>›</span>
            <a href="/industry" style={{ color: '#6b7280', textDecoration: 'none' }}>Industries</a>
            <span>›</span>
            <span style={{ color: '#23282B', fontWeight: 500 }}>Locksmith</span>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ display: 'flex', flexDirection: 'row', minHeight: '500px', width: '100%', border: 'none', boxShadow: 'none', background: '#fff' }} className="flex flex-row">
          {/* Left Side - Yellow Background */}
          <div style={{ background: '#FFD400', flex: 1, padding: '48px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#23282B', fontWeight: 600, marginBottom: 16, letterSpacing: 2, fontSize: '14px' }}>LOCKSMITH SOFTWARE</div>
            
            <h1 style={{ fontWeight: 800, lineHeight: 1.1, marginBottom: 24, fontSize: '3.5rem', color: '#23282B' }}>
              Grow your business<br />
              with the <span style={{ background: '#fff', padding: '0 8px', borderRadius: '4px', display: 'inline-block' }}>#1</span><br />
              <span style={{ background: '#fff', padding: '0 8px', borderRadius: '4px', display: 'inline-block' }}>locksmith software</span>
            </h1>
            
            <p style={{ color: '#23282B', marginBottom: 32, maxWidth: 600, fontSize: '1.125rem', lineHeight: 1.6 }}>
              The all-in-one solution built for your locksmith teams and trusted by over 120,000 pros. Streamline operations, win more jobs and deliver the best customer service.
            </p>
            
            <button style={{ background: '#23282B', color: '#FFD400', fontWeight: 600, borderRadius: 8, border: 'none', marginBottom: 32, cursor: 'pointer', width: 'fit-content', fontSize: '1.125rem', padding: '16px 32px' }}>
              Book a demo
            </button>
            
            {/* Rating Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ background: '#3b82f6', padding: '6px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>📊</span>
                </div>
                <div>
                  <div style={{ color: '#23282B', fontWeight: 600, fontSize: '14px' }}>Capterra</div>
                  <div style={{ color: '#23282B', fontSize: '14px' }}>★★★★☆</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ background: '#ef4444', padding: '6px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>💬</span>
                </div>
                <div>
                  <div style={{ color: '#23282B', fontWeight: 600, fontSize: '14px' }}>Software Advice</div>
                  <div style={{ color: '#23282B', fontSize: '14px' }}>★★★★☆</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Locksmith Image */}
          <div style={{ flex: 1, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <img src="/images/jacob.webp" alt="Jacob Szender - Professional Locksmith" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            
            {/* Testimonial Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '0px',
              width: '300px',
              background: 'rgba(0,0,0,0.8)',
              borderRadius: '8px',
              padding: '16px',
              color: 'white'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '4px', color: 'white' }}>
                Jacob Szender
              </h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '12px', color: '#ccc' }}>
                CEO of Sure Lock & Key
              </p>
              <button 
                onClick={() => setIsLocksmithVideoOpen(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FFD400',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ fontSize: '1rem' }}>▶</span>
                Watch testimonial
              </button>
            </div>
          </div>
        </div>

        {/* Win 3X More Jobs Section */}
        <section style={{ background: '#23282B', padding: '24px 0', width: '100%' }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            
            {/* Left: Win 3X more jobs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #E91E63, #9C27B0)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h7v8l10-12h-7z"/>
                </svg>
              </div>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: 'white',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Win 3X more jobs
              </div>
            </div>

            {/* Right: Award badges */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <img src="/images/badge-1.png" alt="Leader 2025" style={{ height: '55px', width: 'auto' }} />
              <img src="/images/bdge-2.png" alt="High Performer Winter 2024" style={{ height: '55px', width: 'auto' }} />
              <img src="/images/badge-3.png" alt="Leader 2025" style={{ height: '55px', width: 'auto' }} />
              <img src="/images/badge-4.png" alt="Leader Winter 2024" style={{ height: '55px', width: 'auto' }} />
              <img src="/images/badge-5.png" alt="Leader Winter 2024" style={{ height: '55px', width: 'auto' }} />
            </div>
          </div>
        </section>

       

        {/* Video Modal */}
        {isLocksmithVideoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setIsLocksmithVideoOpen(false)}
          >
            <div
              className="bg-black rounded-xl overflow-hidden shadow-lg relative"
              style={{ width: "90vw", maxWidth: 640 }}
              onClick={e => e.stopPropagation()}
            >
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/lhZe4uCEi0s?autoplay=1&color=ffd400&rel=0"
                title="Locksmith Testimonial Video"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition"
                onClick={() => setIsLocksmithVideoOpen(false)}
              >
                <svg width="24" height="24" fill="none" stroke="#23282b" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M6 18L18 6"/>
                </svg>
              </button>
            </div>
          </div>
        )}
         {/* Feature Cards Section - Tipping & Online Booking */}
         <section style={{ background: '#fff', padding: '80px 0', width: '100%' }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            gap: '32px',
            flexWrap: 'wrap',
            alignItems: 'stretch'
          }}>
            
            {/* Left Card - ng */}
            <div style={{ 
              background: 'linear-gradient(169.48deg, #096187 5.7%, #23282B 98.96%)',
              borderRadius: '16px', 
              flex: '1',
              minWidth: '500px',
              overflow: 'hidden',
              height: '500px',
              display: 'flex',
              flexDirection: 'row',
              gap: '0.5rem'
            }}>
              <div style={{ position: 'relative', width: '100%' }}>
                {/* Background Layer - Desktop Image */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }} className="hidden md:flex">
                  <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                    <div style={{ width: '40%' }}></div>
                    <div style={{ 
                      width: '60%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-end'
                    }}>
                      <img 
                        width="640" 
                        height="898"
                        src="https://www.workiz.com/wp-content/uploads/2023/05/workiz-tips-mobile-app-v4623.webp"
                        alt="Workiz Tips Mobile App V4623"
                        style={{ 
                          width: '100%', 
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                        className="hidden md:block"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content Layer */}
                <div style={{
                  position: 'relative',
                  zIndex: 3,
                  padding: '2.5rem 2rem',
                  margin: 0
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%'
                  }} className="flex-col-reverse md:flex-row justify-start md:justify-start">
                    {/* Text Column */}
                    <div style={{
                      width: '50%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '1rem 1.5rem',
                      maxWidth: '100%',
                      flexGrow: 1
                    }}>
                      <div>
                        <div style={{
                          fontSize: '12px',
                          fontWeight: 500,
                          textTransform: 'uppercase',
                          letterSpacing: '2px',
                          color: 'white',
                          fontFamily: "'Inter', sans-serif",
                          marginBottom: '1.5rem',
                          visibility: 'visible',
                          animationDelay: '0.1s',
                          animationName: 'fadeInUp'
                        }}>
                          Tipping
                        </div>
                        <div style={{
                          fontSize: '40px',
                          fontWeight: 700,
                          lineHeight: 1.1,
                          letterSpacing: '1px',
                          marginBottom: '1.5rem',
                          color: '#FFD400',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          visibility: 'visible',
                          animationDelay: '0.25s',
                          animationName: 'fadeInUp'
                        }}>
                          Double<br className="hidden md:block" /> your tips
                        </div>
                        <div style={{
                          fontSize: '16px',
                          fontWeight: 400,
                          color: 'white',
                          visibility: 'visible',
                          animationDelay: '0.5s',
                          animationName: 'fadeInUp'
                        }}>
                          <p>Encourage customers to<br/>
                          leave tips more frequently,<br/>
                          potentially increasing your<br/>
                          earnings.</p>
                        </div>
                      </div>
                      <div style={{
                        alignSelf: 'flex-start',
                        visibility: 'visible',
                        animationDelay: '0.75s',
                        animationName: 'fadeInDown',
                        marginTop: '48px'
                      }} className="hidden md:flex">
                        <a 
                          href="https://www.workiz.com/signup/join-workiz/"
                          style={{
                            background: '#FFD400',
                            color: '#23282B',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontFamily: "'Plus Jakarta Sans', sans-serif"
                          }}
                        >
                          Start free trial
                        </a>
                      </div>
                    </div>

                    {/* Mobile Image Column */}
                    <div style={{
                      width: '45%',
                      maxWidth: '100%'
                    }}>
                      <img 
                        width="686" 
                        height="384"
                        src="https://www.workiz.com/wp-content/uploads/2023/05/hl-tipping-mob.webp"
                        alt="Hl Tipping Mob"
                        style={{
                          width: '100%',
                          height: 'auto'
                        }}
                        className="block md:hidden"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Online Booking */}
            <div style={{ 
              flex: 1, 
              minWidth: '500px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5rem',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '500px',
                background: 'linear-gradient(180deg, #F6F8FA 0%, #E4E9EC 100%)'
              }}>
                <div style={{ position: 'relative', width: '100%' }}>
                  {/* Background Layer - Desktop Image */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }} className="hidden md:flex">
                    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                      <div style={{ width: '40%' }}></div>
                      <div style={{ 
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                      }}>
                        <img 
                          width="640" 
                          height="898"
                          src="https://www.workiz.com/wp-content/uploads/2024/05/online-booking-feature-banner-v2.webp"
                          alt="Online Booking Feature Banner V2"
                          style={{ 
                            width: '100%', 
                            height: 'auto'
                          }}
                          className="hidden md:block"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Content Layer */}
                  <div style={{
                    position: 'relative',
                    zIndex: 3,
                    padding: '2.5rem 2rem',
                    margin: 0
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      height: '100%'
                    }} className="flex-col-reverse md:flex-row justify-start md:justify-start">
                      {/* Text Column */}
                      <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '1rem 1.5rem',
                        maxWidth: '100%',
                        flexGrow: 1
                      }}>
                        <div>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: '#1d4ed8',
                            fontFamily: "'Inter', sans-serif",
                            marginBottom: '1.5rem',
                            visibility: 'visible',
                            animationDelay: '0.1s',
                            animationName: 'fadeInUp'
                          }}>
                            ONLINE BOOKING
                          </div>
                          <div style={{
                            fontSize: '40px',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: '1px',
                            marginBottom: '1.5rem',
                            color: '#23282B',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            visibility: 'visible',
                            animationDelay: '0.25s',
                            animationName: 'fadeInUp'
                          }}>
                            Be available 24/7
                          </div>
                          <div style={{
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#23282B',
                            visibility: 'visible',
                            animationDelay: '0.5s',
                            animationName: 'fadeInUp'
                          }}>
                            <p>Turn leads into jobs, get paid in advance, and increase bookings by 30% with the Workiz Online Booking widget.</p>
                          </div>
                        </div>
                        <div style={{
                          alignSelf: 'flex-end',
                          visibility: 'visible',
                          animationDelay: '0.75s',
                          animationName: 'fadeInDown'
                        }} className="hidden md:flex">
                          <a 
                            href="https://www.workiz.com/features/online-booking/"
                            style={{
                              background: 'transparent',
                              border: '2px solid #23282B',
                              color: '#23282B',
                              padding: '12px 24px',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              textDecoration: 'none',
                              display: 'inline-block',
                              fontFamily: "'Plus Jakarta Sans', sans-serif"
                            }}
                          >
                            Online Booking
                          </a>
                        </div>
                      </div>

                      {/* Mobile Image Column */}
                      <div style={{
                        width: '45%',
                        maxWidth: '100%'
                      }}>
                        <img 
                          width="686" 
                          height="384"
                          src="https://www.workiz.com/wp-content/uploads/2024/05/Locksmith-online-booking-mobile.png"
                          alt="Locksmith Online Booking Mobile"
                          style={{
                            width: '100%',
                            height: 'auto'
                          }}
                          className="block md:hidden"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         {/* Inventory Management Section */}
         <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>INVENTORY MANAGEMENT</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>Keep the warehouse organized</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
              Stay on top of your operations and always come to the job site prepared with inventory management. Prevent overstocking, shortages, and miscalculations with real-time status updates on all your supplies, plus save 20% of your inventory costs.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/inventory.webp"
              alt="Inventory Management"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
       
         {/* Scheduling Section */}
         <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
                         <h2 style={{ 
               fontSize: '12px', 
               textTransform: 'uppercase', 
               fontWeight: 700, 
               lineHeight: 1.1, 
               margin: '0.5rem 0', 
               color: '#1d4ed8',
               fontFamily: 'Plus Jakarta Sans',
               letterSpacing: '1px',
               visibility: 'visible', 
               animationDelay: '0.15s', 
               animationName: 'fadeInUp'
             }}>Locksmith Scheduling Software</h2>
             <div style={{ color: '#23282B', fontWeight: 700, fontSize: 35,fontFamily:"Plus Jakarta Sans", marginBottom: 16, lineHeight: 1.1 }}>Boost your locksmith business</div>
             {/* Bullet Points */}
             <div style={{ marginBottom: '32px' }}>
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'flex-start', 
                 marginBottom: '16px',
                 fontSize: '18px',
                 lineHeight: 1.4,
                 color: '#23282B'
               }}>
                 <span style={{ 
                   color: '#22c55e', 
                   marginRight: '12px', 
                   fontSize: '20px',
                   fontWeight: 'bold'
                 }}>•</span>
                 <span>Enhance the Efficiency and Visibility of Your Business with Dynamic Scheduling Software</span>
               </div>
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'flex-start', 
                 marginBottom: '16px',
                 fontSize: '18px',
                 lineHeight: 1.4,
                 color: '#23282B'
               }}>
                 <span style={{ 
                   color: '#22c55e', 
                   marginRight: '12px', 
                   fontSize: '20px',
                   fontWeight: 'bold'
                 }}>•</span>
                 <span>Provide Your Customers with Convenient 24/7 Online Booking</span>
               </div>
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'flex-start', 
                 marginBottom: '16px',
                 fontSize: '18px',
                 lineHeight: 1.4,
                 color: '#23282B'
               }}>
                 <span style={{ 
                   color: '#22c55e', 
                   marginRight: '12px', 
                   fontSize: '20px',
                   fontWeight: 'bold'
                 }}>•</span>
                 <span>View and Categorize All Your locksmith Jobs in One Centralized Location with Ease</span>
               </div>
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'flex-start', 
                 marginBottom: '16px',
                 fontSize: '18px',
                 lineHeight: 1.4,
                 color: '#23282B'
               }}>
                 <span style={{ 
                   color: '#22c55e', 
                   marginRight: '12px', 
                   fontSize: '20px',
                   fontWeight: 'bold'
                 }}>•</span>
                 <span>Optimize Task Management by Assigning Jobs to Specific Resources Based on Their Needs</span>
               </div>
             </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500,fontFamily:"Plus Jakarta Sans", fontSize: 18, textDecoration: 'none', marginTop: 4, display: 'inline-block' }}>Learn More &rarr;</a>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/scheduling.png"
              alt="Scheduling Calendar"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* Yellow CTA Banner Section */}
        <section style={{ 
          background: '#FFD400', 
          borderRadius: '32px', 
          margin: '64px auto', 
          maxWidth: '1200px',
          width: 'calc(100% - 48px)',
          padding: '40px 60px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap',
          position: 'relative'
        }}>
       

          {/* Left: Text Content */}
          <div style={{ 
            flex: '2', 
            minWidth: '400px',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px'
          }}>
            <h2 style={{ 
              color: '#23282B', 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              lineHeight: 1.1,
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Grow your business with Workiz
            </h2>
            <p style={{ 
              color: '#23282B', 
              fontSize: '1.1rem', 
              fontWeight: 400,
              lineHeight: 1.5,
              margin: 0,
              maxWidth: '500px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              The leading field service platform for teams. Schedule jobs, dispatch, invoice, track performance, and get paid — all in one platform.
            </p>
          </div>

          {/* Right: Buttons */}
          <div style={{ 
            flex: '1', 
            minWidth: '280px',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px',
            alignItems: 'flex-end'
          }}>
            <button style={{
              background: '#23282B',
              color: '#FFD400',
              border: 'none',
              borderRadius: '8px',
              padding: '14px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              width: '200px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: 'all 0.2s ease'
            }}>
              Get started free
            </button>
            <button style={{
              background: 'transparent',
              color: '#23282B',
              border: '2px solid #23282B',
              borderRadius: '8px',
              padding: '14px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              width: '200px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: 'all 0.2s ease'
            }}>
              Book a demo
            </button>
          </div>
        </section>
         {/* Workiz Pay Section */}
         <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 32 }}>
            <img
              src="/images/workiz-pa.webp"
              alt="Workiz Pay"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingRight: 32 }}>
            <div style={{ color: '#black', fontWeight: 900, fontSize: 25, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>Locksmith pros, get paid in the field faster</div>
                          {/* Bullet Points */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '16px',
                  fontSize: '18px',
                  lineHeight: 1.4,
                  color: '#23282B'
                }}>
                  <span style={{ 
                    color: '#22c55e', 
                    marginRight: '12px', 
                    fontSize: '20px',
                    fontWeight: 'bold'
                  }}>•</span>
                  <span>Revolutionize Your Financial Management with WorkizPay The AllInOne Solution</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '16px',
                  fontSize: '18px',
                  lineHeight: 1.4,
                  color: '#23282B'
                }}>
                  <span style={{ 
                    color: '#22c55e', 
                    marginRight: '12px', 
                    fontSize: '20px',
                    fontWeight: 'bold'
                  }}>•</span>
                  <span>Streamline Your Payments by Accepting Card Payments in the Field</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '16px',
                  fontSize: '18px',
                  lineHeight: 1.4,
                  color: '#23282B'
                }}>
                  <span style={{ 
                    color: '#22c55e', 
                    marginRight: '12px', 
                    fontSize: '20px',
                    fontWeight: 'bold'
                  }}>•</span>
                  <span>Boost Sales by Offering Flexible Payment Plans for HighPriced Jobs</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '16px',
                  fontSize: '18px',
                  lineHeight: 1.4,
                  color: '#23282B'
                }}>
                  <span style={{ 
                    color: '#22c55e', 
                    marginRight: '12px', 
                    fontSize: '20px',
                    fontWeight: 'bold'
                  }}>•</span>
                  <span>Experience the Magic of Automated Invoicing, Estimating, and Depositing to Enhance Your Business Operations</span>
                </div>
              </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
        </section>
         {/* Purchase Orders Section */}
         <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 32 }}>
            <img
              src="/images/orders.webp"
              alt="Orders Table"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingRight: 32 }}>
            <h2 style={{ 
              fontSize: '12px', 
              textTransform: 'uppercase', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              margin: '0.5rem 0', 
              color: '#f25c4d',
              fontFamily: 'Plus Jakarta Sans',
              letterSpacing: '1px',
              visibility: 'visible', 
              animationDelay: '0.15s', 
              animationName: 'fadeInUp'
            }}>PURCHASE ORDERS</h2>
            <h3 style={{ 
              fontSize: '36px', 
              fontWeight: 600, 
              letterSpacing: '1px', 
              lineHeight: 1.1, 
              marginBottom: '1.5rem', 
              color: '#23282B',
              fontFamily: 'Plus Jakarta Sans',
              visibility: 'visible', 
              animationDelay: '0.15s', 
              animationName: 'fadeInUp'
            }}>Your one-stop shop for order management</h3>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Quickly create and send purchase orders to vendors, linking items to your price book and relevant jobs. Track orders and monitor statuses, ensuring full visibility and reducing errors.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 22, padding: '18px 44px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start free trial</button>
          </div>
        </section>
         {/* Electrical Job Management Section */}
         <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#fff', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#f25c4d', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
             Locksmith Service Management Software
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '24px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
          Maximize every locksmith job opportunity
            </div>
            
            {/* Bullet Points */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Control your jobs with Workiz’s Communication Suite</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Manage Your Calls and Messages with Ease and Deliver Stellar Customer Service</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Increase Your Revenue by Sending Automatic Review Request Reminders</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Differentiate Your Business from the Competition by Providing Exceptional Service that Wows Customers</span>
              </div>
            </div>
            
            <button style={{ 
              background: '#FFD400', 
              color: '#23282B', 
              fontWeight: 600, 
              fontSize: '18px', 
              padding: '16px 32px', 
              borderRadius: '8px', 
              border: 'none', 
              cursor: 'pointer', 
              width: 'fit-content', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              fontFamily: 'Plus Jakarta Sans'
            }}>
              Book a demo
            </button>
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/electric-job.webp"
              alt="Electrical Job Management Communications Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
          {/* Route Optimization Section */}
          <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '30px', 
              marginBottom: '24px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Reduce transit time and cut costs
            </div>
            
            {/* Bullet Points */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Wrap up your day on schedule with streamlined route planning and GPS tracking.</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Cut your fuel expenses by up to 30% by optimizing your routes and minimizing mileage.</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Boost your productivity and enhance your customer service with Workiz’s routing tools.</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                fontSize: '18px',
                lineHeight: 1.4,
                color: '#23282B'
              }}>
                <span style={{ 
                  color: '#22c55e', 
                  marginRight: '12px', 
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>•</span>
                <span>Plan your routes in mere seconds for better time management and productivity.</span>
              </div>
            </div>
            
           
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/ill.webp"
              alt="Route Optimization Map Interface showing scheduled jobs and GPS tracking"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      

        <Integrations />
        <FaqSection />
        <FooterSection />
      </>
    );
  }
  // Junk Removal Industry Page
  if (industry === 'junk-removal') {
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'row', minHeight: '500px', width: '100%', marginTop: '80px', border: 'none', boxShadow: 'none', background: '#fff' }} className="flex flex-row">
          {/* Left Side - Yellow Background */}
          <div style={{ background: '#FFD400', flex: 1, padding: '24px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Breadcrumbs */}
            <div style={{ color: '#23282B', fontSize: '14px', fontWeight: 400, marginBottom: 32, fontFamily: 'Plus Jakarta Sans' }}>
              Home &gt; Industries &gt; Junk Removal
            </div>
            
            {/* Main Heading */}
            <h1 style={{ fontWeight: 800, lineHeight: 1.1, marginBottom: 24, color: '#23282B', fontFamily: 'Plus Jakarta Sans' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              The #1<br />
              <span style={{ background: '#fff', padding: '4px 8px', borderRadius: '4px', display: 'inline-block' }}>junk removal</span> app
            </h1>
            
            {/* Description */}
            <p style={{ color: '#23282B', marginBottom: 32, maxWidth: 500, fontSize: '18px', lineHeight: 1.4, fontFamily: 'Plus Jakarta Sans' }}>
              Join over 3k haulers with the only platform that has all the features to grow your junk removal business. Schedule, dispatch, estimates and invoices all in one place.
            </p>
            
            {/* CTA Button */}
            <button style={{ background: '#23282B', color: '#ffd400', fontWeight: 600, borderRadius: 8, border: 'none', marginBottom: 32, cursor: 'pointer', width: 'fit-content', fontFamily: 'Plus Jakarta Sans' }} className="text-lg px-8 py-4">
              Book a demo
            </button>
            
            {/* Review Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="flex-col sm:flex-row gap-4 sm:gap-8">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/captera.webp" alt="Capterra" className="h-8 sm:h-10" />
                <div style={{ display: 'flex', color: '#FFD400', fontSize: '16px' }}>★★★★★</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/software1.webp" alt="Software Advice" className="h-8 sm:h-10" />
                <div style={{ display: 'flex', color: '#FFD400', fontSize: '16px' }}>★★★★★</div>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div style={{ flex: 1, background: 'linear-gradient(135deg, #4A90E2 0%, #7B68EE 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: 'none', boxShadow: 'none' }} className="min-h-[300px] md:min-h-[500px]">
            {/* Background Image */}
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              backgroundImage: 'url("/images/jerry.webp")', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}></div>
            
            {/* Testimonial Overlay */}
            <div style={{ 
              position: 'absolute', 
              bottom: 32, 
              left: 0, 
              background: 'rgba(0,0,0,0.3)', 
              borderRadius: 16, 
              color: '#fff', 
              maxWidth: 350,
              fontFamily: 'Plus Jakarta Sans'
            }} className="p-6">
              <div className="font-bold text-lg">Jerry Flanagan</div>
              <div className="text-base">CEO &amp; Founder @ JDog</div>
                             <div 
                 onClick={() => setIsJunkRemovalVideoOpen(true)}
                 style={{ 
                   color: '#FFD400', 
                   fontWeight: 600, 
                   marginTop: 12, 
                   cursor: 'pointer',
                   display: 'flex',
                   alignItems: 'center',
                   gap: 8
                 }} 
                 className="text-base"
               >
                 ▶ Watch testimonial
               </div>
            </div>
          </div>
                 </div>

        

         {/* Junk Removal Video Modal */}
         {isJunkRemovalVideoOpen && (
           <div 
             style={{
               position: 'fixed',
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               backgroundColor: 'rgba(0, 0, 0, 0.8)',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               zIndex: 9999
             }}
             onClick={() => setIsJunkRemovalVideoOpen(false)}
           >
             <div 
               style={{
                 position: 'relative',
                 width: '90%',
                 maxWidth: '800px',
                 aspectRatio: '16/9',
                 backgroundColor: '#000',
                 borderRadius: '8px',
                 overflow: 'hidden'
               }}
               onClick={(e) => e.stopPropagation()}
             >
               <button
                 onClick={() => setIsJunkRemovalVideoOpen(false)}
                 style={{
                   position: 'absolute',
                   top: '10px',
                   right: '10px',
                   background: 'rgba(255, 255, 255, 0.8)',
                   border: 'none',
                   borderRadius: '50%',
                   width: '40px',
                   height: '40px',
                   cursor: 'pointer',
                   fontSize: '20px',
                   fontWeight: 'bold',
                   zIndex: 10
                 }}
               >
                 ×
               </button>
               <iframe
                 src="https://player.vimeo.com/video/794672954?autoplay=1&title=0&byline=0&portrait=0"
                 style={{
                   width: '100%',
                   height: '100%',
                   border: 'none'
                 }}
                 allow="autoplay; fullscreen; picture-in-picture"
                 allowFullScreen
                 title="Junk Removal Testimonial"
               />
             </div>
           </div>
           
         )}
          {/* Statistics Section */}
          <div style={{ width: '100%' }}>
           {/* Yellow top bar */}
           <div style={{ background: '#FFD400', height: '8px', width: '100%' }}></div>
           
           {/* Stats content */}
           <div style={{ background: '#fff', padding: '60px 24px' }}>
                           <div style={{ 
                maxWidth: '1200px', 
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px'
              }}>
               {/* 3x more jobs won */}
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: '16px',
                 width: 'calc(25% - 15px)',
                 minWidth: '250px',
                 justifyContent: 'flex-start'
               }}>
                 <img 
                   src="https://www.workiz.com/wp-content/uploads/2023/01/Shopping-Jewelry-Diamond-2.svg" 
                   alt="Diamond Icon" 
                   style={{ width: '32px', height: '32px' }}
                   loading="lazy"
                   decoding="async"
                 />
                 <div>
                   <div style={{ 
                     fontSize: '56px', 
                     fontWeight: 500, 
                     color: '#23282B',
                     fontFamily: 'Plus Jakarta Sans',
                     lineHeight: 1,
                     marginBottom: '4px'
                   }}>3x</div>
                   <div style={{ 
                     fontSize: '12px', 
                     color: '#6B7280', 
                     fontFamily: 'Plus Jakarta Sans'
                   }}>more jobs won</div>
                 </div>
               </div>

               {/* 20hrs time saved */}
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: '16px',
                 width: 'calc(25% - 15px)',
                 minWidth: '250px',
                 justifyContent: 'flex-start'
               }}>
                 <img 
                   src="https://www.workiz.com/wp-content/uploads/2023/01/Interface-Time-Clock-Hand-1.svg" 
                   alt="Clock Icon" 
                   style={{ width: '32px', height: '32px' }}
                   loading="lazy"
                   decoding="async"
                 />
                 <div>
                   <div style={{ 
                     fontSize: '56px', 
                     fontWeight: 500, 
                     color: '#23282B',
                     fontFamily: 'Plus Jakarta Sans',
                     lineHeight: 1,
                     marginBottom: '4px'
                   }}>20hrs</div>
                   <div style={{ 
                     fontSize: '12px', 
                     color: '#6B7280', 
                     fontFamily: 'Plus Jakarta Sans'
                   }}>time saved per week</div>
                 </div>
               </div>

               {/* 23% growth */}
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: '16px',
                 width: 'calc(25% - 15px)',
                 minWidth: '250px',
                 justifyContent: 'flex-start'
               }}>
                 <img 
                   src="https://www.workiz.com/wp-content/uploads/2023/01/Shopping-Business-Startup.svg" 
                   alt="Business Growth Icon" 
                   style={{ width: '32px', height: '32px' }}
                   loading="lazy"
                   decoding="async"
                 />
                 <div>
                   <div style={{ 
                     fontSize: '56px', 
                     fontWeight: 500, 
                     color: '#23282B',
                     fontFamily: 'Plus Jakarta Sans',
                     lineHeight: 1,
                     marginBottom: '4px'
                   }}>23%</div>
                   <div style={{ 
                     fontSize: '12px', 
                     color: '#6B7280', 
                     fontFamily: 'Plus Jakarta Sans'
                   }}>avg. growth in the first 3 months</div>
                 </div>
               </div>

               {/* 63% less time */}
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: '16px',
                 flex: '1',
                 minWidth: '250px'
               }}>
                 <img 
                   src="https://www.workiz.com/wp-content/uploads/2023/01/Interface-Content-Fire.svg" 
                   alt="Fire Icon" 
                   style={{ width: '32px', height: '32px' }}
                   loading="lazy"
                   decoding="async"
                 />
                 <div>
                   <div style={{ 
                     fontSize: '56px', 
                     fontWeight: 500, 
                     color: '#23282B',
                     fontFamily: 'Plus Jakarta Sans',
                     lineHeight: 1,
                     marginBottom: '4px'
                   }}>63%</div>
                   <div style={{ 
                     fontSize: '12px', 
                     color: '#6B7280', 
                     fontFamily: 'Plus Jakarta Sans'
                   }}>less time spent on accounting &<br />reports</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* Feature Cards Section - Tipping & Online Booking */}
         <section style={{ background: '#fff', padding: '80px 0', width: '100%' }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            gap: '32px',
            flexWrap: 'wrap',
            alignItems: 'stretch'
          }}>
            
            {/* Left Card - ng */}
            <div style={{ 
              background: 'linear-gradient(169.48deg, #096187 5.7%, #23282B 98.96%)',
              borderRadius: '16px', 
              flex: '1',
              minWidth: '500px',
              overflow: 'hidden',
              height: '500px',
              display: 'flex',
              flexDirection: 'row',
              gap: '0.5rem'
            }}>
              <div style={{ position: 'relative', width: '100%' }}>
                {/* Background Layer - Desktop Image */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }} className="hidden md:flex">
                  <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                    <div style={{ width: '40%' }}></div>
                    <div style={{ 
                      width: '60%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-end'
                    }}>
                      <img 
                        width="640" 
                        height="898"
                        src="https://www.workiz.com/wp-content/uploads/2023/05/workiz-tips-mobile-app-v4623.webp"
                        alt="Workiz Tips Mobile App V4623"
                        style={{ 
                          width: '100%', 
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                        className="hidden md:block"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content Layer */}
                <div style={{
                  position: 'relative',
                  zIndex: 3,
                  padding: '2.5rem 2rem',
                  margin: 0
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%'
                  }} className="flex-col-reverse md:flex-row justify-start md:justify-start">
                    {/* Text Column */}
                    <div style={{
                      width: '50%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '1rem 1.5rem',
                      maxWidth: '100%',
                      flexGrow: 1
                    }}>
                      <div>
                        <div style={{
                          fontSize: '12px',
                          fontWeight: 500,
                          textTransform: 'uppercase',
                          letterSpacing: '2px',
                          color: 'white',
                          fontFamily: "'Inter', sans-serif",
                          marginBottom: '1.5rem',
                          visibility: 'visible',
                          animationDelay: '0.1s',
                          animationName: 'fadeInUp'
                        }}>
                          Tipping
                        </div>
                        <div style={{
                          fontSize: '40px',
                          fontWeight: 700,
                          lineHeight: 1.1,
                          letterSpacing: '1px',
                          marginBottom: '1.5rem',
                          color: '#FFD400',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          visibility: 'visible',
                          animationDelay: '0.25s',
                          animationName: 'fadeInUp'
                        }}>
                          Double<br className="hidden md:block" /> your tips
                        </div>
                        <div style={{
                          fontSize: '16px',
                          fontWeight: 400,
                          color: 'white',
                          visibility: 'visible',
                          animationDelay: '0.5s',
                          animationName: 'fadeInUp'
                        }}>
                          <p>Encourage customers to<br/>
                          leave tips more frequently,<br/>
                          potentially increasing your<br/>
                          earnings.</p>
                        </div>
                      </div>
                      <div style={{
                        alignSelf: 'flex-start',
                        visibility: 'visible',
                        animationDelay: '0.75s',
                        animationName: 'fadeInDown',
                        marginTop: '48px'
                      }} className="hidden md:flex">
                        <a 
                          href="https://www.workiz.com/signup/join-workiz/"
                          style={{
                            background: '#FFD400',
                            color: '#23282B',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontFamily: "'Plus Jakarta Sans', sans-serif"
                          }}
                        >
                          Start free trial
                        </a>
                      </div>
                    </div>

                    {/* Mobile Image Column */}
                    <div style={{
                      width: '45%',
                      maxWidth: '100%'
                    }}>
                      <img 
                        width="686" 
                        height="384"
                        src="https://www.workiz.com/wp-content/uploads/2023/05/hl-tipping-mob.webp"
                        alt="Hl Tipping Mob"
                        style={{
                          width: '100%',
                          height: 'auto'
                        }}
                        className="block md:hidden"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Online Booking */}
            <div style={{ 
              flex: 1, 
              minWidth: '500px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5rem',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '500px',
                background: 'linear-gradient(180deg, #F6F8FA 0%, #E4E9EC 100%)'
              }}>
                <div style={{ position: 'relative', width: '100%' }}>
                  {/* Background Layer - Desktop Image */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }} className="hidden md:flex">
                    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                      <div style={{ width: '40%' }}></div>
                      <div style={{ 
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                      }}>
                        <img 
                          width="640" 
                          height="898"
                          src="https://www.workiz.com/wp-content/uploads/2024/05/online-booking-feature-banner-v2.webp"
                          alt="Online Booking Feature Banner V2"
                          style={{ 
                            width: '100%', 
                            height: 'auto'
                          }}
                          className="hidden md:block"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Content Layer */}
                  <div style={{
                    position: 'relative',
                    zIndex: 3,
                    padding: '2.5rem 2rem',
                    margin: 0
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      height: '100%'
                    }} className="flex-col-reverse md:flex-row justify-start md:justify-start">
                      {/* Text Column */}
                      <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '1rem 1.5rem',
                        maxWidth: '100%',
                        flexGrow: 1
                      }}>
                        <div>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: '#1d4ed8',
                            fontFamily: "'Inter', sans-serif",
                            marginBottom: '1.5rem',
                            visibility: 'visible',
                            animationDelay: '0.1s',
                            animationName: 'fadeInUp'
                          }}>
                            ONLINE BOOKING
                          </div>
                          <div style={{
                            fontSize: '40px',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: '1px',
                            marginBottom: '1.5rem',
                            color: '#23282B',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            visibility: 'visible',
                            animationDelay: '0.25s',
                            animationName: 'fadeInUp'
                          }}>
                            Be available 24/7
                          </div>
                          <div style={{
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#23282B',
                            visibility: 'visible',
                            animationDelay: '0.5s',
                            animationName: 'fadeInUp'
                          }}>
                            <p>Turn leads into jobs, get paid in advance, and increase bookings by 30% with the Workiz Online Booking widget.</p>
                          </div>
                        </div>
                        <div style={{
                          alignSelf: 'flex-end',
                          visibility: 'visible',
                          animationDelay: '0.75s',
                          animationName: 'fadeInDown'
                        }} className="hidden md:flex">
                          <a 
                            href="https://www.workiz.com/features/online-booking/"
                            style={{
                              background: 'transparent',
                              border: '2px solid #23282B',
                              color: '#23282B',
                              padding: '12px 24px',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              textDecoration: 'none',
                              display: 'inline-block',
                              fontFamily: "'Plus Jakarta Sans', sans-serif"
                            }}
                          >
                            Online Booking
                          </a>
                        </div>
                      </div>

                      {/* Mobile Image Column */}
                      <div style={{
                        width: '45%',
                        maxWidth: '100%'
                      }}>
                        <img 
                          width="686" 
                          height="384"
                          src="https://www.workiz.com/wp-content/uploads/2024/05/Locksmith-online-booking-mobile.png"
                          alt="Locksmith Online Booking Mobile"
                          style={{
                            width: '100%',
                            height: 'auto'
                          }}
                          className="block md:hidden"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         {/* Scheduling Section */}
         <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 12, letterSpacing: 1,fontFamily:"Plus Jakarta Sans",  marginBottom: 8 }}>SCHEDULING </div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 35,fontFamily:"Plus Jakarta Sans", marginBottom: 16, lineHeight: 1.1 }}>Schedule and dispatch efficiently</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
            Improve the efficiency and visibility of your business with dynamic scheduling software. Workiz enables your customers to easily book online and access your services 24/7. Additionally, you can manage and categorize all your junk removal jobs in one place, allowing you to view them easily.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500,fontFamily:"Plus Jakarta Sans", fontSize: 18, textDecoration: 'none', marginTop: 4, display: 'inline-block' }}>Learn More &rarr;</a>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/scheduling.png"
              alt="Scheduling Calendar"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
         
         {/* Dumpster Rentals Management Section */}
         <section style={{ 
           width: '100%', 
           display: 'flex', 
           gap: '48px', 
           alignItems: 'center', 
           flexWrap: 'wrap', 
           justifyContent: 'center', 
           background: '#fff', 
           padding: '80px 32px',
           maxWidth: '1200px',
           margin: '0 auto'
         }}>
           {/* Left: Asset Image */}
           <div style={{ 
             flex: 1, 
             minWidth: '340px', 
             maxWidth: '500px', 
             display: 'flex', 
             justifyContent: 'center', 
             alignItems: 'center' 
           }}>
             <img
               src="/images/asset.webp"
               alt="Asset Management"
               style={{ 
                 width: '100%', 
                 maxWidth: '500px', 
                 height: 'auto',
                 borderRadius: '16px'
               }}
               loading="lazy"
               decoding="async"
             />
           </div>

           {/* Right: Text Content */}
           <div style={{ 
             flex: 1, 
             minWidth: '340px', 
             maxWidth: '600px', 
             display: 'flex', 
             flexDirection: 'column', 
             justifyContent: 'center', 
             gap: '16px',
             paddingLeft: '32px'
           }}>
             <div style={{ 
               color: '#22c55e', 
               fontWeight: 700, 
               fontSize: '12px', 
               letterSpacing: '2px', 
               marginBottom: '8px',
               textTransform: 'uppercase',
               fontFamily: 'Plus Jakarta Sans'
             }}>
               ASSET TRACKING
             </div>
             
             <h2 style={{ 
               color: '#23282B', 
               fontWeight: 700, 
               fontSize: '48px', 
               marginBottom: '24px', 
               lineHeight: '1.1',
               fontFamily: 'Plus Jakarta Sans'
             }}>
               Easily manage your dumpster rentals
             </h2>
             
             <p style={{ 
               color: '#23282B', 
               fontSize: '18px', 
               fontWeight: 400, 
               marginBottom: '32px', 
               lineHeight: '1.6',
               fontFamily: 'Plus Jakarta Sans'
             }}>
               Manage your dumpster rentals end-to-end with Workiz, the only field service platform that offers <span style={{ textDecoration: 'underline' }}>dumpster tracking</span>. Get full visibility of your dumpster rentals, ensuring your never lose track. Easily manage and assign dumpsters to your team using the scheduler. Generate customized and branded invoices for your dumpster rentals.
             </p>
             
             <button style={{ 
               background: '#FFD400', 
               color: '#23282B', 
               fontWeight: 600, 
               fontSize: '18px', 
               padding: '16px 32px', 
               borderRadius: '8px', 
               border: 'none', 
               cursor: 'pointer', 
               width: 'fit-content',
               fontFamily: 'Plus Jakarta Sans'
             }}>
               Start free trial
             </button>
           </div>
         </section>

         {/* Junk Removal Academy Section */}
         <section 
           id="ctabar" 
           style={{ 
             padding: '80px 0',
             width: '100%'
           }}
         >
           <div style={{
             maxWidth: '1200px',
             margin: '0 auto',
             padding: '0 20px'
           }}>
             <div style={{
               position: 'relative',
               background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
               borderRadius: '16px'
             }}>
               <div style={{
                 position: 'relative',
                 zIndex: 3,
                 padding: '48px'
               }} className="p-6 md:p-12 pt-24 md:pt-12 px-6 md:px-6">
                 <div style={{
                   display: 'flex',
                   flexWrap: 'wrap',
                   margin: '0 -16px'
                 }}>
                   {/* Text Column */}
                   <div style={{
                     width: '66.666667%',
                     paddingLeft: '16px',
                     paddingRight: '16px'
                   }} className="w-full md:w-8/12">
                     <h3 style={{
                       fontSize: '36px',
                       letterSpacing: '1px',
                       fontWeight: 600,
                       marginBottom: '16px',
                       position: 'relative',
                       color: '#FFD400',
                       fontFamily: 'Plus Jakarta Sans'
                     }} className="text-2xl md:text-4xl">
                       Junk Removal Academy
                     </h3>
                     <div style={{
                       fontSize: '18px',
                       fontWeight: 400,
                       paddingRight: '64px',
                       color: '#E5E7EB',
                       fontFamily: 'Plus Jakarta Sans'
                     }} className="pr-0 md:pr-16 mb-8 md:mb-0">
                       Your go-to resource for building a thriving junk removal business! Join us and embark on your journey today!
                     </div>
                   </div>

                   {/* Spacer Column */}
                   <div style={{
                     width: '8.333333%',
                     paddingLeft: '16px',
                     paddingRight: '16px'
                   }} className="hidden md:block"></div>

                   {/* Button Column */}
                   <div style={{
                     width: '25%',
                     paddingLeft: '8px',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'flex-end'
                   }} className="w-full md:w-3/12 px-4 md:px-2">
                     <div style={{ marginBottom: '16px' }}>
                       <a 
                         href="https://www.workiz.com/academy/junk-removal/" 
                         style={{
                           display: 'inline-block',
                           width: '100%',
                           background: '#FFD400',
                           color: '#23282B',
                           fontSize: '18px',
                           fontWeight: 600,
                           padding: '16px 32px',
                           borderRadius: '8px',
                           textDecoration: 'none',
                           textAlign: 'center',
                           fontFamily: 'Plus Jakarta Sans',
                           transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                         }}
                         onMouseOver={(e) => {
                           e.target.style.transform = 'translateY(-2px)';
                           e.target.style.boxShadow = '0 8px 25px rgba(255, 212, 0, 0.4)';
                         }}
                         onMouseOut={(e) => {
                           e.target.style.transform = 'translateY(0)';
                           e.target.style.boxShadow = 'none';
                         }}
                       >
                         Learn more
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
          {/* Workiz Pay Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#green', 
              fontWeight: 700, 
              fontSize: '14px', 
              letterSpacing: '1px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              textTransform: 'uppercase' 
            }}>
                WORKIZ PAY
            </div>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
             Get paid anytime, anywhere
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '18px', 
              fontWeight: 400, 
              marginBottom: '24px', 
              lineHeight: 1.4 
            }}>
            Control all your financial needs in a one-stop shop with WorkizPay. With card readers, you can get paid faster in the field, ensuring that you don’t miss out on any payments. Additionally, the flexible payment plans available through WorkizPay can help you close more high-priced jobs, increasing your revenue.
            </div>
            <a href="#" style={{ 
              color: '#23282B', 
              fontWeight: 500, 
              fontSize: '18px', 
              textDecoration: 'none', 
              marginTop: '4px', 
              fontFamily: 'Plus Jakarta Sans', 
              display: 'inline-block' 
            }}>
              Learn More →
            </a>
          </div>
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/plumbing-bussiness.webp"
              alt="Workiz Pay Financial Control Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
         {/* Communications Suite Section */}
         <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/communications.webp"
              alt="Communications Suite"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Right: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>COMMUNICATIONS SUITE</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>Never miss a call again</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>Book more jobs and improve your bottom line with Workiz’s communication suite. With easy-to-manage calls and messages, you can provide a superior experience that customers will love. Workiz also offers automatic review request reminders, allowing you to gather feedback from satisfied customers and enhance your reputation.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
        </section>
          {/* Automations Section */}
          <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 14, letterSpacing: 1, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>AUTOMATIONS</div>
            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 40, marginBottom: 8, fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>Revolutionize your customer service</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 12, lineHeight: 1.4 }}>
            Ensure great customer service and never drop the ball with Workiz’s automatic service reminders. Keeping your customers in the loop via text message can also help strengthen relationships and increase word-of-mouth referrals. Automatically request reviews from satisfied customers to generate new leads and improve your business’s reputation.            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500, fontSize: 18, textDecoration: 'none', marginTop: 4, fontFamily: 'Plus Jakarta Sans', display: 'inline-block' }}>Learn more &rarr;</a>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/automations-illustration.webp"
              alt="Automations Illustration"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* Ad Tracking Section */}
<section style={{ width: '100%', display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#fff', border: 'none', boxShadow: 'none', padding: '80px 0' }}>
  {/* Left: Image */}
  <div style={{ flex: 1, minWidth: '340px', maxWidth: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '32px' }}>
    <img 
      src="/images/ad-tracking.webp" 
      alt="Marketing analytics dashboard showing ad tracking performance with ROI metrics for garage door business" 
      style={{ width: '100%', maxWidth: '600px', borderRadius: '24px', boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }} 
      loading="lazy" 
      decoding="async" 
    />
  </div>
  
  {/* Right: Text Content */}
  <div style={{ flex: 1, minWidth: '340px', maxWidth: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', paddingRight: '32px' }}>
    <div style={{ color: '#3b82f6', fontWeight: 700, fontSize: '14px', letterSpacing: '1px', marginBottom: '1px', fontFamily: 'Plus Jakarta Sans', textTransform: 'uppercase' }}>
      AD TRACKING
    </div>
    <div style={{ color: '#23282B', fontWeight: 700, fontSize: '48px', marginBottom: '16px', fontFamily: 'Plus Jakarta Sans', lineHeight: 1.1 }}>
      Increase your marketing efforts
    </div>
    <div style={{ color: '#23282B', fontSize: '18px', fontWeight: 400, marginBottom: '32px', lineHeight: 1.6 }}>
      Boost your ROI and optimize your marketing strategy with ad optimization. Save up to 16% on your marketing budget and reallocate funds to enhance your garage door business. Our ad source analysis pinpoints which sources drive maximum conversions allowing data-informed decision-making.
    </div>
    <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: '18px', padding: '16px 32px', borderRadius: '8px', border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', fontFamily: 'Plus Jakarta Sans' }}>
      Start free trial
    </button>
  </div>
</section>

{/* Junk Doctors Success Story Section */}
<section style={{ 
  width: '100%', 
  display: 'flex', 
  gap: '48px', 
  alignItems: 'center', 
  flexWrap: 'wrap', 
  justifyContent: 'center', 
  background: '#f8f9fa', 
  border: 'none', 
  boxShadow: 'none', 
  padding: '80px 32px' 
}}>
  {/* Left: Text Content */}
  <div style={{ 
    flex: 1, 
    minWidth: '340px', 
    maxWidth: '600px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    gap: '24px',
    paddingRight: '32px'
  }}>
    <div style={{ 
      color: '#3b82f6', 
      fontWeight: 700, 
      fontSize: '14px', 
      letterSpacing: '2px', 
      marginBottom: '8px', 
      fontFamily: 'Plus Jakarta Sans', 
      textTransform: 'uppercase' 
    }}>
      SUCCESS STORY
    </div>
    
    <h2 style={{ 
      color: '#23282B', 
      fontWeight: 700, 
      fontSize: '48px', 
      marginBottom: '24px', 
      fontFamily: 'Plus Jakarta Sans', 
      lineHeight: 1.1 
    }}>
      Junk Doctors + NiceJob
    </h2>
    
    <div style={{ 
      color: '#23282B', 
      fontSize: '16px', 
      fontWeight: 400, 
      marginBottom: '24px', 
      lineHeight: 1.6,
      fontFamily: 'Plus Jakarta Sans'
    }}>
      Junk Doctors, a North Carolina junk removal company, revolutionized their operations by implementing NiceJob and Workiz automation software.
      <br /><br />
      After struggling with manual review collection and data entry, the company automated their processes, leading to over 1,000 customer reviews with a 4.9-star average. The integration also streamlined customer communications, invoicing, and online bookings, which doubled after implementation. According to Vice President Christian Fowler, this automation has been crucial for staying competitive in 2024, significantly improving their efficiency and online presence, resulting in a 20-22% five-star conversion rate and over 1,000 reviews with a 4.9-star average.
    </div>
    
    <a href="#" style={{ 
      color: '#23282B', 
      fontWeight: 600, 
      fontSize: '18px', 
      textDecoration: 'none', 
      fontFamily: 'Plus Jakarta Sans', 
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      Learn more →
    </a>
  </div>
  
  {/* Right: Image */}
  <div style={{ 
    flex: 1, 
    minWidth: '340px', 
    maxWidth: '700px', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    gap: '24px'
  }}>
    <img 
      src="/images/junk-doctors.jpg" 
      alt="Junk Doctors team members standing next to their branded yellow truck, showcasing successful junk removal business growth with Workiz" 
      style={{ 
        width: '100%', 
        maxWidth: '600px', 
        borderRadius: '16px', 
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)' 
      }} 
      loading="lazy" 
      decoding="async" 
    />
    
    {/* Text below image */}
    <div style={{
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#23282B',
      fontFamily: 'Plus Jakarta Sans',
      textAlign: 'center',
      maxWidth: '600px'
    }}>
      Junk Doctors doubled online bookings and increased average job revenue thanks to Workiz's field management solutions.
    </div>
  </div>
</section>

{/* Landfill Locator Section */}
<section style={{
  width: '100%',
  background: 'transparent',
  padding: '20px 0',
  marginBottom: '40px'
}}>
  <div style={{
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 24px'
  }}>
    <div style={{
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #1e7db5 0%, #2d5a7b 100%)',
      padding: '24px 32px',
      margin: '0 12px',
      boxShadow: '0 4px 20px rgba(30, 125, 181, 0.15)'
    }}>
              <div className="landfill-container" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '32px',
        flexWrap: 'wrap'
      }}>
        {/* Image Column */}
        <div style={{
          maxWidth: '100%',
          flex: '0 0 auto'
        }}>
          <img 
            width="180" 
            height="172" 
            src="https://www.workiz.com/wp-content/uploads/2023/07/bubble-opc-blue-mapicons.webp" 
            style={{
              width: '100%',
              maxWidth: '180px',
              height: 'auto'
            }}
            className="hidden-mobile"
            alt="Bubble Opc Blue Mapicons" 
            loading="lazy" 
            decoding="async" 
          />
          <img 
            width="300" 
            height="131" 
            src="https://www.workiz.com/wp-content/uploads/2023/07/bubble-opc-blue-mapicons-mobile.webp" 
            style={{
              width: '100%',
              maxWidth: '300px',
              height: 'auto'
            }}
            className="hidden-desktop"
            alt="Bubble Opc Blue Mapicons Mobile" 
            loading="lazy" 
            decoding="async" 
          />
        </div>

        {/* Text Column */}
        <div className="landfill-text" style={{
          width: '50%',
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '20px',
          maxWidth: '100%',
          minWidth: '250px'
        }}>
          <h4 className="landfill-title" style={{
            fontSize: '24px',
            fontWeight: 600,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: '1px',
            lineHeight: 1.2,
            color: '#FFD400',
            marginBottom: '8px',
            margin: 0
          }}>
            Looking for a landfill near you?
          </h4>
          <div style={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#fff',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            lineHeight: 1.4
          }}>
            Save yourself the hassle of searching with our landfill locator tool.
          </div>
        </div>

        {/* CTA Column */}
        <div className="landfill-cta" style={{
          width: '20%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          maxWidth: '100%',
          minWidth: '160px'
        }}>
          <a 
            href="https://www.workiz.com/tools/landfill-near-me/" 
            style={{
              background: '#FFD400',
              color: '#23282B',
              textDecoration: 'none',
              borderRadius: '10px',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              display: 'inline-block',
              textAlign: 'center',
              width: '100%',
              maxWidth: '160px'
            }}
          >
            Try it now
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

         {/* Additional sections can be added here */}
         <Integrations />
         <FaqSection />
         <FooterSection />
       </>
     );
   }
   // eslint-disable-next-line spellcheck/spell-checker
  if (industry === 'appliance-repair') {
    return (
      <>
        {/* Appliance Repair Hero Section */}
        <div style={{ display: 'flex', flexDirection: 'row', minHeight: '500px', width: '100%', marginTop: '80px', border: 'none', boxShadow: 'none', background: '#fff' }} className="flex flex-row">
          {/* Left Side - Yellow */}
          <div style={{ background: '#FFD400', flex: 1, padding: '24px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Breadcrumbs */}
            <div style={{ color: '#23282B', fontSize: '14px', fontWeight: 400, marginBottom: 24, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Home &gt; Industries &gt; Appliance Repair
            </div>
            
            {/* Category Label */}
            <div style={{ color: '#23282B', fontWeight: 600, marginBottom: 16, fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              APPLIANCE REPAIR SOFTWARE
            </div>
            
            {/* Main Heading */}
            <h1 style={{ fontWeight: 800, lineHeight: 1.1, marginBottom: 24, fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <span style={{ background: '#fff', padding: '4px 12px', borderRadius: '8px', display: 'inline-block', color: '#23282B' }}>#1</span>
              <span style={{ color: '#23282B' }}> Appliance<br />Repair Software</span>
            </h1>
            
            {/* Description */}
            <p style={{ color: '#23282B', marginBottom: 32, maxWidth: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-base sm:text-lg md:text-xl">
              Appliance repair companies that use Workiz increase their revenue by 22%! Manage your jobs, get paid in the field, and join over 120,000 pros who trust Workiz to grow their business.
            </p>
            
            {/* CTA Button */}
            <button style={{ background: '#23282B', color: '#FFD400', fontWeight: 700, borderRadius: 8, border: 'none', marginBottom: 32, cursor: 'pointer', width: 'fit-content', fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4">
              Book a demo
            </button>
            
            {/* Review Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="flex-col sm:flex-row gap-4 sm:gap-8">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/captera.webp" alt="Capterra" className="h-8 sm:h-10" />
                <div style={{ display: 'flex', color: '#FFD400', fontSize: '18px' }}>★★★★★</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/software1.webp" alt="Software Advice" className="h-8 sm:h-10" />
                <div style={{ display: 'flex', color: '#FFD400', fontSize: '18px' }}>★★★★★</div>
              </div>
            </div>
          </div>
          
                     {/* Right Side - Photo */}
           <div style={{ flex: 1, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: 'none', boxShadow: 'none', backgroundImage: 'url(/images/electrician-person.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="min-h-[300px] md:min-h-[500px]">
           </div>
         </div>

         {/* Stats Section Below Hero */}
         <div style={{ background: '#23282B', padding: '32px 0', width: '100%' }}>
           <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
             {/* Growth Stats */}
             <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
               <div style={{ width: 40, height: 40, background: '#4ade80', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                   <path d="M3 3v18h18V3H3zm2 16V5h14v14H5z"/>
                   <path d="M7 13l2 2 4-4 4 4V9h-6l4 4z"/>
                 </svg>
               </div>
               <div>
                 <div style={{ color: '#fff', fontSize: '28px', fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                   23% avg. growth in 3 months
                 </div>
               </div>
             </div>
             
             {/* G2 Badges */}
             <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
               <img src="/images/badge-1.png" alt="G2 Leader" style={{ height: '56px' }} />
               <img src="/images/badge-3.png" alt="G2 High Performer" style={{ height: '56px' }} />
               <img src="/images/badge-4.png" alt="G2 Leader" style={{ height: '56px' }} />
               <img src="/images/badge-5.png" alt="G2 Leader" style={{ height: '56px' }} />
               <img src="/images/bdge-2.png" alt="G2 Leader" style={{ height: '56px' }} />
             </div>
           </div>
         </div>
            {/* Feature Cards Section - Tipping & Online Booking */}
            <section style={{ background: '#fff', padding: '80px 0', width: '100%' }}>
          <div style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            paddingLeft: '32px', 
            paddingRight: '32px', 
            display: 'flex', 
            gap: '32px',
            flexWrap: 'wrap',
            alignItems: 'stretch'
          }}>
            
            {/* Left Card - ng */}
            <div style={{ 
              background: 'linear-gradient(169.48deg, #096187 5.7%, #23282B 98.96%)',
              borderRadius: '16px', 
              flex: '1',
              minWidth: '500px',
              overflow: 'hidden',
              height: '500px',
              display: 'flex',
              flexDirection: 'row',
              gap: '0.5rem'
            }}>
              <div style={{ position: 'relative', width: '100%' }}>
                {/* Background Layer - Desktop Image */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }} className="hidden md:flex">
                  <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                    <div style={{ width: '40%' }}></div>
                    <div style={{ 
                      width: '60%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-end'
                    }}>
                      <img 
                        width="640" 
                        height="898"
                        src="https://www.workiz.com/wp-content/uploads/2023/05/workiz-tips-mobile-app-v4623.webp"
                        alt="Workiz Tips Mobile App V4623"
                        style={{ 
                          width: '100%', 
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                        className="hidden md:block"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content Layer */}
                <div style={{
                  position: 'relative',
                  zIndex: 3,
                  padding: '2.5rem 2rem',
                  margin: 0
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%'
                  }} className="flex-col-reverse md:flex-row justify-start md:justify-start">
                    {/* Text Column */}
                    <div style={{
                      width: '50%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '1rem 1.5rem',
                      maxWidth: '100%',
                      flexGrow: 1
                    }}>
                      <div>
                        <div style={{
                          fontSize: '12px',
                          fontWeight: 500,
                          textTransform: 'uppercase',
                          letterSpacing: '2px',
                          color: 'white',
                          fontFamily: "'Inter', sans-serif",
                          marginBottom: '1.5rem',
                          visibility: 'visible',
                          animationDelay: '0.1s',
                          animationName: 'fadeInUp'
                        }}>
                          Tipping
                        </div>
                        <div style={{
                          fontSize: '40px',
                          fontWeight: 700,
                          lineHeight: 1.1,
                          letterSpacing: '1px',
                          marginBottom: '1.5rem',
                          color: '#FFD400',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          visibility: 'visible',
                          animationDelay: '0.25s',
                          animationName: 'fadeInUp'
                        }}>
                          Double<br className="hidden md:block" /> your tips
                        </div>
                        <div style={{
                          fontSize: '16px',
                          fontWeight: 400,
                          color: 'white',
                          visibility: 'visible',
                          animationDelay: '0.5s',
                          animationName: 'fadeInUp'
                        }}>
                          <p>Encourage customers to<br/>
                          leave tips more frequently,<br/>
                          potentially increasing your<br/>
                          earnings.</p>
                        </div>
                      </div>
                      <div style={{
                        alignSelf: 'flex-start',
                        visibility: 'visible',
                        animationDelay: '0.75s',
                        animationName: 'fadeInDown',
                        marginTop: '48px'
                      }} className="hidden md:flex">
                        <a 
                          href="https://www.workiz.com/signup/join-workiz/"
                          style={{
                            background: '#FFD400',
                            color: '#23282B',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontFamily: "'Plus Jakarta Sans', sans-serif"
                          }}
                        >
                          Start free trial
                        </a>
                      </div>
                    </div>

                    {/* Mobile Image Column */}
                    <div style={{
                      width: '45%',
                      maxWidth: '100%'
                    }}>
                      <img 
                        width="686" 
                        height="384"
                        src="https://www.workiz.com/wp-content/uploads/2023/05/hl-tipping-mob.webp"
                        alt="Hl Tipping Mob"
                        style={{
                          width: '100%',
                          height: 'auto'
                        }}
                        className="block md:hidden"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Online Booking */}
            <div style={{ 
              flex: 1, 
              minWidth: '500px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5rem',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '500px',
                background: 'linear-gradient(180deg, #F6F8FA 0%, #E4E9EC 100%)'
              }}>
                <div style={{ position: 'relative', width: '100%' }}>
                  {/* Background Layer - Desktop Image */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }} className="hidden md:flex">
                    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                      <div style={{ width: '40%' }}></div>
                      <div style={{ 
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                      }}>
                        <img 
                          width="640" 
                          height="898"
                          src="https://www.workiz.com/wp-content/uploads/2024/05/online-booking-feature-banner-v2.webp"
                          alt="Online Booking Feature Banner V2"
                          style={{ 
                            width: '100%', 
                            height: 'auto'
                          }}
                          className="hidden md:block"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Content Layer */}
                  <div style={{
                    position: 'relative',
                    zIndex: 3,
                    padding: '2.5rem 2rem',
                    margin: 0
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      height: '100%'
                    }} className="flex-col-reverse md:flex-row justify-start md:justify-start">
                      {/* Text Column */}
                      <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '1rem 1.5rem',
                        maxWidth: '100%',
                        flexGrow: 1
                      }}>
                        <div>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: '#1d4ed8',
                            fontFamily: "'Inter', sans-serif",
                            marginBottom: '1.5rem',
                            visibility: 'visible',
                            animationDelay: '0.1s',
                            animationName: 'fadeInUp'
                          }}>
                            ONLINE BOOKING
                          </div>
                          <div style={{
                            fontSize: '40px',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: '1px',
                            marginBottom: '1.5rem',
                            color: '#23282B',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            visibility: 'visible',
                            animationDelay: '0.25s',
                            animationName: 'fadeInUp'
                          }}>
                            Be available 24/7
                          </div>
                          <div style={{
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#23282B',
                            visibility: 'visible',
                            animationDelay: '0.5s',
                            animationName: 'fadeInUp'
                          }}>
                            <p>Turn leads into jobs, get paid in advance, and increase bookings by 30% with the Workiz Online Booking widget.</p>
                          </div>
                        </div>
                        <div style={{
                          alignSelf: 'flex-end',
                          visibility: 'visible',
                          animationDelay: '0.75s',
                          animationName: 'fadeInDown'
                        }} className="hidden md:flex">
                          <a 
                            href="https://www.workiz.com/features/online-booking/"
                            style={{
                              background: 'transparent',
                              border: '2px solid #23282B',
                              color: '#23282B',
                              padding: '12px 24px',
                              borderRadius: '8px',
                              fontSize: '16px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              textDecoration: 'none',
                              display: 'inline-block',
                              fontFamily: "'Plus Jakarta Sans', sans-serif"
                            }}
                          >
                            Online Booking
                          </a>
                        </div>
                      </div>

                      {/* Mobile Image Column */}
                      <div style={{
                        width: '45%',
                        maxWidth: '100%'
                      }}>
                        <img 
                          width="686" 
                          height="384"
                          src="https://www.workiz.com/wp-content/uploads/2024/05/Locksmith-online-booking-mobile.png"
                          alt="Locksmith Online Booking Mobile"
                          style={{
                            width: '100%',
                            height: 'auto'
                          }}
                          className="block md:hidden"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/* Scheduling Section */}
          <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>

            <div style={{ color: '#23282B', fontWeight: 700, fontSize: 35,fontFamily:"Plus Jakarta Sans", marginBottom: 16, lineHeight: 1.1 }}>Boost your appliance repair business</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
            Streamline your appliance repair operations and increase productivity with dynamic scheduling software. View and categorize all of your jobs in one place and assign them to specific job needs.
            </div>
            <a href="#" style={{ color: '#23282B', fontWeight: 500,fontFamily:"Plus Jakarta Sans", fontSize: 18, textDecoration: 'none', marginTop: 4, display: 'inline-block' }}>Learn More &rarr;</a>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/scheduling.png"
              alt="Scheduling Calendar"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
          {/* Workiz Pay Section */}
          <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingLeft: '32px' 
          }}>
            <img
              src="/images/electric-field.webp"
              alt="Workiz Pay Electrical Field Service Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* Right: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingRight: '32px' 
          }}>
         
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '8px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
              Appliance repair pros, get paid in the field faster
            </div>
            <div style={{ 
              color: '#23282B', 
              fontSize: '20px', 
              fontWeight: 400, 
              marginBottom: '32px', 
              lineHeight: 1.4 
            }}>
            Never leave money on the table or chase down payments again with Workiz’ payment platform for appliance repair pros. Automatically send payment requests, estimates, and invoices from the office or the field.
            </div>
            <button style={{ 
              background: '#FFD400', 
              color: '#23282B', 
              fontWeight: 600, 
              fontSize: '18px', 
              padding: '16px 32px', 
              borderRadius: '8px', 
              border: 'none', 
              cursor: 'pointer', 
              width: 'fit-content', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              fontFamily: 'Plus Jakarta Sans'
            }}>
              Book a demo
            </button>
          </div>
        </section>
          {/* Purchase Orders Section */}
          <section style={{ width: '100%', display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#f6f8fa', border: 'none', boxShadow: 'none', padding: '64px 0' }}>
          {/* Left: Text Content */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12, paddingLeft: 32 }}>
            <div style={{ color: '#f25c4d', fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 8,  }}>PURCHASE ORDERS</div>
            <div style={{ color: '#23282B', fontWeight: 560, fontSize: 35, marginBottom: 16, lineHeight: 1.1 }}>Your one–stop shop for order management</div>
            <div style={{ color: '#23282B', fontSize: 18, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
              Quickly create and send purchase orders to vendors, linking items to your price book and relevant jobs. Track orders and monitor statuses, ensuring full visibility and reducing errors.
            </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 22, padding: '18px 44px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start free trial</button>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 340, maxWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: 32 }}>
            <img
              src="/images/orders.webp"
              alt="Orders Table"
              style={{ width: '100%', maxWidth: 600, borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
          {/* Electrical Job Management Section */}
          <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#fff', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
           
            <div style={{ 
              color: '#23282B', 
              fontWeight: 550, 
              fontSize: '35px', 
              marginBottom: '24px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
            Maximize every appliance repair job opportunity
            </div>
            
            <div style={{ color: '#23282B', fontSize: 20, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
            Drive higher booking rates, improve customer service and increase your revenue with Workiz’ full Communications Suite. Impress your customers so you are the only appliance repair company they call.  </div>
            <button style={{ background: '#FFD400', color: '#23282B', fontWeight: 600, fontSize: 22, padding: '18px 44px', borderRadius: 8, border: 'none', cursor: 'pointer', width: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>Start free trial</button>
          </div>
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/electric-job.webp"
              alt="Electrical Job Management Communications Interface"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Route Optimization Section */}
        <section style={{ 
          width: '100%', 
          display: 'flex', 
          gap: '48px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          background: '#f6f8fa', 
          border: 'none', 
          boxShadow: 'none', 
          padding: '64px 0' 
        }}>
          {/* Left: Text Content */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '600px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '12px', 
            paddingLeft: '32px' 
          }}>
            <div style={{ 
              color: '#23282B', 
              fontWeight: 700, 
              fontSize: '40px', 
              marginBottom: '24px', 
              fontFamily: 'Plus Jakarta Sans', 
              lineHeight: 1.1 
            }}>
             Streamline transit and reduce costs
            </div>
            
          
            <div style={{ color: '#23282B', fontSize: 20, fontWeight: 400, marginBottom: 24, lineHeight: 1.4 }}>
Plan and optimize your appliance repair teams’ work by assigning them according to their previous and upcoming job, traffic considerations, and expertise. Streamline your appliance repair pros daily scheduling in the most productive way.          </div>
<a href="#" style={{ 
              color: '#23282B', 
              fontWeight: 500, 
              fontSize: '18px', 
              textDecoration: 'none', 
              marginTop: '4px', 
              fontFamily: 'Plus Jakarta Sans', 
              display: 'inline-block' 
            }}>
              Book a demo →
            </a>
          </div>
           
          
          {/* Right: Image */}
          <div style={{ 
            flex: 1, 
            minWidth: '340px', 
            maxWidth: '700px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingRight: '32px' 
          }}>
            <img
              src="/images/ill.webp"
              alt="Route Optimization Map Interface showing scheduled jobs and GPS tracking"
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                borderRadius: '24px', 
                boxShadow: '0 4px 32px rgba(0,0,0,0.10)' 
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        
        {/* Add more sections here for appliance repair */}
        <Integrations />
        <FaqSection />
        <FooterSection />
      </>
    );
  }
  if (industry === 'all-industries') {
    return (
      <>
         <div style={{ display: 'flex', minHeight: '500px', width: '100%', marginTop: '80px', border: 'none', boxShadow: 'none', background: '#fff' }}>
          {/* Left Side */}
          <div style={{ background: '#FFD400', flex: 1, padding: '48px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#23282B', fontWeight: 600, marginBottom: 16, letterSpacing: 2 }}>ELECTRICAL CONTRACTOR SOFTWARE</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              <span style={{ background: '#fff', padding: '0 8px', borderRadius: '4px', display: 'inline-block' }}>Boost revenue</span><br />
              by 30% with<br />
              electrician software
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#23282B', marginBottom: 32, maxWidth: 600 }}>
              Electrical contractors that use Workiz increase their revenue by 22%! Manage your jobs, get paid in the field, and join over 120,000 pros who trust Workiz to grow their business.
            </p>
            <button style={{ background: '#23282B', color: '#ffd400', fontWeight: 600, fontSize: '1.25rem', padding: '16px 40px', borderRadius: 8, border: 'none', marginBottom: 32, cursor: 'pointer', width: 'fit-content' }}>Book a demo</button>
            <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/captera.webp" alt="Capterra" style={{ height: 38 }} />
                <span style={{ color: '#FFD400' }}>★★★★★</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src="/images/software1.webp" alt="Software Advice" style={{ height: 38 }} />
                <span style={{ color: '#FFD400' }}>★★★★★</span>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div style={{ flex: 1, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: 'none', boxShadow: 'none' }}>
            <img src="/images/repair-person.webp" alt="Electrician Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
            
        

          </div>
        </div>
        {/* Statistics Section */}
        <div style={{ width: '100%' }}>
           {/* Yellow top bar */}
           <div style={{ background: '#FFD400', height: '8px', width: '100%' }}></div>
           
           {/* Stats content */}
           <div style={{ background: '#fff', padding: '60px 24px' }}>
                           <div style={{ 
                maxWidth: '1200px', 
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px'
              }}>
               {/* 3x more jobs won */}
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: '16px',
                 width: 'calc(25% - 15px)',
                 minWidth: '250px',
                 justifyContent: 'flex-start'
               }}>
                 <img 
                   src="https://www.workiz.com/wp-content/uploads/2023/01/Shopping-Jewelry-Diamond-2.svg" 
                   alt="Diamond Icon" 
                   style={{ width: '32px', height: '32px' }}
                   loading="lazy"
                   decoding="async"
                 />
                 <div>
                   <div style={{ 
                     fontSize: '56px', 
                     fontWeight: 500, 
                     color: '#23282B',
                     fontFamily: 'Plus Jakarta Sans',
                     lineHeight: 1,
                     marginBottom: '4px'
                   }}>3x</div>
                   <div style={{ 
                     fontSize: '12px', 
                     color: '#6B7280', 
                     fontFamily: 'Plus Jakarta Sans'
                   }}>more jobs won</div>
                 </div>
               </div>

               {/* 20hrs time saved */}
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: '16px',
                 width: 'calc(25% - 15px)',
                 minWidth: '250px',
                 justifyContent: 'flex-start'
               }}>
                 <img 
                   src="https://www.workiz.com/wp-content/uploads/2023/01/Interface-Time-Clock-Hand-1.svg" 
                   alt="Clock Icon" 
                   style={{ width: '32px', height: '32px' }}
                   loading="lazy"
                   decoding="async"
                 />
                 <div>
                   <div style={{ 
                     fontSize: '56px', 
                     fontWeight: 500, 
                     color: '#23282B',
                     fontFamily: 'Plus Jakarta Sans',
                     lineHeight: 1,
                     marginBottom: '4px'
                   }}>20hrs</div>
                   <div style={{ 
                     fontSize: '12px', 
                     color: '#6B7280', 
                     fontFamily: 'Plus Jakarta Sans'
                   }}>time saved per week</div>
                 </div>
               </div>

               {/* 23% growth */}
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: '16px',
                 width: 'calc(25% - 15px)',
                 minWidth: '250px',
                 justifyContent: 'flex-start'
               }}>
                 <img 
                   src="https://www.workiz.com/wp-content/uploads/2023/01/Shopping-Business-Startup.svg" 
                   alt="Business Growth Icon" 
                   style={{ width: '32px', height: '32px' }}
                   loading="lazy"
                   decoding="async"
                 />
                 <div>
                   <div style={{ 
                     fontSize: '56px', 
                     fontWeight: 500, 
                     color: '#23282B',
                     fontFamily: 'Plus Jakarta Sans',
                     lineHeight: 1,
                     marginBottom: '4px'
                   }}>23%</div>
                   <div style={{ 
                     fontSize: '12px', 
                     color: '#6B7280', 
                     fontFamily: 'Plus Jakarta Sans'
                   }}>avg. growth in the first 3 months</div>
                 </div>
               </div>

               {/* 63% less time */}
               <div style={{ 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: '16px',
                 flex: '1',
                 minWidth: '250px'
               }}>
                 <img 
                   src="https://www.workiz.com/wp-content/uploads/2023/01/Interface-Content-Fire.svg" 
                   alt="Fire Icon" 
                   style={{ width: '32px', height: '32px' }}
                   loading="lazy"
                   decoding="async"
                 />
                 <div>
                   <div style={{ 
                     fontSize: '56px', 
                     fontWeight: 500, 
                     color: '#23282B',
                     fontFamily: 'Plus Jakarta Sans',
                     lineHeight: 1,
                     marginBottom: '4px'
                   }}>63%</div>
                   <div style={{ 
                     fontSize: '12px', 
                     color: '#6B7280', 
                     fontFamily: 'Plus Jakarta Sans'
                   }}>less time spent on accounting &<br />reports</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* Everything you need all in one place Section */}
<div style={{ 
  background: '#F6F8FA', 
  padding: '80px 0',
  width: '100%'
}}>
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '0 32px',
    display: 'flex',
    alignItems: 'center',
    gap: '64px',
    flexWrap: 'wrap'
  }}>
    {/* Left Side - Image */}
    <div style={{ 
      flex: 1, 
      minWidth: '400px',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <img 
        src="/images/trusted.webp" 
        alt="Workiz Platform - Trusted by 120,000+ Service Pros" 
        style={{ 
          width: '100%', 
          maxWidth: '600px',
          height: 'auto'
        }}
      />
    </div>
    
    {/* Right Side - Content */}
    <div style={{ 
      flex: 1, 
      minWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
      <h2 style={{
        fontSize: '35px',
        fontWeight: 560,
        color: '#23282B',
        lineHeight: 1.1,
        marginBottom: '1px',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}>
        Everything you need all in one place
      </h2>
      
      <p style={{
        fontSize: '20px',
        color: '#23282B',
        lineHeight: 1.3,
        marginBottom: '32px'
      }}>
        Increase the efficiency of your field service business with an all-in-one platform trusted by over 120,000 pros. Manage all your daily tasks, automate your key workflows, win more jobs, get paid in the field faster, and control your business in real time with Workiz.
      </p>
      
      <button style={{
        background: '#FFD400',
        color: '#23282B',
        fontWeight: 700,
        fontSize: '18px',
        padding: '16px 32px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        boxShadow: '0 4px 12px rgba(255, 212, 0, 0.3)'
      }}>
        Book a demo
      </button>
    </div>
  </div>
</div>
 <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
      <h2 className="text-[#23282b] font-extrabold text-3xl md:text-5xl text-center mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Built by the pros for the pros
      </h2>
      <p className="text-[#23282b] text-base md:text-lg font-normal text-center max-w-3xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      Customize Workiz to suit your field service business.
      Schedule jobs, dispatch, invoice and get paid all in one place.      </p>
      </section>
      
      {/* Services grid section */}
      <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {/* HVAC */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><circle cx="24" cy="24" r="24" fill="none"/><path d="M24 24l-7-12" stroke="#FFD600" strokeWidth="3"/><path d="M24 24l12 7" stroke="#485256" strokeWidth="3"/><path d="M24 24l-7 12" stroke="#FFD600" strokeWidth="3"/><circle cx="24" cy="24" r="5" fill="#485256"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>HVAC</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Secure more HVAC jobs all year round with service plans, sales proposals, price book, and more.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn More <span className="ml-1">→</span>
            </a>
          </div>
          {/* Plumbing */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><path d="M16 16v8a8 8 0 0 0 16 0v-8" stroke="#FFD600" strokeWidth="3"/><rect x="20" y="8" width="8" height="8" rx="2" fill="#485256"/><path d="M24 32v8" stroke="#485256" strokeWidth="3"/><circle cx="24" cy="42" r="2" fill="#FFD600"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Plumbing</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Win more plumbing jobs and close bigger deals with online booking and sales proposals all in one place.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Electricians */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><path d="M24 8v16l8-8" stroke="#FFD600" strokeWidth="3"/><path d="M24 24l-8 8v8" stroke="#485256" strokeWidth="3"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Electricians</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Get your entire electrician business organized, increase efficiency, and streamline communications.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Garage Door */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><rect x="12" y="20" width="24" height="16" rx="2" fill="#FFD600"/><path d="M12 20l12-8 12 8" stroke="#485256" strokeWidth="3"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Garage Door</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Win more garage door jobs and increase repeat business with service plans, sales proposals, and more.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Locksmith */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><rect x="18" y="24" width="12" height="12" rx="3" fill="#485256"/><path d="M24 24v-6a6 6 0 1 1 12 0v6" stroke="#FFD600" strokeWidth="3"/><circle cx="24" cy="34" r="2" fill="#FFD600"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Locksmith</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Make your locksmith business more efficient with online booking, quick dispatching, and scheduling.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Junk Removal */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><rect x="12" y="32" width="24" height="8" rx="2" fill="#FFD600"/><rect x="16" y="24" width="16" height="8" rx="2" fill="#485256"/><circle cx="20" cy="40" r="2" fill="#485256"/><circle cx="28" cy="40" r="2" fill="#485256"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Junk Removal</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Be the #1 junk removal business with all the tools you need to manage and grow your operations.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Appliance repair */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><rect x="16" y="16" width="16" height="16" rx="2" fill="#485256"/><path d="M24 16v-4" stroke="#FFD600" strokeWidth="3"/><path d="M24 32v4" stroke="#FFD600" strokeWidth="3"/><path d="M16 24h-4" stroke="#FFD600" strokeWidth="3"/><path d="M32 24h4" stroke="#FFD600" strokeWidth="3"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Appliance repair</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Manage your appliance repair business more efficiently with inventory management and online booking.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
          {/* Other Industries */}
          <div className="flex flex-col items-start">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-6"><circle cx="16" cy="32" r="4" fill="#FFD600"/><circle cx="32" cy="16" r="4" fill="#485256"/><path d="M20 32h8" stroke="#485256" strokeWidth="3"/><path d="M32 20v8" stroke="#FFD600" strokeWidth="3"/></svg>
            <h3 className="text-[#23282b] font-bold text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Other Industries</h3>
            <p className="text-[#23282b] text-base mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              No matter what industry you work in, we have all the tools you need to run your business like a pro.
            </p>
            <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Learn more <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </section>

        
        <Integrations />
        <FaqSection />
        <FooterSection />
        </>
    );
  }
  

  
  // Convert slug to readable name
  const name = industry.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{name}</h1>
      <p style={{ marginTop: '1rem' }}>This is the dynamic page for <b>{name}</b>. You can add more content here for this industry.</p>
    </div>
  );
}