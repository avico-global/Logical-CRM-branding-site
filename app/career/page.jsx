import React from "react";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Careers - Logical CRM | Join Our Team",
  description: "Looking for your next challenge? Come join our talented, smart, and fun team! Explore career opportunities at Logical CRM and help shape the future of field service management.",
  keywords: "logical crm careers, jobs, employment, field service jobs, tech careers, remote work",
  openGraph: {
    title: "Careers - Logical CRM | Join Our Team",
    description: "Looking for your next challenge? Come join our talented, smart, and fun team! Explore career opportunities at Logical CRM and help shape the future of field service management.",
    type: "website",
  },
};

const openPositions = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Join our engineering team to build scalable solutions for field service management. Work with React, Node.js, and cloud technologies.",
    requirements: [
      "5+ years of software development experience",
      "Strong experience with React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Understanding of microservices architecture",
      "Experience with agile development practices"
    ],
    benefits: [
      "Competitive salary + equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "401k matching"
    ],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "Austin, TX / Remote",
    type: "Full-time",
    experience: "3-5 years",
    description: "Lead product marketing initiatives for our field service CRM platform. Drive go-to-market strategies and customer acquisition.",
    requirements: [
      "3-5 years of product marketing experience",
      "B2B SaaS marketing experience preferred",
      "Strong analytical and communication skills",
      "Experience with marketing automation tools",
      "Understanding of field service industry is a plus"
    ],
    benefits: [
      "Competitive salary + commission",
      "Health, dental, and vision insurance",
      "Remote-first culture",
      "Conference and training budget",
      "Stock options"
    ],
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Help our customers achieve their business goals with Logical CRM. Build relationships and drive product adoption.",
    requirements: [
      "2-4 years of customer success experience",
      "Strong communication and relationship building skills",
      "Experience with CRM and SaaS platforms",
      "Problem-solving mindset",
      "Field service industry knowledge preferred"
    ],
    benefits: [
      "Competitive base salary",
      "Performance bonuses",
      "Comprehensive health coverage",
      "Work from anywhere",
      "Career growth opportunities"
    ],
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Build and maintain our cloud infrastructure. Ensure high availability and scalability of our platform.",
    requirements: [
      "4+ years of DevOps/SRE experience",
      "Experience with AWS, Docker, and Kubernetes",
      "Infrastructure as code (Terraform, CloudFormation)",
      "CI/CD pipeline experience",
      "Monitoring and alerting expertise"
    ],
    benefits: [
      "Top-tier compensation",
      "Equity participation",
      "Premium health benefits",
      "Flexible PTO",
      "Learning and development budget"
    ],
    posted: "5 days ago"
  },
  {
    id: 5,
    title: "UX/UI Designer",
    department: "Design",
    location: "Austin, TX / Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Design intuitive user experiences for field service professionals. Create beautiful, functional interfaces that solve real problems.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, or similar tools",
      "Strong portfolio showcasing B2B SaaS design",
      "User research and testing experience",
      "Understanding of responsive and mobile design"
    ],
    benefits: [
      "Competitive salary",
      "Design tool subscriptions",
      "Health and wellness benefits",
      "Flexible schedule",
      "Creative freedom"
    ],
    posted: "1 week ago"
  },
  {
    id: 6,
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    experience: "1-2 years",
    description: "Generate qualified leads and build our sales pipeline. Perfect opportunity to grow your sales career in a fast-growing SaaS company.",
    requirements: [
      "1-2 years of sales or business development experience",
      "Strong communication and interpersonal skills",
      "Goal-oriented and competitive mindset",
      "Experience with CRM systems",
      "Bachelor's degree preferred"
    ],
    benefits: [
      "Base salary + commission",
      "Accelerated career progression",
      "Sales training and mentorship",
      "Health benefits",
      "Remote work flexibility"
    ],
    posted: "4 days ago"
  }
];

