"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import TestimonialVideos from '@/components/TestimonialVideos';
import Business from '@/components/Business';
import FaqSection from '@/components/FaqSection';
import FooterSection from '@/components/FooterSection';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const product = searchParams.get('product');

  // Client CRM Page
  if (product === 'client-crm') {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-white py-20 mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <span className="text-blue-500 font-semibold text-lg tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                CLIENT CRM
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Work faster and get paid sooner with organized client records.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              From job history, to payments, service plans, and notes, remember every client detail without searching for lost records
            </p>
            <button 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Get started — it's free
            </button>
          </div>
        </section>

        {/* Track Your Best Clients Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="text-blue-500 font-semibold text-lg tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    TRACK YOUR BEST CLIENTS
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Know the value of each Client
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Before speaking with a client, remind yourself of the work you've done in the past, if they have outstanding invoices, and what the opportunity at hand is. Easily pin important notes for team-wide access and visibility.
                </p>
                <div className="mb-8">
                  <a href="#" className="#23282b font-semibold text-lg hover:text-blue-700 transition-colors duration-200 inline-flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Book a demo
                    <i className="fas fa-arrow-right text-sm"></i>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <video 
                    className="w-full h-auto"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/videos/crm-feature.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborate Across Your Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/images/client-crm.webp" 
                    alt="Workiz CRM Interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <div className="mb-6">
                  <span className="text-blue-500 font-semibold text-lg tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    COLLABORATE ACROSS YOUR TEAM
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Get info from your desk, or the road
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Collaboration lets your team give better, faster service. With everything in one place, everyone can do their job better. Whether that's finding the job's address or instantly sending field pics to the office, client CRM streamlines your operation.
                </p>
                <div className="mb-8">
                  <a href="#" className="text-gray-900 font-semibold text-lg hover:text-blue-700 transition-colors duration-200 inline-flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Book a demo
                    <i className="fas fa-arrow-right text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keep Clients Engaged Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="text-blue-500 font-semibold text-lg tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    KEEP CLIENTS ENGAGED
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Give customers reasons to come back
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Good client records automatically keep customers engaged. We'll send payment reminders for overdue invoices, appointment reminders, and warnings to extend warranties before they expire. These get you more work and faster payment.
                </p>
                <div className="mb-8">
                  <a href="#" className="text-gray-900 font-semibold text-lg hover:text-blue-700 transition-colors duration-200 inline-flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Book a demo
                    <i className="fas fa-arrow-right text-sm"></i>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/images/clients-engaged.webp" 
                    alt="Client Engagement Interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Do Things Quickly Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <video 
                    className="w-full h-auto"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/videos/Client-CRM-illustration.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div>
                <div className="mb-6">
                  <span className="text-orange-500 font-semibold text-lg tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    DO THINGS QUICKLY
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Get info quickly so you can get to work
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Create jobs, proposals, service plans, invoices, and more, right from the client's profile. Workiz's efficient workflow lets you move fast so you can finish the job and move on.
                </p>
                <div className="mb-8">
                  <a href="#" className="text-gray-900 font-semibold text-lg hover:text-blue-700 transition-colors duration-200 inline-flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Book a demo
                    <i className="fas fa-arrow-right text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TestimonialVideos />    
        <Business />   
        <FaqSection />
        <FooterSection />
      </div>
    );
  }

  // AI Answering Page
  if (product === 'ai-answering') {
    return (
      <div className="min-h-screen bg-white">
        {/* Jessica Hero Section */}
        <section className="bg-white py-20 mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 flex justify-center items-center gap-4">
              <div className="inline-flex items-center gap-2">
                <i className="fas fa-magic text-blue-500 text-xl"></i>
                <span className="text-blue-500 font-bold text-lg tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  GENIUS ANSWERING
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                <span>Now also in Spanish</span>
                <i className="fas fa-volume-up text-sm"></i>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Jessica turns your missed calls into <span className="text-gray-900">30% more cash.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Your AI receptionist that answers calls, emails and texts before competitors do
            </p>
            
                         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
               <button 
                 className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
                 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
               >
                 Try Jessica now
               </button>
               <button 
                 className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
                 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
               >
                 Book a demo
               </button>
             </div>

             {/* Jessica Video */}
             <div className="w-full">
               <div className="rounded-3xl overflow-hidden shadow-2xl w-full">
                 <video 
                   className="w-full h-auto"
                   autoPlay 
                   muted 
                   loop 
                   playsInline
                   width="1920" 
                   height="1080"
                 >
                   <source src="https://www.workiz.com/wp-content/uploads/2025/05/enhanced-v2-90p-phonefx-for-Jessica-Page.mp4" type="video/mp4" />
                   <source src="https://www.workiz.com/wp-content/uploads/2025/05/enhanced-v2-90p-phonefx-for-Jessica-Page.webm" type="video/webm" />
                   Your browser does not support the video tag.
                 </video>
               </div>
             </div>
           </div>
         </section>

         {/* Answer Every Call & Automate Inbox Section */}
         <section className="py-20 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               
               {/* Left Side - Answer Every Call */}
               <div className="rounded-2xl overflow-hidden h-full relative" style={{ background: 'radial-gradient(111.61% 111.61% at 97.69% 0%, #FFF3B7 0%, #FFD400 100%)' }}>
                 <div className="relative w-full h-full">
                   {/* Background Image Layer - Desktop */}
                   <div className="absolute inset-0 hidden md:flex">
                     <div className="w-2/5"></div>
                     <div className="w-3/5 flex flex-col justify-center items-end">
                       <img 
                         src="https://www.workiz.com/wp-content/uploads/2025/07/jessica-live-calls-v1.webp" 
                         alt="Jessica Live Calls"
                         className="max-w-full h-auto object-contain"
                         width="640" 
                         height="898"
                       />
                     </div>
                   </div>
                   
                   {/* Text Content Layer */}
                   <div className="relative z-10 p-8 lg:p-12 h-full">
                     <div className="flex flex-col md:flex-row h-full">
                       <div className="w-full md:w-1/2 flex flex-col justify-between">
                         <div>
                           <div className="mb-6">
                             <span className="text-gray-800 font-medium text-xs tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                               LIVE PHONE CALLS
                             </span>
                           </div>
                           <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                             Answer<br />every call
                           </h2>
                           <p className="text-base text-gray-800 mb-8 leading-relaxed">
                             Missing a lead's first<br />
                             call makes you 78%<br />
                             more likely to lose<br />
                             the job. Until now.
                           </p>
                         </div>
                         <div className="hidden md:block">
                           <button className="bg-transparent border-2 border-gray-800 text-gray-800 font-semibold text-lg px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition">
                             Learn more
                           </button>
                         </div>
                       </div>
                       
                       {/* Mobile Image */}
                       <div className="w-full md:hidden mt-6">
                         <img 
                           src="https://www.workiz.com/wp-content/uploads/2025/07/jessica-live-calls-v1-mobile.webp" 
                           alt="Jessica Live Calls Mobile"
                           className="w-full h-auto object-contain"
                           width="686" 
                           height="384"
                         />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Right Side - Automate Inbox */}
               <div className="rounded-2xl overflow-hidden h-full relative" style={{ background: 'linear-gradient(180deg, #F6F8FA 0%, #E4E9EC 100%)' }}>
                 <div className="relative w-full h-full">
                   {/* Background Image Layer - Desktop */}
                   <div className="absolute inset-0 hidden md:flex">
                     <div className="w-2/5"></div>
                     <div className="w-3/5 flex flex-col justify-center items-end">
                       <img 
                         src="https://www.workiz.com/wp-content/uploads/2025/07/jessica-automate-inbox.webp" 
                         alt="Jessica Automate Inbox"
                         className="max-w-full h-auto object-contain"
                         width="640" 
                         height="898"
                       />
                     </div>
                   </div>
                   
                   {/* Text Content Layer */}
                   <div className="relative z-10 p-8 lg:p-12 h-full">
                     <div className="flex flex-col md:flex-row h-full">
                       <div className="w-full md:w-1/2 flex flex-col justify-between">
                         <div>
                           <div className="mb-6">
                             <span className="text-gray-600 font-medium text-xs tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                               EMAILS & TEXTS
                             </span>
                           </div>
                           <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                             Automate your inbox
                           </h2>
                           <p className="text-base text-gray-700 mb-8 leading-relaxed">
                             AI answering for text &<br />
                             email helps you win<br />
                             more jobs without<br />
                             babysitting your inbox.
                           </p>
                         </div>
                         <div className="hidden md:block">
                           <button className="bg-transparent border-2 border-gray-700 text-gray-700 font-semibold text-lg px-8 py-3 rounded-lg hover:bg-gray-700 hover:text-white transition">
                             Learn more
                           </button>
                         </div>
                       </div>
                       
                       {/* Mobile Image */}
                       <div className="w-full md:hidden mt-6">
                         <img 
                           src="https://www.workiz.com/wp-content/uploads/2025/07/jessica-automate-inbox-mobile.webp" 
                           alt="Jessica Automate Inbox Mobile"
                           className="w-full h-auto object-contain"
                           width="686" 
                           height="384"
                         />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

             </div>
           </div>
         </section>

         {/* Reasons You'll Love Jessica Section */}
         <section className="py-20 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             {/* Section Title */}
             <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                 Oh... The reasons you'll love Jessica
               </h2>
             </div>

             {/* Three Benefits Grid */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
               
               {/* Benefit 1 - She pays for herself */}
               <div className="text-center">
                 <div className="mb-6">
                   <div className="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center">
                     <img 
                       src="/images/money.png" 
                       alt="Money icon" 
                       className="w-10 h-10 object-contain"
                       style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(214deg) brightness(97%) contrast(97%)' }}
                     />
                   </div>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                   She pays for herself
                 </h3>
                 <p className="text-gray-600 leading-relaxed">
                   40% of missed calls are new business opportunities. Jessica saves those jobs, turning a high ROI.
                 </p>
               </div>

               {/* Benefit 2 - She doesn't need you */}
               <div className="text-center">
                 <div className="mb-6">
                   <div className="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center">
                     <img 
                       src="/images/return.png" 
                       alt="Return icon" 
                       className="w-10 h-10 object-contain"
                       style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(214deg) brightness(97%) contrast(97%)' }}
                     />
                   </div>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                   She doesn't need you
                 </h3>
                 <p className="text-gray-600 leading-relaxed">
                   Jessica is already embedded into your client history and policies. She's ready to work without bothering you.
                 </p>
               </div>

               {/* Benefit 3 - She's always on */}
               <div className="text-center">
                 <div className="mb-6">
                   <div className="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center">
                     <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/>
                       <circle cx="17" cy="7" r="2"/>
                       <path d="M17 5C16.4 5 16 5.4 16 6S16.4 7 17 7 18 6.6 18 6 17.6 5 17 5Z"/>
                     </svg>
                   </div>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                   She's always on
                 </h3>
                 <p className="text-gray-600 leading-relaxed">
                   Whether it's after hours, or your agents are busy, Jessica answers whatever you miss and books the jobs, 24/7.
                 </p>
               </div>

             </div>
           </div>
         </section>
         <TestimonialVideos />
         
         {/* Genius Answering - Like Hiring Yourself Section */}
         <section className="py-20 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               
               {/* Left side - Image */}
               <div className="relative">
                 <img 
                   src="/images/Genius-Anwering.webp" 
                   alt="Genius Answering Interface" 
                   className="w-full h-auto rounded-lg"
                 />
               </div>

               {/* Right side - Content */}
               <div>
                 <div className="mb-6">
                   <span className="text-blue-500 font-medium text-sm tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                     UNDERSTANDS YOUR BUSINESS
                   </span>
                 </div>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                   It's like hiring yourself as a dispatcher
                 </h2>
                 <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                   Since Jessica is built into Workiz, she already knows your availability, client history, services, and service areas. This lets her book jobs faster than a human, without errors. It takes Jessica only 2 minutes to book a job, on average.
                 </p>
                 <div>
                   <a href="#" className="text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors duration-200 inline-flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                     Get started for free
                     <i className="fas fa-arrow-right text-sm"></i>
                   </a>
                 </div>
               </div>

             </div>
           </div>
         </section>

         {/* Control Everything - Customize Jessica Section */}
         <section className="py-20 bg-gray-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               
               {/* Left side - Video */}
               <div className="relative">
                 <div className="rounded-lg overflow-hidden shadow-2xl">
                   <video 
                     className="w-full h-auto"
                     autoPlay 
                     muted 
                     loop 
                     playsInline
                   >
                     <source src="/videos/jessica.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                   </video>
                 </div>
               </div>

               {/* Right side - Content */}
               <div>
                 <div className="mb-6">
                   <span className="text-blue-500 font-medium text-sm tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                     CONTROL EVERYTHING
                   </span>
                 </div>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                   Customize Jessica to your business needs
                 </h2>
                 <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                   Dozens of easy to use customizations let you make Jessica your own. Change her name, voice, the information she collects, the policies she follows, and a lot more.
                 </p>
                 <div>
                   <a href="#" className="text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors duration-200 inline-flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                     Book a demo
                     <i className="fas fa-arrow-right text-sm"></i>
                   </a>
                 </div>
               </div>

             </div>
           </div>
         </section>
      </div>
    );
  }

  // Default Products Overview Page
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Complete Field Service
              <span className="text-blue-600"> Software Suite</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Everything you need to run your field service business efficiently. From scheduling and dispatching to payments and AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Essentials */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-users text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Essentials
              </h3>
              <p className="text-gray-600 mb-6">
                Core tools to manage your field service operations effectively.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Client CRM
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Scheduling
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Dispatching
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Invoicing
                </div>
              </div>
            </div>

            {/* Efficiency Tools */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-bolt text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Efficiency Tools
              </h3>
              <p className="text-gray-600 mb-6">
                Advanced features to streamline workflows and boost productivity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Automations
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Lead integrations
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Service plans
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Equipment tracking
                </div>
              </div>
            </div>

            {/* Financial Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-credit-card text-yellow-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Financial Services
              </h3>
              <p className="text-gray-600 mb-6">
                Complete payment solutions and financial management tools.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Payment processing
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Expense management
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Consumer financing
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  QuickBooks integration
                </div>
              </div>
            </div>

            {/* Communication & AI */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-robot text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Communication & AI
              </h3>
              <p className="text-gray-600 mb-6">
                Smart communication tools powered by artificial intelligence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-green-500 w-4 mr-3"></i>
                  Built-in phone & messages
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-purple-500 w-4 mr-3"></i>
                  AI answering
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-purple-500 w-4 mr-3"></i>
                  AI leads capture
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check text-purple-500 w-4 mr-3"></i>
                  AI call insights
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Ready to transform your field service business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join over 120,000 field service professionals who trust Workiz to grow their business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
