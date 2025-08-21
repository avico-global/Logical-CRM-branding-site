import React from "react";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "About Us - Logical CRM | Field Service Management Company",
  description: "Find out all about what we do and why we love the field service industry. Learn about our mission, team, and commitment to helping field service businesses succeed.",
  keywords: "about logical crm, field service company, crm company, about us, field service management",
  openGraph: {
    title: "About Us - Logical CRM | Field Service Management Company",
    description: "Find out all about what we do and why we love the field service industry. Learn about our mission, team, and commitment to helping field service businesses succeed.",
    type: "website",
  },
};

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    image: "/images/person.webp",
    bio: "Former field service business owner with 15+ years of experience. Built Logical CRM to solve the problems she faced running her own HVAC company.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Mike Chen",
    role: "CTO & Co-Founder",
    image: "/images/mike.webp",
    bio: "Tech industry veteran with expertise in building scalable SaaS platforms. Previously led engineering teams at major software companies.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Jennifer Walsh",
    role: "VP of Customer Success",
    image: "/images/jerry.webp",
    bio: "Dedicated to ensuring every customer achieves their business goals. Former operations manager at a major field service franchise.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "David Rodriguez",
    role: "VP of Product",
    image: "/images/person.webp",
    bio: "Product strategy expert focused on building tools that field service professionals actually want to use every day.",
    linkedin: "#",
    twitter: "#"
  }
];

const companyValues = [
  {
    icon: "🎯",
    title: "Customer-Centric",
    description: "Everything we do is focused on helping our customers succeed and grow their field service businesses."
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "We continuously innovate to stay ahead of industry trends and provide cutting-edge solutions."
  },
  {
    icon: "🤝",
    title: "Partnership",
    description: "We see ourselves as partners in our customers' success, not just software vendors."
  },
  {
    icon: "💡",
    title: "Simplicity",
    description: "Complex problems deserve simple solutions. We make powerful software that's easy to use."
  },
  {
    icon: "🔒",
    title: "Trust & Security",
    description: "We protect our customers' data like it's our own and build relationships based on trust."
  },
  {
    icon: "📈",
    title: "Growth Mindset",
    description: "We help businesses grow, and we're always growing and improving ourselves."
  }
];

const milestones = [
  {
    year: "2018",
    title: "Founded",
    description: "Logical CRM was founded by field service professionals who understood the industry's pain points."
  },
  {
    year: "2019",
    title: "First 100 Customers",
    description: "Reached our first 100 customers and learned what features matter most to field service businesses."
  },
  {
    year: "2020",
    title: "Mobile App Launch",
    description: "Launched our mobile app to help technicians stay connected and productive in the field."
  },
  {
    year: "2021",
    title: "1,000+ Customers",
    description: "Crossed 1,000 customers and expanded to serve 15+ different field service industries."
  },
  {
    year: "2022",
    title: "Series A Funding",
    description: "Raised Series A funding to accelerate product development and customer success initiatives."
  },
  {
    year: "2023",
    title: "5,000+ Customers",
    description: "Reached 5,000+ customers across 20+ industries with 99.9% uptime and 24/7 support."
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Launched AI-powered features to help automate scheduling, forecasting, and customer communications."
  }
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
                <span className="text-blue-700 text-sm font-semibold tracking-wide">
                  OUR STORY
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-6 leading-tight">
                Built by Field Service
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Professionals
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're passionate about the field service industry because we've lived it. Our founders started their careers running field service businesses and experienced firsthand the challenges of managing teams, schedules, and customer relationships.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Meet Our Team
                </button>
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
                  Our Mission
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <img
                  src="/images/electric-bussiness.webp"
                  alt="Field Service Team"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-blue-600">5,000+</div>
                    <div className="text-sm text-gray-600">Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-green-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We exist to empower field service businesses to thrive in an increasingly competitive landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide field service businesses with powerful, easy-to-use software that helps them grow revenue, improve efficiency, and deliver exceptional customer experiences. We believe every field service professional deserves tools that make their job easier, not harder.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the leading field service management platform globally, known for innovation, reliability, and customer success. We envision a world where field service businesses can focus on what they do best while our technology handles the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and how we serve our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform field service management
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-black text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your field service success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-blue-600 font-semibold mb-4">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex gap-3">
                    <a href={member.linkedin} className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <span className="text-sm">in</span>
                    </a>
                    <a href={member.twitter} className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                      <span className="text-sm">🐦</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized by industry leaders for innovation and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Best Field Service Software 2024", org: "TechReview" },
              { name: "Customer Choice Award", org: "SoftwareAdvice" },
              { name: "Top Rated CRM", org: "Capterra" },
              { name: "Rising Star Award", org: "Inc. 5000" }
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{award.name}</h3>
                <p className="text-gray-600">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Join Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Success Story?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of field service businesses who trust Logical CRM to help them grow and succeed every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200">
              Contact Our Team
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Expert support team
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Industry expertise
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