const companyValues = [
  {
    icon: "🎯",
    title: "Customer Obsession",
    description: "Everything we do is focused on delivering exceptional value to our customers and helping them succeed."
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "We continuously push boundaries and embrace new technologies to stay ahead of the curve."
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "We work together as one team, supporting each other and celebrating collective achievements."
  },
  {
    icon: "📈",
    title: "Growth Mindset",
    description: "We embrace challenges, learn from failures, and continuously improve ourselves and our product."
  },
  {
    icon: "🎉",
    title: "Work-Life Balance",
    description: "We believe great work happens when people have time to recharge and pursue their passions."
  },
  {
    icon: "🌟",
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to customer service."
  }
];

const benefits = [
  {
    category: "Health & Wellness",
    items: [
      "Medical, dental, and vision insurance",
      "Mental health support and counseling",
      "Wellness stipend for gym, yoga, etc.",
      "Flexible PTO and sick leave"
    ]
  },
  {
    category: "Financial",
    items: [
      "Competitive salaries",
      "Equity/stock options",
      "401k with company matching",
      "Performance bonuses"
    ]
  },
  {
    category: "Professional Development",
    items: [
      "$2,000 annual learning budget",
      "Conference and training expenses",
      "Internal mentorship programs",
      "Career advancement opportunities"
    ]
  },
  {
    category: "Work-Life Balance",
    items: [
      "Flexible work arrangements",
      "Remote-first culture",
      "Unlimited PTO policy",
      "Family-friendly policies"
    ]
  }
];

const departments = ["All Departments", "Engineering", "Sales", "Marketing", "Customer Success", "Design"];

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2 animate-pulse" />
                <span className="text-indigo-700 text-sm font-semibold tracking-wide">
                  JOIN OUR TEAM
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-800 to-blue-800 mb-6 leading-tight">
                Build the Future of
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  Field Service
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Looking for your next challenge? Come join our talented, smart, and fun team! We're building the tools that help field service businesses thrive, and we need passionate people to help us get there.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  View Open Positions
                </button>
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
                  Learn About Benefits
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-black text-indigo-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Employee Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-600">Remote</div>
                  <div className="text-sm text-gray-600">First Culture</div>
                </div>
              </div>
            </div>

            {/* Right Content - Team Photo */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <img
                  src="/images/electric-bussiness.webp"
                  alt="Team Photo"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Our Team Loves Working Here</h3>
                <div className="space-y-3">
                  {[
                    "Flexible remote work",
                    "Competitive compensation",
                    "Amazing team culture",
                    "Growth opportunities",
                    "Meaningful impact"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide how we work, make decisions, and treat each other
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take care of our team so they can do their best work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  index === 0
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and help shape the future of field service management
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Position Info */}
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                        {position.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {position.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        Posted {position.posted}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{position.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                        <div className="space-y-2">
                          {position.requirements.slice(0, 3).map((req, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                              <span className="text-sm text-gray-600">{req}</span>
                            </div>
                          ))}
                          {position.requirements.length > 3 && (
                            <div className="text-sm text-indigo-600 font-medium">
                              +{position.requirements.length - 3} more requirements
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                        <div className="space-y-2">
                          {position.benefits.slice(0, 3).map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </div>
                          ))}
                          {position.benefits.length > 3 && (
                            <div className="text-sm text-indigo-600 font-medium">
                              +{position.benefits.length - 3} more benefits
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="lg:col-span-1 flex flex-col justify-center">
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mb-3">
                      Apply Now
                    </button>
                    <button className="w-full px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don't see a position that fits? We're always looking for great talent!</p>
            <button className="px-8 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 shadow-lg">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, efficient, and designed to help you show your best work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Application",
                description: "Submit your application and tell us why you're excited about the role."
              },
              {
                step: "2", 
                title: "Initial Call",
                description: "Chat with our recruiting team to learn more about the role and company."
              },
              {
                step: "3",
                title: "Technical Interview",
                description: "Showcase your skills through practical exercises and technical discussions."
              },
              {
                step: "4",
                title: "Team Interview",
                description: "Meet potential teammates and get a feel for our culture and working style."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-2xl font-black text-white mx-auto mb-6">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Join Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Amazing Team?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're a seasoned professional or just starting your career, we'd love to hear from you. Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Open Positions
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200">
              Submit General Application
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Remote-first culture
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Competitive compensation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Growth opportunities
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Amazing team culture
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
