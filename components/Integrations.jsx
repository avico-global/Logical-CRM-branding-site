import Image from "next/image";

const integrations = [
  { name: "Intuit QuickBooks", logo: "/images/logo-new1.svg" },
  { name: "Reserve with Google", logo: "/images/logo-new2.svg" },
  { name: "Sunbit", logo: "/images/logo-new3.svg" },
  { name: "Angi Leads", logo: "/images/logo-new4.svg" },
  { name: "Google Calendar", logo: "/images/logo-new5.svg" },
  { name: "SearchKings", logo: "/images/logo-new6.svg" },
  { name: "Nexa", logo: "/images/logo-new7.svg" },
  { name: "JB Warranties", logo: "/images/logo-new8.svg" },
  { name: "Zapier", logo: "/images/logo-new9.svg" },
  { name: "Linxup", logo: "/images/logo-new10.svg" },
  { name: "Wisetack", logo: "/images/logo-new11.svg" },
  { name: "Thumbtack", logo: "/images/logo-new12.svg" },
  { name: "CompanyCam", logo: "/images/logo-new13.svg" },
  { name: "AnswerConnect", logo: "/images/logo-new14.svg" },
  { name: "NiceJob", logo: "/images/logoo-new15.svg" },
  { name: "HouseHappy", logo: "/images/logo-new16.svg" },
];

export default function Integrations() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-[#f8fafc]">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Side */}
        <div className="flex-[1.2] flex flex-col items-start justify-center max-w-xl lg:pr-12 lg:pl-0 pl-0 ml-8 mr-auto">
          {/* Custom Icon */}
          <div className="mb-8">
            <Image
              src="/images/integration-logo.svg"
              alt="Integrations Icon"
              width={90}
              height={72}
              className="mb-2"
              unoptimized
            />
          </div>
          <h2 className="text-[#23282b] font-bold text-4xl mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Integrations
          </h2>
          <div
            className="text-[#23282b] text-base mb-8 text-left"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: '1.4' }}
          >
            <div>Incorporate marketing tools,</div>
            <div>build customer loyalty and run your business like a well-oiled</div>
            <div>machine</div>
          </div>


          <a href="#" className="text-[#23282b] text-sm  flex items-center gap-2 hover:underline" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            See all integration <span className="ml-1 font-bold text-base">→</span>
          </a>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-row gap-x-8 w-full max-w-xl">
          <div className="flex flex-col gap-y-2 flex-1 justify-between">
            {integrations.slice(0, 8).map((item) => (
              <div
                key={item.name}
                className="flex items-center bg-[#f3f4f6]/70 rounded-xl px-4 h-11 min-w-[180px] w-full"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={32}
                  height={32}
                  className="mr-4"
                  unoptimized
                />
                <span className="text-[#23282b] text-[15px] font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-y-2 flex-1 justify-between">
            {integrations.slice(8).map((item) => (
              <div
                key={item.name}
                className="flex items-center bg-[#f3f4f6]/70 rounded-xl px-4 h-11 min-w-[180px] w-full"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={32}
                  height={32}
                  className="mr-4"
                  unoptimized
                />
                <span className="text-[#23282b] text-[15px] font-medium" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 