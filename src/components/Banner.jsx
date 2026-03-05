import React from "react";

const StatCard = ({ title, count, gradient }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg p-12 text-white shadow-lg transition-all duration-300 hover:scale-[1.01] flex flex-col items-center justify-center min-h-[12rem]"
      style={{ background: gradient }}
    >
      {/* Background Pattern Images */}
      {/* Left Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none bg-left bg-no-repeat"
        style={{ 
            backgroundImage: `url(/images/pattern-left.png)`,
            backgroundSize: '40% auto'
        }}
      />
      {/* Right Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none bg-right bg-no-repeat"
        style={{ 
            backgroundImage: `url(/images/pattern-right.png)`,
            backgroundSize: '40% auto'
        }}
      />

      <div className="relative z-10 text-center">
        <p className="text-2xl font-medium opacity-90 tracking-wide uppercase">{title}</p>
        <p className="mt-4 text-8xl font-black tracking-tighter">{count}</p>
      </div>
    </div>
  );
};

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="bg-[#f8f9fa] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
          {/* In-Progress Card */}
          <StatCard
            title="In-Progress"
            count={inProgressCount}
            gradient="linear-gradient(to bottom right, #632EE3, #9F62F2)"
          />

          {/* Resolved Card */}
          <StatCard
            title="Resolved"
            count={resolvedCount}
            gradient="linear-gradient(to bottom right, #54CF68, #00827A)"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
