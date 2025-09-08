import React from "react";

export default function ProductFeatures({ title, features }) {
  const renderIcon = (icon) => {
    if (typeof icon === "string") {
      const isFaClass =
        icon.includes("fa-") ||
        icon.startsWith("fa ") ||
        icon.startsWith("fas ") ||
        icon.startsWith("far ") ||
        icon.startsWith("fab ");
      return isFaClass ? (
        <i className={icon} aria-hidden="true"></i>
      ) : (
        <span>{icon}</span>
      );
    }
    return icon;
  };
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful capabilities designed to streamline your workflow and boost
            productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#FFB700] to-transparent opacity-60" />

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-[#FFB700]/10 text-[#FFB700] group-hover:bg-[#FFB700] group-hover:text-white transition-colors duration-300">
                {renderIcon(feature.icon || feature.iconClass)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#293146] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Benefits:</h4>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB700] group-hover:bg-[#e6a600] transition-colors" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
